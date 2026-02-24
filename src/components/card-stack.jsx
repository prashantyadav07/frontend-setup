import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

export function CardStack({ items, externalIndex = null, cardWidth = 480, cardHeight = 320 }) {
  const [cards, setCards] = useState(items);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dragY = useMotionValue(0);
  const rotateX = useTransform(dragY, [-200, 0, 200], [15, 0, -15]);

  // Configuration
  const offset = 8;
  const scaleStep = 0.05;
  const dimStep = 0.1;
  const borderRadius = 16;
  const swipeThreshold = 50;

  const spring = {
    type: "spring",
    stiffness: 200,
    damping: 25
  };

  const moveToEnd = () => {
    setCards(prev => [...prev.slice(1), prev[0]]);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const moveToStart = () => {
    setCards(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Sync with external index (scroll-driven)
  useEffect(() => {
    if (externalIndex !== null) {
      const targetIndex = externalIndex % items.length;
      // This is a bit tricky because the cards array itself is being rotated.
      // For simple scroll-driven transition where we don't 'drag' while scrolling,
      // we can just re-order the cards based on the index.
      const newCards = [...items.slice(targetIndex), ...items.slice(0, targetIndex)];
      setCards(newCards);
      setCurrentIndex(targetIndex);
    }
  }, [externalIndex, items]);

  const handleDragEnd = (_, info) => {
    const velocity = info.velocity.y;
    const offsetVal = info.offset.y;

    if (Math.abs(offsetVal) > swipeThreshold || Math.abs(velocity) > 500) {
      if (offsetVal < 0 || velocity < 0) {
        moveToEnd();
      } else {
        moveToStart();
      }
    }
    dragY.set(0);
  };

  return (
    <div className="relative flex items-center justify-center overflow-visible" style={{ width: cardWidth, height: cardHeight + 40 }}>
      <div className="relative w-full h-full">
        <AnimatePresence initial={false}>
          {cards.map((item, i) => {
            const isFront = i === 0;
            const brightness = Math.max(0.4, 1 - i * dimStep);
            const zIndex = cards.length - i;

            return (
              <motion.li
                key={item.id}
                className="absolute w-full h-full list-none overflow-hidden border-2 border-white shadow-2xl bg-white"
                style={{
                  borderRadius: `${borderRadius}px`,
                  cursor: isFront ? 'grab' : 'auto',
                  touchAction: 'none',
                  rotateX: isFront ? rotateX : 0,
                  transformPerspective: 1000,
                  width: cardWidth,
                  height: cardHeight
                }}
                animate={{
                  top: `${i * -offset}%`,
                  scale: 1 - i * scaleStep,
                  filter: `brightness(${brightness})`,
                  zIndex: zIndex,
                  opacity: 1
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  y: -100,
                  transition: { duration: 0.2 }
                }}
                transition={spring}
                drag={isFront ? 'y' : false}
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.6}
                onDrag={(_, info) => isFront && dragY.set(info.offset.y)}
                onDragEnd={handleDragEnd}
              >
                <div className="relative h-full w-full">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover pointer-events-none select-none"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white font-serif text-2xl mb-1">{item.title}</h3>
                    <p className="text-white/70 text-sm line-clamp-2 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}