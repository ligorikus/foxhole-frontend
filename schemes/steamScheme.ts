import type { HTTPRequest, HTTPResponse, RefreshSchemeOptions } from "@nuxtjs/auth-next"
import { RefreshScheme } from "~auth/runtime";

declare interface SteamSchemeOptions extends RefreshSchemeOptions {
  clientSecret: string | false;
}

export default class SteamScheme<OptionsT extends SteamSchemeOptions> extends RefreshScheme<OptionsT> {
  async login(
    endpoint: HTTPRequest,
    { reset = true } = {}
  ): Promise<HTTPResponse> {
    if (!this.options.endpoints.login) {
      throw new Error('Route login is not defined');;
    }

    // Ditch any leftover local tokens before attempting to log in
    if (reset) {
      this.$auth.reset({ resetInterceptor: false })
    }

    // Add client id to payload if defined
    if (this.options.clientId) {
      endpoint.data.client_id = this.options.clientId
    }

    if (this.options.clientSecret) {
      endpoint.data.client_secret = this.options.clientSecret
    }

    // Add grant type to payload if defined
    if (this.options.grantType) {
      endpoint.data.grant_type = this.options.grantType
    }

    // Add scope to payload if defined
    if (this.options.scope) {
      endpoint.data.scope = this.options.scope
    }

    // Make login request
    const response = await this.$auth.request(
      endpoint,
      this.options.endpoints.login
    )

    // Update tokens
    this.updateTokens(response)

    // Initialize request interceptor if not initialized
    if (!this.requestHandler.interceptor) {
      this.initializeRequestInterceptor()
    }

    // Fetch user if `autoFetch` is enabled
    if (this.options.user.autoFetch) {
      await this.fetchUser()
    }

    return response
  }
}
