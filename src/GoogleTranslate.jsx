import { useEffect } from "react";

const GoogleTranslate = () => {
  const languages = [
    { code: "ml", label: "Malayalam" },
    { code: "hi", label: "Hindi" },
    { code: "ar", label: "Arabic" },
  ];

  useEffect(() => {
    const scriptId = "google-translate-script";
    if (document.getElementById(scriptId)) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleLanguageChange = (langCode) => {
    const select = document.querySelector("select.goog-te-combo");
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className="flex items-center gap-2 px-4 text-white relative">
      <span className="font-normal text-sm"> Display Language</span>
      <select
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="bg-[#2B2B2B] text-xs font-normal text-white px-2 py-1 rounded"
        defaultValue=""
      >
        <option value="" disabled>
          Choose
        </option>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>

      {/* Hidden element required for Google Translate */}
      <div id="google_translate_element" style={{ display: "none" }} />
    </div>
  );
};

export default GoogleTranslate;
