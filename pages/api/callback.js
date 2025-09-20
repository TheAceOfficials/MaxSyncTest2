export default async function handler(req, res) {
  const { code } = req.query;
  const response = await fetch("https://api.trakt.tv/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      code,
      client_id: process.env.TRAKT_CLIENT_ID,
      client_secret: process.env.TRAKT_CLIENT_SECRET,
      redirect_uri: process.env.TRAKT_REDIRECT_URI,
      grant_type: "authorization_code",
    }),
  });
  const data = await response.json();
  console.log("Trakt token response:", data);
  if (data.access_token) {
    res.status(200).json({ success: true, token: data.access_token });
  } else {
    res.status(400).json({ success: false, error: data });
  }
}
