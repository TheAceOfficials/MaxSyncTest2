// pages/home.js
import { useEffect } from "react";
import { useRouter } from "next/router";

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h3 className="text-gray-300 uppercase tracking-widest mb-3 font-semibold">
        {title}
      </h3>
      <div className="flex space-x-4 overflow-x-auto">{children}</div>
    </div>
  );
}

function MediaCard({ image, title, subtitle }) {
  return (
    <div className="bg-[#2b2c37] rounded-lg flex-shrink-0 w-44 shadow-lg">
      <img src={image} alt={title} className="w-full h-28 object-cover rounded-t-lg" />
      <div className="p-3 text-white">
        <div className="font-semibold text-sm">{title}</div>
        <div className="text-xs text-gray-400">{subtitle}</div>
      </div>
    </div>
  );
}

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const tokens = localStorage.getItem("trakt_tokens");
    if (!tokens) {
      router.replace("/"); // redirect to login if not logged in
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-[#181922] p-8 text-white font-sans">
      {/* Top bar */}
      <div className="flex justify-between mb-6 items-center">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-gradient-to-r from-purple-400 to-blue-600 text-white text-xl font-bold rounded-lg flex items-center justify-center">
            M
          </div>
          <h1 className="text-xl font-bold tracking-wide">MaxSync</h1>
        </div>
        <div className="flex items-center space-x-3">
          <input
            className="bg-[#2b2c37] rounded-md py-2 px-3 text-sm text-gray-300 placeholder-gray-400 border border-[#3b3c4b]"
            placeholder="Search"
          />
          <button className="bg-[#2b2c37] px-4 py-2 rounded-md border border-[#3b3c4b] text-xs text-gray-400 hover:bg-[#3b3c4b]">
            Categories
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden">
            <img src="https://placehold.co/32x32/png" alt="Profile" />
          </div>
        </div>
      </div>

      {/* Sections */}
      <Section title="Continue Watching">
        {[1, 2, 3, 4, 5].map((n) => (
          <MediaCard
            key={n}
            image={`https://placehold.co/176x110/png?text=Show+${n}`}
            title={`Show ${n}`}
            subtitle={`S1 E${n + 2}`}
          />
        ))}
      </Section>

      <Section title="Upcoming Scheduled">
        {[1, 2, 3].map((n) => (
          <div key={n} className="bg-[#23243a] rounded-xl px-5 py-3 w-60 text-xs text-gray-400">
            <div className="font-semibold text-white mb-1">Arcane</div>
            <div>S2 E6 - Tomorrow 8:00PM</div>
          </div>
        ))}
      </Section>

      <Section title="Recently Watched">
        {[1, 2, 3, 4].map((n) => (
          <MediaCard
            key={n}
            image={`https://placehold.co/140x180/png?text=Watched+${n}`}
            title={`Movie ${n}`}
            subtitle="2023"
          />
        ))}
      </Section>

      <Section title="Favourites">
        {[1, 2, 3, 4].map((n) => (
          <MediaCard
            key={n}
            image={`https://placehold.co/140x180/png?text=Fav+${n}`}
            title={`Fav ${n}`}
            subtitle=""
          />
        ))}
      </Section>

      {/* Footer stats + buttons */}
      <div className="flex flex-wrap gap-8 max-w-4xl mt-12">
        <div className="flex-1 bg-[#212233] rounded-xl p-6 text-gray-300">
          <div className="text-xs mb-2">TOTAL WATCH TIME</div>
          <div className="text-white font-bold text-3xl mb-2">1,870</div>
          <div className="text-xs flex space-x-4">
            <span><strong className="text-white">450</strong> MOVIES</span>
            <span><strong className="text-white">1,000</strong> TV SHOWS</span>
          </div>
        </div>
        <button className="flex-1 bg-[#212233] hover:bg-[#2f2f52] rounded-xl p-4 text-white flex justify-between items-center">
          <span>Watchlist</span>
          <span className="bg-gray-700 px-2 py-1 text-xs rounded">100,655</span>
        </button>
        <button className="flex-1 bg-[#212233] hover:bg-[#2f2f52] rounded-xl p-4 text-white flex justify-between items-center">
          <span>Collections</span>
          <span className="bg-gray-700 px-2 py-1 text-xs rounded">100,655</span>
        </button>
      </div>
    </div>
  );
}
