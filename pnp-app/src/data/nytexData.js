// NYTEX content. Sources: PNPIND's mail, the NYTEX 2026 catalogue, and pnpind.com.
// Where they differ on specs or phone numbers, the 2026 catalogue wins.
export const NYTEX_DIVISION_PATH = '/manufacturing/nytex-division';
export const NYTEX_PRODUCTS_PATH = '/manufacturing/nytex-products';
export const NYTEX_CATALOGUE = '/Nytex 2026 .pdf';
export const NYTEX_IMG = '/assets/manufacturing';
export const NYTEX_ENQUIRY = 'NYTEX Nylon Filament Yarn';

export const yarns = [
  { code: 'POY', name: 'Partially Oriented Yarn', min: 15, max: 350, filaments: '7 to 216', description: 'An intermediate yarn, spun at high speed and only partly drawn. It is mainly used as a feed yarn for further processing, such as draw texturing into DTY.', uses: 'Feed yarn for texturing and drawing' },
  { code: 'FDY', name: 'Fully Drawn Yarn', min: 15, max: 200, filaments: '7 to 72', description: 'Spun and drawn in a single step, so it is ready to use directly. It gives fabric a smooth, soft feel and suits silk-like weaves.', uses: 'Taffeta, satin, chiffon and lining fabrics' },
  { code: 'HOY', name: 'Highly Oriented Yarn', min: 15, max: 350, filaments: '7 to 216', description: 'Spun at very high speed, which gives its filaments a high degree of orientation before any further processing.', uses: 'Filament yarn applications that need a highly oriented yarn' },
  { code: 'DTY', name: 'Draw Textured Yarn', min: 12, max: 700, filaments: '7 to 432', description: 'Made by drawing and false-twist texturing POY, which adds crimp and stretch to otherwise straight filaments.', uses: 'Sportswear, stretch fabrics and upholstery' },
  { code: 'ACY', name: 'Air Covered Yarn', min: 12, max: 700, filaments: '7 to 288', description: 'Air jets entangle filament yarn around a stretched spandex core at regular points, producing an elastic yarn.', uses: 'Elastic fabrics for clothing, in knitting' },
];

// From the product category text on pnpind.com/nylon-filament-yarn-nytex; not listed in the 2026 catalogue.
export const otherYarnProducts = ['Mono Filament', 'Mother Yarn', 'Multifilament Yarns', 'Air Textured Yarn (ATY)', 'Draw Winder', 'Jumbo Beam', 'TOW'];

// Standard grades from the spec tables on pnpind.com/nylon-filament-yarn-nytex, grouped by denier, shape and luster.
// PNP to confirm: that page shows POY 70-180D / 68F with luster "Round" (treated here as SD/FD, matching the rows around it).
const roundFine = { denier: '20-50', shape: 'Round', luster: 'SD/FD', filaments: '12, 18, 24, 34, 48' };
const trilobalFine = { denier: '20-50', shape: 'Trilobal', luster: 'BRT', filaments: '12, 18, 24, 34, 48' };
const cross = { denier: '70-120', shape: 'Cross', luster: 'SD/FD/BRT', filaments: '24, 48' };

export const yarnGrades = {
  POY: [
    roundFine,
    { denier: '70-180', shape: 'Round', luster: 'SD/FD', filaments: '24, 48, 68' },
    trilobalFine,
    { denier: '70-80', shape: 'Trilobal', luster: 'BRT', filaments: '24, 48, 72' },
    cross,
  ],
  FDY: [
    roundFine,
    { denier: '70-200', shape: 'Round', luster: 'SD/FD', filaments: '24, 34, 48, 68' },
    trilobalFine,
    { denier: '70-200', shape: 'Trilobal', luster: 'BRT', filaments: '12, 24, 34, 48, 68' },
  ],
  HOY: [
    roundFine,
    { denier: '70-180', shape: 'Round', luster: 'SD/FD', filaments: '24, 48, 68' },
    trilobalFine,
    { denier: '70-180', shape: 'Trilobal', luster: 'BRT', filaments: '24, 48, 72' },
    cross,
  ],
};

export const crimpGrades = [
  { denier: '70/1, 70/2', shape: 'Round', luster: 'SD', filaments: '24' },
  { denier: '110/1, 110/2', shape: 'Round', luster: 'SD', filaments: '24, 68' },
];

