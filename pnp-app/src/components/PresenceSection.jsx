import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, MapPin, Phone, Mail, MapPinned, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';

// The locations data
const locations = [
  { 
    name: "Mumbai (Head Office)", coordinates: [19.221, 72.852], type: "hq", color: "#ed1c23",
    phone: "022-40140181-88", email: "sales@pnpind.com",
    address: "A 601-607, Mangal Aarambh, Kora Kendra, Near Mc Donald's, Mumbai – 400 092, Maharashtra"
  },
  { 
    name: "Bhilad (Plant)", coordinates: [20.275, 72.887], type: "plant", color: "#d97706",
    phone: "9223391019", email: "yarn@pnpind.com",
    address: "Survey No. 237/3, Paiki (2), Near Bhilad Railway Station, Village – Sarigam, Tal – Umargam – 396105"
  },
  { 
    name: "Surat", coordinates: [21.170, 72.831], type: "branch", color: "#ed1c23",
    phone: "0261 236 5271, 230 2014, M: 92769 09040", email: "surat@pnpind.com",
    address: "3008, World Trade Center, Ring Road, Surat – 395 002"
  },
  { 
    name: "New Delhi", coordinates: [28.694, 77.153], type: "branch", color: "#ed1c23",
    phone: "011 2735 1047, M: 92233 91088 / 92233 91091", email: "delhi@pnpind.com",
    address: "907, P P Tower, Netaji Subhash Place, Pitampura, Delhi – 110 034"
  },
  { 
    name: "Kanpur", coordinates: [26.424, 80.325], type: "branch", color: "#ed1c23",
    phone: "0512 261 3375, M: 92355 05442", email: "kanpur@pnpind.com",
    address: "128/120, K – Block, Kedwai Nagar, Nr. Brihaspati Mahila College, Kanpur – 208 011"
  },
  { 
    name: "Kolkata", coordinates: [22.543, 88.371], type: "hub", color: "#ed1c23",
    phone: "8240583372", email: "kolkata@pnpind.com",
    address: "67, Colotoola Street, Opp - Bakshi Dawakhana, Kolkata - 700073, West Bengal"
  },
  { 
    name: "Bengaluru", coordinates: [12.961, 77.594], type: "branch", color: "#ed1c23",
    phone: "080 2211 2449/51/60, M: 92434 21036", email: "bangalore@pnpind.com",
    address: "207, Money Chambers, 6 K H Road, Bangalore – 560 027"
  },
  { 
    name: "Chennai", coordinates: [13.126, 80.266], type: "branch", color: "#ed1c23",
    phone: "92821 34421", email: "chennai@pnpind.com",
    address: "No.3 CRP Nagar, Opp Don Bosco School, Pulli Lane, Madhavaram, Redhills High Road, Vadakarai, Chennai - 600052"
  },
  { 
    name: "Hyderabad", coordinates: [17.390, 78.478], type: "branch", color: "#ed1c23",
    phone: "0484 239 7064/67, M: 9246201036", email: "hyderabad@pnpind.com",
    address: "308, Lala-2, Oasis Plaza, 4-1-898, Tilak Road, Abids, Hyderabad - 500 001"
  },
  { 
    name: "Kochi", coordinates: [9.999, 76.280], type: "branch", color: "#ed1c23",
    phone: "0484-4073817, M: 9223391050/52/53/54", email: "kochin@pnpind.com",
    address: "Door No. 131/42/948 A, JJD Complex, Cemetery JN, Chitoor Road, Cochin – 682018"
  },
  { 
    name: "Taipei, Taiwan", coordinates: [25.033, 121.565], type: "global", color: "#2563eb",
    phone: "+886 22278 1531", email: "aasu@ms19.hinet.net", fax: "+886 22728 5991",
    address: "8f-3, 171, Sung Teh Road, Taipei, R.O.C."
  }
];

