const SITE_URL = "https://cheftrevpresents.com";

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export function setSocialMeta(opts: { title: string; description: string; path: string; image: string }) {
  const url = `${SITE_URL}${opts.path}`;
  const image = opts.image.startsWith("http") ? opts.image : `${SITE_URL}${opts.image}`;
  setCanonical(url);
  setMetaTag("property", "og:title", opts.title);
  setMetaTag("property", "og:description", opts.description);
  setMetaTag("property", "og:url", url);
  setMetaTag("property", "og:type", "website");
  setMetaTag("property", "og:image", image);
  setMetaTag("name", "twitter:title", opts.title);
  setMetaTag("name", "twitter:description", opts.description);
}

export function setNoIndex() {
  setMetaTag("name", "robots", "noindex, follow");
}
