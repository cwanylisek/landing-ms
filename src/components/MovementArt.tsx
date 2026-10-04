export default function MovementArt() {
  return (
    <svg aria-hidden="true" viewBox="0 0 560 620" fill="none" className="movement-art">
      <defs>
        <linearGradient id="movement-ribbon" x1="100" y1="120" x2="460" y2="490" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D7F3E3" />
          <stop offset=".26" stopColor="#95D5B2" />
          <stop offset=".55" stopColor="#2D6A4F" />
          <stop offset=".8" stopColor="#BEE8CD" />
          <stop offset="1" stopColor="#52B788" />
        </linearGradient>
        <linearGradient id="movement-edge" x1="160" y1="70" x2="390" y2="540" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" stopOpacity=".8" />
          <stop offset=".5" stopColor="#95D5B2" stopOpacity=".1" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity=".5" />
        </linearGradient>
      </defs>
      <circle cx="280" cy="310" r="222" stroke="#95D5B2" strokeOpacity=".12" />
      <circle cx="280" cy="310" r="176" stroke="#95D5B2" strokeOpacity=".08" />
      <path d="M72 510H488" stroke="#95D5B2" strokeOpacity=".15" />
      <ellipse cx="282" cy="525" rx="140" ry="18" fill="#002619" fillOpacity=".5" />
      <g transform="rotate(-24 280 300)">
        <path d="M280 100C416 100 443 198 354 262L207 364C116 427 151 506 280 506C409 506 444 427 353 364L206 262C117 198 144 100 280 100Z" stroke="#00291B" strokeWidth="78" strokeLinejoin="round" />
        <path d="M280 90C416 90 443 188 354 252L207 354C116 417 151 496 280 496C409 496 444 417 353 354L206 252C117 188 144 90 280 90Z" stroke="url(#movement-ribbon)" strokeWidth="62" strokeLinejoin="round" />
        <path d="M280 64C412 64 466 180 369 257L222 362C139 423 173 471 280 471" stroke="url(#movement-edge)" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}
