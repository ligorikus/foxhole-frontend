/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { User } from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

export class Me<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Info about current user
   *
   * @name GetMe
   * @request GET:/me
   */
  getMe = (params: RequestParams = {}) =>
    this.request<
      {
        success?: number
        data?: User
      },
      any
    >({
      path: `/me`,
      method: 'GET',
      ...params,
    })
}
