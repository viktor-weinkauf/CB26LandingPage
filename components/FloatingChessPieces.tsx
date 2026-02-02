import React from 'react';

/**
 * Floating chess piece background decoration
 * Subtle animated chess pieces in the background
 */
export const FloatingChessPieces: React.FC = () => {
  return (
    <div className="floating-pieces" aria-hidden="true">
      <div className="floating-piece floating-piece--1">♔</div>
      <div className="floating-piece floating-piece--2">♕</div>
      <div className="floating-piece floating-piece--3">♖</div>
      <div className="floating-piece floating-piece--4">♗</div>
      <div className="floating-piece floating-piece--5">♘</div>
      <div className="floating-piece floating-piece--6">♙</div>
      <div className="floating-piece floating-piece--7">♔</div>
      <div className="floating-piece floating-piece--8">♕</div>
    </div>
  );
};
