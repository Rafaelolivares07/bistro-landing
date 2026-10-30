/* global React */
const { useState, useEffect, useRef } = React;

/* ---------- Inline SVG icons (no libraries) ---------- */
const Icon = {
  Cloche: ({ size = 36 }) => (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8.5v-2.5" />
      <circle cx="18" cy="5" r="1" fill="currentColor" stroke="none" />
      <path d="M5 25c0-7 5.8-12 13-12s13 5 13 12" />
      <path d="M3.5 28h29" />
      <path d="M14 13c-1.5-1-1.5-3 0-4 1.5-1 4-1 4-1s2.5 0 4 1c1.5 1 1.5 3 0 4" />
    </svg>
  ),
  Check: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 7.5l3 3 6-7" />
    </svg>
  ),
  ArrowRight: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" />
    </svg>
  ),
  Play: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="currentColor">
      <path d="M6 4l13 7-13 7V4z" />
    </svg>
  ),
  Whatsapp: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="white">
      <path d="M16 3C8.8 3 3 8.8 3 16c0 2.4.6 4.6 1.7 6.6L3 29l6.7-1.7c1.9 1 4 1.6 6.3 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.6c-2 0-3.9-.5-5.6-1.5l-.4-.2-4 1 1.1-3.9-.3-.4C5.7 19.9 5.2 18 5.2 16c0-6 4.9-10.8 10.8-10.8S26.8 10 26.8 16 21.9 26.6 16 26.6zm6-8.1c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.8.2-.2.3-.9 1-1.1 1.2-.2.2-.4.2-.7 0s-1.4-.5-2.6-1.6c-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.4-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.5 1.1 2.9 1.3 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3z" />
    </svg>
  ),
  Globe: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="7" cy="7" r="5" />
      <path d="M2 7h10M7 2c1.5 1.5 2.5 3.5 2.5 5s-1 3.5-2.5 5c-1.5-1.5-2.5-3.5-2.5-5s1-3.5 2.5-5z" />
    </svg>
  ),
  QR: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3">
      <rect x="2" y="2" width="4" height="4" />
      <rect x="8" y="2" width="4" height="4" />
      <rect x="2" y="8" width="4" height="4" />
      <path d="M8 8h1.5v1.5H8zM10.5 8H12v1.5h-1.5zM8 10.5h1.5V12H8zM10.5 10.5H12V12h-1.5z" fill="currentColor" stroke="none" />
    </svg>
  ),
  Tray: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <path d="M2 9h10M3.5 9c.5-2 1.8-3.5 3.5-3.5S10 7 10.5 9M7 4.5V3.5" />
    </svg>
  ),
  Chef: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <path d="M3.5 7c-1 0-1.8-.8-1.8-1.8S2.5 3.5 3.5 3.5c0-1 1-1.8 2.2-1.8.6 0 1.1.2 1.5.6.4-.4.9-.6 1.5-.6 1.2 0 2.2.8 2.2 1.8 1 0 1.8.8 1.8 1.8S11.9 7 10.9 7H3.5zM3.5 7v3.5h7V7" />
    </svg>
  ),
  Layers: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 2L1.5 5l5.5 3 5.5-3L7 2zM1.5 9l5.5 3 5.5-3" />
    </svg>
  ),
  Box: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 1.5l5 2.5v5l-5 2.5L2 9V4l5-2.5zM2 4l5 2.5L12 4M7 6.5V12" />
    </svg>
  ),
  Chart: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h10M3.5 12V8M6 12V5M8.5 12V9M11 12V6" />
    </svg>
  ),
  Doc: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 1.5h6l2 2v9H3v-11zM5 5.5h4M5 7.5h4M5 9.5h2.5" />
    </svg>
  ),
  User: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <circle cx="7" cy="5" r="2.2" />
      <path d="M2.5 12.5c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" />
    </svg>
  ),
  Monitor: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1.5" y="2" width="11" height="8" rx="1" />
      <path d="M5 12.5h4M7 10v2.5" />
    </svg>
  ),
  List: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <circle cx="3" cy="4" r=".8" fill="currentColor" />
      <circle cx="3" cy="7" r=".8" fill="currentColor" />
      <circle cx="3" cy="10" r=".8" fill="currentColor" />
      <path d="M5.5 4h6M5.5 7h6M5.5 10h6" />
    </svg>
  ),
  Cart: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.5 2h2l1.5 7h6L12 4H4M5.5 11.5a1 1 0 100 2 1 1 0 000-2zM10 11.5a1 1 0 100 2 1 1 0 000-2z" />
    </svg>
  )
};

window.Icon = Icon;

/* ---------- Phone frame ---------- */
function Phone({ children, time = "9:41" }) {
  return (
    <div className="phone">
      <div className="phone-screen">
        <div className="phone-notch"></div>
        <div className="phone-status">
          <span>{time}</span>
          <span className="icons">
            <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor"><rect x="0" y="6" width="3" height="4" rx="0.5"/><rect x="4" y="4" width="3" height="6" rx="0.5"/><rect x="8" y="2" width="3" height="8" rx="0.5"/><rect x="12" y="0" width="3" height="10" rx="0.5"/></svg>
            <svg width="22" height="10" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="1"><rect x="0.5" y="0.5" width="18" height="9" rx="2"/><rect x="2" y="2" width="14" height="6" rx="1" fill="currentColor"/><rect x="19.5" y="3.5" width="1.5" height="3" rx="0.5" fill="currentColor"/></svg>
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
window.Phone = Phone;

/* ---------- Phone placeholder / video ---------- */
// videoSrc: Ruta local al archivo de video (ej. 'assets/01_url_publica.mp4')
// youtubeId: ID del video de YouTube (fallback opcional)
// Cuando no hay video muestra el placeholder con play button.
function PhonePlaceholder({ kind, label, sublabel, videoSrc, youtubeId }) {
  if (videoSrc) {
    return (
      <div className="phone-video">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }}
        />
      </div>
    );
  }
  if (youtubeId) {
    return (
      <div className="phone-video">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <div className="phone-placeholder">
      <div className="ph-eyebrow">{label}</div>
      <div className="play-btn">
        <Icon.Play size={22} />
      </div>
      <div className="ph-title">{kind}</div>
      <div className="ph-desc">{sublabel}</div>
    </div>
  );
}
window.PhonePlaceholder = PhonePlaceholder;
