// This file forces the favicon to be displayed by directly serving it
import { useEffect } from 'react';

export const FaviconFixer = () => {
  useEffect(() => {
    // Force favicon update on component mount
    const link = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (link) {
      link.href = '/favicon.ico?' + new Date().getTime();
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = '/favicon.ico?' + new Date().getTime();
      newLink.type = 'image/x-icon';
      document.head.appendChild(newLink);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default FaviconFixer;
