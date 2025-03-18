import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

const imgApiKey = "39854903-e6a4b7d29f59c51f5c5c43d32";

export const fetchImg = async (value, page) => {
  const responce = await axios.get(
    `?q=${value}&page=${page}&key=${imgApiKey}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return responce.data.hits;
};

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
