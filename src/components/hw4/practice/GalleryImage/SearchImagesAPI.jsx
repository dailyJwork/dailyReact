import axios from "axios";

const APIKey = "4DcsaHRr3PwZ8f7At2NjnAVebSNIW751pqE7jQn0qSN4PvSS5ZXzXs27";
axios.defaults.baseURL = "https://api.pexels.com/v1/";
axios.defaults.headers.common['Authorization'] = APIKey;
axios.defaults.params = {
    orientation: 'landscape',
    per_page: 15,
};

export const getImages = async (query, page) => {
    const responce = await axios.get(`search?query=${query}&page=${page}`);
    return responce.data;
}

// https://api.pexels.com/v1/search?query=nature&page=1
