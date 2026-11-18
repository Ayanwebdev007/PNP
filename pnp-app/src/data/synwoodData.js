// Synwood and Haowood content.
// Sources: client email, pnpind.com (Synwood page + 7 product pages) and the 21 catalogues
// linked from pnpind.com, now hosted in /public/catalogues/synwood.

const CAT = '/catalogues/synwood';
const cat = (slug) => `${CAT}/${slug}.pdf`;
const page = (slug, i) => `sw/${slug}-${i}`;
const SW = 'synwood';

// Design codes: one swatch per catalogue page, cropped from that page.
const codes = (slug, list) => list.map((c, i) => {
  const [code, note] = Array.isArray(c) ? c : [c];
  return [code, `sw/swatch-${slug}-${i}`, note];
});

export const synwoodFeatures = ['Quick installation', 'Flame retardant', 'Waterproof', 'Termite free', 'User friendly', 'Recyclable', 'No decay', 'High durability', 'Maintenance free', 'Eco friendly'];

export const characteristics = [
  'Corrosion Resistance', 'Printable', 'High Screw Holding Capacity', 'High Impact Strength', 'Fire Retardant',
  'Easy Installation', 'Maintenance Free', 'Chemical Resistance', 'Termite & Pest Proof', 'Environment Friendly',
  'Water Proof', 'Non Toxic', 'Sound Proof', 'Light Weight', 'Splinter Free', 'No Shrinkage', 'Aesthetic Look', 'Speedy Installation', 'Paintable',
];

const iconFeatures = ['100% Water Proof', 'Termite Proof', 'Flame Retardant', 'Sound Proof', 'Chemical Proof', 'Easy Install', 'Environment Friendly'];

// Head office and branches (exterior brochure back cover + foam sheet brochure branches page).
export const synwoodContact = {
  company: 'PNP Polytex Pvt. Ltd.',
  address: "A-601 / 607, Mangal Aarambh, Kora Kendra, Near McDonald's, Borivali (W), Mumbai 400092",
  tel: '+91 22 6725 9601-05, +91 22 2833 8122', fax: '+91 22 6725 9600', email: 'sales@pnpind.com',
  web: ['www.pnpind.com', 'www.synwood.in'],
};
export const synwoodBranches = [
  ['New Delhi', '907, P Tower, Netaji Subhash Place, Pitampura, Delhi 110034', '+91 97 1111 4794'],
  ['Bangalore', '207, Money Chambers, 6 K H Road, Bangalore 560027', '+91 98 4545 1036'],
  ['Chennai', 'Old No. 139, New No. 60, Sanjevarayan Koil Street, Old Washerman Pet, Near Kamraj School, Chennai 21', '+91 92 8213 4421'],
  ['Hyderabad', '308, LALA, Oasis Plaza, 4-1898, Tilak Road, Abids, Hyderabad 500001', '+91 92 4620 1036'],
  ['Kolkata', '308, Jindal Tower, 21/3, Darga Road, Kolkata 700017', '+91 92 3065 5308'],
  ['Kanpur', '128/120, K Block, Kedwai Nagar, Nr. Brihaspati Mahila College, Kanpur 208011', '+91 92 3550 5442'],
  ['Kochi', 'Door No. 131/42/948 A, Balaji Estate, Cemetery JN, Chitoor Road, Cochin 18', '+91 92 4947 9817'],
  ['Surat', '3008, World Trade Center, Ring Road, Surat 395002', '+91 92 7690 9040'],
];

export const synwoodVsPlywood = {
  columns: ['Property', 'Synwood', 'Plywood'],
  rows: [
    ['Water Proof', 'Yes', 'No'], ['Anti-Corrosion', 'Yes', 'No'], ['Cracking', 'No', 'Yes'], ['Exterior Use', 'Yes', 'No'],
    ['Printable', 'Yes', 'No'], ['Termite Resistant', 'Yes', 'No'], ['Surface', 'Smooth', 'Rough'], ['Eco-Friendly', 'Yes', 'No'],
    ['Life Span', 'Long life', '4 to 5 years'], ['Impact Resistance', 'High', 'Medium'],
  ],
};

export const tools = ['Screws', 'Cutting', 'Nailing', 'Drilling', 'Painting', 'Gluing', 'Routing'];

