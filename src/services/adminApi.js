import { apiClient } from "./apiClient";
export const sendBaggageData = (baggageId, destination, source) => {
  return apiClient.post("/baggages", { baggageId, source, destination });
};
