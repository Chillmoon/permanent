import React, { useEffect } from "react";

const FacebookPixel: React.FC = () => {
  useEffect(() => {
    const loadFacebookPixelScript = async () => {
      try {
        const response = await fetch("/facebook-pixel.js");
        const scriptCode = await response.text();

        const scriptElement = document.createElement("script");
        scriptElement.innerHTML = scriptCode;
        document.head.appendChild(scriptElement);
      } catch (error) {
        console.error("Failed to load Facebook Pixel script", error);
      }
    };

    loadFacebookPixelScript();
  }, []);

  return null;
};

export default FacebookPixel;
