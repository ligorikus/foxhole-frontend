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

import { UserResponse } from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

export class Users<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Info about current user
   *
   * @name GetUsers
   * @request GET:/users/me
   */
  getUsers = (params: RequestParams = {}) =>
    this.request<UserResponse, any>({
      path: `/users/me`,
      method: 'GET',
      format: 'json',
      ...params,
    })
}
