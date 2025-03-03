import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 
            className="title is-1 mb-6 hero-title" 
            data-aos="fade-up"
            style={{ fontSize: '4rem' }}
          >
            Transforming Ideas Into
            <br />
            <span className="has-text-warning">Digital Excellence</span>
          </h1>
          <p 
            className="subtitle is-3 mb-6 hero-subtitle" 
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            We craft innovative solutions that drive business growth
          </p>
        </div>
      </div>
    </section>
  );
} 