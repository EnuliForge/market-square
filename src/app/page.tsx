"use client";

import { useState } from "react";
import Image from "next/image";
import { CATEGORIES, BRANDS } from "@/data/marketsquare";

export default function MarketSquarePage() {
  const [openBrandId, setOpenBrandId] = useState<string | null>(null);

  const handleBrandClick = (id: string) => {
    setOpenBrandId((current) => (current === id ? null : id));
  };

  return (
    <main
      className="min-h-screen text-slate-50"
      style={{
        background:
          "linear-gradient(to bottom, #1a1a1a 0%, #111111 40%, #050505 100%)",
      }}
    >
      {/* Header with logo (NO title text below it now) */}
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-2 flex flex-col items-center text-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <Image
            src="/brands/market-square.svg"
            alt="MarketSquare Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <p className="mt-1 max-w-xl text-slate-300 text-sm md:text-base">
          One space, many experiences. Tap a brand to see what&apos;s inside.
        </p>
      </section>

      {/* Segments */}
      <section className="max-w-5xl mx-auto px-4 mt-10 pb-16 space-y-10">
        {CATEGORIES.map((category) => {
          const brands = BRANDS.filter((b) => b.category === category.id);
          if (!brands.length) return null;

          return (
            <div key={category.id} className="space-y-4">
              {/* Section heading with dividing lines */}
              <div className="flex items-center w-full justify-center gap-4">
                <div className="flex-1 h-px bg-slate-500/40" />
                <h2 className="text-lg md:text-xl font-semibold text-slate-200 text-center whitespace-nowrap">
                  {category.label}
                </h2>
                <div className="flex-1 h-px bg-slate-500/40" />
              </div>

              {/* Accordion cards */}
              <div className="space-y-4">
                {brands.map((brand) => {
                  const isOpen = brand.id === openBrandId;

                  return (
                    <div
                      key={brand.id}
                      style={isOpen ? { borderColor: brand.bgColor } : {}}
                      className="rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden backdrop-blur-sm"
                    >
                      <button
                        type="button"
                        onClick={() => handleBrandClick(brand.id)}
                        style={{
                          backgroundColor: brand.bgColor,
                          color: brand.textColor,
                        }}
                        className={`w-full flex items-center justify-start gap-4 px-4 py-5 md:px-5 md:py-6 text-left transition-transform duration-200
                          ${
                            isOpen
                              ? "scale-[1.01] shadow-xl"
                              : "hover:scale-[1.01] hover:shadow-md"
                          }`}
                      >
                        {/* LOGO — transparent background */}
                        <div className="relative h-12 md:h-16 w-40 md:w-52 overflow-visible shrink-0">
                          <Image
                            src={brand.logo}
                            alt={`${brand.name} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>

                        {/* Tagline + tags */}
                        <div className="flex flex-col gap-1">
                          <p className="text-sm md:text-base opacity-90">
                            {brand.blurb}
                          </p>

                          {brand.tags && brand.tags.length > 0 && (
                            <p className="text-[0.7rem] md:text-xs uppercase tracking-wide opacity-80">
                              {brand.tags.join(" | ")}
                            </p>
                          )}
                        </div>
                      </button>

                      {/* Animated menu panel */}
                      <div
                        className={`border-t border-slate-800 bg-slate-900/90 overflow-hidden transition-all duration-300 ease-out
                          ${
                            isOpen
                              ? "max-h-[9999px] opacity-100 py-3 md:py-4"
                              : "max-h-0 opacity-0 py-0"
                          }`}
                      >
                        <div className="px-4 md:px-5">
                          {brand.menu && brand.menu.length > 0 ? (
                            // Full structured menu (e.g. Copper Hog, Dumpling Hutt)
                            <div className="space-y-5">
                              {brand.menu.map((section) => (
                                <div key={section.id} className="space-y-2">
                                  {/* section header */}
                                  <div className="flex items-baseline justify-between gap-4">
                                    <h3 className="text-xs md:text-sm font-semibold text-slate-100 uppercase tracking-wide">
                                      {section.label}
                                    </h3>
                                    {section.columns &&
                                      section.columns.length > 1 && (
                                        <div className="hidden md:flex gap-8 text-[0.65rem] text-slate-400 uppercase tracking-wide">
                                          {section.columns.map((col) => (
                                            <span key={col}>{col}</span>
                                          ))}
                                        </div>
                                      )}
                                  </div>

                                  {/* section items */}
                                  <ul className="space-y-1 text-sm md:text-base">
  {section.items.map((item, index) => {

    // TITLE DIVIDER (e.g. "Optional Items")
    if (item.name === "__title__") {
      return (
        <li
          key={`${section.id}-title-${index}`}
          className="mt-4 mb-1"
        >
          <p className="text-sm md:text-base font-semibold text-slate-200">
            {item.label}
          </p>
          <div className="h-px bg-slate-700/60 mt-1 mb-2" />
        </li>
      );
    }

    const cols = section.columns ?? [];
    const hasMultiple = cols.length > 1;

    return (
      <li
        key={`${section.id}-${item.name}-${index}`}
        className="flex items-baseline justify-between gap-3 rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-2"
      >
        <div className="flex-1 min-w-0">
          <p className="truncate">{item.name}</p>
          {item.description && (
            <p className="text-xs text-slate-300 mt-0.5">
              {item.description}
            </p>
          )}
        </div>

        <div className="text-right text-xs md:text-sm whitespace-nowrap">
          {hasMultiple
            ? item.prices
                .map((p, i) =>
                  p && cols[i] ? `${cols[i]} ${p}` : p || ""
                )
                .filter(Boolean)
                .join(" | ")
            : item.prices[0]}
        </div>
      </li>
    );
  })}
</ul>


                                  {section.note && (
                                    <p className="text-[0.7rem] text-slate-400 mt-1">
                                      {section.note}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : (
                            // Fallback: simple highlights list
                            <>
                              <p className="text-xs md:text-sm text-slate-300 mb-2">
                                Menu highlights
                              </p>
                              <ul className="grid gap-2 md:grid-cols-2 text-sm md:text-base">
                                {brand.items.map((item) => (
                                  <li
                                    key={item}
                                    className="rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-2"
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
