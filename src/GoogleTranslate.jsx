import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    // Prevent duplicate script injection
    if (document.getElementById("gtranslate-script")) return;

    // Set the GTranslate config
    window.gtranslateSettings = {
      default_language: "en",
      detect_browser_language: true,
      languages: ["en", "ar", "hi", "ml"],
      wrapper_selector: ".gtranslate_wrapper",
    };

    // Inject the script
    const script = document.createElement("script");
    script.id = "gtranslate-script";
    script.src = "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
    script.defer = true;
    document.body.appendChild(script);

    // MutationObserver to style the injected <select>
    const observer = new MutationObserver(() => {
      const select = document.querySelector(".gtranslate_wrapper select");
      if (select && !select.dataset.styled) {
        select.dataset.styled = "true"; // Avoid re-styling

        // Apply inline styles
        select.style.backgroundColor = "#000000";
        select.style.color = "#00000";
        select.style.fontSize = "0.75rem"; // text-xs
        select.style.padding = "0.25rem 0.5rem";
        select.style.borderRadius = "0.375rem";
        select.style.border = "1px solid #4B5563";
        select.style.outline = "none";
        select.style.appearance = "none";
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-center gap-2 px-4 font-normal relative">
      <span className="font-normal text-white text-sm">Display Language</span>
      <div className="gtranslate_wrapper" />
    </div>
  );
};

export default GoogleTranslate;
