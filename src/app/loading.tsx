import Image from "next/image";

export default function Loading() {
  return (
    <main
      className="min-h-screen flex items-center justify-center text-slate-50"
      style={{
        background:
          "linear-gradient(to bottom, #1a1a1a 0%, #111111 40%, #050505 100%)",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-32 h-32 md:w-40 md:h-40 animate-pulse">
          <Image
            src="/brands/market-square.svg"
            alt="MarketSquare Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <p className="text-[0.7rem] md:text-xs tracking-[0.25em] uppercase text-slate-300">
          Loading MarketSquare…
        </p>

        <div className="h-6 w-6 rounded-full border border-slate-700 border-t-slate-100 animate-spin" />
      </div>
    </main>
  );
}
