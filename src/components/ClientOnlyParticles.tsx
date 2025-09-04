'use client';

import React, { useEffect, useState } from 'react';
import ParticlesComponent from './ParticlesComponent';

const ClientOnlyParticles = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <ParticlesComponent />;
};

export default ClientOnlyParticles;
