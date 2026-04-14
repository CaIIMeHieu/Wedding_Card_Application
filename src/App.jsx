import { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import EnvelopeCover from './components/EnvelopeCover';
import HeroSection from './components/HeroSection';
import FamilyInfo from './components/FamilyInfo';
import EventDetails from './components/EventDetails';
import LoveQuote from './components/LoveQuote';
import CouplePortrait from './components/CouplePortrait';
import OurStory from './components/OurStory';
import WeddingCalendar from './components/WeddingCalendar';
import Timeline from './components/Timeline';
import QuoteBanner from './components/QuoteBanner';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import RSVPForm from './components/RSVPForm';
import GiftModal from './components/GiftModal';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [phase, setPhase] = useState('cover'); // 'cover' | 'animating' | 'content'
  const [giftOpen, setGiftOpen] = useState(false);
  const wrapperRef = useRef(null);

  /* ---- Envelope Open Animation ---- */
  const handleOpen = useCallback(() => {
    setPhase('animating');

    const tl = gsap.timeline({
      onComplete: () => {
        setPhase('content');
        // Scroll to top after state change
        setTimeout(() => window.scrollTo(0, 0), 50);
      },
    });

    // Match the simple slide up animation
    tl.to('.envelope-cover', {
      y: '-100%',
      duration: 1.2,
      ease: 'power3.inOut',
    });
  }, []);

  /* ---- Scroll Animations for Content ---- */
  useEffect(() => {
    if (phase !== 'content') return;

    // Wait for React re-render
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {

        /* --- Hero Section --- */
        gsap.fromTo('.hero-section__title',
          { opacity: 0, y: -30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'elastic.out(1, 0.5)', delay: 0.3 }
        );
        gsap.fromTo('.hero-polaroid--left',
          { x: -200, rotation: -30, opacity: 0 },
          { x: 0, rotation: -8, opacity: 1, duration: 1, ease: 'back.out(1.5)', delay: 0.5 }
        );
        gsap.fromTo('.hero-polaroid--right',
          { x: 200, rotation: 30, opacity: 0 },
          { x: 0, rotation: 5, opacity: 1, duration: 1, ease: 'back.out(1.5)', delay: 0.7 }
        );
        gsap.fromTo('.hero-image',
          { clipPath: 'inset(100% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power3.inOut',
            scrollTrigger: { trigger: '.hero-image', start: 'top 85%' },
          }
        );

        /* --- Family Info --- */
        gsap.fromTo('.family-side',
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, stagger: 0.2,
            scrollTrigger: { trigger: '.family-section', start: 'top 78%' },
          }
        );
        gsap.fromTo('.family-section__invitation',
          { opacity: 0, letterSpacing: '0.3em' },
          {
            opacity: 1, letterSpacing: '0.08em', duration: 1,
            scrollTrigger: { trigger: '.family-section__invitation', start: 'top 82%' },
          }
        );
        gsap.fromTo('.couple-names__groom',
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: '.couple-names', start: 'top 82%' } }
        );
        gsap.fromTo('.couple-names__and',
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(3)', delay: 0.3,
            scrollTrigger: { trigger: '.couple-names', start: 'top 82%' } }
        );
        gsap.fromTo('.couple-names__bride',
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.5,
            scrollTrigger: { trigger: '.couple-names', start: 'top 82%' } }
        );

        /* --- Event Cards --- */
        gsap.utils.toArray('.event-card').forEach((card, i) => {
          gsap.fromTo(card,
            { y: 60, opacity: 0, rotateY: i === 0 ? -10 : 10 },
            { y: 0, opacity: 1, rotateY: 0, duration: 0.9, ease: 'power3.out',
              scrollTrigger: { trigger: card, start: 'top 85%' } }
          );
        });

        /* --- Love Quote --- */
        gsap.fromTo('.love-quote img',
          { scale: 1.2 },
          { scale: 1, duration: 1.5, ease: 'power2.out',
            scrollTrigger: { trigger: '.love-quote', start: 'top 85%' } }
        );
        gsap.fromTo('.love-quote__text',
          { y: 30, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.3,
            scrollTrigger: { trigger: '.love-quote', start: 'top 75%' } }
        );

        /* --- Portraits --- */
        gsap.utils.toArray('.portrait-card').forEach((card, i) => {
          gsap.fromTo(card,
            { y: 50, opacity: 0, rotation: i === 0 ? -5 : 5 },
            { y: 0, opacity: 1, rotation: 0, duration: 0.8, ease: 'back.out(1.5)', delay: i * 0.2,
              scrollTrigger: { trigger: '.portrait-section', start: 'top 82%' } }
          );
        });

        /* --- Our Story --- */
        gsap.fromTo('.story-section__title',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)',
            scrollTrigger: { trigger: '.story-section', start: 'top 78%' } }
        );
        gsap.fromTo('.story-section__text',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, delay: 0.3,
            scrollTrigger: { trigger: '.story-section__text', start: 'top 88%' } }
        );

        /* --- Calendar --- */
        gsap.fromTo('.calendar-section__month',
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.7,
            scrollTrigger: { trigger: '.calendar-section', start: 'top 78%' } }
        );
        gsap.fromTo('.calendar-grid__day',
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.3, stagger: 0.02, ease: 'back.out(1.5)',
            scrollTrigger: { trigger: '.calendar-grid', start: 'top 82%' } }
        );

        /* --- Timeline --- */
        gsap.fromTo('.timeline-section__title',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.5)',
            scrollTrigger: { trigger: '.timeline-section', start: 'top 78%' } }
        );
        gsap.fromTo('.timeline-item',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.3, ease: 'power3.out',
            scrollTrigger: { trigger: '.timeline-items', start: 'top 82%' } }
        );

        /* --- Quote Banner --- */
        gsap.fromTo('.quote-banner__image',
          { clipPath: 'inset(0 100% 0 0)' },
          { clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'power3.inOut',
            scrollTrigger: { trigger: '.quote-banner', start: 'top 82%' } }
        );
        gsap.fromTo('.quote-banner__text',
          { x: 40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, delay: 0.4,
            scrollTrigger: { trigger: '.quote-banner', start: 'top 78%' } }
        );

        /* --- Countdown --- */
        gsap.fromTo('.countdown-section__title',
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.7,
            scrollTrigger: { trigger: '.countdown-section', start: 'top 78%' } }
        );
        gsap.fromTo('.countdown-item',
          { y: 30, opacity: 0, scale: 0.5 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(2)',
            scrollTrigger: { trigger: '.countdown-grid', start: 'top 88%' } }
        );

        /* --- Gallery --- */
        gsap.fromTo('.gallery-main',
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.8,
            scrollTrigger: { trigger: '.gallery-section', start: 'top 82%' } }
        );

        /* --- RSVP --- */
        gsap.fromTo('.rsvp-section__message',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8,
            scrollTrigger: { trigger: '.rsvp-section', start: 'top 82%' } }
        );
        gsap.fromTo('.rsvp-field, .rsvp-btn',
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out',
            scrollTrigger: { trigger: '.rsvp-form', start: 'top 88%' } }
        );

        /* --- Footer --- */
        gsap.fromTo('.footer-section__thanks',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)',
            scrollTrigger: { trigger: '.footer-section', start: 'top 88%' } }
        );

        ScrollTrigger.refresh();
      }, wrapperRef);

      return () => ctx.revert();
    }, 200);

    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <div className="app-wrapper" ref={wrapperRef}>
      {/* Envelope Cover - only show in cover/animating phases */}
      {phase !== 'content' && <EnvelopeCover onOpen={handleOpen} />}

      {/* Main Wedding Content - always rendered but hidden until content phase */}
      {phase === 'content' && (
        <div className="main-content visible">
          <HeroSection />
          <FamilyInfo />
          <EventDetails />
          <LoveQuote />
          <CouplePortrait />
          <OurStory />
          <WeddingCalendar />
          <Timeline />
          <QuoteBanner />
          <Countdown />
          <Gallery />
          <RSVPForm onOpenGift={() => setGiftOpen(true)} />
          <Footer />
        </div>
      )}

      {/* Floating Music Player */}
      <MusicPlayer visible={phase === 'content'} autoPlay={phase === 'content'} />

      {/* Gift Modal */}
      <GiftModal isOpen={giftOpen} onClose={() => setGiftOpen(false)} />
    </div>
  );
}
