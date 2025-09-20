// pages/home.js (ya pages/index.js)
import { useEffect, useState } from "react";

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h3 className="text-white mb-3 font-semibold tracking-wider">{title}</h3>
      <div>{children}</div>
    </div>
  );
}

function MediaCard({ image, title, subtitle }) {
  return (
    <div className="mr-4 w-36 flex-shrink-0 rounded-lg overflow-hidden bg-[#23242e] shadow">
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="p-2">
        <div className="text-sm font-medium text-white">{title}</div>
        <div className="text-xs text-gray-300">{subtitle}</div>
      </div>
    </div>
  );
}

export default function Home() {
  // Simulate login check
  useEffect(() => {
    const tokens = localStorage.getItem("trakt_tokens");
    if (!tokens) window.location.href = "/login-page";
  }, []);

  return (
    <div className="min-h-screen bg-[#181922] flex justify-center items-center p-6">
      <div className="w-full max-w-5xl bg-[#23242e] rounded-2xl shadow-2xl p-8 relative">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-400 to-blue-500 flex items-center justify-center font-bold text-white text-lg">M</span>
            <span className="text-lg text-white font-bold tracking-wide">MaxSync</span>
          </div>
          {/* Search Bar + Profile */}
          <div className="flex items-center space-x-3">
            <input
              className="bg-[#23242e] border border-[#303147] px-3 py-2 rounded-md w-64 text-sm text-white placeholder-gray-400"
              placeholder="Search"
            />
            <button className="bg-[#23242e] border border-[#303147] px-3 py-2 rounded-md text-xs text-gray-400 ml-2">Categories</button>
            <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden ml-2">
              <img src="https://placehold.co/32x32/png" alt="Profile" />
            </div>
          </div>
        </div>
        
        {/* Continue Watching */}
        <Section title="CONTINUE WATCHING">
          <div className="flex overflow-x-auto pb-2">
            {[1,2,3,4,5].map((n) => (
              <MediaCard 
                key={n}
                image={`https://placehold.co/180x220/png?text=Show+${n}`}
                title={`Show ${n}`}
                subtitle="S1 E4"
              />
            ))}
          </div>
        </Section>

        {/* Upcoming Scheduled */}
        <Section title="UPCOMING SCHEDULED">
          <div className="flex flex-wrap gap-4">
            {[1,2,3].map((n) => (
              <div className="bg-[#23243a] rounded-xl px-4 py-3 text-white w-60" key={n}>
                <div className="font-semibold text-sm">Arcane</div>
                <div className="text-xs text-gray-400">S2 E6 - Tomorrow 8:00PM</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Recently Watched */}
        <Section title="RECENTLY WATCHED">
          <div className="flex overflow-x-auto pb-2">
            {[1,2,3,4].map((n) => (
              <MediaCard 
                key={n}
                image={`https://placehold.co/140x200/png?text=Watched+${n}`}
                title={`Movie ${n}`}
                subtitle="2025"
              />
            ))}
          </div>
        </Section>

        {/* Favourites */}
        <Section title="FAVOURITES">
          <div className="flex overflow-x-auto pb-2">
            {[1,2,3,4,5].map((n) => (
              <MediaCard 
                key={n}
                image={`https://placehold.co/140x200/png?text=Fav+${n}`}
                title={`Fav ${n}`}
                subtitle=""
              />
            ))}
          </div>
        </Section>

        {/* Stats and Watchlist+Collections row */}
        <div className="flex flex-wrap mt-4 space-x-6">
          <div className="flex-1 bg-[#212233] rounded-xl p-6 mb-4 flex flex-col justify-between">
            <div className="text-gray-400 text-xs mb-1">TOTAL WATCH TIME</div>
            <div className="flex items-baseline space-x-1 mb-2">
              <span className="text-3xl text-white font-bold">1,870</span>
              <span className="text-gray-300 text-sm font-bold ml-1">HOURS</span>
            </div>
            <div className="flex text-xs text-gray-300 gap-4">
              <span><span className="font-medium text-white">450</span> MOVIES</span>
              <span><span className="font-medium text-white">1,000</span> TV SHOWS</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <button className="bg-[#202233] hover:bg-[#292952] px-5 py-3 rounded-xl flex items-center justify-between text-white">
              <span>Watchlist</span>
              <span className="text-[10px] bg-gray-700 rounded px-2 py-1">100,655</span>
            </button>
            <button className="bg-[#202233] hover:bg-[#292952] px-5 py-3 rounded-xl flex items-center justify-between text-white">
              <span>Collections</span>
              <span className="text-[10px] bg-gray-700 rounded px-2 py-1">100,655</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
