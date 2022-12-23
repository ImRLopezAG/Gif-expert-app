export const getGif = async (category) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=6VytiXkl7FDYcJFVGe1H3eaxDyS28aTk&q=${category}&limit=50`;

  const response = await fetch(URL);
  const { data } = await response.json();
  const Gif = data
    .map((values) => ({
      id: values.id,
      title: values.title,
      url: values.images.downsized_medium.url,
    }))
    .sort(() => Math.random() - 10)
    .slice(0, 10);
  return Gif;
};
