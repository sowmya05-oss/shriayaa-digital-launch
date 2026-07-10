type LogoOrbitBackgroundProps = {
  className?: string;
};

const planets = [
  { rotate: -18, x: 464, y: 260, r: 6, delay: "0s", duration: "18s" },
  { rotate: 42, x: 456, y: 260, r: 5, delay: "-4s", duration: "22s" },
  { rotate: 104, x: 458, y: 260, r: 5.5, delay: "-9s", duration: "20s" },
  { rotate: -68, x: 448, y: 260, r: 4.5, delay: "-13s", duration: "24s" },
  { rotate: 76, x: 438, y: 260, r: 5, delay: "-16s", duration: "26s" },
];

export function LogoOrbitBackground({ className }: LogoOrbitBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}>
      <svg
        className="hero-logo-orbit"
        style={{
          position: "absolute",
          left: "50%",
          top: "44%",
          width: "min(62vw, 580px)",
          height: "min(62vw, 580px)",
          transform: "translate(-50%, -50%)",
        }}
        viewBox="0 0 520 520"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="orbitCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4A743" stopOpacity="0.22" />
            <stop offset="42%" stopColor="#F7E7A4" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FFFEF5" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="orbitStroke" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF3BA" stopOpacity="0.12" />
            <stop offset="48%" stopColor="#D4A743" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFF8D5" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="ribbonStroke" x1="18%" x2="82%" y1="15%" y2="88%">
            <stop offset="0%" stopColor="#FFF5BF" stopOpacity="0.16" />
            <stop offset="42%" stopColor="#D4A743" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#F7E7A4" stopOpacity="0.16" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="260" cy="260" r="138" fill="url(#orbitCore)" />

        <g fill="none" strokeLinecap="round">
          <ellipse
            cx="260"
            cy="260"
            rx="210"
            ry="82"
            stroke="url(#orbitStroke)"
            strokeWidth="5"
            transform="rotate(-18 260 260)"
          />
          <ellipse
            cx="260"
            cy="260"
            rx="206"
            ry="78"
            stroke="url(#orbitStroke)"
            strokeWidth="4"
            transform="rotate(42 260 260)"
          />
          <ellipse
            cx="260"
            cy="260"
            rx="198"
            ry="74"
            stroke="url(#orbitStroke)"
            strokeWidth="4"
            transform="rotate(104 260 260)"
          />
        </g>

        <g className="hero-logo-ribbons" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M166 255C166 197 207 153 260 153C318 153 358 196 358 255C358 315 317 358 260 358C203 358 166 315 166 255Z"
            stroke="url(#ribbonStroke)"
            strokeWidth="38"
            strokeOpacity="0.5"
          />
          <path
            d="M316 318C344 345 367 370 392 400"
            stroke="url(#ribbonStroke)"
            strokeWidth="42"
            strokeOpacity="0.52"
          />
          <path
            d="M188 214C211 172 260 151 303 169"
            stroke="#D4A743"
            strokeWidth="14"
            strokeOpacity="0.18"
          />
          <path
            d="M214 345C180 321 160 285 166 242"
            stroke="#F3D77A"
            strokeWidth="12"
            strokeOpacity="0.12"
          />
          <path
            d="M330 336C350 356 368 376 389 400"
            stroke="#FFF5BF"
            strokeWidth="11"
            strokeOpacity="0.22"
          />
        </g>

        <g className="hero-logo-sun" transform="translate(260 260)" filter="url(#softGlow)">
          <circle r="22" fill="#D4A743" fillOpacity="0.18" />
          {Array.from({ length: 32 }).map((_, index) => (
            <line
              key={index}
              x1="0"
              x2="0"
              y1="-30"
              y2={index % 2 === 0 ? "-58" : "-48"}
              stroke="#D4A743"
              strokeOpacity="0.18"
              strokeWidth="1.7"
              transform={`rotate(${index * 11.25})`}
            />
          ))}
          <circle r="60" fill="none" stroke="#F7E7A4" strokeOpacity="0.16" strokeWidth="1.5" />
          <circle r="78" fill="none" stroke="#D4A743" strokeOpacity="0.08" strokeWidth="1" />
        </g>

        <g filter="url(#softGlow)">
          {planets.map((planet, index) => (
            <g
              key={`${planet.rotate}-${planet.duration}`}
              className="hero-orbit-planet"
              transform={`rotate(${planet.rotate} 260 260)`}
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`${planet.rotate + index * 22} 260 260`}
                to={`${360 + planet.rotate + index * 22} 260 260`}
                dur={planet.duration}
                begin={planet.delay}
                repeatCount="indefinite"
              />
              <circle
                cx={planet.x}
                cy={planet.y}
                r={planet.r + 4}
                fill="#FFFEF5"
                fillOpacity="0.26"
              />
              <circle cx={planet.x} cy={planet.y} r={planet.r} fill="#D4A743" fillOpacity="0.3" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
