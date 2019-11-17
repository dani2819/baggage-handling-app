import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://rafay-jun-int-backend.azurewebsites.net/"
});
