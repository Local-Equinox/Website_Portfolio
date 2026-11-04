import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { Field, Photo } from "./ui.jsx";

const STRAP_LENGTH = 120; // resting length of the visible strap, in px
const STRAP_OVERHANG = 200; // extra strap above the anchor, so its end never shows
const DROP_FROM = -950; // where the card starts: fully above the screen

const IDLE_SWAY = 6; // how far the card sways at rest, in px
const IDLE_PERIOD = 4.5; // seconds per full sway

// How far the card can be pulled before it stops following the cursor.
const PULL_SIDEWAYS = 280;
const PULL_DOWN = 140;
const PULL_UP = 40;

// Heavier `mass` = slower, weightier swing. Lower `damping` = more swings on release.
const HEAVY_SPRING = { stiffness: 90, damping: 9, mass: 1.4 };
const DROP_SPRING = { type: "spring", stiffness: 70, damping: 10, mass: 1.3 };

/** Resists more the further it is pulled, like stretching elastic. */
const softLimit = (value, limit) => limit * Math.tanh(value / limit);

/**
 * An ID card on a lanyard. It drops in from above the first time it is visible,
 * sways gently at rest, and can be dragged, springing back when released.
 *
 * Everything runs on motion values, so dragging doesn't re-render React.
 */
export default function HangingIdCard({ photo, name, role, label = "DEVELOPER ID" }) {
  const root = useRef(null);
  const grabbedAt = useRef({ x: 0, y: 0 });
  const hasDropped = useRef(false);
  const inView = useInView(root);
  const reducedMotion = useReducedMotion();

  // Where the pointer wants the card to be. The springs chase these, and that
  // lag is what makes the card feel heavy.
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const springX = useSpring(targetX, HEAVY_SPRING);
  const springY = useSpring(targetY, HEAVY_SPRING);

  const drop = useMotionValue(reducedMotion ? 0 : DROP_FROM);
  const idleX = useMotionValue(0);
  const idleStrength = useSpring(0, { stiffness: 40, damping: 20 });

  // The card's final offset from its resting place.
  const cardX = useTransform([springX, idleX], ([spring, idle]) => spring + idle);

  // The strap runs from a fixed anchor to the card, so its angle and length follow the card.
  const strapAngle = useTransform(
    [cardX, springY],
    ([x, y]) => (-Math.atan2(x, STRAP_LENGTH + y) * 180) / Math.PI,
  );
  const strapHeight = useTransform(
    [cardX, springY],
    ([x, y]) => Math.hypot(x, STRAP_LENGTH + y) + STRAP_OVERHANG,
  );

  // The card follows the strap's angle, and trails behind when moved quickly.
  const lag = useSpring(
    useTransform(useVelocity(cardX), (velocity) => Math.max(-16, Math.min(16, velocity * 0.018))),
    { stiffness: 200, damping: 30 },
  );
  const cardRotate = useTransform([strapAngle, lag], ([angle, tilt]) => angle * 0.6 + tilt);
  const rotateY = useTransform(cardX, [-PULL_SIDEWAYS, PULL_SIDEWAYS], [-28, 28]);
  const rotateX = useTransform(springY, [-PULL_UP, PULL_DOWN], [-6, 14]);

  // Waits until the card is visible, so light-mode visitors see the drop
  // when they switch to dark mode rather than missing it.
  useEffect(() => {
    if (!inView || hasDropped.current) return;
    hasDropped.current = true;
    if (reducedMotion) return;
    animate(drop, 0, { ...DROP_SPRING, onComplete: () => idleStrength.set(1) });
  }, [inView, reducedMotion, drop, idleStrength]);

  useAnimationFrame((time) => {
    if (!inView) return; // nothing to animate while off-screen
    idleX.set(Math.sin((time / 1000 / IDLE_PERIOD) * 2 * Math.PI) * IDLE_SWAY * idleStrength.get());
  });

  const onPanStart = () => {
    grabbedAt.current = { x: springX.get(), y: springY.get() };
    idleStrength.set(0);
  };

  const onPan = (_, { offset }) => {
    const y = grabbedAt.current.y + offset.y;
    targetX.set(softLimit(grabbedAt.current.x + offset.x, PULL_SIDEWAYS));
    targetY.set(softLimit(y, y < 0 ? PULL_UP : PULL_DOWN));
  };

  const onPanEnd = () => {
    targetX.set(0);
    targetY.set(0);
    if (!reducedMotion) idleStrength.set(1);
  };

  return (
    <div ref={root} className="relative z-20 w-72 sm:w-80">
      <motion.div style={{ y: drop }}>
        {/* Lace: MSU-IIT maroon and gold. */}
        <motion.div
          aria-hidden
          className="lanyard absolute left-1/2 -ml-3.5 w-7 overflow-hidden"
          style={{
            top: -STRAP_OVERHANG,
            height: strapHeight,
            rotate: strapAngle,
            transformOrigin: `50% ${STRAP_OVERHANG}px`,
          }}
        >
          <span className="block h-full text-center font-mono text-[10px] leading-7 font-bold tracking-[0.2em] whitespace-nowrap text-msu-gold [writing-mode:vertical-rl]">
            {"MSU-IIT • ".repeat(12)}
          </span>
        </motion.div>

        <div style={{ height: STRAP_LENGTH }} />

        {/* `touch-pan-y`: on phones, sideways swipes swing the card and vertical swipes still scroll. */}
        <motion.div
          onPanStart={onPanStart}
          onPan={onPan}
          onPanEnd={onPanEnd}
          className="relative cursor-grab touch-pan-y select-none active:cursor-grabbing"
          style={{
            x: cardX,
            y: springY,
            rotate: cardRotate,
            rotateX,
            rotateY,
            originY: 0,
            transformPerspective: 900,
          }}
        >
          <div
            aria-hidden
            className="absolute -top-3 left-1/2 z-10 h-5 w-9 -translate-x-1/2 rounded-sm border border-white/20 bg-gradient-to-b from-zinc-300 to-zinc-500"
          />

          <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-zinc-800 to-zinc-950 p-4 pt-5 text-ink shadow-[0_40px_80px_-20px_rgb(0_0_0/0.9)]">
            <div aria-hidden className="mx-auto h-2.5 w-14 rounded-full bg-page ring-1 ring-white/15" />

            <div className="mt-3 flex items-center justify-between font-mono text-xs text-muted">
              <span>{label}</span>
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
            </div>

            {/* Stops the browser's own image-drag from taking over the card drag. */}
            <div className="pointer-events-none mt-3 aspect-[4/5] overflow-hidden rounded-lg">
              <Photo src={photo} alt={`Portrait of ${name}`} />
            </div>

            <p className="mt-4 text-xl leading-tight font-bold uppercase">
              <Field value={name} />
            </p>
            <p className="mt-1 text-sm text-muted">
              <Field value={role} />
            </p>

            <div aria-hidden className="barcode mt-4 h-7 opacity-70" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
