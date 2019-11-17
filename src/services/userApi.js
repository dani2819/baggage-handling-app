import { apiClient } from "./apiClient";

export const getUserBaggageData = deviceId => {
  if (!deviceId) {
    return;
  }
  return apiClient.get("api/baggages", {
    params: { deviceId }
  });
};

export const getBaggageData = baggageId => {
  return apiClient.get(`api/baggages/${baggageId}`);
};
