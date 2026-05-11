/* global React */
const { useState } = React;

// Reusable placeholder. If `src` is given, renders the photo; on error
// falls back to the striped layer with a monospace label.
function Placeholder({ label, aspect, src, className = "", style = {}, alt }) {
  const [failed, setFailed] = useState(false);
  const showPhoto = src && !failed;
  return (
    <div className={`ph ${showPhoto ? 'ph-photo' : ''} ${className}`} style={{ aspectRatio: aspect, ...style }}>
      {showPhoto ? (
        <img
          src={src}
          alt={alt || label}
          loading="lazy"
          onError={() => setFailed(true)}
          className="ph-img"
        />
      ) : (
        <div className="ph-label">{label}</div>
      )}
    </div>
  );
}

// Simple star row
function Stars({ n = 5 }) {
  return (
    <div className="review-stars" aria-label={`${n} sterren`}>
      {Array.from({ length: n }).map((_, i) => <span key={i}>★</span>)}
    </div>
  );
}

// Bilingual text helper: NL primary, EN italic below
function Bi({ nl, en }) {
  return (
    <span className="bilingual">
      <span className="nl">{nl}</span>
      {en ? <span className="en"> {en}</span> : null}
    </span>
  );
}

Object.assign(window, { Placeholder, Stars, Bi });