export const clients = [
  ['Swami Narayan Mandir', 'New Delhi', 'Temple'], ['Tata Cancer Hospital', 'New Mumbai', 'Hospital'], ['Indian Corporation', 'Thane', 'Educational institute'],
  ['Shivani Motors', 'Surat', 'Gymkhana'], ['Club Aquaria', 'Mumbai', 'Builder'], ['Sharda Textile Mills', 'New Mumbai', 'Textile industries'],
  ['Bhairav Lifestyle', 'Mumbai', 'Builder'], ['Western Railway', 'Mumbai', 'Railway hanger'], ['Fountain Hotel', 'Mumbai', 'Hotel'],
  ['White Petals', 'Bangalore', 'Hotel'], ['Sodexo', 'Mumbai', 'Hospitality'], ['Jayanand Infro Projects', 'Lonavala', 'Builder'],
  ['Deltin Group', 'Goa', 'Yacht'], ['Aquarius Shipyard', 'Goa', 'Shipping'], ['Geetanjali Spaces Pvt. Ltd', 'Mumbai', 'Builder'],
  ['Nulux Engineering', 'Mumbai', 'Engineering'], ['Neelyog Construction Pvt. Ltd', 'Mumbai', 'Hotel'], ['Shah Architect', 'Mumbai', 'Architect'],
  ['Shree Sainath Agencies', 'Mumbai', 'Logistic'], ['Baggit', 'Mumbai', 'Luggage manufacturer'], ['Spline Architect', 'Mumbai', 'Architect'],
  ['Hinex Chemical', 'Mumbai', 'Chemical industry'], ['Karla Shukla Classes', 'Mumbai', 'Education'], ['ONGC', 'Mumbai', 'Petroleum industry'],
  ['Thakur Institute', 'Mumbai', 'Educational institute'], ['D.Y. Patil Hospital', 'New Mumbai', 'Healthcare'], ['Ayan Mukherjee', 'Mumbai', 'Film industry'],
  ['Palm Infra', 'Thane', 'Builder'],
];

export const synwoodCatalogues = [
  ['Synwood Exterior Products Brochure', 'synwood-exterior-products-brochure'],
  ['PVC Foam Sheet Flyer', 'pvc-foam-sheet-flyer'],
  ['PVC Solid Foam Sheet (HC / Co-Ex)', 'pvc-solid-foam-sheet-hc-co-ex'],
  ['PVC Printed Sheet Solid / Hollow', 'pvc-printed-sheet-solid-hollow'],
  ['PVC One Side Printed Solid Sheet', 'pvc-one-side-printed-solid-sheet'],
  ['PVC Carbon & Bamboo Sheet', 'pvc-carbon-bamboo-sheet'],
  ['PVC UV-Marble Sheet', 'pvc-uv-marble-sheet'],
  ['PVC Solid / Hollow Door Sheet', 'pvc-solid-hollow-door-sheet'],
  ['PVC Solid 30mm Door', 'pvc-solid-30mm-door'],
  ['FAFA Wall Panel 400mm', 'fafa-wall-panel-400mm'],
  ['PVC Classic Wall Panel', 'pvc-classic-wall-panel'],
  ['WPC Fluted Panel Interior 160mm', 'wpc-fluted-panel-interior-160mm'],
  ['WPC Exterior Cladding Flute', 'wpc-exterior-cladding-flute'],
  ['PVC Wall Cladding Plane Print', 'pvc-wall-cladding-plane-print'],
  ['PVC Decking Solid', 'pvc-decking-solid'],
  ['PVC Construction Bars', 'pvc-construction-bars'],
].map(([label, slug]) => [label, cat(slug)]);

export const haowoodCatalogues = [
  ['PVC Wall Panel Flat 400mm', 'pvc-wall-panel-flat-400mm'],
  ['PVC 8 Groove Wall Panel', 'pvc-8-groove-wall-panel'],
  ['PVC 9 Groove Wall Panel', 'pvc-9-groove-wall-panel'],
  ['PVC Double Groove Wall Panel 300mm', 'pvc-double-groove-wall-panel-300mm'],
  ['PVC Self Printed Wall Panel', 'pvc-self-printed-wall-panel'],
].map(([label, slug]) => [label, cat(slug)]);

const hcRows = [
  ['Solid (White) HC', '5 mm', '0.70', '4 x 8', '5'], ['Solid (White) HC', '5 mm', '0.65', '4 x 8', '7'],
  ['Solid (White) HC', '8 mm', '0.50', '4 x 8', '4'], ['Solid (White) HC', '10 mm', '0.50', '4 x 8', '4'], ['Solid (White) HC', '12 mm', '0.50', '4 x 8', '3'],
  ['Solid (White) HC', '15 mm', '0.50', '4 x 8', '2'], ['Solid (White) HC', '18 mm', '0.50', '4 x 7', '2'], ['Solid (White) HC', '18 mm', '0.50', '3 x 7', '2'],
  ['Solid (White) HC', '18 mm', '0.50', '3 x 8', '2'], ['Solid (White) HC', '18 mm', '0.50', '4 x 8', '2'], ['Solid (White) HC', '24 mm', '0.50', '4 x 8', '2'],
  ['Solid (White) HC', '30 mm', '0.50', '3 x 7', '2'],
  ['Solid (White) HC', '5 mm', '0.45', '4 x 8', '8'], ['Solid (White) HC', '8 mm', '0.45', '4 x 8', '5'], ['Solid (White) HC', '12 mm', '0.45', '4 x 8', '3'],
  ['Solid (White) HC', '15 mm', '0.45', '4 x 8', '2'], ['Solid (White) HC', '18 mm', '0.45', '4 x 8', '2'],
  ['Solid (White) HC', '5 mm', '0.40', '4 x 8', '8'], ['Solid (White) HC', '8 mm', '0.40', '4 x 8', '5'], ['Solid (White) HC', '11 mm', '0.40', '4 x 8', '3'],
  ['Solid (White) HC', '15 mm', '0.40', '4 x 8', '2'], ['Solid (White) HC', '17 mm', '0.40', '4 x 8', '2'],
  ['Solid (White) HC Laminated', '18 mm', '0.50', '4 x 8', '1'], ['Solid (White) Co-Ex', '18 mm', '0.60', '4 x 8', '2'],
  ['Solid (White) Co-Ex', '18 mm', '0.60', '3 x 8', '2'], ['Solid (White) Co-Ex', '18 mm', '0.60', '3 x 7', '2'],
];

