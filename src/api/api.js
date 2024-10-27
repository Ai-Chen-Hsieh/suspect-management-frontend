import axiosInstance from "./axiosInstance";

const handleApiError = (error) => {
  throw error;
};

export const editSuspect = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/suspect/${id}`, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getSuspect = async (id) => {
  try {
    const response = await axiosInstance.get(`/suspect/${id}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getAllSuspect = async () => {
  try {
    const response = await axiosInstance.get(`/suspect/`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
