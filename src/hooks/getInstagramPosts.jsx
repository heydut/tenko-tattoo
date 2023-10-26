const getInstagramPosts = async () => {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,timestamp,permalink&access_token=${process.env.INSTAGRAM_TESTUSER_TOKEN}`,
      {
        next: {
          revalidate: 21600,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Instagram data:", error);
    throw error; // Re-throw the error for further handling, if needed
  }
};

export default getInstagramPosts;
