/* eslint-disable @typescript-eslint/naming-convention */
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

export const GA_ID = process.env["NEXT_PUBLIC_GOOGLE_ANALYTICS_ID"] || "";

// IDが取得できない場合を想定する
export const isExistsGaId = GA_ID !== "";

// PVを測定する
export const pageview = (path: string) => {
  window.gtag("config", GA_ID, {
    page_path: path,
  });
};

// GAイベントを発火させる
export const event = ({ action, category, label, value = "" }: Event) => {
  if (!isExistsGaId) {
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: label ? JSON.stringify(label) : "",
    value,
  });
};

// _app.tsx で読み込む
export const usePageView = () => {
  const router = useRouter();

  useEffect(() => {
    if (!isExistsGaId) {
      return;
    }

    const handleRouteChange = (path: string) => {
      pageview(path);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
};

// _app.tsx で読み込む
export const GoogleAnalytics = () => (
  <>
    {isExistsGaId && (
      <>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script
          id="gtag_init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line @typescript-eslint/naming-convention
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());    
              gtag('config', '${GA_ID}');
            `,
          }}
        />
      </>
    )}
  </>
);

// イベントを型で管理
type ContactEvent = {
  action: "submit_form";
  category: "contact";
};

type ClickEvent = {
  action: "click";
  category: "other";
};

export type Event = (ContactEvent | ClickEvent) & {
  label?: Record<string, string | number | boolean>;
  value?: string;
};
