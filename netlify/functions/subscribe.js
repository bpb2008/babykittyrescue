export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  const { email } = JSON.parse(event.body);

  if (!email || !email.includes("@")) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid email address" }),
    };
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const DATACENTER = API_KEY.split("-")[1];

  const data = {
    email_address: email,
    status: "subscribed",
  };

  try {
    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/`,
      {
        method: "POST",
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.status >= 400) {
      const errorData = await response.json();
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: errorData.detail || "There was an error subscribing.",
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Success!" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
}
