export const fetchAccessToken = async (entityId: string) => {
  // TODO: Check expiry of the one stored first before fetching a new one
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PHP_API_BASE_URL}/userLoginData?entity_id=${entityId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Proz-API-Key": `${process.env.NEXT_PUBLIC_PHP_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    // sessionStorage.setItem(`${entityId}_api_token`, data.access_token);
    // sessionStorage.setItem(`${entityId}_api_token_expiry`, data.access_token);
    return data.access_token;
  } catch (error) {
    throw new Error(`Error fetching token: ${error}`);
  }
};
