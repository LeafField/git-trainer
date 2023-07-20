"use client";
import Script from "next/script";
import React, { useEffect } from "react";
import { GA_TRACKING_ID } from "../../libs/gtag";
import { usePathname } from "next/navigation";
import * as gtag from "../../libs/gtag";

const GaScript = () => {
  const pathname = usePathname();

  useEffect(() => {
    gtag.pageview(pathname);
  }, [pathname]);

  return (
    <>
      {GA_TRACKING_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            strategy="afterInteractive"
            id="ga-load"
          />
          <Script id="ga-load-script">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `}
          </Script>
        </>
      )}
    </>
  );
};

export default GaScript;
