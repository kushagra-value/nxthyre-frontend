import React, { useEffect, useRef } from 'react';
import '../styles/bubblesAnimation.css';

const BubblesBackground = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      
      // Random bubble properties
      const size = Math.random() * 60 + 20; // 20px to 80px
      const positionX = Math.random() * 100; // 0% to 100%
      const delay = Math.random() * 10; // 0s to 10s
      const duration = Math.random() * 10 + 10; // 10s to 20s
      
      // Apply styles
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${positionX}%`;
      bubble.style.animationDelay = `${delay}s`;
      bubble.style.animationDuration = `${duration}s`;
      
      // Add to container
      container.appendChild(bubble);
      
      // Remove bubble after animation completes
      setTimeout(() => {
        if (container.contains(bubble)) {
          container.removeChild(bubble);
        }
      }, duration * 1000 + delay * 1000);
    };
    
    // Create initial bubbles
    for (let i = 0; i < 10; i++) {
      createBubble();
    }
    
    // Create bubbles periodically
    const intervalId = setInterval(createBubble, 3000);
    
    // Clean up
    return () => {
      clearInterval(intervalId);
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  return (
    <div className="bubbles-container" ref={containerRef}>
      {/* Bubbles will be created dynamically */}
    </div>
  );
};

export default BubblesBackground;