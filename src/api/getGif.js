export const getGif = async (category, limit) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=6VytiXkl7FDYcJFVGe1H3eaxDyS28aTk&q=${category}&limit=${limit}`;

  const response = await fetch(URL);
  const { data } = await response.json();
  const Gif = data
    .map((values) => ({
      id: values.id,
      title: values.title,
      url: values.images.downsized_medium.url,
    }))
    .sort(() => Math.random() - 10)
    .slice(0, limit);
  return Gif;
};
