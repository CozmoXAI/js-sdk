// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * Create a new API key for the organization
   */
  createAPIKey(
    orgID: string,
    body: APIKeyCreateAPIKeyParams,
    options?: RequestOptions,
  ): APIPromise<APIKeyCreateAPIKeyResponse> {
    return this._client.post(path`/org/${orgID}/api-keys`, { body, ...options });
  }

  /**
   * List all API keys for the organization (keys are masked)
   */
  listAPIKeys(orgID: string, options?: RequestOptions): APIPromise<APIKeyListAPIKeysResponse> {
    return this._client.get(path`/org/${orgID}/api-keys`, options);
  }

  /**
   * Revokes all organization API keys (soft delete)
   */
  revokeAllAPIKeys(orgID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/org/${orgID}/api-keys`, options);
  }

  /**
   * Revoke an API key (soft delete)
   */
  revokeAPIKey(
    keyID: string,
    params: APIKeyRevokeAPIKeyParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { org_id } = params;
    return this._client.delete(path`/org/${org_id}/api-keys/${keyID}`, options);
  }

  /**
   * Update the scopes of an existing API key
   */
  updateAPIKeyScopes(
    keyID: string,
    params: APIKeyUpdateAPIKeyScopesParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { org_id, ...body } = params;
    return this._client.patch(path`/org/${org_id}/api-keys/${keyID}/scopes`, { body, ...options });
  }
}

export interface Response {
  data?: unknown;
}

export interface APIKeyCreateAPIKeyResponse {
  id?: string;

  created_at?: string;

  expires_at?: string;

  /**
   * Only returned once on creation
   */
  key?: string;

  name?: string;

  scopes?: Array<string>;
}

export type APIKeyListAPIKeysResponse = Array<APIKeyListAPIKeysResponse.APIKeyListAPIKeysResponseItem>;

export namespace APIKeyListAPIKeysResponse {
  export interface APIKeyListAPIKeysResponseItem {
    id?: string;

    created_at?: string;

    expires_at?: string;

    /**
     * e.g., "cozmo*live*\*\*\*\*"
     */
    key_prefix?: string;

    last_used_at?: string;

    name?: string;

    scopes?: Array<string>;
  }
}

export interface APIKeyCreateAPIKeyParams {
  name: string;

  scopes: Array<string>;

  expires_at?: string;
}

export interface APIKeyRevokeAPIKeyParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface APIKeyUpdateAPIKeyScopesParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  scopes: Array<string>;
}

export declare namespace APIKeys {
  export {
    type Response as Response,
    type APIKeyCreateAPIKeyResponse as APIKeyCreateAPIKeyResponse,
    type APIKeyListAPIKeysResponse as APIKeyListAPIKeysResponse,
    type APIKeyCreateAPIKeyParams as APIKeyCreateAPIKeyParams,
    type APIKeyRevokeAPIKeyParams as APIKeyRevokeAPIKeyParams,
    type APIKeyUpdateAPIKeyScopesParams as APIKeyUpdateAPIKeyScopesParams,
  };
}
