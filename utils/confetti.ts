/**
 * Confetti animation utility
 * Creates a burst of colored particles using canvas
 */

interface ConfettiParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  size: number;
  gravity: number;
  opacity: number;
}

const COLORS = [
  '#B51634', // cb-red
  '#0099da', // cb-blue
  '#22c55e', // success green
  '#f59e0b', // warning orange
  '#8a1128', // cb-darkred
];

/**
 * Trigger a confetti explosion at a specific position
 */
export const triggerConfetti = (
  x: number,
  y: number,
  particleCount: number = 50,
  duration: number = 3000
) => {
  // Create canvas element
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Create particles
  const particles: ConfettiParticle[] = [];
  for (let i = 0; i < particleCount; i++) {
    const angle = (Math.PI * 2 * i) / particleCount;
    const velocity = 3 + Math.random() * 6;

    particles.push({
      x,
      y,
      vx: Math.cos(angle) * velocity,
      vy: Math.sin(angle) * velocity - Math.random() * 3,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 6 + Math.random() * 6,
      gravity: 0.2 + Math.random() * 0.2,
      opacity: 1,
    });
  }

  // Animation
  const startTime = Date.now();
  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = elapsed / duration;

    if (progress >= 1) {
      document.body.removeChild(canvas);
      return;
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particles.forEach((particle) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += particle.gravity;
      particle.rotation += particle.rotationSpeed;
      particle.opacity = 1 - progress;

      // Draw particle
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate((particle.rotation * Math.PI) / 180);
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;

      // Draw rectangle (confetti piece)
      ctx.fillRect(
        -particle.size / 2,
        -particle.size / 4,
        particle.size,
        particle.size / 2
      );

      ctx.restore();
    });

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
};

/**
 * Trigger confetti from a button click event
 */
export const triggerConfettiFromButton = (event: React.MouseEvent<HTMLElement>) => {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  triggerConfetti(x, y);
};

/**
 * Trigger confetti from center of screen
 */
export const triggerConfettiCenter = () => {
  const x = window.innerWidth / 2;
  const y = window.innerHeight / 2;
  triggerConfetti(x, y, 80, 3500);
};
