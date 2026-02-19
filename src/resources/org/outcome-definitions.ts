// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class OutcomeDefinitions extends APIResource {
  /**
   * Creates a custom outcome definition for the organization
   */
  create(
    orgID: string,
    body: OutcomeDefinitionCreateParams,
    options?: RequestOptions,
  ): APIPromise<OutcomeDefinition> {
    return this._client.post(path`/org/${orgID}/outcome-definitions`, { body, ...options });
  }

  /**
   * Updates a custom outcome definition (platform definitions cannot be modified)
   */
  update(
    id: string,
    params: OutcomeDefinitionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OutcomeDefinition> {
    const { org_id, ...body } = params;
    return this._client.patch(path`/org/${org_id}/outcome-definitions/${id}`, { body, ...options });
  }

  /**
   * Returns all platform and custom outcome definitions for the organization
   */
  list(orgID: string, options?: RequestOptions): APIPromise<OutcomeDefinitionListResponse> {
    return this._client.get(path`/org/${orgID}/outcome-definitions`, options);
  }

  /**
   * Deletes an outcome definition for the organization
   */
  delete(id: string, params: OutcomeDefinitionDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { org_id } = params;
    return this._client.delete(path`/org/${org_id}/outcome-definitions/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OutcomeDefinition {
  id?: string;

  created_at?: string;

  description?: string;

  display_name?: string;

  is_unique_per_call?: boolean;

  key?: string;

  organization_id?: string;

  value_type?: string;
}

export type OutcomeDefinitionListResponse = Array<OutcomeDefinition>;

export interface OutcomeDefinitionCreateParams {
  display_name: string;

  key: string;

  value_type: 'BOOLEAN' | 'TEXT' | 'NUMBER' | 'DATE' | 'JSON';

  description?: string;

  is_unique_per_call?: boolean;
}

export interface OutcomeDefinitionUpdateParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  display_name?: string;

  /**
   * Body param
   */
  is_unique_per_call?: boolean;
}

export interface OutcomeDefinitionDeleteParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export declare namespace OutcomeDefinitions {
  export {
    type OutcomeDefinition as OutcomeDefinition,
    type OutcomeDefinitionListResponse as OutcomeDefinitionListResponse,
    type OutcomeDefinitionCreateParams as OutcomeDefinitionCreateParams,
    type OutcomeDefinitionUpdateParams as OutcomeDefinitionUpdateParams,
    type OutcomeDefinitionDeleteParams as OutcomeDefinitionDeleteParams,
  };
}
