// Trading division content.
// Sources: client email (trading list, market shares), catalogues in /public (HAO, TIE, PNP Racking, Jaquar), the PNP diary 2019
// and the client's live site pnpind.com (brand pages and the seven Synwood product pages).

import { synwoodFeatures, characteristics, synwoodVsPlywood, tools, clients, synwoodCatalogues, haowoodCatalogues, synwoodProducts, haowoodProducts } from './synwoodData';

export const TRADING_IMG = '/assets/trading';


export const brands = [
  {
    id: 'hao',
    logos: ['/assets/businesses/logo-hao.webp'],
    name: 'HAO',
    full: 'Hot Air Out',
    product: 'Air Ventilators',
    badges: ['Performance certified by IIT Mumbai', 'Assembled in India'],
    tagline: 'Quality natural air ventilation system.',
    intro: 'Hot Air Out is our air ventilator brand, exclusively designing eco friendly air ventilators made for wind energy based exhaust systems that increase productivity and efficiency in the shed. HAO is an ideal solution for warehouses and factories.',
    hero: 'hao-roof', heroAlt: 'Rows of HAO turbo ventilators on a factory roof',
    howItWorks: 'Turbo ventilators use wind energy to create airflow by centrifugal action. The rotating vanes create a low pressure zone, which draws in fresh air from outside and throws out hot and polluted air from inside the shed. This continuous cycle gives 24/7 ventilation, free of cost.',
    howImage: ['hao-install', 'Installer fitting a green HAO turbo ventilator on a metal roof'],
    features: [
      'Guarantee against water leakage', 'No operating & maintenance cost', '80% depreciation under section 32 of IT Act',
      'Assures 24/7 free of cost ventilation', 'Continuously circulates fresh air inside the shed', 'Removes trapped hot air, gas fumes, smoke & stale air',
      'Reduces temperature & humidity', 'Economical & 100% power saving', 'Available in different sizes & grades',
    ],
    builtWith: [
      ['hao-built-bearing', 'Sealed Ball Bearing System'],
      ['hao-built-fins', 'Bi-Fold Fins'],
      ['hao-built-base', 'Fits on Any Kind of Base'],
      ['hao-built-exhaust', 'Double Exhaust Technology'],
    ],
    materials: [
      ['PP (Polypropylene)', 'Aesthetic look, available in 3 colours'],
      ['Stainless Steel', 'Grade 304 and Grade 430'],
    ],
    materialsImage: ['hao-cat-models', 'HAO natural air ventilators in polypropylene and stainless steel'],
    applications: [
      ['SS 304', 'Pickling plants and chemical plants'],
      ['SS 430', 'Factories, workshops, warehouses, automobile industry, power generation houses, boiler houses, pharmaceutical industry'],
      ['PP', 'Where an aesthetic look is needed'],
    ],
    tips: [
      ['hao-tip-airflow', 'Ventilation', 'Do not install away from the ridge or mid roof. Install near the ridge for more ventilation.'],
      ['hao-tip-leakage', 'Water Leakage', 'Away from the ridge, leakage is more likely. On the ridge it is least, with no reverse flow of water.'],
      ['hao-tip-sunlight', 'Sunlight', 'A wrong position blocks the sunlight sheets. The right position provides abundant sunlight.'],
    ],
    contacts: [
      ['Mumbai', '92233 91080'], ['Bangalore', '98454 51036'], ['Bhilad', '93275 31927'], ['Chennai', '92821 34421'], ['Delhi', '97111 14794'],
      ['Hyderabad', '92462 01036'], ['Kanpur', '92355 05442'], ['Kochi', '92494 73817'], ['Kolkata', '92306 55308'], ['Surat', '92769 09040'],
    ],
    catalogue: '/Hao-2026 new.pdf',
    products: [
      {
        id: 'turbo-ventilator',
        name: 'Turbo Air Ventilators',
        short: '22" turbo, SS 430 & 304 grade',
        desc: 'Turbo ventilators use wind energy to create airflow by centrifugal action. The rotating vanes create a low pressure zone that draws in fresh air from outside and throws out hot and polluted air from inside the shed, a continuous cycle of free ventilation. Double exhaust, available in different sizes, in stainless steel 304, 430 and PP.',
        images: [
          ['hao-product', 'HAO turbo ventilator with its base'],
          ['hao-roof', 'HAO turbo ventilators installed along a roof'],
          ['hao-range', 'HAO turbo ventilators in steel, green, blue and black with HAO boxes'],
          ['hao-install', 'Installer fitting a HAO turbo ventilator on a roof'],
          ['hao-fins', 'Close-up of bi-fold ventilator fins'],
          ['hao-bearing', 'Sealed ball bearing inside the ventilator'],
          ['hao-dim-top', '22 inch turbo top: 635 mm wide, 381 mm high, 554 mm base ring'],
          ['hao-dim-plate-small', 'Turbo on a 1080 by 850 mm base plate'],
          ['hao-dim-plate-large', 'Turbo on a 1625 by 1180 mm base plate'],
        ],
        features: [
          'Continuously circulates fresh ambient air', 'Removes trapped hot air, gas fumes, smoke & stale air',
          'Reduces temperature & humidity', 'Sealed ball bearing system', 'Bi-fold fins', 'Double exhaust', 'Fits on any kind of base',
        ],
        chips: ['Stainless Steel 304', 'Stainless Steel 430', 'PP (Polypropylene), 3 colours'],
        chipsLabel: 'Available In',
        specGroups: [
          ['Dimensions', [['Turbo top', '635 mm wide, 381 mm high'], ['Base ring', '554 mm'], ['Neck height', '457 mm'], ['Base plate', '1080 x 850 mm or 1625 x 1180 mm']]],
          ['Thickness', [['Blades / fins', '0.30 mm'], ['Top plate', '0.50 mm'], ['Top plate diameter', '14.00 inch']]],
          ['Fin Dimensions', [['Outer fins', '24'], ['Inner fins', '6'], ['Width of outer fins', '3.25 inch'], ['Length of outer fins', '15.50 inch'], ['Design of fins', 'Double fold']]],
          ['Top Dimensions', [['Weight of top', '4.85 kg'], ['Height of top', '15.00 inch'], ['Inner diameter of ring', '21.50 inch'], ['Outer diameter of ring', '21.80 inch'], ['Middle diameter of top', '25.00 inch'], ['Thickness of bottom ring', '3.00 mm'], ['Exhaust technology', 'Double']]],
          ['Bearings', [['No. of bearings', 'Two'], ['Location', 'Center'], ['Sealed', 'Yes'], ['Lubrication', 'Self']]],
          ['Shaft & Base', [['Shaft material', 'Zinc plated / SS 304'], ['Base material', 'Stainless steel / polycarbonate']]],
        ],
      },
      {
        id: 'wall-mounting-portable',
        name: 'Wall Mounting / Portable Ventilators',
        short: '3 blades & 6 blades',
        desc: 'HAO wall mounting and portable ventilators are an ideal solution for warehouses and factories. Available with 3 blades or 6 blades.',
        images: [['hao-portable-6', 'HAO 6 blade portable ventilator on a wheeled stand'], ['hao-portable-3', 'HAO 3 blade portable ventilator on a wheeled stand']],
        chips: ['3 Blades', '6 Blades'],
        chipsLabel: 'Types',
      },
      {
        id: 'rooftop-ventilator',
        name: 'Roof Top Air Ventilators',
        short: 'For factories & warehouses',
        desc: 'HAO rooftop air ventilators are an ideal solution for factories, warehouses and manufacturing industries.',
        images: [
          ['hao-rooftop', 'HAO rooftop ventilator installed on a tiled roof'],
          ['hao-rooftop-motor', 'Motor of a rooftop ventilator being wired'],
          ['hao-rooftop-install', 'Technician fitting a rooftop ventilator'],
          ['hao-rooftop-dims', 'Rooftop ventilator with its dimensions marked'],
        ],
        specs: [['Base', '2200 x 1600 mm'], ['Overall height', '1530 mm']],
      },
      {
        id: 'polycarbonate-base-plate',
        name: 'Polycarbonate Ventilator Base Plate',
        short: 'Base plate for turbo ventilators',
        desc: 'A polycarbonate base plate for mounting HAO turbo ventilators on the roof. The turbo ventilator base is available in stainless steel or polycarbonate.',
        images: [['hao-dim-plate-small', 'Turbo ventilator mounted on a 1080 by 850 mm base plate'], ['hao-dim-plate-large', 'Turbo ventilator mounted on a 1625 by 1180 mm base plate']],
        specs: [['Material', 'Polycarbonate'], ['Plate sizes', '1080 x 850 mm or 1625 x 1180 mm'], ['Used with', 'HAO Turbo Air Ventilators']],
      },
    ],
  },
  {
    id: 'tie',
    logos: ['/assets/businesses/logo-tie.webp'],
    name: 'TIE',
    full: 'The Permanent Bond',
    product: 'Roofing Screws',
    badges: ['Fabricators No. 1 Choice', 'Quality Approved', 'Construction Approved'],
    tagline: 'Roofing screws for permanent bonds.',
    useLine: 'For Pre-Engineering Structures',
    roofImage: ['tie-cat-roof', 'Roofing sheet fixed with TIE screws, with the TIE T-symbol'],
    intro: 'TIE roofing screws are permanent bonds for pre-engineered buildings. They are properly hardened with a proper drilling point, and specially designed for unskilled labour to increase productivity by 2x.',
    hero: 'tie-roof', heroAlt: 'TIE roofing screw fixed on a blue metal roofing sheet',
    gallery: [
      ['tie-cat-photo-1', 'TIE self drilling screws in six lengths'],
      ['tie-mixed', 'Mixed set of zinc and silver TIE screws'],
      ['tie-cat-photo-3', 'Row of long TIE drilling screws'],
    ],
    features: [
      'EPDM washer', 'HWH, 14 & 24 TPI', 'SS 304 head, life time rust free', 'Zinc & Xylan coating',
      'Very well electroplated', 'Heat treated at required temperatures', 'Well engineered threading, pinch point head & hardness',
    ],
    finishes: [
      ['YZ', 'Yellow Zinc'], ['SZ', 'Silver Zinc'], ['SS', 'Silver Zinc, SS 304 cap'], ['XY', 'Xylan'],
    ],
    finishesImage: ['tie-finishes', 'TIE screws in yellow zinc, silver zinc with SS 304 cap, silver zinc and Xylan'],
    anatomy: ['tie-anatomy', 'TIE screw parts: head, EPDM washer, shank guard, 14 TPI thread, tip type No.3 and No.5'],
    anatomyParts: ['Head', 'EPDM Washer', 'Shank Guard', '14 TPI Thread', 'Tip Type No.3 / No.5'],
    // Application photos: metal roofing is the client's own; the rest are CC0 / public domain photos from Wikimedia Commons.
    applicationList: [
      ['Metal Roofing Sheets', 'tie-roof'],
      ['Metal Wall Cladding Sheets', 'apps/wall-cladding'],
      ['Fibre Cement Boards', 'apps/fibre-cement'],
      ['Calcium Silicate Boards', 'apps/calcium-silicate'],
      ['Polycarbonate Roofing Sheets', 'apps/polycarbonate'],
      ['PVC & Fiberglass Roofing Sheets', 'apps/pvc-fiberglass'],
      ['Gypsum Board False Ceiling Tiles', 'apps/gypsum-ceiling'],
      ['M.S. & Aluminium Framing & Panelling', 'apps/ms-framing'],
    ],
    sizeGuide: {
      intro: 'A screw size is listed as three figures: gauge (No.), threads per inch (TPI) and length.',
      figures: [
        ['1st figure', 'Gauge or thickness of the screw, (g) or (No.)'],
        ['2nd figure', 'Threads per inch (T.P.I.)'],
        ['3rd figure', 'Length of the screw, in mm or inches'],
      ],
      examples: [
        ['14-10 x 20 mm', '14 gauge, 10 threads per inch, 20 mm long'],
        ['12-24 x 25 mm', '12 No. (5.5 mm), 24 threads per inch, 25 mm long'],
      ],
      gauge: 'The gauge of a screw is set by the basic size of the thread outside diameter.',
      length: [
        ['tie-length-under', 'Measured from the underside of the head to the point of the screw'],
        ['tie-length-top', 'Measured from the top of the head to the point of the screw'],
      ],
    },
    contact: { company: 'PNP Polytex Pvt. Ltd.', address: "A 601 / 607, Mangal Aarambh, Kora Kendra, Near McDonald's, Borivali (W), Mumbai 400092", mob: '+91 92233 91080', tel: '022 6725 9601-05', fax: '022 6725 9600', email: 'sales@pnpind.com' },
    catalogue: '/Tie 2026 New .pdf',
    catalogue2: ['/Tie Scres 2026.pdf', 'Screw Range'],
    single: {
      name: 'TIE Self Drilling Screws',
      short: 'Drilling, tapping & drilling crest',
      desc: 'Self drilling roofing screws with EPDM washer, HWH 14 & 24 TPI, zinc and Xylan coating and an SS 304 head option that stays rust free for life. Available in drilling, tapping and drilling crest types.',
      images: [
        ['tie-range-sheet', 'TIE self drilling screw range sheet'],
        ['tie-finishes', 'TIE screws in four finishes'],
        ['tie-sizes', 'TIE screws in 25 to 65 mm, yellow zinc and SS'],
        ['tie-cat-photo-1', 'TIE self drilling screws in six lengths'],
        ['tie-cat-photo-2', 'Close-up of TIE hex washer heads'],
        ['tie-cat-photo-3', 'Row of long TIE drilling screws'],
        ['tie-mixed', 'Mixed set of zinc and silver TIE screws'],
        ['tie-screws', 'Set of TIE screws with EPDM washers'],
        ['tie-closeup', 'Row of zinc coated TIE roofing screws'],
        ['tie-heads', 'TIE hex washer head screws in three sizes'],
        ['tie-anatomy', 'TIE screw parts diagram'],
      ],
      // Every screw on the range sheet: [length in mm, finish code, new arrival].
      series: [
        { type: 'Drilling', name: 'No.3 12 x 24 (C)', screws: [[25, 'YZ'], [35, 'YZ'], [45, 'YZ'], [55, 'YZ'], [65, 'YZ']] },
        { type: 'Drilling', name: 'No.3 12 x 14 (C)', isNew: true, screws: [[25, 'XY'], [35, 'XY'], [55, 'XY']] },
        { type: 'Tapping', name: 'Type 17', screws: [[20, 'YZ'], [25, 'YZ'], [25, 'SS']] },
        { type: 'Drilling', name: 'No.3 14 x 12 (C)', screws: [[25, 'SZ'], [55, 'SZ'], [65, 'SZ']] },
        { type: 'Drilling', name: 'No.3 12 x 24 (C)', screws: [[25, 'SS'], [35, 'SS'], [55, 'SS'], [65, 'SS']] },
        { type: 'Drilling', name: 'No.5 14 x 12 (C)', screws: [[32, 'YZ'], [65, 'YZ'], [32, 'SS'], [65, 'SS']] },
        { type: 'Drilling Crest', name: 'No.3 14 x 12-14 (B)', screws: [[55, 'SZ'], [65, 'YZ'], [75, 'YZ'], [90, 'YZ'], [90, 'XY', true]] },
      ],
    },
    products: [
    ],
  },
  {
    // PNP's own branded products on one page. Sources: pnpind.com (product pages, About Us),
    // PNP diary 2019 brochure, PNP Racking 2026.pdf (newest, wins on racking) and the client email (market share).
    id: 'pnp',
    logos: ['/assets/businesses/logo-pnp.webp'],
    name: 'PNP',
    full: 'The Trendsetters',
    product: 'Coated Fabric, Racking & More',
    badges: ['No. 1 brand for coated cloth', '25% market share in coated fabric', 'First in the world to introduce branded luggage fabric', "BMC order specified 'PNP' fabric (2009)"],
    tagline: 'Spirit to lead and undying thirst for innovation makes us the Trendsetters.',
    intro: 'PNP Polytex was incorporated in 2001. In 2002 we introduced coated cloth to the Indian market and quickly became leader in the luggage fabric industry. Only PNP brands coated cloth fabric, under the brand names "PNP" and "Aasutex", and is responsible for converting the unorganised coated cloth market into an organised market.',
    hero: 'fabric-hero', heroAlt: 'Colourful luggage made with PNP coated fabric',
    // Brand page highlights (PnpBrandPage.jsx). Text from pnpind.com, the PNP diary 2019 and PNP Racking 2026.
    // Application photos in apps/ (tent, umbrellas, seat-belt, shoe-belts) are CC0 / public domain from Wikimedia Commons.
    page: {
      fabric: {
        image: ['fabric-hero', 'Luggage and coated fabric'],
        brands: [['PNP', '/assets/businesses/logo-pnp.webp'], ['Aasutex', '/assets/businesses/logo-aasutex.webp']],
        subBrands: ['Premium', 'Ruby', 'Gold', 'A-One', 'Sapphire', 'Eco'],
        denier: ['58 x 58', '1800 x 1800'],
        weaves: ['Oxford', 'Twill', 'Strips', 'Check', 'Dobby', 'Jacquard', 'Rib', 'Cord'],
        coatings: ['PVC', 'Rubber', 'PU', 'ULY', 'Breathable', 'WR / WP', 'Sponge'],
        highlights: [
          'First company in the world to introduce branded luggage fabric',
          'More than a hundred varieties, each in many different colours',
          'Fair and transparent sales policies',
          'Guaranteed quality and timely delivery',
        ],
        apps: [['Luggage', 'fabric-luggage'], ['Backpacks', 'fabric-backpack'], ['Raincoats & Windcheaters', 'fabric-raincoat'], ['Tents', 'apps/tent'], ['Umbrellas', 'apps/umbrellas']],
      },
      racking: {
        text: 'Our racking system makes the warehouse space effective and efficient, giving an organised, well planned look.',
        images: [['rack-hero', 'PNP pallet racking loaded with goods'], ['rack-aisle', 'Aisle between tall pallet racks'], ['rack-floor', 'Pallet racking on a green warehouse floor'], ['rack-stock', 'Racks stocked with cartons']],
        pallet: [
          ['100%', 'Retrieval access', 'The most popular racking, with good retrieval efficiency'],
          ['33–40%', 'Of floor space', 'The ideal solution where space is limited'],
          ['FIFO', 'First in, first out', 'Wide or narrow aisle format'],
          ['Variety', 'Of articles', 'Adapts to a variety of articles and low quantities'],
          ['Heavy', 'Articles', 'Works with pallets and forklifts'],
        ],
        specs: [
          ['Upright', '17 bend', '10+ tons capacity', '75 x 75 x 2.0t'],
          ['Beam', '15 bend', '3+ tons capacity', '40 x 105 x 2.0t, double-C'],
          ['Standard Bay', '10 x 8 x 4 ft', 'Upright x beam x depth', 'Available in different sizes'],
        ],
        features: ['Flexibility in slab height and number of slabs', '100 micron powder coating', 'Easy to assemble and dismantle', 'Tailor made to suit every requirement'],
        benefits: ['Easy physical stock taking', 'Excellent inventory management', 'Easy identification of non moving stocks', 'Reduces cost by using every inch of space', 'Reduces handling costs and stock damage charges'],
      },
      webbings: {
        text: "Made from the world's best quality high tenacity yarn imported from Taiwan. Available in different sizes, weaving patterns and colours.",
        image: ['webbing-hero', 'Rolls of colourful PNP webbing'],
        features: ['Different fixing options available', 'Printed or stitched logo or message', 'Chemical or fuel resistance', 'Electrical conductivity', 'Electrical insulation', 'Resistance to UV'],
        apps: [['Seat Belts', 'apps/seat-belt'], ['Helmet Belts', 'webbing-helmet'], ['Shoe Wear Belts', 'apps/shoe-belts'], ['Backpacks, Rucksacks & Luggage Belts', 'webbing-bag']],
      },
      labels: {
        text: "We are associated with one of the world's best label tape manufacturers, with various kinds of label tapes like nylon taffeta, polyester taffeta and polyester satin, in various qualities and different sizes.",
        images: [['label-hero', 'Roll of satin label tape'], ['label-tags', 'Garment labels on a coat'], ['label-print', 'Printed label tapes']],
        varieties: ['Nylon Taffeta', 'Polyester Taffeta', 'Polyester Satin Slitted, single / double face', 'Polyester Satin Woven Edge, single / double face'],
        uses: ['Towel industry', 'Package industry', 'Frills for garment & fashion industry', 'Printing of labels for garment industry', 'Badges in schools, events & fashion shows'],
        features: ['Available in all sizes', 'Uniform prices all across India', 'Readily available all across India'],
      },
      furniture: {
        image: ['pnp-oa-office', 'Office fitted with PNP desks, cabinets and chairs'],
        features: ['Portable', 'Powder coated', 'Attractive look', 'Smoothness', 'Easy to assemble & disassemble'],
        range: [
          ['Cabinets', 'pnp-oa-cabinets', 'Mobile Cabinet · Hanging Cabinet · Keyboard Tray'],
          ['Storage', 'pnp-oa-storage', 'Cabinet 3 Drawer · Cabinet 21 Drawer · Filing Cabinet-Glass'],
          ['Tables', 'pnp-oa-tables', 'Side Table · Conference Table · Executive Table'],
        ],
      },
      trendsetters: [
        'First company to introduce branded luggage fabric',
        'First company to emboss the brand name on coated fabric',
        'First company to work with crystal clear policies in an unorganised sector',
        'Only company in coated cloth business with its sales network all across India',
        'First company to introduce heavy duty warehouse rack: upright with 17 bends and beam with 15 bends',
      ],
    },
    products: [
      {
        id: 'coated-fabric',
        name: 'Coated Fabric',
        short: 'Nylon & polyester, 58 x 58 to 1800 x 1800 denier',
        desc: 'Nylon and polyester based fabrics of all deniers from 58 x 58 to 1800 x 1800, in all types of weaving patterns and various kinds of coating. Sold under the PNP and Aasutex brands, in more than a hundred varieties, each in many different colours.',
        images: [
          ['fabric-hero', 'Luggage and fabric made with PNP coated fabric'],
          ['fabric-luggage', 'Trolley bags and backpacks in coated fabric'],
          ['fabric-backpack', 'Hiker with a blue backpack above a fjord'],
          ['fabric-raincoat', 'Woman in a blue raincoat'],
        ],
        features: [
          'First company in the world to introduce branded luggage fabric', 'More than a hundred varieties',
          'Each variety in many different colours', 'Fair & transparent sales policies', 'Guaranteed quality & timely delivery',
        ],
        specGroups: [
          ['Fabric', [['Base', 'Nylon & polyester'], ['Denier', '58 x 58 to 1800 x 1800'], ['Varieties', '100+, each in many colours']]],
          ['Brands', [['Brands', 'PNP · Aasutex'], ['Sub brands', 'Premium · Ruby · Gold · A-One · Sapphire · Eco']]],
        ],
        blocks: [
          ['Weaving Patterns', ['Oxford', 'Twill', 'Strips', 'Check', 'Dobby', 'Jacquard', 'Rib', 'Cord']],
          ['Coatings', ['PVC', 'Rubber', 'PU', 'ULY', 'Breathable', 'WR / WP', 'Sponge']],
        ],
        apps: [['Luggage', 'fabric-luggage'], ['Backpacks', 'fabric-backpack'], ['Raincoats & Windcheaters', 'fabric-raincoat'], ['Tents', 'apps/tent'], ['Umbrellas', 'apps/umbrellas']],
      },
      {
        id: 'warehouse-racking',
        name: 'Warehouse Racking System',
        short: 'Ideas that create space',
        desc: 'Our racking system makes warehouse space effective and efficient, giving an organised, well planned look. Heavy duty pallet racking is the most popular racking: it gives 100% retrieval access, adapts to a variety of articles and is the ideal solution where space is limited, taking up 33% to 40% of floor space. Available in different sizes.',
        images: [
          ['rack-hero', 'PNP pallet racking loaded with goods'],
          ['rack-aisle', 'Long aisle between tall pallet racks'],
          ['rack-floor', 'Pallet racking on a green warehouse floor'],
          ['rack-stock', 'Racks stocked with cartons'],
        ],
        features: ['Flexibility in slab height & number of slabs', '100 micron powder coating', 'Easy to assemble & dismantle', 'Tailor made to suit every requirement'],
        blocks: [
          ['Heavy Duty Pallet Racking', [
            'The most popular racking, with 100% retrieval access and good retrieval efficiency',
            'Adapts to a variety of articles and low quantities',
            'The ideal solution where space is limited, taking up 33% to 40% of floor space',
            'Wide or narrow aisle format, with first in, first out',
            'Works with pallets and forklifts, for heavy articles',
          ]],
          ['Benefits', [
            'Easy physical stock taking',
            'Excellent inventory management',
            'Easy identification of non moving stocks',
            'Reduces cost by using every inch of space',
            'Reduces handling costs and stock damage charges',
          ]],
        ],
        specGroups: [
          ['Standard Bay', [['Upright', '10 ft'], ['Beam', '8 ft'], ['Depth', '4 ft']]],
          ['Upright UP 177575', [['Profile', '75 x 75 x 2.0t'], ['Bends', '17'], ['Capacity', '10+ tons'], ['Standard colour', 'Blue']]],
          ['Beam BM 1540105', [['Profile', '40 x 105 x 2.0t'], ['Configuration', 'Double-C'], ['Bends', '15'], ['Capacity', '3+ tons'], ['Standard colour', 'Green']]],
        ],
        catalogues: [['PNP Warehouse Racking 2026', '/PNP Racking 2026.pdf']],
      },
      {
        id: 'webbings',
        name: 'Webbings',
        short: 'High tenacity yarn imported from Taiwan',
        desc: "PNP's webbings are made from the world's best quality high tenacity yarn imported from Taiwan. Available in different sizes, weaving patterns and colours.",
        images: [
          ['webbing-hero', 'Rolls of colourful webbing'],
          ['webbing-rolls', 'Coiled colourful webbing straps'],
          ['webbing-helmet', 'Helmet with webbing straps'],
          ['webbing-bag', 'Bag with webbing straps'],
        ],
        features: ['Different fixing options available', 'Printed or stitched logo or message', 'Chemical or fuel resistance', 'Electrical conductivity', 'Electrical insulation', 'Resistance to UV'],
        apps: [['Seat Belts', 'apps/seat-belt'], ['Helmet Belts', 'webbing-helmet'], ['Shoe Wear Belts', 'apps/shoe-belts'], ['Backpacks, Rucksacks & Luggage Belts', 'webbing-bag']],
      },
      {
        id: 'label-tapes',
        name: 'Label Tapes',
        short: 'Nylon taffeta, polyester taffeta & satin',
        desc: "We are associated with one of the world's best label tape manufacturers. PNP offers various kinds of label tapes like nylon taffeta, polyester taffeta and polyester satin, in various qualities and different sizes.",
        images: [
          ['label-hero', 'Roll of satin label tape'],
          ['label-rolls', 'Rolls of white and black label tape'],
          ['label-print', 'Printed label tapes'],
          ['label-tags', 'Garment labels on a coat'],
        ],
        features: ['Available in all sizes', 'Uniform prices all across India', 'Readily available all across India'],
        chipGroups: [
          ['Varieties', ['Nylon Taffeta', 'Polyester Taffeta', 'Polyester Satin Slitted, Single / Double Face', 'Polyester Satin Woven Edge, Single / Double Face']],
          ['Used In', ['Towel Industry', 'Package Industry', 'Frills for Garment & Fashion', 'Garment Label Printing', 'Badges for Schools, Events & Fashion Shows']],
        ],
      },
      {
        id: 'office-furniture',
        name: 'Office Automation Furniture',
        short: 'Powder coated cabinets & tables',
        desc: 'Portable, powder coated office automation furniture with an attractive look and smooth finish, easy to assemble and disassemble.',
        // Photos cut from the PNP diary 2019 furniture page, the only client source for this range.
        images: [
          ['pnp-oa-office', 'Office fitted with PNP desks, cabinets and chairs'],
          ['pnp-oa-cabinets', 'Mobile cabinet, hanging cabinet and keyboard tray'],
          ['pnp-oa-storage', 'Glass cabinet, 21 drawer cabinet and 3 drawer filing cabinet'],
          ['pnp-oa-tables', 'Side table, conference table and executive table'],
        ],
        features: ['Portable', 'Powder coated', 'Attractive look', 'Smoothness', 'Easy to assemble & disassemble'],
        rangeGroups: [
          ['Cabinets', 'pnp-oa-cabinets', ['Mobile Cabinet', 'Hanging Cabinet', 'Keyboard Tray']],
          ['Storage', 'pnp-oa-storage', ['Cabinet 3 Drawer', 'Cabinet 21 Drawer', 'Filing Cabinet-Glass']],
          ['Tables', 'pnp-oa-tables', ['Side Table', 'Conference Table', 'Executive Table']],
        ],
      },
    ],
  },
  {
    id: 'synwood',
    logos: ['/assets/businesses/logo-synwood.webp'],
    name: 'Synwood',
    full: 'Revolution Around You',
    product: 'Synthetic Wood & PVC Construction Bars',
    badges: ['10% market share in India', '100% recyclable', 'SGS certified'],
    tagline: 'Looks like wood, feels like wood, lasts longer than wood.',
    intro: 'Synwood is our synthetic wood brand, made by foaming PVC with ultra high end technology and twin screw foam extrusion. Designed for interior and exterior construction, it serves both function and fashion, and is 100% recyclable.',
    hero: 'synwood-interior', heroAlt: 'Living room with Synwood wall panels and furniture',
    features: synwoodFeatures,
    characteristics, compare: synwoodVsPlywood, tools, clients,
    // SGS Taiwan test reports printed in the Synwood exterior brochure (tests on Nan Ya board / decking).
    certifications: {
      logo: '/assets/trading/sw/sgs-logo.webp', body: 'SGS Taiwan Ltd.',
      reports: [
        { title: 'Formaldehyde Emission', result: 'Not detected (N.D.)', detail: 'Tested with reference to CNS 1349 by UV/VIS spectrophotometer. Both samples were below the 0.0290 mg/L detection limit.', no: 'UG/2011/90151A-01', date: '3 Oct 2011', sample: 'Nan Ya Board' },
        { title: 'Phthalates Content', result: 'Not detected (N.D.)', detail: 'Six phthalates (BBP, DBP, DEHP, DIDP, DINP, DNOP) tested with reference to EN 14372 by GC/MS. All results were not detected.', no: 'KA/2012/10092', date: '9 Jan 2012', sample: 'Nan Ya Board' },
        { title: 'Anti-Flaming Test', result: 'Meets CNS 7614 Grade 1', detail: 'Remaining flame time 0.0 sec, embers time 0.0 sec and 4.6 cm carbonization length, within the CNS 7614 (1994) Grade 1 anti-flaming limits.', no: 'TB-12-00135XA', date: '13 Jan 2012', sample: 'Nan Ya Decking' },
      ],
    },
    catalogueList: synwoodCatalogues,
    products: synwoodProducts,
  },
  {
    id: 'haowood',
    logos: ['/assets/businesses/logo-haowood.webp'],
    name: 'Haowood',
    full: 'Warm Decors Forever',
    product: 'PVC Wall & Ceiling Panels',
    badges: ['Interior range'],
    tagline: 'PVC wall and ceiling panels for warm interiors.',
    intro: 'Haowood is our interior range of PVC wall and ceiling panels, in flat, 8 groove, 9 fluted, double groove and self printed designs. Every panel comes with matching C, L and H profiles.',
    hero: 'sw/pvc-8-groove-wall-panel-0', heroAlt: 'Haowood 8 groove wooden wall panel', card: 'sw/haowood-room',
    features: ['Termite Proof', 'Flame Retardant', 'Water Proof', 'Easy Install', 'Easily Recyclable', 'Chemical Proof', 'Sound Proof', 'Environment Friendly', 'Maintenance Free'],
    catalogueList: haowoodCatalogues,
    products: haowoodProducts,
  },
];

