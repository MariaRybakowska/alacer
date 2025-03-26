"use client";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:anna.rybakowska@alacer.pl?subject=Wiadomość od ${
      formData.name
    }&body=${encodeURIComponent(
      `Od: ${formData.name}\nEmail: ${formData.email}\n\nWiadomość:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    // Clear form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="border-t border-[#4F382B] py-6 mt-24 mb-24"
    >
      <div className="xl:grid xl:grid-cols-12 xl:gap-8">
        <h2 className="text-3xl text-[#917E6E] uppercase mb-6 xl:mb-0 xl:col-span-3">
          napisz do nas
        </h2>
        <div className="xl:col-span-9 xl:pl-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-[74px]">
            <form onSubmit={handleSubmit} className="flex-grow max-w-[640px]">
              <input
                className="w-full bg-[#ECE4DC] p-5 mb-6"
                placeholder="Imię i Nazwisko"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                type="email"
                className="w-full bg-[#ECE4DC] p-5 mb-6"
                placeholder="Mail"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <textarea
                className="w-full bg-[#ECE4DC] p-5 mb-6 h-24"
                placeholder="Napisz wiadomość"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              ></textarea>
              <button
                type="submit"
                className="border border-[#34302D] rounded px-8 py-2 text-lg text-[#4F382B] hover:bg-[#34302D] hover:text-white transition-colors min-w-[200px]"
              >
                Wyślij
              </button>
            </form>
            <div className="lg:w-[300px] shrink-0">
              <div className="mb-12">
                <p className="text-[#a5a2a0] text-base mb-1">telefon</p>
                <p className="text-[#4F382B] text-xl font-bold">
                  +48 884 921 333
                </p>
              </div>
              <div className="mb-9">
                <p className="text-[#a5a2a0] text-base mb-1">mail</p>
                <p className="text-[#4F382B] text-xl font-bold">
                  anna.rybakowska@alacer.pl
                </p>
              </div>
              <div>
                <p className="text-[#a5a2a0] text-base mb-1">adres</p>
                <p className="text-[#4F382B] text-xl font-bold leading-tight">
                  ul. Malinowa 13
                  <br />
                  60-185 Skórzewo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
