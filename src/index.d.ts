import { AxiosInstance, AxiosRequestConfig } from 'axios';

declare interface PendingRequest {
  token: any;
}

declare interface PendingRequestsMap {
  [key: string]: PendingRequest[];
}

declare interface AxiosRequestCancelInstance extends AxiosInstance {
  cancelRequest(id: string): void;
  cancelAllRequests(): void;
}

declare function createAxiosInstance(
  config?: AxiosRequestConfig
): AxiosRequestCancelInstance;

declare function setGlobalConfig(config: AxiosRequestConfig): void;

declare const axiosRequestCancel: AxiosRequestCancelInstance;

export { createAxiosInstance, setGlobalConfig, axiosRequestCancel };