export const synwoodProducts = [
  {
    id: 'foam-sheets', cover: `${SW}/foam-sheets-4`, group: 'Sheets', name: 'Synwood PVC Foam Sheets', short: 'Solid, hollow & rigid',
    desc: 'Synwood is synthetic wood made by foaming PVC with ultra high end technology into different forms. Formed by foam extrusion with twin screw extrusion, it is 100% recyclable. The hollow and foamed rigid PVC material was developed by Nan Ya Plastics; PNP introduced it in India under the Synwood brand.',
    images: [
      [page('pvc-foam-sheet-flyer', 0), 'Synwood foam sheets flyer with a modular kitchen'], [page('pvc-foam-sheet-flyer', 1), 'Foam sheet applications and Synwood vs plywood'],
      [page('pvc-solid-foam-sheet-hc-co-ex', 0), 'Synwood PVC foam sheet cover'], [page('pvc-solid-foam-sheet-hc-co-ex', 3), 'Foam sheet uses: furniture, kitchens, partitions'],
      [page('pvc-solid-foam-sheet-hc-co-ex', 4), 'Foam sheet in jaali cutting, signage and cabinets'], [page('pvc-printed-sheet-solid-hollow', 0), 'PVC hollow foam sheet shades'],
      [page('pvc-printed-sheet-solid-hollow', 1), 'PVC solid foam sheet shades'], [`${SW}/foam-sheets-4`, 'Living room unit made with Synwood foam sheets'],
    ],
    features: iconFeatures,
    chipGroups: [
      ['Thickness', ['3 mm to 50 mm', 'Flyer sizes: 3, 4, 5, 10, 12, 15, 18, 24, 30 mm']],
      ['Sizes (ft)', ['4 x 8', '4 x 7', '3 x 8', '3 x 7']],
      ['Hollow Sheet Shades', ['2GH', '3GK', '3TC', '3WR', '4GK', '4WR', '5TC']],
      ['Solid Sheet Shades', ['DGK', 'DWR', 'EWR', '3W2 (T)', '3W2', 'DTC']],
      ['Applications', ['Modular Kitchen', 'Doors & Windows', 'Doors & Shutters', 'Shuttering', 'Wall & Partition', 'Office Partition', 'Cubical Partition', 'Cabin & Panels', 'Bedroom & Wall Units', 'Wardrobe', 'Drawer', 'Exhibition Stands', 'Displays', 'Home Furniture', 'Office Furniture', 'Bathroom Furniture & Cabinets', 'Washroom Sink', 'Laboratory Furniture', 'School Furniture', 'Storage Table', 'Racking Storage Sheet', 'False Ceiling', 'Flooring Sheet', 'Jaali Making', 'CNC Router Cutting', 'Lettering', 'Advertising Signages', 'Retail Merchandising', 'Architectural Decoration', 'Vehicle Body Lining', 'Fishing Rafts & Boathouses']],
    ],
    tables: [{ title: 'HC Foam Sheet Range', columns: ['Foamed Sheet', 'Thickness', 'Density', 'Size (ft)', 'Sheets / Box'], rows: hcRows }],
    notes: [
      'Rigid PVC has good tensile, flexural, compressive and impact resistance, and can be used as a structural material alone.',
      'PVC has good electrical insulation properties and suits low frequency insulation. It is generally used between -15 and 55 degrees.',
    ],
    catalogues: [['Foam Sheet Flyer', cat('pvc-foam-sheet-flyer')], ['Solid Foam Sheet HC / Co-Ex', cat('pvc-solid-foam-sheet-hc-co-ex')], ['Printed Sheet Solid / Hollow', cat('pvc-printed-sheet-solid-hollow')]],
  },
  {
    id: 'one-side-laminated-sheets', cover: 'sw/swatch-pvc-one-side-printed-solid-sheet-6', group: 'Sheets', name: 'One Side Laminated Sheets', short: '18 mm wood finish, 10 year warranty',
    desc: 'Synwood 18 mm one side laminated solid sheets in wood finishes, with a 10 year warranty.',
    images: [[page('pvc-one-side-printed-solid-sheet', 0), 'One side laminated sheet PS 008'], [page('pvc-one-side-printed-solid-sheet', 6), 'One side laminated sheet PS 123'], [page('pvc-one-side-printed-solid-sheet', 8), 'One side laminated sheet PS 143']],
    specs: [['Finish', 'Wood finish'], ['Thickness', '18 mm'], ['Size', '1220 x 2440 mm'], ['Density', '0.50'], ['Weight', 'Approx. 27 kg'], ['Warranty', '10 years']],
    designs: codes('pvc-one-side-printed-solid-sheet', ['PS 008', 'PS 010', 'HC 019', 'PS 051', 'PS 081', 'PS 113', 'PS 123', 'PS 127', 'PS 143', 'PS 200', 'PS 297', 'PS 316']),
    catalogues: [['One Side Printed Solid Sheet', cat('pvc-one-side-printed-solid-sheet')]],
  },
  {
    id: 'bamboo-sheets', cover: 'sw/swatch-pvc-carbon-bamboo-sheet-1', group: 'Sheets', name: 'PVC Bamboo Sheets', short: 'Carbon & bamboo, one side laminated',
    desc: 'One side laminated PVC bamboo sheets, built from a carbon sheet and a bamboo sheet layer, in wood and marble finishes.',
    images: [[page('pvc-carbon-bamboo-sheet', 0), 'PVC bamboo sheet HF 280'], [page('pvc-carbon-bamboo-sheet', 1), 'PVC bamboo sheet HF 208']],
    specs: [['Finish', 'Wood finish'], ['Thickness', '8 mm'], ['Size', '1220 x 2900 mm'], ['Density', '0.75'], ['Weight', '21.23 kg'], ['Coverage', '38 sqft per sheet'], ['Layers', 'Carbon sheet + bamboo sheet']],
    designs: codes('pvc-carbon-bamboo-sheet', ['HF 280', 'HF 208', 'HF 196', 'HF 214', 'HF 189', 'HF 185', 'HF 167', 'HF 164', 'HF 161', 'HF 194', 'HF 182']),
    catalogues: [['Carbon & Bamboo Sheet', cat('pvc-carbon-bamboo-sheet')]],
  },
  {
    id: 'uv-marble-sheets', cover: 'sw/swatch-pvc-uv-marble-sheet-0', group: 'Sheets', name: 'UV Marble Sheets', short: '2.5 mm marble & wood looks',
    desc: 'Synwood UV marble sheets in marble and wood looks for wall decor.',
    images: [[page('pvc-uv-marble-sheet', 0), 'UV marble sheet LT 8233 in black marble'], [page('pvc-uv-marble-sheet', 3), 'UV marble sheet LT 8232 in white marble']],
    specs: [['Thickness', '2.5 mm'], ['Size', '1220 x 2900 mm'], ['Weight', '18.650 kg'], ['Density', '2.11 g/cm³']],
    designs: codes('pvc-uv-marble-sheet', ['LT 8233', 'LT 8136', 'LT 8026', 'LT 8232', 'LT 8134', 'LT 8160', 'LT 8152', 'LT 8089', 'LT 8011']),
    catalogues: [['UV Marble Sheet', cat('pvc-uv-marble-sheet')]],
  },
  {
    id: 'pvc-doors', cover: page('pvc-solid-hollow-door-sheet', 3), group: 'Doors', name: 'Synwood PVC Doors', short: 'Solid & hollow foam doors',
    desc: 'Synwood PVC foam board doors have a soft foamed PVC core that gets harder towards the outside, with a co-extruded smooth flat surface on both sides. Working temperature from -20 to 60 degrees. Making customisable doors is easy: cut and install.',
    images: [
      [page('pvc-solid-hollow-door-sheet', 0), 'Synwood PVC doors in four shades'], [page('pvc-solid-hollow-door-sheet', 3), 'Foam sheet doors in indoor rooms'],
      [page('pvc-solid-hollow-door-sheet', 2), 'PVC foam board door sizes and hollow shades'], [page('pvc-solid-30mm-door', 0), '30 mm solid PVC door, plain white'],
      [page('pvc-solid-hollow-door-sheet', 1), 'Synwood doors vs plywood doors'],
    ],
    features: iconFeatures,
    tables: [
      { title: 'Door Board Range', columns: ['Standard Size (ft)', 'Thickness', 'Density (g/cm³)', 'Type'], rows: [
        ['2.20 x 7.00, 2.30 x 6.75, 2.30 x 7.00, 4 x 7, 4 x 8', '18 mm', '0.70', 'Hollow'], ['', '20 mm', '0.50', 'Hollow'], ['', '24 mm', '0.70', 'Hollow'],
        ['', '30 mm', '0.70', 'Hollow'], ['', '35 mm', '0.70', 'Hollow'], ['', '50 mm', '0.50 to 0.60', 'Hollow'],
      ] },
      { title: 'Synwood Doors vs Plywood Doors', columns: ['Feature', 'Synwood Doors', 'Plywood Doors'], rows: [
        ['High Screw Holding Capacity', 'Yes', 'Yes'], ['Corrosion Resistance', 'Yes', 'No'], ['Maintenance Free', 'Yes', 'No'], ['Aesthetic Look', 'Yes', 'No'],
        ['No Shrinkage', 'Yes', 'Yes'], ['Splinter Free', 'No', 'No'], ['Non Toxic', 'Yes', 'No'], ['Light Weight', 'Yes', 'No'], ['Printable', 'Yes', 'Yes'],
      ] },
    ],
    chipGroups: [['Shades', ['2GH', '3GK', '3TC', '3WR', '4GK', '4WR', '5TC']], ['30 mm Solid Door', ["3' x 7'", 'Plane white', '10 year warranty']]],
    steps: {
      title: '30 mm Solid Door: Installation Tips',
      items: [
        'Always use drywall screws for fixing hinges on PVC doors.', 'Ensure the door frame is perfectly level before installation.',
        'Maintain proper clearance between door and frame.', 'Use minimum 3 hinges for better strength and durability.',
        'Avoid over-tightening screws to prevent damage to the PVC surface.', 'Drill pilot holes before fixing screws for a neat finish.',
        'Use rubber beading or stopper to reduce noise and impact.', 'Clean the surface after fitting to maintain the finish.',
      ],
    },
    catalogues: [['Solid / Hollow Door Sheet', cat('pvc-solid-hollow-door-sheet')], ['Solid 30mm Door', cat('pvc-solid-30mm-door')]],
  },
  {
    id: 'wall-panel', group: 'Wall & Ceiling', name: 'Synwood Wall & Ceiling Panels', short: 'FAFA 400 mm & classic 120 mm',
    desc: 'Synwood wall coverings are made from a PVC membrane with a mesh back cloth, strong and durable against abrasion. They do not shrink and meet flame retardant safety requirements for public sites. The interlocking panels install easily on walls and can also be used as a false ceiling.',
    images: [[`${SW}/wall-panel-3`, 'Living room with striped Synwood wall panels'], [page('fafa-wall-panel-400mm', 0), 'FAFA wall panel HF208'], [page('pvc-classic-wall-panel', 1), 'Classic wall panel Y21 in a living room'], [`${SW}/wall-panel-4`, 'Bedroom with Synwood panelled walls'], [`${SW}/wall-panel-0`, 'Synwood wall panel catalogue page']],
    tables: [{ title: 'Panel Range', columns: ['Range', 'Thickness', 'Width', 'Length', 'Groove', 'Box'], rows: [
      ['FAFA', '9 mm', '400 mm', '2900 mm', 'Flat', '6 pcs, 75 sqft'], ['Classic (NYN)', '5 mm', '120 mm', '2900 mm', 'Flat', '30 pcs, 115 sqft'],
    ] }],
    designGroups: [
      ['FAFA 400 mm', codes('fafa-wall-panel-400mm', ['HF208', 'HF189', 'HF214', 'HF167', 'HF194', 'HF161', 'HF182', 'HF196', 'HF185', 'HF280', 'HF164'])],
      ['Classic 120 mm (NYN 05mm)', codes('pvc-classic-wall-panel', ['Y01', 'Y21', 'Y22', 'Y24', 'Y25', 'Y27', 'Y31', 'Y32', 'Y91'])],
    ],
    catalogues: [['FAFA Wall Panel 400mm', cat('fafa-wall-panel-400mm')], ['Classic Wall Panel', cat('pvc-classic-wall-panel')]],
  },
  {
    id: 'fluted-panels', cover: 'sw/swatch-wpc-fluted-panel-interior-160mm-5', group: 'Wall & Ceiling', name: 'Fluted Panels Interior', short: '160 x 24 mm fluted',
    desc: 'Synwood 160 x 24 mm fluted panels for interior walls, in stone, marble and wood finishes.',
    images: [[page('wpc-fluted-panel-interior-160mm', 0), 'Fluted panel DS02 grey stone marble'], [page('wpc-fluted-panel-interior-160mm', 5), 'Fluted panel DM148 walnut wood']],
    specs: [['Thickness', '24 mm'], ['Width', '160 mm (splice 160, overall 167 mm)'], ['Length', '2900 mm'], ['Groove', 'Fluted'], ['Box', '10 pcs, 50 sqft']],
    designs: codes('wpc-fluted-panel-interior-160mm', [['DS02', 'Grey Stone Marble'], ['DS08', 'Snow White'], ['DM 27', 'Ivory Wood'], ['DM47', 'Oak Veneer'], ['DM82', 'Stone Marble'], ['DM148', 'Walnut Wood'], ['DM150', 'Brown Wood'], ['HF280', 'White Marble']]),
    catalogues: [['Fluted Panel Interior 160mm', cat('wpc-fluted-panel-interior-160mm')]],
  },
  {
    id: 'ceiling-panel', group: 'Wall & Ceiling', name: 'Synwood Ceiling Panel', short: 'Hygienic false ceilings',
    desc: 'Panels designed for interior wall panelling and false ceilings. Light, moisture resistant, weather proof, termite and insect free, with a cleanable, non absorbent surface that will not decolour. Synwood was first to introduce foamed technology for wall and ceiling panelling, so panels bend around edges for a seamless finish.',
    images: [[`${SW}/ceiling-panel-5`, 'Wood finish Synwood ceiling with pendant lamps'], [`${SW}/ceiling-panel-4`, 'Dark Synwood ceiling over a balcony'], [`${SW}/ceiling-panel-0`, 'Synwood ceiling panel catalogue page'], [`${SW}/ceiling-panel-3`, 'Synwood ceiling panels in rooms'], [`${SW}/ceiling-panel-6`, 'Synwood ceiling panel profile drawings']],
  },
  {
    id: 'flooring-tiles', group: 'Wall & Ceiling', name: 'Synwood Flooring Tiles', short: 'Looks & feels like wood',
    desc: 'A 100% eco friendly substitute for wooden flooring that looks and feels like wood. Formaldehyde free, non rotting and insect damage preventable, for a comfortable and healthy living space.',
    images: [[`${SW}/flooring-tiles-5`, 'Bedroom with Synwood wood look flooring'], [`${SW}/flooring-tiles-4`, 'Dark Synwood floor'], [`${SW}/flooring-tiles-0`, 'Synwood flooring catalogue page'], [`${SW}/flooring-tiles-6`, 'Synwood flooring specification sheet'], [`${SW}/flooring-tiles-7`, 'Synwood flooring installation guide']],
  },
  {
    id: 'wpc-exterior-cladding', cover: 'sw/swatch-wpc-exterior-cladding-flute-4', group: 'Exterior', name: 'WPC Exterior Cladding', short: 'Fluted, wooden texture',
    desc: 'Synwood WPC fluted exterior cladding with a wooden texture, in six colours.',
    images: [[page('wpc-exterior-cladding-flute', 0), 'WPC exterior cladding Beach'], [page('wpc-exterior-cladding-flute', 4), 'WPC exterior cladding Teak']],
    specs: [['Finish', 'Wooden texture'], ['Thickness', '26 mm'], ['Width', '218 mm'], ['Length', '2900 mm'], ['Groove', 'Fluted'], ['Box', '2 pcs, 14 sqft']],
    designs: codes('wpc-exterior-cladding-flute', ['Beach', 'Dove Grey', 'Ash', 'Cherry Red', 'Teak', 'Walnut']),
    catalogues: [['WPC Exterior Cladding Flute', cat('wpc-exterior-cladding-flute')]],
  },
  {
    id: 'cladding', group: 'Exterior', name: 'Synwood Wall Cladding', short: '12 x 157 x 2440 mm',
    desc: 'A durable, low maintenance synthetic cladding in natural wood textures. Suits outdoor fencing, gates, wall pipe and duct covering, terrace seating and flooring, and outer building walls, indoors and outdoors.',
    images: [[page('pvc-wall-cladding-plane-print', 0), 'Building with Synwood wall cladding'], [page('pvc-wall-cladding-plane-print', 1), 'Wall cladding applications and fixing diagram'], [page('synwood-exterior-products-brochure', 2), 'Brochure page on Synwood wall cladding'], [page('synwood-exterior-products-brochure', 4), 'Wall cladding projects'], [`${SW}/cladding-4`, 'Synwood cladding fence panel']],
    specs: [['Thickness', '12 mm'], ['Width', '157 mm'], ['Length', '2440 mm'], ['Fixing', 'On a 230 mm exterior brick wall, over 25 x 50 mm construction bars']],
    chipGroups: [['Colours', ['HA3', 'HB3', 'HC3', 'HD3']], ['Applications', ['Boundary Walls', 'Garden Landscaping', 'Fencing', 'Wall Application', 'Main Entrance Gate', 'Pergolas', 'Floor Decoration']]],
    steps: {
      title: 'Installation Process',
      items: [
        'Measure the total area for installation of cladding.',
        'Depending on the height of the premises, choose the length of the construction bar for the framing.',
        'Fencing: dig the ground or build a cement block to install the construction bar frame (e.g. for a 10 ft fence, dig 2 ft down). Wall cladding: fix the construction bar on the wall vertically or horizontally, with a 2 ft gap between screws.',
        'Install construction bars 450 to 600 mm apart, depending on project requirements.',
        'Fix the cladding sheet on the construction bar using SS screws (32 mm x 4 mm).',
        'For a fence, keep a 4 to 5 mm gap between each row.',
      ],
    },
    catalogues: [['Wall Cladding Plane Print', cat('pvc-wall-cladding-plane-print')], ['Exterior Products Brochure', cat('synwood-exterior-products-brochure')]],
  },
  {
    id: 'decking', cover: `${SW}/decking-4`, group: 'Exterior', name: 'Synwood Decking', short: 'Anti-skid outdoor decking',
    desc: 'PVC decking that holds up against heat, cold, rain and snow. For swimming pool decks, metro stations, ship decks and outdoor house flooring. Being anti-skid, it gives poolsides and walkways a safe wooden finish.',
    images: [[page('pvc-decking-solid', 0), 'Synwood decking on a rooftop garden'], [page('pvc-decking-solid', 1), 'Decking applications and clip diagram'], [page('synwood-exterior-products-brochure', 5), 'Brochure page on Synwood decking'], [page('synwood-exterior-products-brochure', 7), 'Decking projects'], [`${SW}/decking-4`, 'Curving Synwood decking path through a garden']],
    specs: [['Profiles', '120 x 21 mm and 157 x 12 mm'], ['Length', '2440 mm'], ['Batons', '60 x 32, 50 x 25, 32 x 32, 100 x 50 mm'], ['Fixing', 'Decking clips with SS A-type screws']],
    chipGroups: [['Colours', ['B97 (21 mm)', '390 (21 mm)', 'T83 (12 mm)', 'T85 (12 mm)']], ['Applications', ['MTR Decking', 'Garden Decking', 'Voyeur Decking', 'Landscaping', 'Pool Decking']]],
    steps: {
      title: 'Installation Process',
      items: [
        'Examine the surface: check it is even. A maximum variation of 2 to 3 mm is acceptable.',
        'The surface should be hard; poor levelling leads to deformation and poor structural shape.',
        'Frame at 210 x 210 mm with 25 x 50 or 35 x 60 mm Synwood construction bars, starting from one corner. Keep depth difference under 3 mm, and slope the frame for drainage.',
        'Start installing the deck from one corner.',
        'With Synwood decking clips, a 6 to 8 mm gap is created for water to drain. Use SS A-type screws with the clips.',
        'If screwing directly, use only A-type thread screws of at least 38 mm, 10 mm from the edges and 210 mm apart. No nailing.',
      ],
    },
    catalogues: [['PVC Decking Solid', cat('pvc-decking-solid')], ['Exterior Products Brochure', cat('synwood-exterior-products-brochure')]],
  },
  {
    id: 'construction-bars', group: 'Exterior', name: 'Synwood Construction Bars', short: 'PVC bars for frames & structures',
    desc: 'High density, sturdy PVC bars with a finished surface and accurate dimensions, for window and door frames, fencing frames, garden benches and landscape designs. Highly recommended for structure making.',
    images: [[page('pvc-construction-bars', 0), 'Fence made with Synwood construction bars'], [page('pvc-construction-bars', 1), 'Construction bar applications and sizes'], [page('synwood-exterior-products-brochure', 9), 'Construction bar projects'], [`${SW}/construction-bars-4`, 'Room with Synwood construction bar ceiling']],
    chipGroups: [
      ['Sizes (mm)', ['14 x 34', '14 x 35', '14 x 37', '25 x 35', '25 x 50', '32 x 32', '35 x 60', '40 x 80', '50 x 100']],
      ['Lengths', ['2440 mm', '8 ft', '10 ft', '12 ft']],
      ['Colours', ['380', '390', 'B97']],
      ['Applications', ['Flooring Deck', 'Pergolas', 'Benches', 'Fencing', 'Exterior Wall', 'Window & Door Frames']],
    ],
    catalogues: [['PVC Construction Bars', cat('pvc-construction-bars')]],
  },
];

