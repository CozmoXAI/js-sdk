// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Integrations extends APIResource {
  /**
   * Get a single integration by ID
   */
  retrieve(
    id: string,
    params: IntegrationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ConnectedIntegrationResponse> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/integrations/${id}`, options);
  }

  /**
   * Get all available integrations with their connection status
   */
  list(orgID: string, options?: RequestOptions): APIPromise<IntegrationListResponse> {
    return this._client.get(path`/org/${orgID}/integrations`, options);
  }

  /**
   * Connect a new integration to the organization
   */
  connect(
    orgID: string,
    body: IntegrationConnectParams,
    options?: RequestOptions,
  ): APIPromise<ConnectedIntegrationResponse> {
    return this._client.post(path`/org/${orgID}/integrations`, { body, ...options });
  }

  /**
   * Disconnect an integration from the organization
   */
  disconnect(id: string, params: IntegrationDisconnectParams, options?: RequestOptions): APIPromise<void> {
    const { org_id } = params;
    return this._client.delete(path`/org/${org_id}/integrations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all integrations connected to the organization
   */
  listConnected(orgID: string, options?: RequestOptions): APIPromise<IntegrationListConnectedResponse> {
    return this._client.get(path`/org/${orgID}/integrations/connected`, options);
  }

  /**
   * Get an integration by its slug identifier
   */
  retrieveBySlug(
    slug: string,
    params: IntegrationRetrieveBySlugParams,
    options?: RequestOptions,
  ): APIPromise<ConnectedIntegrationResponse> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/integrations/slug/${slug}`, options);
  }

  /**
   * Enable or disable a connected integration
   */
  toggle(
    id: string,
    params: IntegrationToggleParams,
    options?: RequestOptions,
  ): APIPromise<ConnectedIntegrationResponse> {
    const { org_id, ...body } = params;
    return this._client.patch(path`/org/${org_id}/integrations/${id}/toggle`, { body, ...options });
  }

  /**
   * Update the settings for a connected integration
   */
  updateSettings(
    id: string,
    params: IntegrationUpdateSettingsParams,
    options?: RequestOptions,
  ): APIPromise<ConnectedIntegrationResponse> {
    const { org_id, ...body } = params;
    return this._client.patch(path`/org/${org_id}/integrations/${id}/settings`, { body, ...options });
  }
}

export interface ConnectedIntegrationResponse {
  id?: string;

  created_at?: string;

  is_active?: boolean;

  last_sync_at?: string;

  last_sync_error?: string;

  last_sync_status?: string;

  name?: string;

  schema_config?: Array<number>;

  settings?: Array<number>;

  slug?: string;
}

export interface IntegrationListResponse {
  data?: Array<IntegrationListResponse.Data>;
}

export namespace IntegrationListResponse {
  export interface Data {
    id?: string;

    connected_at?: string;

    is_active?: boolean;

    is_connected?: boolean;

    name?: string;

    organization_integration_id?: string;

    schema_config?: Array<number>;

    slug?: string;
  }
}

export interface IntegrationListConnectedResponse {
  data?: Array<ConnectedIntegrationResponse>;
}

export interface IntegrationRetrieveParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface IntegrationConnectParams {
  slug: string;

  credentials?: Array<number>;

  settings?: Array<number>;
}

export interface IntegrationDisconnectParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface IntegrationRetrieveBySlugParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface IntegrationToggleParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  is_active?: boolean;
}

export interface IntegrationUpdateSettingsParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  settings: Array<number>;
}

export declare namespace Integrations {
  export {
    type ConnectedIntegrationResponse as ConnectedIntegrationResponse,
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationListConnectedResponse as IntegrationListConnectedResponse,
    type IntegrationRetrieveParams as IntegrationRetrieveParams,
    type IntegrationConnectParams as IntegrationConnectParams,
    type IntegrationDisconnectParams as IntegrationDisconnectParams,
    type IntegrationRetrieveBySlugParams as IntegrationRetrieveBySlugParams,
    type IntegrationToggleParams as IntegrationToggleParams,
    type IntegrationUpdateSettingsParams as IntegrationUpdateSettingsParams,
  };
}
