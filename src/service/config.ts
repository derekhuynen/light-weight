import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const apiConfig: AxiosRequestConfig = {
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		Accept: 'Application/json',
		'Content-Type': 'Application/json',
	},
};

// This is the base axios instance that will be used for all api calls
export const baseAxiosInstance: AxiosInstance = axios.create(apiConfig);

export const genericServiceCall = async <TRequest, TResponse>(
	axiosRequestConfig: AxiosRequestConfig<TRequest>
): Promise<AxiosResponse<TResponse, TRequest>> => {
	return baseAxiosInstance<TResponse, AxiosResponse<TResponse, TRequest>>(
		axiosRequestConfig
	);
};

export const endpointFactory = <TObj, TPostObj = TObj, TPutObj = TObj>(
	baseUrl: string
) => {
	return {
		get: async (): Promise<AxiosResponse<TObj[]>> => {
			return genericServiceCall({ method: 'GET', url: baseUrl });
		},
		getById: async (id: string): Promise<AxiosResponse<TObj>> => {
			return genericServiceCall({
				method: 'GET',
				url: `${baseUrl}/${id}`,
			});
		},
		post: async (data: TPostObj): Promise<AxiosResponse<string>> => {
			return genericServiceCall({
				method: 'POST',
				url: baseUrl,
				data,
			});
		},
		delete: async (id: string): Promise<AxiosResponse<string>> => {
			return genericServiceCall({
				method: 'DELETE',
				url: `${baseUrl}/${id}`,
			});
		},
		put: async (data: TPutObj): Promise<AxiosResponse<TObj>> => {
			return genericServiceCall({
				method: 'PUT',
				url: baseUrl,
				data,
			});
		},
	};
};
