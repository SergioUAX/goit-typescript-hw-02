import axios from "axios";
import { UnsplashResponse } from './Api.types';


axios.defaults.baseURL = "https://api.unsplash.com/";
const accessKey = "mhvkHP-wwY6Q7GU-VIs3xDQ2rbwSAa5A7sniYVIU-9k";

export const fetchImagesWithTopic = async (
  page: number,
  perPage: number,
  topic: string
): Promise<UnsplashResponse> => {
  const response = await axios.get<UnsplashResponse>('search/photos', {
    params: {
      page: page,
      per_page: perPage,
      client_id: accessKey,
      query: topic,
      orientation: 'landscape',
    },
  });
  return response.data;
};
