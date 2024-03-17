import axios from "axios";
const ACCESS_KEY = "YQ_yL-LQzjl6Sr0ymPf0zmir3fmTWR81QSVXvomwQP4";

export const requestPhoto = async (query, perPage = 12) => {
    const { data } = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&page=1&query=${query}&per_page=${perPage}`);
    return data.results;
}
