import { useEffect } from "react";

const SITE_URL = "https://cheftrevpresents.com";

export function breadcrumb(pageName: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: pageName, item: `${SITE_URL}${path}` },
    ],
  };
}

export function useJsonLd(id: string, data: object) {
  useEffect(() => {
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
    return () => {
      script?.remove();
    };
  }, [id, JSON.stringify(data)]);
}
