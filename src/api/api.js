import axios from "axios";

const API_URL = process.env.REACT_APP_MOVIE_URL;
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
export const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

// export async function getByName(query) {

// }

// Movie Search
export const getByName = async (query) => {
    const type = '/search/movie';

    const { data: { results } }= await axios(`${API_URL + type}`, {
        params: {
          api_key: API_KEY,
          query,
        }
    });

    return results;
}

// Remove deprecated
export const getDiscover = async (page = 1) => {
    const type = '/discover/movie';

    const { data: { results } }= await axios(`${API_URL + type}`, {
        params: {
          api_key: API_KEY,
          page,
        }
    });

    return results;
}

export const getWithVideos = async (id) => {
    const { data } = await axios(`${API_URL}/movie/${id}`, {
        params: {
          api_key: API_KEY,
          append_to_response: 'videos',
        }
    })

    return data;
}

///---------------------------------------------------------------------------------------
export const getPopular = async (page = 1) => {
    const type = '/movie/popular';

    const { data: { results } }= await axios(`${API_URL + type}`, {
        params: {
          api_key: API_KEY,
          page,
        }
    });

    return results;
}

export const getRated = async (page = 1) => {
    const type = '/movie/top_rated';

    const { data: { results } }= await axios(`${API_URL + type}`, {
        params: {
          api_key: API_KEY,
          page,
        }
    });

    return results;
}

export const getUpcoming = async (page = 1) => {
    const type = '/movie/upcoming';

    const { data: { results } }= await axios(`${API_URL + type}`, {
        params: {
          api_key: API_KEY,
          page,
        }
    });

    return results;
}

export const pageTypesMap = {
    popular: getPopular,
    rated: getRated,
    upcoming: getUpcoming,
    // discover: getDiscover,
}