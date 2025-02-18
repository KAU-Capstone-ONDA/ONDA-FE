import apiClient from '../apiClient';

const baseUrl = '/basic-rates/148626';

export const getBasicCharge = async (roomTypeId) => {
  try {
    const response = await apiClient.get(`${baseUrl}?roomTypeId=${roomTypeId}`); // 쿼리 파라미터로 roomTypeId 전달

    return response.data;
  } catch (error) {
    throw Error('ERROR');
  }
};
