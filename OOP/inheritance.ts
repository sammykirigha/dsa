import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
//Base API
export abstract class API {
	protected baseUrl: string;
	private axiosInstance: AxiosInstance;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl
		this.axiosInstance = axios.create({});
		this.enableInterceptors();
	}

	private enableInterceptors() {
		//here is where you candefine commonrefetching logic
	}

	//Common "get" logic
	protected get<T>(url: string, requestConfig?: AxiosRequestConfig): Promise<AxiosResponse<T>>{
		return this.axiosInstance.get<T>(`${this.baseUrl}/${url}`, {
			headers: requestConfig?.headers ? requestConfig.headers : {},
			params: requestConfig?.params ? requestConfig.params : null,
		})
	}

	//Common "post" logic
	protected post<T>(url: string, requestConfig?: AxiosRequestConfig): Promise<AxiosResponse<T>>{
		return this.axiosInstance.post<T>(`${this.baseUrl}/${url}`, {
			headers: requestConfig?.headers ? requestConfig.headers : {},
			params: requestConfig?.params ? requestConfig.params : null
		})
	}
}