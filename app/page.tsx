'use client'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import AiMachineLearning from './components/AiMachineLearning'
import CloudServices from './components/CloudServices'
import WebMobileServices from './components/WebMobileServices'
import ApiIntegrations from './components/ApiIntegrations'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      mirror: true,
      offset: 50,
    });
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <AiMachineLearning />
      <CloudServices />
      <WebMobileServices />
      <ApiIntegrations />
    </main>
  );
}