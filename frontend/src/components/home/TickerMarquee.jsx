import React from 'react';
import PropTypes from 'prop-types';
import { tickerPhrases } from '../../data/homeData';

export default function TickerMarquee({ phrases = tickerPhrases }) {
  // Duplicate array so ticker loop scrolls seamlessly
  const displayItems = [...phrases, ...phrases];

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

TickerMarquee.propTypes = {
  phrases: PropTypes.arrayOf(PropTypes.string)
};
