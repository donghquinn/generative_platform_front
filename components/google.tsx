import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const GoogleAd = () => {
    useEffect(() => {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    }, []);
  
    return (
      <div className="googleAd-container">
          <ins 
            className="adsbygoogle"
            style={{display:"block"}}
            data-ad-client="ca-pub-4259757759902386"
            data-ad-slot="7319986359"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
      </div>
    );
  };
  
  export default GoogleAd;