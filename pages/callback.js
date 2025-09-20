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
      console.error("Auth error:", error);
      alert("Auth error: " + error);
      router.push("/home");
      return;
    }

    if (!code) {
      console.error("No code in callback");
      router.push("/home");
      return;
    }

    (async () => {
      try {
        const res = await fetch("/api/trakt-auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code })
        });
        const data = await res.json();

        if (!res.ok) {
          console.error("Token exchange failed", data);
          alert("Token exchange failed: " + (data.error || JSON.stringify(data)));
          router.push("/home");
          return;
        }

        // for demo: save tokens in localStorage (later move to DB/session)
        localStorage.setItem("trakt_tokens", JSON.stringify(data));
        router.push("/home");
      } catch (e) {
        console.error(e);
        alert("Unexpected error. Check terminal logs.");
        router.push("/home");
      }
    })();
  }, [router]);

  return <div style={{color:"#fff",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>Logging you in...</div>;
}

