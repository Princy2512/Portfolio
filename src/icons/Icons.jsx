import React from "react";

const IconWrapper = ({ children, size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

export const Github = (props) => (
  <IconWrapper {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </IconWrapper>
);

export const Linkedin = (props) => (
  <IconWrapper {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </IconWrapper>
);

export const Mail = (props) => (
  <IconWrapper {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </IconWrapper>
);

export const Phone = (props) => (
  <IconWrapper {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </IconWrapper>
);

export const ExternalLink = (props) => (
  <IconWrapper {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" x2="21" y1="14" y2="3"/>
  </IconWrapper>
);

export const Code = (props) => (
  <IconWrapper {...props}>
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </IconWrapper>
);

export const Server = (props) => (
  <IconWrapper {...props}>
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
    <line x1="6" x2="6.01" y1="6" y2="6"/>
    <line x1="6" x2="6.01" y1="18" y2="18"/>
  </IconWrapper>
);

export const Database = (props) => (
  <IconWrapper {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </IconWrapper>
);

export const Terminal = (props) => (
  <IconWrapper {...props}>
    <polyline points="4 17 10 11 4 5"/>
    <line x1="12" x2="20" y1="19" y2="19"/>
  </IconWrapper>
);

export const Award = (props) => (
  <IconWrapper {...props}>
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </IconWrapper>
);

export const Briefcase = (props) => (
  <IconWrapper {...props}>
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </IconWrapper>
);

export const GraduationCap = (props) => (
  <IconWrapper {...props}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </IconWrapper>
);

export const Menu = (props) => (
  <IconWrapper {...props}>
    <line x1="4" x2="20" y1="12" y2="12"/>
    <line x1="4" x2="20" y1="6" y2="6"/>
    <line x1="4" x2="20" y1="18" y2="18"/>
  </IconWrapper>
);

export const X = (props) => (
  <IconWrapper {...props}>
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </IconWrapper>
);

export const Send = (props) => (
  <IconWrapper {...props}>
    <path d="m22 2-7 20-4-9-9-4Z"/>
    <path d="M22 2 11 13"/>
  </IconWrapper>
);

export const Cpu = (props) => (
  <IconWrapper {...props}>
    <rect width="16" height="16" x="4" y="4" rx="2"/>
    <rect width="6" height="6" x="9" y="9" rx="1"/>
    <path d="M15 2v2"/>
    <path d="M15 20v2"/>
    <path d="M2 15h2"/>
    <path d="M2 9h2"/>
    <path d="M20 15h2"/>
    <path d="M20 9h2"/>
    <path d="M9 2v2"/>
    <path d="M9 20v2"/>
  </IconWrapper>
);

export const Globe = (props) => (
  <IconWrapper {...props}>
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
    <path d="M2 12h20"/>
  </IconWrapper>
);

export const Layers = (props) => (
  <IconWrapper {...props}>
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>
  </IconWrapper>
);

export const Zap = (props) => (
  <IconWrapper {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </IconWrapper>
);

export const Layout = (props) => (
  <IconWrapper {...props}>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
    <line x1="3" x2="21" y1="9" y2="9"/>
    <line x1="9" x2="9" y1="21" y2="9"/>
  </IconWrapper>
);

export const GitBranch = (props) => (
  <IconWrapper {...props}>
    <line x1="6" x2="6" y1="3" y2="15"/>
    <circle cx="18" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <path d="M18 9a9 9 0 0 1-9 9"/>
  </IconWrapper>
);

export const Cloud = (props) => (
  <IconWrapper {...props}>
    <path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19"/>
    <path d="M20 16.952c1.774.225 3.15 1.764 3.15 3.618 0 1.89-1.55 3.43-3.45 3.43H4.3c-1.9 0-3.45-1.54-3.45-3.43 0-1.854 1.376-3.393 3.15-3.618"/>
  </IconWrapper>
);

export const CheckCircle = (props) => (
  <IconWrapper {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </IconWrapper>
);

export const ArrowRight = (props) => (
  <IconWrapper {...props}>
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </IconWrapper>
);

export const Download = (props) => (
  <IconWrapper {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" x2="12" y1="15" y2="3"/>
  </IconWrapper>
);

export const MousePointer = (props) => (
  <IconWrapper {...props}>
    <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
    <path d="m13 13 6 6"/>
  </IconWrapper>
);
