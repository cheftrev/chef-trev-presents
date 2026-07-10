import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [location] = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" });
    // Move focus to main content for screen readers after route change
    const main = document.getElementById("main-content");
    if (main) {
      main.focus({ preventScroll: true });
    }
  }, [location]);

  return null;
}
