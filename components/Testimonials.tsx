import React, { useState, useEffect } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
  avatarPosition?: string; // object-position for mobile circular crop
  avatarScale?: number; // scale for mobile circular crop (default 1)
}

const testimonials: Testimonial[] = [
  {
    quote: "ChessBase is essential for instant access to past games, allowing one to prepare new ideas for the future.",
    name: "GM Daniel King",
    title: "Writer, coach, journalist, broadcaster",
    image: "/assets/testimonial-king.png",
    avatarPosition: "50% 15%"
  },
  {
    quote: "I grew up when ChessBase was almost the only web site for chess, and it helped me to follow tournaments, when I was a kid. Of course I still use the software.",
    name: "GM Maxime Vachier Lagrave",
    title: "World #2 (2016 - 2017)",
    image: "/assets/testimonial-mvl.png",
    avatarPosition: "0% 20%"
  },
  {
    quote: "ChessBase is the software you really need. It is definitely essential and useful.",
    name: "GM Anish Giri",
    title: "World #3 (2016)",
    image: "/assets/testimonial-giri.png",
    avatarPosition: "50% 0%"
  },
  {
    quote: "ChessBase is the greatest development for chess since the invention of the printing press.",
    name: "GM Garry Kasparov",
    title: "World Champion (1985 - 2000)",
    image: "/assets/testimonial-kasparov.png",
    avatarPosition: "50% 10%"
  },
  {
    quote: "ChessBase is amazing, great software for chess players. It has changed the way chess players prepare and study chess – a very good thing for us.",
    name: "GM Le Quang Liem",
    title: "World Top 20 (2022 - present)",
    image: "/assets/testimonial-liem.png",
    avatarPosition: "-40% 0%"
  },
  {
    quote: "ChessBase is an absolute must-have tool, whether you want to get to the top, or just improve your chess understanding at any level.",
    name: "GM Dorian Rogozenko",
    title: "German National Trainer (2014 - 2020)",
    image: "/assets/testimonial-rogozenko.png",
    avatarPosition: "65% -20%",
    avatarScale: 1.15
  },
  {
    quote: "When people asked me to recommend software for chess, the first word that come to my mind is ChessBase. I have used it for all of my chess career.",
    name: "GM Hou Yifan",
    title: "World Champion (2010 - 2017)",
    image: "/assets/testimonial-houyifan.png",
    avatarPosition: "50% -50%"
  },
  {
    quote: "ChessBase has changed the chess world forever. It is more or less unthinkable now not to work with it.",
    name: "GM Vishy Anand",
    title: "World Champion (2007 – 2013)",
    image: "/assets/testimonial-anand.png",
    avatarPosition: "50% 30%"
  },
  {
    quote: "Nowadays I don't know a single chess player, amateur or 2800, that does not use ChessBase, and for good reason.",
    name: "GM Rustam Kasimdzhanov",
    title: "FIDE World Champion (2004 - 2005)",
    image: "/assets/testimonial-kasimdzhanov.png",
    avatarPosition: "0% -50%"
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="testimonials__container">

        {/* Slider Container */}
        <div
          className="testimonials__slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="testimonials__nav-btn testimonials__nav-btn--prev"
            aria-label="Previous testimonial"
          >
            <span className="testimonials__nav-icon">‹</span>
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="testimonials__nav-btn testimonials__nav-btn--next"
            aria-label="Next testimonial"
          >
            <span className="testimonials__nav-icon">›</span>
          </button>

          {/* Testimonial Content */}
          <div className="testimonials__content">
            <div
              key={currentIndex}
              className="testimonials__slide animate-fade-in"
            >
              {/* Testimonial Image - Large Cutout Style on Right */}
              <div className="testimonials__image-wrapper">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="testimonials__image"
                  style={{
                    '--avatar-position': testimonials[currentIndex].avatarPosition || '50% 20%',
                    '--avatar-scale': testimonials[currentIndex].avatarScale || 1
                  } as React.CSSProperties}
                />
              </div>

              {/* Quote and Attribution on Left */}
              <div className="testimonials__text-wrapper">
                <p className="testimonials__quote">
                  "{testimonials[currentIndex].quote}"
                </p>
                <p className="testimonials__attribution">
                  <span className="testimonials__name">{testimonials[currentIndex].name}</span>
                  {testimonials[currentIndex].title && (
                    <span className="testimonials__title">
                      {testimonials[currentIndex].title}
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="testimonials__dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`testimonials__dot ${
                  idx === currentIndex
                    ? 'testimonials__dot--active'
                    : 'testimonials__dot--inactive'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
