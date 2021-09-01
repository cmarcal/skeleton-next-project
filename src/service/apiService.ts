import { AxiosPromise } from 'axios';

import {Api} from './httpClient';

export const get = (url: string): AxiosPromise => Api.get(url);
export const post = (url: string, body = null): AxiosPromise => Api.post(url, body);
export const put = (url: string, body = null): AxiosPromise => Api.put(url, body);
export const remove = (url: string): AxiosPromise => Api.delete(url);
export const head = (url: string): AxiosPromise => Api.head(url);