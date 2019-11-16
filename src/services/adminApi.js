import { apiClient } from "./apiClient";
export const sendBaggageData = (baggageId, destination, source) => {
  return apiClient.post("/baggages", { baggageId, source, destination });
};

export const updateBaggageStatus = (baggageId, eventType, location) => {
    return axios.post(
        'https://rafayjunsb01.servicebus.windows.net/event-receiving-queue/messages',
        { baggageId, eventType, location, isPushable: true  },
        {
          headers: {
            authorization: "SharedAccessSignature sr=https%3a%2f%2frafayjunsb01.servicebus.windows.net&sig=iVYEJ4c1CArYOznqXgTG9EtiKX%2f18SeVR6mIz601YSU%3d&se=1605442355&skn=RootManageSharedAccessKey"
          }
        }
    );
};