// Create the custom HTML marker that exactly matches the glowing style
const createCustomIcon = (color) => {
  return L.divIcon({
    className: 'bg-transparent border-none', // Override default leaflet styles
    html: `
      <div class="relative flex flex-col items-center justify-center w-16 h-16 group">
        <!-- Giant pulsing background circle -->
        <div class="absolute inset-0 rounded-full animate-ping opacity-20" style="background-color: ${color}"></div>
        <!-- Static large faint circle -->
        <div class="absolute inset-2 rounded-full opacity-30" style="background-color: ${color}"></div>
        
        <!-- Center Map Pin Marker -->
        <div class="relative z-10 flex flex-col items-center transform transition-transform group-hover:scale-110 duration-300">
          <!-- The circle head -->
          <div class="w-5 h-5 rounded-full shadow-sm flex items-center justify-center relative" style="background-color: ${color}">
            <!-- White ring inside -->
            <div class="w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center">
               <!-- Small dot inside -->
               <div class="w-1 h-1 rounded-full" style="background-color: ${color}"></div>
            </div>
          </div>
          <!-- Pin tail sticking down to the actual coordinate -->
          <div class="w-0.5 h-2 -mt-0.5" style="background-color: ${color}"></div>
          <div class="w-1.5 h-1.5 rounded-full -mt-0.5 shadow-sm" style="background-color: ${color}"></div>
        </div>
      </div>
    `,
    iconSize: [64, 64],
    iconAnchor: [32, 46], // Point the anchor exactly at the bottom dot
    popupAnchor: [0, -32]
  });
};

// Component to programmatically update map view and open popup after fly
function MapController({ selectedLoc, markerRefs }) {
  const map = useMap();
  useEffect(() => {
    if (selectedLoc) {
      const target = locations.find(l => l.name === selectedLoc);
      if (target) {
        // Offset latitude south so the pin sits lower, leaving room for the popup above
        const offsetLat = target.coordinates[0] + 0.04; // push map center slightly north of pin
        map.flyTo([offsetLat, target.coordinates[1]], 10, {
          animate: true,
          duration: 1.2
        });
        // Open popup after the fly animation finishes
        map.once('moveend', () => {
          if (markerRefs.current[selectedLoc]) {
            markerRefs.current[selectedLoc].openPopup();
          }
        });
      }
    } else {
      // Reset view to Pan India
      map.flyTo([21.0, 78.0], 4.5, {
        animate: true,
        duration: 1.5
      });
    }
  }, [selectedLoc, map, markerRefs]);
  return null;
}

