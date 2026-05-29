/* Stylized SVG map of Cross Lake, MB — used as a placeholder until Mapbox is wired up.
   Shows Cross Lake / Nelson River waterways, the community area, and a "Fibre ready" zone
   highlighting the northern reserve section. */

function CrossLakeMap() {
  return (
    <svg viewBox="0 0 1200 540" preserveAspectRatio="xMidYMid slice" className="crosslake-svg" aria-label="Stylized map of Cross Lake, Manitoba">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
        </pattern>
        <radialGradient id="litGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#F2E313" stopOpacity="0.55"/>
          <stop offset="55%" stopColor="#F2E313" stopOpacity="0.20"/>
          <stop offset="100%" stopColor="#F2E313" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="landGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3A4564"/>
          <stop offset="100%" stopColor="#2E3A59"/>
        </linearGradient>
        <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1B2238"/>
          <stop offset="100%" stopColor="#12172A"/>
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4"/>
        </filter>
      </defs>

      {/* Land base */}
      <rect width="1200" height="540" fill="url(#landGrad)"/>
      <rect width="1200" height="540" fill="url(#grid)"/>

      {/* === Water bodies (Cross Lake / Nelson River system, stylized) === */}
      {/* Main Cross Lake to the east — large irregular body */}
      <path
        d="M 720 60 Q 820 50 900 80 Q 980 110 1050 100 Q 1130 90 1180 140 L 1200 200 L 1200 360 Q 1140 380 1080 360 Q 1000 340 920 360 Q 840 380 770 350 Q 720 320 700 260 Q 690 200 700 140 Q 705 90 720 60 Z"
        fill="url(#waterGrad)"
      />
      {/* Pipestone Lake to the southwest */}
      <path
        d="M 60 320 Q 120 300 200 320 Q 280 340 340 320 Q 400 300 460 340 Q 500 380 480 440 Q 440 500 360 510 Q 280 520 200 500 Q 120 480 70 440 Q 30 390 60 320 Z"
        fill="url(#waterGrad)"
      />
      {/* Nelson River channel connecting them, snaking */}
      <path
        d="M 460 350 Q 540 360 600 340 Q 660 320 700 300 L 720 310 Q 680 360 620 380 Q 560 400 500 390 Q 460 380 460 350 Z"
        fill="url(#waterGrad)"
      />
      {/* Bay/inlet on west edge */}
      <path
        d="M 0 100 Q 60 120 100 160 Q 130 200 110 240 Q 80 270 30 250 L 0 240 Z"
        fill="url(#waterGrad)"
      />

      {/* Islands in main lake */}
      <ellipse cx="880" cy="220" rx="40" ry="22" fill="url(#landGrad)"/>
      <ellipse cx="960" cy="180" rx="22" ry="14" fill="url(#landGrad)"/>
      <ellipse cx="820" cy="280" rx="18" ry="10" fill="url(#landGrad)"/>
      <ellipse cx="1020" cy="240" rx="30" ry="16" fill="url(#landGrad)"/>
      <ellipse cx="1100" cy="200" rx="14" ry="9" fill="url(#landGrad)"/>

      {/* Islands in southwest lake */}
      <ellipse cx="220" cy="420" rx="26" ry="14" fill="url(#landGrad)"/>
      <ellipse cx="340" cy="440" rx="16" ry="9" fill="url(#landGrad)"/>

      {/* === Coastline accents (subtle lighter edge on land/water interface) === */}
      <path
        d="M 720 60 Q 820 50 900 80 Q 980 110 1050 100 Q 1130 90 1180 140"
        fill="none" stroke="#4A5DAA" strokeWidth="1.5" strokeOpacity="0.4"
      />
      <path
        d="M 60 320 Q 120 300 200 320 Q 280 340 340 320 Q 400 300 460 340"
        fill="none" stroke="#4A5DAA" strokeWidth="1.5" strokeOpacity="0.4"
      />

      {/* === Community / road network (very stylized, in north-west portion = "fibre ready" zone) === */}
      <g stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="none">
        {/* Main road running east-west through community */}
        <path d="M 200 200 L 680 200" strokeWidth="2.5" stroke="rgba(255,255,255,0.28)"/>
        {/* Secondary road */}
        <path d="M 240 130 L 280 200 L 320 270" />
        <path d="M 360 130 L 380 200 L 400 270" />
        <path d="M 480 130 L 480 200 L 500 270" />
        <path d="M 580 140 L 580 200 L 600 280" />
        {/* Cross-grid */}
        <path d="M 220 160 L 660 160" />
        <path d="M 240 240 L 660 240" />
        {/* Highway in from south */}
        <path d="M 400 270 Q 380 380 320 460" strokeWidth="2" stroke="rgba(255,255,255,0.22)"/>
      </g>

      {/* === FIBRE-READY zone glow (northern section) === */}
      <ellipse cx="430" cy="180" rx="290" ry="120" fill="url(#litGlow)" filter="url(#softShadow)"/>

      {/* Zone polygon outline */}
      <path
        d="M 200 90 Q 280 70 380 80 Q 480 90 580 80 Q 660 75 680 110 L 690 200 Q 660 240 580 250 Q 500 260 420 255 Q 340 250 260 240 Q 200 230 180 200 Q 170 150 200 90 Z"
        fill="rgba(242,227,19,0.08)"
        stroke="#F2E313" strokeWidth="2.5" strokeDasharray="6 6"
      />

      {/* Node pins inside the fibre-ready zone */}
      {[
        [260, 130], [340, 150], [420, 130], [500, 145], [580, 135],
        [300, 200], [400, 195], [500, 200], [600, 195],
        [350, 230], [460, 230], [560, 230],
      ].map(([cx, cy], i) => (
        <g key={i} style={{ animationDelay: `${(i * 0.18) % 2.5}s` }} className="crosslake-node">
          <circle cx={cx} cy={cy} r="8"  fill="rgba(242,227,19,0.35)"/>
          <circle cx={cx} cy={cy} r="4"  fill="#F2E313"/>
        </g>
      ))}

      {/* Labels */}
      <g fontFamily="var(--pc-font-display)" fill="white" fontWeight="700">
        {/* Community name */}
        <text x="430" y="170" fontSize="28" textAnchor="middle" letterSpacing="0.05em" fillOpacity="0.95">
          CROSS LAKE
        </text>
        <text x="430" y="194" fontSize="12" textAnchor="middle" letterSpacing="0.22em" fillOpacity="0.7" fontWeight="600">
          PIMICIKAMAK CREE NATION
        </text>
        {/* Water labels */}
        <text x="920" y="240" fontSize="13" fill="#7C8CB8" fontWeight="500" letterSpacing="0.18em" fontStyle="italic">
          CROSS LAKE
        </text>
        <text x="260" y="430" fontSize="11" fill="#7C8CB8" fontWeight="500" letterSpacing="0.18em" fontStyle="italic">
          PIPESTONE LAKE
        </text>
        <text x="590" y="370" fontSize="10" fill="#7C8CB8" fontWeight="500" letterSpacing="0.18em" fontStyle="italic" transform="rotate(-8 590 370)">
          NELSON RIVER
        </text>
      </g>

      {/* Scale bar */}
      <g transform="translate(1040, 490)">
        <rect x="0" y="0" width="60" height="6" fill="white" fillOpacity="0.9"/>
        <rect x="60" y="0" width="60" height="6" fill="#2E3A59" stroke="white" strokeOpacity="0.9"/>
        <text x="0" y="22" fontFamily="var(--pc-font-mono)" fontSize="10" fill="white" fillOpacity="0.75">0</text>
        <text x="56" y="22" fontFamily="var(--pc-font-mono)" fontSize="10" fill="white" fillOpacity="0.75">2 km</text>
        <text x="108" y="22" fontFamily="var(--pc-font-mono)" fontSize="10" fill="white" fillOpacity="0.75">4 km</text>
      </g>
    </svg>
  );
}

Object.assign(window, { CrossLakeMap });
