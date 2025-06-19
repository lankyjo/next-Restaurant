// components/LandingPageInitializer.js
'use client';

import { useEffect } from 'react';
import useLandingPageStore from '../../libs/useLandingPageStore';
// import useLandingPageStore from '@/libs/useLandingPageStore';

export default function LandingPageInitializer({ data }) {
  const setDetails = useLandingPageStore((state) => state.setDetails);

  // Only set once, no need to re-fetch
  useEffect(() => {
    setDetails(data);
  }, [data, setDetails]);

  return null;
}
