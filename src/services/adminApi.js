import axios from 'axios';
export const sendBaggageData = (baggageId, destination, source) => {
    return axios.post(
        'https://rafay-jun-int-backend.azurewebsites.net/api/baggages',
        { baggageId, source, destination  }
    );
};
