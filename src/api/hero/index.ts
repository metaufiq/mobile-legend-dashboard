import API from "./configs";
import { Params, Response } from "./types";

/**
 * API request to get list hero by rank
 * @param {Params} params  API params
 * @returns {Promise<Response>} API response
 */
export const getRankData = async (params: Params): Promise<Response> => {
  const { data } = await API.post('/getRankData', params);

  return data;
};

const heroAPI = {
  getRankData
};

export default heroAPI;