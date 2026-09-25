import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MediaSection() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const mediaPubs = [
    {
      id: "forbes",
      name: "Forbes",
      headline: "PNP: Driving India's Industrial Growth",
      svg: (
        <svg viewBox="0 2 200 52" className="h-8 w-auto" aria-label="Forbes Logo">
          <path fill="#111827" d="M113.3 18.2c0-5.8.1-11.2.4-16.2L98.4 4.9v1.4l1.5.2c1.1.1 1.8.5 2.2 1.1.4.7.7 1.7.9 3.2.2 2.9.4 9.5.3 19.9 0 10.3-.1 16.8-.3 19.3 5.5 1.2 9.8 1.7 13 1.7 6 0 10.7-1.7 14.1-5.2 3.4-3.4 5.2-8.2 5.2-14.1 0-4.7-1.3-8.6-3.9-11.7-2.6-3.1-5.9-4.6-9.8-4.6-2.6 0-5.3.7-8.3 2.1zm.3 30.8c-.2-3.2-.4-12.8-.4-28.5.9-.3 2.1-.5 3.6-.5 2.4 0 4.3 1.2 5.7 3.7 1.4 2.5 2.1 5.5 2.1 9.3 0 4.7-.8 8.5-2.4 11.7-1.6 3.1-3.6 4.7-6.1 4.7-.8-.2-1.6-.3-2.5-.4zM41 3H1v2l2.1.2c1.6.3 2.7.9 3.4 1.8.7 1 1.1 2.6 1.2 4.8.8 10.8.8 20.9 0 30.2-.2 2.2-.6 3.8-1.2 4.8-.7 1-1.8 1.6-3.4 1.8l-2.1.3v2h25.8v-2l-2.7-.2a4.9 4.9 0 0 1-3.4-1.8c-.7-1-1.1-2.6-1.2-4.8-.3-4-.5-8.6-.5-13.7l5.4.1c2.9.1 4.9 2.3 5.9 6.7h2V18.9h-2c-1 4.3-2.9 6.5-5.9 6.6l-5.4.1c0-9 .2-15.4.5-19.3h7.9c5.6 0 9.4 3.6 11.6 10.8l2.4-.7L41 3zm-4.7 30.8c0 5.2 1.5 9.5 4.4 12.9 2.9 3.4 7.2 5 12.6 5s9.8-1.7 13-5.2c3.2-3.4 4.7-7.7 4.7-12.9s-1.5-9.5-4.4-12.9c-2.9-3.4-7.2-5-12.6-5s-9.8 1.7-13 5.2c-3.2 3.4-4.7 7.7-4.7 12.9zm22.3-11.4c1.2 2.9 1.7 6.7 1.7 11.3 0 10.6-2.2 15.8-6.5 15.8-2.2 0-3.9-1.5-5.1-4.5-1.2-3-1.7-6.8-1.7-11.3C47 23.2 49.2 18 53.5 18c2.2-.1 3.9 1.4 5.1 4.4zm84.5 24.3c3.3 3.3 7.5 5 12.5 5 3.1 0 5.8-.6 8.2-1.9 2.4-1.2 4.3-2.7 5.6-4.5l-1-1.2c-2.2 1.7-4.7 2.5-7.6 2.5-4 0-7.1-1.3-9.2-4-2.2-2.7-3.2-6.1-3-10.5H170c0-4.8-1.2-8.7-3.7-11.8-2.5-3-6-4.5-10.5-4.5-5.6 0-9.9 1.8-13 5.3-3.1 3.5-4.6 7.8-4.6 12.9 0 5.2 1.6 9.4 4.9 12.7zm7.4-25.1c1.1-2.4 2.5-3.6 4.4-3.6 3 0 4.5 3.8 4.5 11.5l-10.6.2c.1-3 .6-5.7 1.7-8.1zm46.4-4c-2.7-1.2-6.1-1.9-10.2-1.9-4.2 0-7.5 1.1-10 3.2s-3.8 4.7-3.8 7.8c0 2.7.8 4.8 2.3 6.3 1.5 1.5 3.9 2.8 7 3.9 2.8 1 4.8 2 5.8 2.9 1 1 1.6 2.1 1.6 3.6 0 1.4-.5 2.7-1.6 3.7-1 1.1-2.4 1.6-4.2 1.6-4.4 0-7.7-3.2-10-9.6l-1.7.5.4 10c3.6 1.4 7.6 2.1 12 2.1 4.6 0 8.1-1 10.7-3.1 2.6-2 3.9-4.9 3.9-8.5 0-2.4-.6-4.4-1.9-5.9-1.3-1.5-3.4-2.8-6.4-4-3.3-1.2-5.6-2.3-6.8-3.3-1.2-1-1.8-2.2-1.8-3.7s.4-2.7 1.3-3.7 2-1.4 3.4-1.4c4 0 6.9 2.9 8.7 8.6l1.7-.5-.4-8.6zm-96.2-.9c-1.4-.7-2.9-1-4.6-1-1.7 0-3.4.7-5.3 2.1-1.9 1.4-3.3 3.3-4.4 5.9l.1-8-15.2 3v1.4l1.5.1c1.9.2 3 1.7 3.2 4.4.6 6.2.6 12.8 0 19.8-.2 2.7-1.3 4.1-3.2 4.4l-1.5.2v1.9h21.2V49l-2.7-.2c-1.9-.2-3-1.7-3.2-4.4-.6-5.8-.7-12-.2-18.4.6-1 1.9-1.6 3.9-1.8 2-.2 4.3.4 6.7 1.8l3.7-9.3z" />
        </svg>
      )
    },
    {
      id: "bt",
      name: "Business Today",
      headline: "A Trusted Name in Industrial Materials",
      svg: (
        <svg viewBox="0 0 185 30" className="h-6 w-auto" aria-label="Business Today Logo">
          <text x="0" y="23" textAnchor="start" fontFamily="'Arial Narrow', sans-serif" fontWeight="bold" fontSize="23.5" fill="#0D5BB5" letterSpacing="0.1px">BUSINESS TODAY</text>
        </svg>
      )
    },
    {
      id: "et",
      name: "The Economic Times",
      headline: "PNP's Vision for a Stronger Tomorrow",
      svg: (
        <svg viewBox="0 0 215 34" className="h-7 w-auto" aria-label="The Economic Times Logo">
          <rect x="0" y="1" width="32" height="32" rx="3.5" fill="#E01A22" />
          <text x="16" y="23.5" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="900" fontSize="18" fill="#FFFFFF">ET</text>
          <text x="40" y="22" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="700" fontSize="16.5" fill="#111827" letterSpacing="-0.2px">The Economic Times</text>
        </svg>
      )
    },
    {
      id: "outlook",
      name: "Industrial Outlook",
      headline: "Innovation in Every Layer",
      svg: (
        <svg viewBox="8 8 660 252" className="h-8 w-auto" aria-label="Industrial Outlook Logo">
          <path fill="#111827" fillRule="evenodd" d="M 522 146 L 522 259 L 551 259 L 552 214 L 556 227 L 556 231 L 563 256 L 563 259 L 593 259 L 575 200 L 575 194 L 591 148 L 591 146 L 564 147 L 556 173 L 554 183 L 552 187 L 551 146 Z M 309 146 L 309 259 L 356 259 L 356 237 L 338 236 L 338 146 Z M 238 146 L 238 168 L 255 169 L 255 259 L 284 259 L 285 168 L 302 168 L 302 146 Z M 163 146 L 163 218 L 164 239 L 165 243 L 169 250 L 173 254 L 183 259 L 212 259 L 215 258 L 220 255 L 225 250 L 228 245 L 230 238 L 230 146 L 202 146 L 202 234 L 201 240 L 198 243 L 195 243 L 193 241 L 192 238 L 192 146 Z M 464 145 L 452 151 L 446 158 L 443 166 L 442 174 L 442 231 L 443 239 L 445 245 L 449 251 L 452 254 L 461 259 L 490 259 L 497 256 L 505 248 L 509 237 L 510 219 L 510 187 L 509 168 L 507 161 L 504 156 L 495 148 L 482 144 L 469 144 Z M 474 162 L 478 162 L 480 164 L 481 167 L 481 237 L 480 240 L 477 243 L 474 243 L 471 240 L 471 166 Z M 385 145 L 373 151 L 367 158 L 364 166 L 363 174 L 363 231 L 364 239 L 366 245 L 370 251 L 373 254 L 382 259 L 411 259 L 418 256 L 426 248 L 430 237 L 431 219 L 431 187 L 430 168 L 428 161 L 425 156 L 416 148 L 403 144 L 390 144 Z M 395 162 L 399 162 L 401 164 L 402 167 L 402 237 L 401 240 L 398 243 L 395 243 L 392 240 L 392 166 Z M 106 145 L 94 151 L 88 158 L 85 166 L 84 174 L 84 231 L 85 239 L 87 245 L 91 251 L 94 254 L 103 259 L 132 259 L 139 256 L 147 248 L 151 237 L 152 219 L 152 187 L 151 168 L 149 161 L 146 156 L 137 148 L 124 144 L 111 144 Z M 116 162 L 120 162 L 122 164 L 123 167 L 123 237 L 122 240 L 119 243 L 116 243 L 113 240 L 113 166 Z M 50 10 L 50 123 L 74 123 L 75 74 L 78 81 L 80 91 L 90 123 L 115 123 L 115 10 L 91 10 L 90 59 L 81 34 L 81 31 L 74 12 L 74 10 Z M 9 10 L 9 123 L 37 123 L 37 10 Z" />
          <path fill="#E01A22" fillRule="evenodd" d="M 619 10 L 619 123 L 666 123 L 666 101 L 648 100 L 648 10 Z M 554 10 L 553 22 L 551 30 L 550 45 L 539 123 L 569 123 L 570 105 L 572 103 L 582 104 L 583 108 L 583 121 L 584 123 L 613 123 L 596 10 Z M 576 36 L 578 43 L 581 76 L 580 84 L 570 83 L 574 45 Z M 505 10 L 505 123 L 534 123 L 534 10 Z M 427 10 L 427 123 L 456 123 L 457 71 L 460 71 L 465 75 L 466 84 L 466 123 L 492 123 L 492 78 L 491 74 L 489 71 L 485 67 L 481 65 L 479 62 L 485 61 L 488 59 L 490 56 L 492 49 L 492 32 L 491 27 L 488 20 L 482 14 L 475 11 L 466 10 Z M 457 28 L 462 29 L 465 32 L 466 37 L 465 50 L 464 52 L 460 54 L 456 53 Z M 356 10 L 356 32 L 373 33 L 373 123 L 402 123 L 403 32 L 420 32 L 420 10 Z M 207 10 L 207 82 L 208 103 L 209 107 L 213 114 L 217 118 L 224 122 L 235 125 L 248 125 L 259 122 L 264 119 L 269 114 L 272 109 L 274 102 L 274 10 L 246 10 L 246 98 L 245 104 L 242 107 L 239 107 L 237 105 L 236 102 L 236 10 Z M 128 10 L 128 123 L 176 123 L 181 122 L 188 119 L 192 115 L 195 107 L 195 29 L 192 21 L 190 18 L 185 14 L 176 11 L 167 10 Z M 158 28 L 162 28 L 166 31 L 167 34 L 167 96 L 166 101 L 161 105 L 157 104 Z M 309 8 L 296 12 L 293 14 L 287 21 L 285 28 L 284 37 L 285 49 L 289 59 L 293 64 L 313 77 L 322 85 L 324 91 L 324 101 L 323 104 L 319 107 L 316 107 L 313 105 L 312 103 L 312 83 L 285 83 L 286 104 L 290 114 L 297 120 L 303 123 L 312 125 L 325 125 L 334 123 L 342 119 L 348 113 L 351 103 L 351 85 L 348 73 L 344 67 L 333 58 L 318 49 L 312 43 L 311 39 L 311 32 L 312 29 L 315 26 L 319 26 L 322 30 L 322 44 L 349 44 L 348 26 L 347 22 L 344 17 L 335 11 L 323 8 Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200" id="media">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          
          {/* Left Narrative */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-6 bg-red-600 rounded-full"></span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600">IN THE MEDIA</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Recognised<br />
              Nationwide
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              Our journey and impact have been featured in leading publications.
            </p>

            <Link to="/certifications" className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700 transition-colors">
              <span>View All Media</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Cards Row */}
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {mediaPubs.map(pub => (
                <div 
                  key={pub.id} 
                  className="bg-white text-slate-900 p-5 rounded-2xl border border-slate-200 hover:border-red-500 flex flex-col justify-between h-52 transition-all duration-300 shadow-sm hover:shadow-xl group"
                >
                  <div className="h-10 flex items-center justify-start">
                    {pub.svg}
                  </div>

                  <p className="text-sm font-bold text-slate-900 leading-snug group-hover:text-red-600 transition-colors">
                    {pub.headline}
                  </p>
                </div>
              ))}
            </div>

            {/* Carousel Arrows */}
            <div className="flex items-center justify-end gap-2 pt-2">
              <button 
                onClick={() => setScrollIndex(prev => Math.max(0, prev - 1))}
                className="p-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setScrollIndex(prev => (prev + 1) % mediaPubs.length)}
                className="p-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
                aria-label="Next story"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
