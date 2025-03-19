// src/app/api/admin/reports/discourse/route.ts

// Function to add authentication headers
const addAuthHeaders = (headers: Headers) => {
  headers.append("Api-Key", "d12cd853f3853a756a72338082262c33ea21910239ad203542fdea7af58f08c6");
  headers.append("Api-Username", "system");
};

// Function to fetch data with authentication
const fetchData = async (url: string) => {
  const headers = new Headers();
  addAuthHeaders(headers);

  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Modified getDiscourseData function with authentication
const getDiscourseData = async () => {
  return fetchData("https://community.proz.com/site/statistics.json");
};

// Modified getActiveUsersData function with authentication
const getActiveUsersData = async () => {
  return fetchData("https://community.proz.com/admin/users/list/active.json");
};

export const GET = async (req: Request) => {
  try {
    const url = new URL(req.url);
    const type = url.searchParams.get("type");

    let data;
    if (type === "activeUsers") {
      data = await getActiveUsersData();
    } else {
      data = await getDiscourseData();
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
