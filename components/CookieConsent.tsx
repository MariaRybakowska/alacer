"use client";
import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookieConsent");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#4F382B]/20 shadow-lg">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Content */}
          <div className="flex-1">
            <h3 className="text-lg text-[#4F382B] font-medium mb-2">
              Polityka plików cookie
            </h3>
            <p className="text-sm text-[#34302D]/80 leading-relaxed">
              Używamy plików cookie, aby zapewnić najlepsze doświadczenia na
              naszej stronie i analizować ruch.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
            <button
              onClick={declineCookies}
              className="px-6 py-2 text-sm text-[#4F382B] border border-[#4F382B] rounded-full hover:bg-[#4F382B] hover:text-white transition-colors duration-200"
            >
              Odrzuć
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 text-sm bg-[#4F382B] text-white rounded-full hover:bg-[#917E6E] transition-colors duration-200"
            >
              Akceptuję
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
