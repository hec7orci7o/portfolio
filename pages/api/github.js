export default async function handler(req, res) {
  const allowedMethods = ["GET"];
  const method = req.method;
  if (!allowedMethods.includes(method)) {
    res.setHeader("Allow", allowedMethods);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
  const num = Number(req.query.q) || "all";

  let params = {
    type: "public",
    sort: "pushed",
    direction: "desc",
    per_page: num,
    page: 0,
  };

  if (num === "all") {
    delete params.per_page;
    delete params.page;
  }

  params = new URLSearchParams(params);

  const headers = {
    Authorization: `token ${process.env.GITHUB_AUTH_TOKEN}`,
  };

  // repos del usuario
  const res1 = await fetch(
    `https://api.github.com/users/hec7orci7o/repos?${params.toString()}`,
    {
      method: "GET",
      headers: headers,
    }
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  res.status(200).json({ data: res1 });
}