export default function PresenceSection() {
  const [hoveredLoc, setHoveredLoc] = useState(null);
  const [selectedLoc, setSelectedLoc] = useState(null);
  const markerRefs = useRef({});

  
  return (
    <section className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200" id="presence">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Narrative Col */}
          <motion.div 
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-[#ed1c23]"></div>
              <span className="text-sm font-semibold tracking-[0.2em] text-[#ed1c23] uppercase">
                Our Presence
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
              Across India & Globally Closer <span className="text-slate-400">to You.</span>
            </h2>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2.5">
                <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India" className="w-10 h-7 object-cover rounded shadow-sm border border-slate-200" />
                <span className="font-medium text-slate-700 text-base">India</span>
              </div>
              <div className="w-px h-6 bg-slate-200"></div>
              <div className="flex items-center gap-2.5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/330px-Flag_of_the_Republic_of_China.svg.webp" alt="Taiwan" className="w-10 h-7 object-cover rounded shadow-sm border border-slate-200" />
                <span className="font-medium text-slate-700 text-base">Taiwan</span>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                to="/contact" 
                className="px-8 py-3.5 bg-[#ed1c23] hover:bg-[#c9141a] text-white font-medium text-sm rounded-lg inline-flex items-center gap-2 shadow-lg shadow-red-600/20 transition-all hover:scale-105"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Interactive Leaflet Map Col */}
          <motion.div 
            className="lg:col-span-7 relative flex justify-center items-center h-[500px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 z-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            {selectedLoc && (
              <button 
                onClick={() => setSelectedLoc(null)}
                className="absolute top-4 right-4 z-[400] bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-bold text-slate-700 shadow-md border border-slate-200 hover:bg-slate-100 transition-all cursor-pointer"
              >
                Reset Map View
              </button>
            )}
            
            <MapContainer 
              center={[21.0, 78.0]} 
              zoom={4.5} 
              scrollWheelZoom={false}
              className="w-full h-full z-0"
            >
              {/* Google Maps Base Layer */}
              <TileLayer
                attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
                url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                maxZoom={20}
              />
              
              <MapController selectedLoc={selectedLoc} markerRefs={markerRefs} />

              {locations.map((loc, i) => (
                <Marker 
                  key={i} 
                  ref={(r) => { markerRefs.current[loc.name] = r; }}
                  position={loc.coordinates}
                  icon={createCustomIcon(loc.color)}
                  eventHandlers={{
                    mouseover: () => {
                      setHoveredLoc(loc.name);
                    },
                    mouseout: () => {
                      setHoveredLoc(null);
                    },
                    click: () => {
                      setSelectedLoc(loc.name === selectedLoc ? null : loc.name);
                    }
                  }}
                >
                  <Popup className="custom-leaflet-popup" minWidth={260} maxWidth={320} autoPan={true} autoPanPadding={[20, 20]}>
                    <div className="p-3 space-y-3">
                      {/* Header */}
                      <div className="bg-[#ed1c23] -mx-3 -mt-3 px-4 py-3 rounded-t-xl">
                        <div className="font-bold text-white text-base">{loc.name}</div>
                        <div className="text-[10px] font-bold text-white/70 tracking-wider mt-0.5">{loc.type.toUpperCase()}</div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-2.5">
                        <Phone className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-[10px] font-bold text-[#ed1c23] uppercase">Call Us</div>
                          <a href={`tel:${loc.phone.split(',')[0].replace(/\s/g,'')}`} className="text-xs text-slate-700 hover:text-[#ed1c23] transition-colors">{loc.phone}</a>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-2.5">
                        <Mail className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-[10px] font-bold text-[#ed1c23] uppercase">Mail Us</div>
                          <a href={`mailto:${loc.email}`} className="text-xs text-[#4285F4] hover:underline">{loc.email}</a>
                        </div>
                      </div>

                      {/* Fax (only for Taipei) */}
                      {loc.fax && (
                        <div className="flex items-start gap-2.5">
                          <Printer className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                          <div>
                            <div className="text-[10px] font-bold text-[#ed1c23] uppercase">Fax</div>
                            <div className="text-xs text-slate-700">{loc.fax}</div>
                          </div>
                        </div>
                      )}

                      {/* Address */}
                      <div className="flex items-start gap-2.5">
                        <MapPinned className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-[10px] font-bold text-[#ed1c23] uppercase">Address</div>
                          <div className="text-xs text-slate-600 leading-relaxed">{loc.address}</div>
                        </div>
                      </div>

                      {/* Directions Button */}
                      <a 
                        href={`https://www.google.com/maps/dir/?api=1&destination=${loc.coordinates[0]},${loc.coordinates[1]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-white border border-slate-200 hover:border-[#4285F4] text-[#4285F4] py-2 px-4 rounded-lg text-sm font-bold shadow-sm hover:shadow transition-all"
                      >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Google_Maps_Logo_2020.svg" alt="Google Maps" className="w-4 h-4" />
                        Directions
                      </a>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </motion.div>

          {/* White Locations Card Col */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="bg-white text-slate-900 rounded-2xl p-4 md:p-6 shadow-xl border border-slate-200 space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">
                11 STRATEGIC OFFICES
              </h3>

              <div className="flex flex-col gap-1.5 text-xs font-medium">
                {locations.map((loc, i) => {
                  const isSelected = selectedLoc === loc.name;
                  const isHovered = hoveredLoc === loc.name;
                  let bgClass = 'text-slate-600 hover:bg-slate-50 border border-transparent';
                  
                  if (isSelected) {
                    bgClass = 'bg-[#ed1c23] text-white shadow-md translate-x-2';
                  } else if (isHovered) {
                    bgClass = 'bg-slate-100 text-[#ed1c23] translate-x-1';
                  } else if (loc.type === 'hq') {
                    bgClass = 'bg-[#fff100]/20 text-slate-900 border border-yellow-300/50';
                  } else if (loc.type === 'global') {
                    bgClass = 'bg-blue-50 text-blue-800 border border-blue-100';
                  }

                  return (
                    <div 
                      key={i} 
                      className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-300 cursor-pointer ${bgClass}`}
                      onMouseEnter={() => setHoveredLoc(loc.name)}
                      onMouseLeave={() => setHoveredLoc(null)}
                      onClick={() => setSelectedLoc(isSelected ? null : loc.name)}
                    >
                      <MapPin className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : loc.type === 'global' ? 'text-blue-600' : 'text-[#ed1c23]'}`} />
                      <span className="truncate">{loc.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
