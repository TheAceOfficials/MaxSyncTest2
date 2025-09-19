export default function Home() {
  const traktAuthUrl = `https://trakt.tv/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_TRAKT_CLIENT_ID}&redirect_uri=${process.env.TRAKT_REDIRECT_URI}`;

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">MaxSync</h1>
        <a href={traktAuthUrl}>
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-lg font-semibold">
            Login with Trakt
          </button>
        </a>
      </div>
    </div>
  );
}