export const yarnOptions = [
  { label: 'Luster', values: ['Bright', 'Semi Dull', 'Full Dull'] },
  { label: 'Shape', values: ['Round', 'Trilobal', 'Nycool', 'Nysilk', 'Sparkle', 'Caterpillar', 'U-Shape', 'Hollow'] },
  { label: 'Colour', values: ['Raw White', 'Colours'] },
];

export const machinery = [
  { area: 'Spinning System', detail: 'From extruders to winders', brands: ['Oerlikon Barmag'] },
  { area: 'Utilities', detail: 'From world leaders', brands: ['Atlas Copco', 'Daikin', 'Luwa', 'Sossna'] },
  { area: 'Testing Lab', detail: 'Most sophisticated testing machines', brands: ['Textechno', 'Oxford', 'Spintrack'] },
];

export const benefits = [
  'Skin Friendly', 'Higher Strength', 'High Stretchability', 'Better Wicking', 'Light in Weight',
  'Better Drapability', 'Abrasion Resistance', 'Easily Dyeable', 'Shape Retention', 'Soft & Bulky',
];

export const applications = [
  { title: 'Ethnic Wear', image: 'use-ethnic', items: ['Sarees', 'Dress Material', 'Kurtis', 'Dupattas'] },
  { title: 'Active Wear', image: 'use-active', items: ['T-Shirts', 'Leggings', 'Yoga Wear', 'Athleisure', 'Sports Protective Pads'] },
  { title: 'Inner Wear', image: 'app-inner', items: ['Lingerie', 'Jockstraps', 'Narrow Tapes'] },
  { title: 'Medical Use', image: 'use-medical', items: ['Body Shapers', 'Bandages', 'Support Bands'] },
  { title: 'Other Applications', image: 'use-other', items: ['Socks', 'Gloves', 'Stockings', 'Swimming Suits', 'Wind Breakers', 'Made Ups'] },
];

export const offices = [
  { city: 'Mumbai', tag: 'Head Office', address: 'A 601-607, Mangal Aarambh, Kora Kendra, Borivali (W), Mumbai - 400 092', phone: '92233 91075' },
  { city: 'Bhilad', tag: 'Factory', address: 'Survey No. 237/3, Paiki (2), Near Bhilad Railway Station, Village Sarigam, Tal. Umargam - 396 105', phone: '92233 91019' },
  { city: 'Bengaluru', address: '207, Money Chambers, 6 K H Road, Bangalore - 560 027', phone: '98454 51036' },
  { city: 'Chennai', address: '17/4, M.R.H Road, Vadaperumpakkam, Opp. Indian Petrol Pump, Chennai - 600 060', phone: '92233 91060' },
  { city: 'Delhi', address: '907, P P Tower, Netaji Subhash Place, Pitampura, Delhi - 110 034', phone: '92233 91055' },
  { city: 'Hyderabad', address: '308, Lala-2, Oasis Plaza, 4-1-898, Tilak Road, Abids, Hyderabad - 500 001', phone: '92462 01036' },
  { city: 'Kanpur', address: '128/120, K-Block, Kidwai Nagar, Kanpur - 208 011', phone: '92233 91046' },
  { city: 'Kochi', address: 'Door No. 131/42/948 A, JJD Complex, Cemetery Jn, Chitoor Road, Cochin - 682 018', phone: '92233 91050' },
  { city: 'Kolkata', address: '308, Jindal Tower, 21/3, Darga Road, Kolkata - 700 017', phone: '92306 55308' },
  { city: 'Surat', address: '3008, World Trade Center, Ring Road, Surat - 395 002', phone: '92769 09040' },
  { city: 'Taipei', tag: 'Taiwan', address: '8F-3, 171, Sung Teh Road, Taipei, R.O.C.', phone: '+886 22278 1531' },
];

// Licence credits for the third-party yarn photos on the Division page. They are not shown yet:
// the licences require them, so publish them (e.g. on a credits page) or replace the photos before launch.
export const yarnImageCredits = [
  { code: 'POY', author: 'RAJIVVASUDEV', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/w/index.php?curid=128570321' },
  { code: 'FDY', author: 'One2tree', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/w/index.php?curid=115508173' },
  { code: 'HOY', author: 'darkday from Brisbane, Australia', license: 'CC BY 2.0', url: 'https://commons.wikimedia.org/w/index.php?curid=136247239' },
  { code: 'DTY', author: 'Gerrit41', license: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/w/index.php?curid=15228133' },
  { code: 'ACY', author: 'RAJIVVASUDEV', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/w/index.php?curid=128570514' },
];
