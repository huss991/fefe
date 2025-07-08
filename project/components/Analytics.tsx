"use client";

import { useEffect } from 'react';

// Analytics stub function
declare global {
  interface Window {
    __boltTrack: (event: string, data?: any) => void;
  }
}

export function Analytics() {
  useEffect(() => {
    // Initialize the analytics stub
    window.__boltTrack = (event, data) => {
      console.log(`Analytics event: ${event}`, data);
      // This is a stub that would be replaced with actual analytics implementation
    };
    
    // Track page view on mount
    window.__boltTrack('page_view', {
      page: window.location.pathname,
    });
  }, []);
  
  return null;
}