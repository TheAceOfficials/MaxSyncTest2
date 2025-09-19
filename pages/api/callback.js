export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: "Missing code" });
  }

  try {
    const response = await fetch("https://api.trakt.tv/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code,
        client_id: process.env.NEXT_PUBLIC_TRAKT_CLIENT_ID,
        client_secret: process.env.TRAKT_CLIENT_SECRET,
        redirect_uri: process.env.TRAKT_REDIRECT_URI,
        grant_type: "authorization_code",
      }),
    });

    const data = await response.json();

    if (data.access_token) {
      // ✅ Success
      res.status(200).json({ message: "Login success", tokens: data });
    } else {
      // ❌ Error from Trakt
      res.status(400).json({ error: data });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
