const baseUrl = 'https://api.chucknorris.io/jokes/'

export const getCategories = async () => {
    try {
      let url = `${baseUrl}/categories`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
};

export const getByCategorie = async (item) => {
    try {
      let url = `${baseUrl}/random?category=${item}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
};