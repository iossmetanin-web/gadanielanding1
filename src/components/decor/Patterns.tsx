import { type SVGProps } from "react";

export function ConstellationPattern(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 800 800"
      aria-hidden="true"
      {...props}
    >
      <g stroke="currentColor" strokeWidth="0.6" opacity="0.5">
        <circle cx="200" cy="180" r="1.6" fill="currentColor" />
        <circle cx="320" cy="120" r="1.2" fill="currentColor" />
        <circle cx="460" cy="200" r="2" fill="currentColor" />
        <circle cx="560" cy="140" r="1.2" fill="currentColor" />
        <circle cx="640" cy="260" r="1.6" fill="currentColor" />
        <circle cx="180" cy="360" r="1.2" fill="currentColor" />
        <circle cx="300" cy="420" r="1.8" fill="currentColor" />
        <circle cx="520" cy="380" r="1.4" fill="currentColor" />
        <circle cx="660" cy="460" r="1.6" fill="currentColor" />
        <circle cx="120" cy="540" r="1.4" fill="currentColor" />
        <circle cx="280" cy="620" r="1.2" fill="currentColor" />
        <circle cx="440" cy="560" r="2" fill="currentColor" />
        <circle cx="620" cy="620" r="1.4" fill="currentColor" />
        <path d="M200 180L320 120L460 200L560 140L640 260" />
        <path d="M200 180L180 360L300 420" />
        <path d="M460 200L520 380L660 460" />
        <path d="M300 420L440 560L620 620" />
        <path d="M120 540L280 620L440 560" />
      </g>
    </svg>
  );
}

export function CardFanPattern(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 400 520"
      aria-hidden="true"
      {...props}
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.55">
        <rect
          x="160"
          y="60"
          width="80"
          height="130"
          rx="8"
          transform="rotate(-18 200 125)"
        />
        <rect
          x="160"
          y="60"
          width="80"
          height="130"
          rx="8"
          transform="rotate(-6 200 125)"
        />
        <rect
          x="160"
          y="60"
          width="80"
          height="130"
          rx="8"
          transform="rotate(6 200 125)"
        />
        <rect
          x="160"
          y="60"
          width="80"
          height="130"
          rx="8"
          transform="rotate(18 200 125)"
        />
      </g>
      <g fill="currentColor" opacity="0.7">
        <circle cx="200" cy="125" r="3" />
        <path
          d="M192 121a8 8 0 0 1 16 0"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      </g>
    </svg>
  );
}

export function MoonGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M32 6a18 18 0 1 0 10 22 14 14 0 0 1-10-22Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="20" r="1.4" fill="currentColor" />
      <circle cx="14" cy="30" r="1" fill="currentColor" />
    </svg>
  );
}
