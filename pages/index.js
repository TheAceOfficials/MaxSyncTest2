import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-[#121212] text-white px-6 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-purple-400">MaxSync</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="bg-[#1f1f1f] px-4 py-2 rounded-lg focus:outline-none w-72"
          />
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-10 h-10 rounded-full border border-purple-400"
          />
        </div>
      </div>

      {/* Continue Watching */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Continue Watching</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {["/dune.jpg", "/arcane.jpg", "/severance.jpg"].map((img, i) => (
            <div key={i} className="relative w-60 h-32 bg-gray-800 rounded-lg overflow-hidden">
              <img src={img} alt="" className="object-cover w-full h-full" />
              <div className="absolute bottom-0 left-0 h-1 bg-purple-500 w-2/4"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Schedule */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Upcoming Scheduled</h2>
        <div className="flex gap-6">
          <div className="bg-[#1f1f1f] p-4 rounded-lg w-64">
            <p className="text-sm text-gray-400">S5 E6</p>
            <h3 className="font-bold">Arcane</h3>
            <p className="text-xs text-gray-400">Nov 28, 6:30 PM</p>
          </div>
          <div className="bg-[#1f1f1f] p-4 rounded-lg w-64">
            <p className="text-sm text-gray-400">S6 E6</p>
            <h3 className="font-bold">The Expanse</h3>
            <p className="text-xs text-gray-400">Dec 10, 5:30 PM</p>
          </div>
        </div>
      </section>

      {/* Recently Watched */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Recently Watched</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {["/got.jpg", "/witcher.jpg", "/foundation.jpg"].map((img, i) => (
            <div key={i} className="w-36 h-52 rounded-lg overflow-hidden">
              <img src={img} alt="" className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
      </section>

      {/* Favourites */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Favourites</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {["/friends.jpg", "/loki.jpg"].map((img, i) => (
            <div key={i} className="w-36 h-52 rounded-lg overflow-hidden">
              <img src={img} alt="" className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Widgets */}
      <div className="flex gap-6">
        {/* Total Watch Time */}
        <div className="bg-[#1f1f1f] p-6 rounded-lg w-1/3">
          <h3 className="text-lg font-semibold mb-2">Total Watch Time</h3>
          <p className="text-3xl font-bold text-purple-400">1,870 Hours</p>
          <p className="text-sm text-gray-400">Movies 450 | TV Shows 650</p>
        </div>

        {/* Advanced Options */}
        <div className="bg-[#1f1f1f] p-6 rounded-lg flex-1">
          <h3 className="text-lg font-semibold mb-4">Advanced Options</h3>
          <div className="flex flex-col gap-4">
            <button className="bg-purple-500 py-2 rounded-lg hover:bg-purple-600 transition">
              Watchlist
            </button>
            <button className="bg-purple-500 py-2 rounded-lg hover:bg-purple-600 transition">
              Collections
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
