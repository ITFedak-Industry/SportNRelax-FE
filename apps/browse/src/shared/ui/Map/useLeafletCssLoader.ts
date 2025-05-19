import { useEffect, useState } from 'react';

export const useLeafletCssLoader = () => {
  const [cssLoaded, setCssLoaded] = useState<boolean | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    link.crossOrigin = '';

    link.onload = () => setCssLoaded(true);
    link.onerror = () => setCssLoaded(false);

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return {
    loading: cssLoaded === null,
    finished: cssLoaded === true,
    error: cssLoaded === false,
  };
};
