import React from 'react';
import { tickerPhrases } from '../../data/homeData';

export default function TickerMarquee() {
  // Duplicate array so ticker loop scrolls seamlessly
  const displayItems = [...tickerPhrases, ...tickerPhrases];

  return (
    <div className="ticker-banner">
      <div className="ticker-track">
        {displayItems.map((phrase, idx) => (
          <span key={idx}>{phrase}</span>
        ))}
      </div>
    </div>
  );
}