// Distribution: Jaquar Lighting. Source: the Jaquar catalogue (/Jaquar 2062.pdf, co-branded with PNP Polytex) and the client
// email (area). The catalogue has no specs or model names, so product copy only describes what each catalogue page shows.
// Kept out of `brands` so it never shows among the own brands.
const jq = (id, n, alt) => Array.from({ length: n }, (_, i) => [`jaquar/${id}-${i + 1}`, n > 1 ? `${alt} (${i + 1} of ${n})` : alt]);
const inCatalogue = 'In the Catalogue';

export const jaquar = {
  id: 'jaquar',
  logos: ['/assets/trading/jaquar/logo.webp'],
  name: 'Jaquar Lighting',
  region: 'Mumbai · Bandra to Virar',
  intro: 'PNP Polytex distributes Jaquar Lighting across Mumbai, from Bandra to Virar: indoor, outdoor, industrial and decorative lighting, along with Jaquar switches.',
  catalogue: '/Jaquar 2062.pdf',
  site: 'https://www.jaquar.com/',
  contact: {
    company: 'PNP Polytex Pvt. Ltd.',
    address: 'A 601-607, Mangal Aarambh, Kora Kendra, Borivali (W), Mumbai – 400 092',
    tel: ['6725 9601-05', '4014 0181-88'],
    email: 'sales@pnpind.com',
  },
  groups: ['Indoor', 'Industrial', 'Outdoor', 'Decorative', 'Switches'],
  products: [
    {
      id: 'surface-light', group: 'Indoor', name: 'Surface Light', short: 'Surface spots & surface panels',
      desc: 'Ceiling-mounted Jaquar lights that need no false ceiling. The range covers surface spotlights in black, gold and copper finishes, plus round and square surface panels in white.',
      images: jq('surface-light', 1, 'Jaquar surface spotlights and round and square surface panels'),
      chips: ['Surface Spotlights', 'Adjustable Spotlights', 'Round Surface Panels', 'Square Surface Panels'], chipsLabel: inCatalogue,
    },
    {
      id: 'hanging-light', group: 'Indoor', name: 'Hanging Light', short: 'Round, ring & linear pendants',
      desc: 'Jaquar pendant lights hung on suspension wires: a round drum pendant, an open ring pendant and a long linear pendant, all in black.',
      images: jq('hanging-light', 1, 'Jaquar round, ring and linear pendant lights'),
      chips: ['Round Pendant', 'Ring Pendant', 'Linear Pendant'], chipsLabel: inCatalogue,
    },
    {
      id: 'recessed-light', group: 'Indoor', name: 'Recessed Light', short: 'Downlights, spots & panels',
      desc: "Jaquar's largest category, across three catalogue pages. Recessed COB downlights and adjustable spots in white, black, chrome and gold reflectors, slim round and square panels, and flat panels for office ceilings.",
      images: jq('recessed-light', 3, 'Jaquar recessed downlights, spotlights and panels'),
      chips: ['COB Downlights', 'Adjustable Spotlights', 'Twin Spotlights', 'Slim Round Panels', 'Slim Square Panels', 'Flat Panels'], chipsLabel: inCatalogue,
    },
    {
      id: 'industrial-light', group: 'Industrial', name: 'Industrial Light', short: 'High-bay lighting',
      desc: 'Jaquar high-bay lights for warehouses and factory sheds, shown in the catalogue in round and bracket-mounted versions.',
      images: jq('industrial-light', 1, 'Jaquar round high-bay industrial lights'),
      chips: ['Round High-Bay', 'Bracket-Mounted High-Bay'], chipsLabel: inCatalogue,
    },
    {
      id: 'track-light', group: 'Indoor', name: 'Track Light', short: 'Track spots & bar systems',
      desc: 'Adjustable spotlights that mount on a track, so light can be moved and aimed where it is needed. Single track spots and suspended three-spot bar systems, in black and white.',
      images: jq('track-light', 1, 'Jaquar track spotlights and suspended track bars in black and white'),
      chips: ['Track Spotlights', 'Suspended Track Bars', 'Black', 'White'], chipsLabel: inCatalogue,
    },
    {
      id: 'bulbs-battens', group: 'Indoor', name: 'Bulbs & Battens', short: 'LED bulbs & battens',
      desc: 'Everyday Jaquar lighting: LED bulbs in standard and high-wattage shapes, and slim LED battens.',
      images: jq('bulbs-battens', 1, 'Jaquar LED bulbs and LED battens'),
      chips: ['LED Bulbs', 'High-Wattage LED Bulb', 'LED Battens'], chipsLabel: inCatalogue,
    },
    {
      id: 'linear-light', group: 'Indoor', name: 'Linear Light', short: 'Flexible neon & linear profiles',
      desc: 'Continuous lines of light. Flexible neon strips that can be bent into shapes, and straight linear profiles for coves and ceilings.',
      images: jq('linear-light', 1, 'Jaquar flexible neon strips and linear light profiles'),
      chips: ['Flexible Neon Strip', 'Linear Profiles'], chipsLabel: inCatalogue,
    },
    {
      id: 'flood-light', group: 'Industrial', name: 'Flood Light', short: 'Floods, spikes & wall washers',
      desc: 'Jaquar outdoor flood lighting for facades, gardens and open areas: spike spotlights, RGB colour floods, a linear wall washer, and standard flood lights.',
      images: jq('flood-light', 1, 'Jaquar spike spotlights, RGB flood lights, wall washer and flood lights'),
      chips: ['Spike Spotlights', 'RGB Flood Lights', 'Wall Washer', 'Flood Lights', 'High-Bay'], chipsLabel: inCatalogue,
    },
    {
      id: 'outdoor-surface-light', group: 'Outdoor', name: 'Outdoor Surface Light', short: 'Outdoor wall lights & lanterns',
      desc: 'Wall-mounted Jaquar lights for building exteriors, entrances and verandas: modern cube and up-down lights, round and oval bulkheads, and classic lanterns, in dark grey and black.',
      images: jq('outdoor-surface-light', 1, 'Jaquar outdoor wall lights, bulkheads and lanterns'),
      chips: ['Up-Down Wall Lights', 'Cube Wall Lights', 'Bulkheads', 'Lanterns'], chipsLabel: inCatalogue,
    },
    {
      id: 'pole-light', group: 'Outdoor', name: 'Pole Light', short: 'Garden & street poles',
      desc: 'Jaquar pole lights for roads, campuses and gardens, from slim modern poles to classic lantern poles, in single-arm and twin-arm designs.',
      images: jq('pole-light', 1, 'Jaquar modern and lantern pole lights, single and twin arm'),
      chips: ['Modern Poles', 'Lantern Poles', 'Single-Arm', 'Twin-Arm'], chipsLabel: inCatalogue,
    },
    {
      id: 'bollard-light', group: 'Outdoor', name: 'Bollard Light', short: 'Pathway & garden bollards',
      desc: 'Low Jaquar bollard lights that mark pathways, driveways and garden edges, in modern cylinder designs and classic lantern tops.',
      images: jq('bollard-light', 1, 'Jaquar modern, louvred and lantern bollard lights'),
      chips: ['Modern Bollards', 'Louvred Bollards', 'Lantern Bollards'], chipsLabel: inCatalogue,
    },
    {
      id: 'post-top-light', group: 'Outdoor', name: 'Post Top Light', short: 'Post-top lanterns & area lights',
      desc: 'Jaquar lights that sit on top of a post: modern area lights and classic lanterns for gates, compounds and gardens.',
      images: jq('post-top-light', 1, 'Jaquar modern post-top lights and classic lanterns'),
      chips: ['Modern Post Tops', 'Classic Lanterns', 'Wall-Arm Lantern'], chipsLabel: inCatalogue,
    },
    {
      id: 'floor-recessed-light', group: 'Outdoor', name: 'Floor Recessed Light', short: 'In-ground uplights',
      desc: 'Jaquar lights set into the ground to light walls, trees and walkways from below, in round single and multi-LED versions.',
      images: jq('floor-recessed-light', 1, 'Jaquar in-ground floor recessed uplights'),
      chips: ['In-Ground Uplights', 'Multi-LED Uplights', 'Directional Uplights'], chipsLabel: inCatalogue,
    },
    {
      id: 'wall-recessed-light', group: 'Outdoor', name: 'Wall Recessed Light', short: 'Step & brick lights',
      desc: 'Jaquar lights set into walls and stair risers, giving low, glare-free light along steps and corridors. Available in black and white.',
      images: jq('wall-recessed-light', 1, 'Jaquar wall recessed step and brick lights in black and white'),
      chips: ['Step Lights', 'Brick Lights', 'Wall Recessed Spot'], chipsLabel: inCatalogue,
    },
    {
      id: 'chandeliers', group: 'Decorative', name: 'Chandeliers', short: 'Crystal, tiered & modern',
      desc: 'Jaquar decorative chandeliers across three catalogue pages: tiered crystal and gold chandeliers for lobbies and halls, ring and spiral crystal designs, and modern gold pendants.',
      images: jq('chandeliers', 3, 'Jaquar crystal, gold and modern chandeliers'),
      chips: ['Tiered Crystal Chandeliers', 'Gold Chandeliers', 'Ring Chandeliers', 'Spiral Crystal', 'Modern Pendants'], chipsLabel: inCatalogue,
    },
    {
      id: 'switches', group: 'Switches', name: 'Switches', short: 'Karbonic · Crystal · Allure',
      desc: 'Switch to better living. Jaquar modular switches and sockets in three ranges, in finishes from black glass to champagne and grey.',
      images: jq('switches', 2, 'Jaquar modular switches and sockets: Karbonic, Crystal and Allure ranges'),
      chips: ['Karbonic', 'Crystal', 'Allure', 'Socket'], chipsLabel: 'Ranges',
    },
  ],
};

export const findBrand = (id) => [...brands, jaquar].find((b) => b.id === id);
export const findProduct = (brand, id) => brand?.products.find((p) => p.id === id);
