// app/page.tsx
"use client";

const KITCHENS = [
  { name: "CopperHog", tagline: "Smoked meats & flame-grilled favourites" },
  { name: "PourHouse", tagline: "Craft drinks, cocktails & good vibes" },
  { name: "Mozza Pizza", tagline: "Wood-fired, crispy, cheesy goodness" },
  { name: "Hot Shot Deli", tagline: "Loaded buns, fries & deli snacks" },
  { name: "Noodz", tagline: "Bowls, stir-fries & noodle cravings" },
  { name: "Loko", tagline: "Local favourites with a twist" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
            Lusaka · Food Court
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Market Square
            <span className="block text-emerald-300">
              Eat, drink & hang out.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm sm:text-base text-slate-300">
            Multiple kitchens, one vibrant space. Browse menus, find your new
            favourite spot, and plan your next meetup at Market Square.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#kitchens"
              className="rounded-full border border-emerald-300 px-6 py-2 text-sm font-medium hover:bg-emerald-300 hover:text-slate-950 transition"
            >
              View the kitchens
            </a>
            <a
              href="#visit"
              className="rounded-full border border-slate-600 px-6 py-2 text-sm font-medium hover:border-emerald-300 transition"
            >
              Plan your visit
            </a>
          </div>
        </div>
      </section>

      {/* Kitchens grid */}
      <section
        id="kitchens"
        className="border-t border-slate-800 bg-slate-900/40"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">
                Kitchens at Market Square
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Tap a brand to see its menu (coming soon).
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {KITCHENS.map((kitchen) => (
              <article
                key={kitchen.name}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 hover:border-emerald-300/70 hover:bg-slate-900/80 transition"
              >
                <h3 className="text-lg font-semibold">{kitchen.name}</h3>
                <p className="mt-1 text-xs text-slate-300">
                  {kitchen.tagline}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Visit section */}
      <section id="visit" className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Visit Market Square
          </h2>

          <div className="mt-6 grid gap-8 md:grid-cols-3 text-sm">
            <div>
              <h3 className="font-medium text-emerald-300">Location</h3>
              <p className="mt-2 text-slate-300">
                [Add address here]<br />
                Lusaka, Zambia
              </p>
            </div>
            <div>
              <h3 className="font-medium text-emerald-300">Opening Hours</h3>
              <p className="mt-2 text-slate-300">
                Mon–Thu: 11:00 – 22:00<br />
                Fri–Sun: 11:00 – late
              </p>
            </div>
            <div>
              <h3 className="font-medium text-emerald-300">Contact</h3>
              <p className="mt-2 text-slate-300">
                Phone: [add number]<br />
                Instagram: @marketsquarezed
              </p>
            </div>
          </div>

          <p className="mt-10 text-xs text-slate-500 border-t border-slate-800 pt-4">
            © {new Date().getFullYear()} Market Square. Site crafted by The Forge.
          </p>
        </div>
      </section>
    </main>
  );
}
