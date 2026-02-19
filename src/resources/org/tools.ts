// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProspectsAPI from './prospects/prospects';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tools extends APIResource {
  /**
   * Create a new tool definition with HTTP endpoint configuration and parameters
   */
  create(orgID: string, body: ToolCreateParams, options?: RequestOptions): APIPromise<ToolResponse> {
    return this._client.post(path`/org/${orgID}/tools`, { body, ...options });
  }

  /**
   * Get a single tool by ID with all its parameters
   */
  retrieve(toolID: string, params: ToolRetrieveParams, options?: RequestOptions): APIPromise<ToolResponse> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/tools/${toolID}`, options);
  }

  /**
   * Update tool definition. Supports partial updates. If parameters are provided,
   * they replace all existing parameters.
   */
  update(toolID: string, params: ToolUpdateParams, options?: RequestOptions): APIPromise<ToolResponse> {
    const { org_id, ...body } = params;
    return this._client.patch(path`/org/${org_id}/tools/${toolID}`, { body, ...options });
  }

  /**
   * Get a paginated list of tool definitions for an organization
   */
  list(
    orgID: string,
    query: ToolListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ToolListResponse> {
    return this._client.get(path`/org/${orgID}/tools`, { query, ...options });
  }

  /**
   * Delete a tool by ID. Also removes all associated parameters (cascade delete).
   */
  delete(
    toolID: string,
    params: ToolDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ProspectsAPI.ResponseError> {
    const { org_id } = params;
    return this._client.delete(path`/org/${org_id}/tools/${toolID}`, options);
  }
}

export interface ParameterProp {
  name: string;

  /**
   * string, number, boolean, object, array
   */
  type: string;

  description?: string;

  required?: boolean;
}

export interface ToolResponse {
  id?: string;

  body?: string;

  created_at?: string;

  description?: string;

  filler_phrases?: Array<string>;

  headers?: Array<number>;

  method?: string;

  name?: string;

  parameters?: Array<ToolResponse.Parameter>;

  updated_at?: string;

  url?: string;
}

export namespace ToolResponse {
  export interface Parameter {
    id?: string;

    created_at?: string;

    description?: string;

    name?: string;

    position?: number;

    required?: boolean;

    type?: string;
  }
}

export interface ToolListResponse {
  data?: Array<ToolListResponse.Data>;

  meta?: ToolListResponse.Meta;
}

export namespace ToolListResponse {
  export interface Data {
    id?: string;

    created_at?: string;

    description?: string;

    method?: string;

    name?: string;

    updated_at?: string;

    url?: string;
  }

  export interface Meta {
    page?: number;

    size?: number;

    total?: number;

    total_pages?: number;
  }
}

export interface ToolCreateParams {
  description: string;

  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

  name: string;

  url: string;

  /**
   * Request body template
   */
  body?: string;

  /**
   * Phrases to say while tool is executing
   */
  filler_phrases?: Array<string>;

  /**
   * JSON object of headers
   */
  headers?: Array<number>;

  /**
   * Tool parameters
   */
  parameters?: Array<ParameterProp>;
}

export interface ToolRetrieveParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface ToolUpdateParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  body?: string;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  filler_phrases?: Array<string>;

  /**
   * Body param
   */
  headers?: Array<number>;

  /**
   * Body param
   */
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param: If provided, replaces all existing parameters
   */
  parameters?: Array<ParameterProp>;

  /**
   * Body param
   */
  url?: string;
}

export interface ToolListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Number of items per page
   */
  size?: number;
}

export interface ToolDeleteParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export declare namespace Tools {
  export {
    type ParameterProp as ParameterProp,
    type ToolResponse as ToolResponse,
    type ToolListResponse as ToolListResponse,
    type ToolCreateParams as ToolCreateParams,
    type ToolRetrieveParams as ToolRetrieveParams,
    type ToolUpdateParams as ToolUpdateParams,
    type ToolListParams as ToolListParams,
    type ToolDeleteParams as ToolDeleteParams,
  };
}
