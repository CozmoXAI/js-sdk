// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProspectsAPI from './prospects';
import * as CallsAPI from '../calls/calls';
import * as BulkAPI from './bulk';
import {
  Bulk,
  BulkDeleteParams,
  BulkImportParams,
  BulkImportResponse,
  BulkOperationResponseProspects,
  BulkUpdateParams,
} from './bulk';
import * as TagsAPI from './tags';
import { TagAddParams, TagRemoveAllParams, TagRemoveParams, Tags } from './tags';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Prospects extends APIResource {
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);

  /**
   * Create a new prospect in the organization. Country and timezone are
   * auto-detected from phone if not provided.
   */
  create(orgID: string, body: ProspectCreateParams, options?: RequestOptions): APIPromise<ProspectResponse> {
    return this._client.post(path`/org/${orgID}/prospects`, { body, ...options });
  }

  /**
   * Get a single prospect by ID with associated tags
   */
  retrieve(
    prospectID: string,
    params: ProspectRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ProspectResponse> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/prospects/${prospectID}`, options);
  }

  /**
   * Update prospect information. Supports partial updates.
   */
  update(
    prospectID: string,
    params: ProspectUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProspectResponse> {
    const { org_id, ...body } = params;
    return this._client.patch(path`/org/${org_id}/prospects/${prospectID}`, { body, ...options });
  }

  /**
   * Get a paginated list of prospects with optional filters
   */
  list(
    orgID: string,
    query: ProspectListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProspectListResponse> {
    return this._client.get(path`/org/${orgID}/prospects`, { query, ...options });
  }

  /**
   * Soft delete a prospect (sets deleted_at timestamp)
   */
  delete(
    prospectID: string,
    params: ProspectDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ResponseError> {
    const { org_id } = params;
    return this._client.delete(path`/org/${org_id}/prospects/${prospectID}`, options);
  }

  /**
   * Returns a paginated list of calls for a specific prospect
   */
  listCalls(
    prospectID: string,
    params: ProspectListCallsParams,
    options?: RequestOptions,
  ): APIPromise<ProspectListCallsResponse> {
    const { org_id, ...query } = params;
    return this._client.get(path`/org/${org_id}/prospects/${prospectID}/calls`, { query, ...options });
  }
}

export interface ProspectResponse {
  id?: string;

  country?: string;

  created_at?: string;

  custom_data?: { [key: string]: unknown };

  email?: string;

  external_id?: string;

  first_name?: string;

  last_name?: string;

  list_id?: string;

  phone?: string;

  status?: string;

  tags?: Array<TagResponseProspect>;

  timezone?: string;

  updated_at?: string;
}

export interface ResponseError {
  data?: unknown;

  error?: unknown;

  message?: string;

  status?: boolean;
}

export interface TagResponseProspect {
  id?: string;

  color?: string;

  name?: string;
}

export interface ProspectListResponse {
  data?: Array<ProspectListResponse.Data>;

  meta?: ProspectListResponse.Meta;
}

export namespace ProspectListResponse {
  export interface Data {
    id?: string;

    country?: string;

    created_at?: string;

    email?: string;

    external_id?: string;

    first_name?: string;

    last_name?: string;

    list_id?: string;

    phone?: string;

    status?: string;

    tags?: Array<ProspectsAPI.TagResponseProspect>;

    timezone?: string;
  }

  export interface Meta {
    page?: number;

    size?: number;

    total?: number;

    total_pages?: number;
  }
}

export interface ProspectListCallsResponse {
  data?: Array<ProspectListCallsResponse.Data>;

  meta?: CallsAPI.PaginationMetaCalls;
}

export namespace ProspectListCallsResponse {
  export interface Data {
    id?: string;

    agent_name?: string;

    direction?: string;

    duration_seconds?: number;

    ended_at?: string;

    from_number?: string;

    started_at?: string;

    status?: string;

    to_number?: string;
  }
}

export interface ProspectCreateParams {
  phone: string;

  country?: string;

  custom_data?: { [key: string]: unknown };

  email?: string;

  external_id?: string;

  first_name?: string;

  last_name?: string;

  status?: string;

  timezone?: string;
}

export interface ProspectRetrieveParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface ProspectUpdateParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  country?: string;

  /**
   * Body param
   */
  custom_data?: { [key: string]: unknown };

  /**
   * Body param
   */
  email?: string;

  /**
   * Body param
   */
  external_id?: string;

  /**
   * Body param
   */
  first_name?: string;

  /**
   * Body param
   */
  last_name?: string;

  /**
   * Body param
   */
  list_id?: string;

  /**
   * Body param
   */
  phone?: string;

  /**
   * Body param
   */
  status?: string;

  /**
   * Body param
   */
  timezone?: string;
}

export interface ProspectListParams {
  /**
   * Filter by country code
   */
  country?: string;

  /**
   * Filter by prospect list ID
   */
  list_id?: string;

  /**
   * Filter prospects without a list
   */
  no_list?: boolean;

  /**
   * Page number
   */
  page?: number;

  /**
   * Search in name, phone, email
   */
  search?: string;

  /**
   * Page size
   */
  size?: number;

  /**
   * Filter by status
   */
  status?: string;

  /**
   * Filter by tag ID
   */
  tag_id?: string;
}

export interface ProspectDeleteParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface ProspectListCallsParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Query param: Page number
   */
  page?: number;

  /**
   * Query param: Page size
   */
  size?: number;
}

Prospects.Tags = Tags;
Prospects.Bulk = Bulk;

export declare namespace Prospects {
  export {
    type ProspectResponse as ProspectResponse,
    type ResponseError as ResponseError,
    type TagResponseProspect as TagResponseProspect,
    type ProspectListResponse as ProspectListResponse,
    type ProspectListCallsResponse as ProspectListCallsResponse,
    type ProspectCreateParams as ProspectCreateParams,
    type ProspectRetrieveParams as ProspectRetrieveParams,
    type ProspectUpdateParams as ProspectUpdateParams,
    type ProspectListParams as ProspectListParams,
    type ProspectDeleteParams as ProspectDeleteParams,
    type ProspectListCallsParams as ProspectListCallsParams,
  };

  export {
    Tags as Tags,
    type TagAddParams as TagAddParams,
    type TagRemoveParams as TagRemoveParams,
    type TagRemoveAllParams as TagRemoveAllParams,
  };

  export {
    Bulk as Bulk,
    type BulkOperationResponseProspects as BulkOperationResponseProspects,
    type BulkImportResponse as BulkImportResponse,
    type BulkUpdateParams as BulkUpdateParams,
    type BulkDeleteParams as BulkDeleteParams,
    type BulkImportParams as BulkImportParams,
  };
}
