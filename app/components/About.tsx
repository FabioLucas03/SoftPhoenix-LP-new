import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section className="about-section py-6" id="about">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-6 has-equal-height" data-aos="fade-right">
            <div className="content-box">
              <h2 className="title is-2 has-text-warning">About Us</h2>
              <div className="content-wrapper">
                <h3 className="subtitle is-3 has-text-white">Who We Are</h3>
                <p className="description has-text-light is-size-5">
                  We are a team of passionate software engineers, AI specialists, 
                  and cloud architects dedicated to building high-performance applications. 
                  With a focus on innovation, we help businesses grow by delivering 
                  scalable and intelligent tech solutions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="column is-6 has-equal-height" data-aos="fade-left">
            <div className="about-image-container">
              <Image
                src="/quemsomos.webp"
                alt="Who We Are Illustration"
                width={800}
                height={600}
                className="about-image"
                priority
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 