const hwFlat = (code, thick = '7 mm', box = '8 panels, 101.5 sqft', note) => [code, thick, box, note];
const flatList = [
  hwFlat('HF201'), hwFlat('HF219'), hwFlat('HF280'), hwFlat('20', '7.5 mm', '10 panels, 125 sqft'), hwFlat('DS02', '7 mm', '8 panels, 101.5 sqft', 'Stock not available'),
  hwFlat('LT 83189'), hwFlat('DM 150'), hwFlat('12', '7.5 mm', '10 panels, 125 sqft'), hwFlat('26', '7.5 mm', '10 panels, 125 sqft'), hwFlat('DM27'),
  hwFlat('HF205'), hwFlat('HF162', '7 mm', '8 panels, 101.5 sqft', 'Single groove'), hwFlat('DM 53'), hwFlat('HF163'), hwFlat('07', '7.5 mm', '10 panels, 125 sqft'),
  hwFlat('DM 47'), hwFlat('DM 148'), hwFlat('25', '7.5 mm', '10 panels, 125 sqft'),
];

export const haowoodProducts = [
  {
    id: 'flat-panels', cover: 'sw/swatch-pvc-wall-panel-flat-400mm-6', name: 'Haowood Flat Laminated Panels', short: '400 mm, flat',
    desc: 'Haowood laminated PVC wall and ceiling panels, 400 mm wide with a flat surface, in wood, marble and pattern finishes.',
    images: [[page('pvc-wall-panel-flat-400mm', 0), 'Haowood flat panel HF201'], [page('pvc-wall-panel-flat-400mm', 2), 'Haowood flat panel HF280'], [page('pvc-wall-panel-flat-400mm', 3), 'Haowood flat panel 20']],
    specs: [['Type', 'Laminated'], ['Thickness', '7 mm (7.5 mm on codes 07, 12, 20, 25, 26)'], ['Width', '400 mm'], ['Length', '2900 mm'], ['Groove', 'Flat'], ['Box', '8 panels, 101.5 sqft (10 panels, 125 sqft on 7.5 mm)'], ['Profiles', 'C, L & H profile, H rib']],
    designs: codes('pvc-wall-panel-flat-400mm', flatList.map(([c, , , n]) => [c, n])),
    catalogues: [['Wall Panel Flat 400mm', cat('pvc-wall-panel-flat-400mm')]],
  },
  {
    id: '8-groove-panels', cover: 'sw/swatch-pvc-8-groove-wall-panel-0', name: 'Haowood 8 Groove Panels', short: '300 mm, 8 black or golden lines',
    desc: 'Haowood interior range PVC wall and ceiling panels with 8 grooves, in black or golden lines, and wooden finishes.',
    images: [[page('pvc-8-groove-wall-panel', 0), 'Haowood 8 groove panel HP-51212-27'], [page('pvc-8-groove-wall-panel', 5), 'Haowood 8 groove panel HW-54402-10']],
    specs: [['Thickness', '9 mm'], ['Width', '300 mm'], ['Length', '2900 mm'], ['Finish', 'Wooden'], ['Groove', '8 lines, black or golden'], ['Box', '8 pcs, 76 sqft'], ['Profiles', 'C, L & H shape']],
    designs: codes('pvc-8-groove-wall-panel', [['HP-51212-27', 'Black line'], ['HP-512101-1', 'Black line'], ['HM-801709-9', 'Black line'], ['HP-75555-3', 'Black line'], ['HP-51001-2 / B-10A', 'Black line'], ['HW-54402-10', 'Golden line'], ['HW-87701-2', 'Black line'], ['HW-88301-9', 'Golden line']]),
    catalogues: [['8 Groove Wall Panel', cat('pvc-8-groove-wall-panel')]],
  },
  {
    id: '9-groove-panels', cover: 'sw/swatch-pvc-9-groove-wall-panel-1', name: 'Haowood 9 Fluted Panels', short: '300 mm, glossy, 9 fluted',
    desc: 'Haowood interior range PVC wall and ceiling panels with 9 flutes, mostly in a glossy finish.',
    images: [[page('pvc-9-groove-wall-panel', 0), 'Haowood 9 fluted panel HW51501-2'], [page('pvc-9-groove-wall-panel', 2), 'Haowood 9 fluted panel HM801709-9']],
    specs: [['Thickness', '9 mm'], ['Width', '300 mm'], ['Length', '2900 mm'], ['Finish', 'Glossy (HM801709-9: antique cherry)'], ['Groove', '9 fluted'], ['Box', '8 pcs, 76 sqft'], ['Profiles', 'C, L & H shape']],
    designs: codes('pvc-9-groove-wall-panel', ['HW51501-2', 'HP51212-27', ['HM801709-9', 'Antique cherry'], 'HP51501-9', 'FX185', 'HW-FX69-6', 'HW86801-2']),
    catalogues: [['9 Groove Wall Panel', cat('pvc-9-groove-wall-panel')]],
  },
  {
    id: 'double-groove-panels', cover: 'sw/swatch-pvc-double-groove-wall-panel-300mm-6', name: 'Haowood Double Groove Panels', short: '300 mm, laminated, double groove',
    desc: 'Haowood laminated PVC wall and ceiling panels with a double groove, 300 mm wide.',
    images: [[page('pvc-double-groove-wall-panel-300mm', 0), 'Haowood double groove panel LM VG 02'], [page('pvc-double-groove-wall-panel-300mm', 6), 'Haowood double groove panel LM VG 30']],
    specs: [['Type', 'Laminated'], ['Thickness', '7 mm (8 mm on VG 02, 04, 05)'], ['Width', '300 mm'], ['Length', '2900 mm'], ['Groove', 'Double'], ['Box', '10 panels, 95 sqft'], ['Profiles', 'C, L & H profile']],
    designs: codes('pvc-double-groove-wall-panel-300mm', ['LM VG 02', 'LM VG 04', 'LM VG 05', 'LM DS 08', 'LM VG 24', 'LM DM 27', 'LM VG 30', 'LM DM 47', 'LM DM 53', 'LM DM 82', 'LM DM 148', 'LM DM 150']),
    catalogues: [['Double Groove Wall Panel 300mm', cat('pvc-double-groove-wall-panel-300mm')]],
  },
  {
    id: 'self-printed-panels', cover: 'sw/swatch-pvc-self-printed-wall-panel-2', name: 'Haowood Self Printed Panels', short: 'Glossy, single line or flat',
    desc: 'Haowood glossy self printed PVC wall and ceiling panels, with single golden or silver lines, or flat.',
    images: [[page('pvc-self-printed-wall-panel', 0), 'Haowood self printed panel SP Vg Single 01'], [page('pvc-self-printed-wall-panel', 2), 'Haowood self printed panel SP Vg Single 03']],
    tables: [{ title: 'Self Printed Range', columns: ['Range', 'Thickness', 'Width', 'Length', 'Groove', 'Box'], rows: [
      ['SP Vg Single 01 to 06', '7 mm', '200 mm', '2900 mm', 'Single golden or silver line', '10 panels, 63 sqft'],
      ['SP Vg Flat 07 to 11', '7 mm', '250 / 300 mm', '2900 mm', 'Flat', '10 panels, 80 / 95 sqft'],
      ['SP Vg Flat 12', '7 mm', '250 mm', '2900 mm', 'Flat golden line', '10 panels, 80 sqft'],
      ['SP Vg Flat 13 & 14', '7 mm', '300 mm', '2900 mm', 'Flat', '10 panels, 95 sqft'],
    ] }],
    chipGroups: [['Finish & Profiles', ['Glossy', 'C, L & H profile']]],
    designs: codes('pvc-self-printed-wall-panel', [['Single 01', 'Golden line'], ['Single 02', 'Silver line'], ['Single 03', 'Silver line'], ['Single 04', 'Golden line'], ['Single 05', 'Silver line'], ['Single 06', 'Golden line'], 'Flat 07', 'Flat 08', 'Flat 09', 'Flat 10', 'Flat 11', ['Flat 12', 'Golden line'], 'Flat 13', 'Flat 14']),
    catalogues: [['Self Printed Wall Panel', cat('pvc-self-printed-wall-panel')]],
  },
];
