import { apiClient } from "./apiClient";

export const getUserBaggageData = deviceId => {
  return apiClient.get(`api/baggages`, {
    params: {
      deviceId:
        "cIdl64M20n_Niv8uYn9Xgt:APA91bGJRqao_ER2uOGB4l8WmtK7csqIsTAB_wRoALDw45m6WkD_OVwAN8oXR3mXHpEbUXbxsZaz5V4oTjNxea7Q4SQ4m86pNly7BBABhfn3SLWf1qX6r9iLMppmtqll45Y7lB6ghs-8"
    }
  });
};
export const getBaggageData = baggageId => {
  return apiClient.get(`api/baggages/${baggageId}`);
};
