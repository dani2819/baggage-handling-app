import { apiClient } from "./apiClient";

export const getUserBaggageData = deviceId => {
  return apiClient.get('api/baggages', {
    params: { deviceId }
  });
};

export const getBaggageData = baggageId => {
  return apiClient.get(`api/baggages/${baggageId}`);
};
