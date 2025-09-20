// pages/index.js
import Head from "next/head";

export default function Home() {
  const loginWithTrakt = () => {
    const clientId = process.env.NEXT_PUBLIC_TRAKT_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_TRAKT_REDIRECT_URI || "https://max-sync-test2.vercel.app/callback";
    const url = `https://trakt.tv/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=public`;
    window.location.href = url;
  };

  return (
    <>
      <Head>
        <title>MaxSync - Login</title>
      </Head>

      <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        overflow: "hidden",
        fontFamily: "Segoe UI, Arial, sans-serif"
      }}>
        {/* animated background */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(-45deg, #1a1a1a, #3b3b98, #0f2027, #2c5364)",
          backgroundSize: "400% 400%",
          animation: "grad 15s ease infinite",
          zIndex: 0
        }} />
        <style>{`@keyframes grad {0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>

        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "3.5rem", margin: 0, color: "#fff" }}>MaxSync</h1>
          <p style={{ marginTop: 12, marginBottom: 30, opacity: 0.9 }}>
            Track your Movies, TV Shows & Anime with Trakt
          </p>
          <button
            onClick={loginWithTrakt}
            style={{
              background: "linear-gradient(90deg,#ff4b2b,#ff416c)",
              color: "#fff",
              padding: "14px 42px",
              borderRadius: 30,
              border: "none",
              fontWeight: "700",
              cursor: "pointer",
              boxShadow: "0 6px 22px rgba(255,65,108,0.35)"
            }}
          >
            LOGIN WITH TRAKT
          </button>

          <div style={{ marginTop: 18, opacity: 0.8, fontSize: 14 }}>
            By logging in, you agree to Trakt's terms
          </div>
        </div>
      </div>
    </>
  );
}
