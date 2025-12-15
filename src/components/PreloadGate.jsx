// components/PreloadGate.js
'use client';

import { useEffect, useState } from 'react';
import useLandingPageStore from '../../libs/useLandingPageStore';
// import useLandingPageStore from '@/libs/useLandingPageStore';

export default function PreloadGate({ children }) {
  const details = useLandingPageStore((state) => state.details);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (details) {
      const timer = setTimeout(() => setReady(true), 200); // optional delay for UX
      return () => clearTimeout(timer);
    }
  }, [details]);

  if (!ready) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
        <span className="animate-pulse text-xl">Loading site...</span>
      </div>
    );
  }

  return children;
}
