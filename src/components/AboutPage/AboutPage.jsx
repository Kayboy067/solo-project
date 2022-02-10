import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
      <p>Worldwide transfer enables you to transfer money across borders at no cost in the industry with highest level of convenience.
          We are committed to providing you with a modern alternative to the traditional systems of money transfer that are notorious for their high fees and long processing times.
          Fulfilling your money transfer need is our pleasure for $0.00!</p>
      </div>
    </div>
  );
}

export default AboutPage;
