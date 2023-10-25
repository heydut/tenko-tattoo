const getInstagramPosts = async () => {
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,timestamp,permalink&access_token=${process.env.INSTAGRAM_TESTUSER_TOKEN}`,
    {
      next: {
        revalidate: 21600,
      },
    }
  );

  const data = await res.json();
  return data;
};

export default getInstagramPosts;
