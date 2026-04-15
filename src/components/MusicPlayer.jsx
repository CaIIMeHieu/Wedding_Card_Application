import { useState, useRef, useEffect } from 'react';

export default function MusicPlayer({ visible, autoPlay }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio();
    audioRef.current.src = 'https://camcui.vn/bai103.mp3';
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    return () => { if (audioRef.current) { audioRef.current.pause(); } };
  }, []);

  useEffect(() => {
    if (autoPlay && audioRef.current && !playing) {
      audioRef.current.play().then(() => setPlaying(true)).catch(err => {
        console.warn('Playback failed:', err);
      });
    }
  }, [autoPlay, playing]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  if (!visible) return null;

  return (
    <button className={`music-btn ${playing ? 'music-btn--playing is-rotating' : ''}`} onClick={toggle} aria-label="Toggle music" id="music-toggle">
      {playing ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="1" y1="1" x2="23" y2="23" /><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
        </svg>
      )}
    </button>
  );
}
