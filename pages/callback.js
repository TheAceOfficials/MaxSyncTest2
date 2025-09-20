// pages/callback.js
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const error = params.get("error");

  if (error) {
    alert("Auth error: " + error);
    router.replace("/home");
    return;
  }
  if (!code) {
    router.replace("/home");
    return;
  }

  let didExchange = false;
  (async () => {
    if (didExchange) return;
    didExchange = true;
    try {
      const res = await fetch("/api/trakt-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code })
      });
      const data = await res.json();
      if (!res.ok) {
        alert("Token exchange failed: " + (data.error || JSON.stringify(data)));
        router.replace("/home");
        return;
      }
      localStorage.setItem("trakt_tokens", JSON.stringify(data));
      router.replace("/home");
    } catch (e) {
      alert("Unexpected error. Check console logs.");
      router.replace("/home");
    }
  })();
}, [router]);

  return <div style={{color:"#fff",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>Logging you in...</div>;
}


