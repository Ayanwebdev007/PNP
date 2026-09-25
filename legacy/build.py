import os
import shutil
import zipfile
import re
import sys

# Ensure utf-8 stdout encoding on Windows
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
DIST_DIR = os.path.join(ROOT_DIR, "dist")
ZIP_FILE = os.path.join(ROOT_DIR, "dist.zip")

def minify_css(css_content):
    # Remove CSS comments
    css_content = re.sub(r'/\*[\s\S]*?\*/', '', css_content)
    # Remove whitespace around delimiters
    css_content = re.sub(r'\s*([\{\};:,>~+])\s*', r'\1', css_content)
    # Remove trailing semicolons before closing brace
    css_content = re.sub(r';\}', '}', css_content)
    # Collapse multiple whitespace
    css_content = re.sub(r'\s+', ' ', css_content)
    return css_content.strip()

def minify_js(js_content):
    # Remove single-line comments (careful with URLs)
    lines = []
    for line in js_content.splitlines():
        trimmed = line.strip()
        if trimmed.startswith('//'):
            continue
        lines.append(line)
    cleaned = '\n'.join(lines)
    # Remove multi-line comments
    cleaned = re.sub(r'/\*[\s\S]*?\*/', '', cleaned)
    return cleaned.strip()

def build():
    print("[*] Building production distribution for PNP Industrial Solutions...")
    
    # 1. Clean previous dist folder & zip
    if os.path.exists(DIST_DIR):
        print("    Cleaning previous dist/ directory...")
        shutil.rmtree(DIST_DIR)
    if os.path.exists(ZIP_FILE):
        os.remove(ZIP_FILE)
        
    os.makedirs(DIST_DIR, exist_ok=True)
    
    total_files = 0
    total_bytes = 0
    
    # 2. Copy all HTML files
    print("\n[+] Copying HTML files...")
    html_count = 0
    for file in os.listdir(ROOT_DIR):
        if file.endswith(".html"):
            src = os.path.join(ROOT_DIR, file)
            dst = os.path.join(DIST_DIR, file)
            shutil.copy2(src, dst)
            size = os.path.getsize(dst)
            total_bytes += size
            html_count += 1
            total_files += 1
    print(f"    -> Copied {html_count} HTML pages")
    
    # 3. Copy & optimize CSS & JS
    print("\n[+] Processing CSS & JS assets...")
    css_src = os.path.join(ROOT_DIR, "style.css")
    if os.path.exists(css_src):
        with open(css_src, 'r', encoding='utf-8') as f:
            css_raw = f.read()
        css_min = minify_css(css_raw)
        
        # Write production style.css
        css_dst = os.path.join(DIST_DIR, "style.css")
        with open(css_dst, 'w', encoding='utf-8') as f:
            f.write(css_raw)
            
        # Write minified version
        css_min_dst = os.path.join(DIST_DIR, "style.min.css")
        with open(css_min_dst, 'w', encoding='utf-8') as f:
            f.write(css_min)
            
        total_bytes += len(css_raw) + len(css_min)
        total_files += 2
        print(f"    -> style.css ({len(css_raw):,} bytes) + style.min.css ({len(css_min):,} bytes, saved {(len(css_raw)-len(css_min))/len(css_raw)*100:.1f}%)")
        
    js_src = os.path.join(ROOT_DIR, "script.js")
    if os.path.exists(js_src):
        with open(js_src, 'r', encoding='utf-8') as f:
            js_raw = f.read()
        js_min = minify_js(js_raw)
        
        js_dst = os.path.join(DIST_DIR, "script.js")
        with open(js_dst, 'w', encoding='utf-8') as f:
            f.write(js_raw)
            
        js_min_dst = os.path.join(DIST_DIR, "script.min.js")
        with open(js_min_dst, 'w', encoding='utf-8') as f:
            f.write(js_min)
            
        total_bytes += len(js_raw) + len(js_min)
        total_files += 2
        print(f"    -> script.js ({len(js_raw):,} bytes) + script.min.js ({len(js_min):,} bytes)")
        
    # 4. Copy assets directory
    assets_src = os.path.join(ROOT_DIR, "assets")
    assets_dst = os.path.join(DIST_DIR, "assets")
    if os.path.exists(assets_src):
        print("\n[+] Copying assets directory...")
        shutil.copytree(assets_src, assets_dst)
        asset_count = sum(len(files) for _, _, files in os.walk(assets_dst))
        asset_size = sum(os.path.getsize(os.path.join(root, f)) for root, _, files in os.walk(assets_dst) for f in files)
        total_bytes += asset_size
        total_files += asset_count
        print(f"    -> Copied {asset_count} asset files ({asset_size / (1024*1024):.2f} MB)")
        
    # 5. Copy PDF documents
    print("\n[+] Copying PDF brochures & technical sheets...")
    pdf_count = 0
    pdf_bytes = 0
    for file in os.listdir(ROOT_DIR):
        if file.endswith(".pdf"):
            src = os.path.join(ROOT_DIR, file)
            dst = os.path.join(DIST_DIR, file)
            shutil.copy2(src, dst)
            size = os.path.getsize(dst)
            pdf_bytes += size
            total_bytes += size
            pdf_count += 1
            total_files += 1
    print(f"    -> Copied {pdf_count} PDF documents ({pdf_bytes / (1024*1024):.2f} MB)")
    
    # 6. Create dist.zip archive
    print("\n[+] Generating dist.zip archive...")
    with zipfile.ZipFile(ZIP_FILE, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, _, files in os.walk(DIST_DIR):
            for file in files:
                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, DIST_DIR)
                zipf.write(file_path, rel_path)
    zip_size = os.path.getsize(ZIP_FILE)
    print(f"    -> Created dist.zip ({zip_size / (1024*1024):.2f} MB)")
    
    print("\n" + "="*50)
    print("SUCCESS: BUILD COMPLETE")
    print(f"Destination directory: {DIST_DIR}")
    print(f"Archive file:         {ZIP_FILE}")
    print(f"Total build files:    {total_files}")
    print(f"Total build size:     {total_bytes / (1024*1024):.2f} MB")
    print(f"Compressed archive:   {zip_size / (1024*1024):.2f} MB")
    print("="*50)

if __name__ == '__main__':
    build()
