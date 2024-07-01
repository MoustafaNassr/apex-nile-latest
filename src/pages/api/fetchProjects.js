const baseAPIURL = "https://admin.apexnile.com/";

export default async function handler(req, res) {  if (req.method === 'POST') {
    // Process a POST request
  } else {
    const resp = await fetch(`${baseAPIURL}api/fetchApexProjects/`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
        next: {
          revalidate: 0,
        },
      });
      const result = await resp.json();
      console.log(result)
    res.status(200).json(result)

  }

  }