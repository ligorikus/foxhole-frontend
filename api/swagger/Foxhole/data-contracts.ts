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

export interface User {
  id: number
  name: string
  steam_id: string
  created_at: string
  updated_at: string
  faction?: Faction
}

export interface Faction {
  id: number
  name: string
  slug: string
  created_at: string
  updated_at: string
}

export interface UserResponse {
  success: boolean
  data: User
}
