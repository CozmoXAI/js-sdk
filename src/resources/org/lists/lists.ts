// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProspectsAPI from './prospects';
import {
  ListProspectOperationResponse,
  ProspectAddBulkParams,
  ProspectAddParams,
  ProspectAddResponse,
  ProspectRemoveBulkParams,
  ProspectRemoveParams,
  ProspectRemoveResponse,
  Prospects,
} from './prospects';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Lists extends APIResource {
  prospects: ProspectsAPI.Prospects = new ProspectsAPI.Prospects(this._client);

  /**
   * Create a new prospect list
   */
  create(orgID: string, body: ListCreateParams, options?: RequestOptions): APIPromise<ListResponse> {
    return this._client.post(path`/org/${orgID}/lists`, { body, ...options });
  }

  /**
   * Get a single prospect list by ID with prospect count
   */
  retrieve(listID: string, params: ListRetrieveParams, options?: RequestOptions): APIPromise<ListResponse> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/lists/${listID}`, options);
  }

  /**
   * Update prospect list information (currently only name)
   */
  update(listID: string, params: ListUpdateParams, options?: RequestOptions): APIPromise<ListResponse> {
    const { org_id, ...body } = params;
    return this._client.patch(path`/org/${org_id}/lists/${listID}`, { body, ...options });
  }

  /**
   * Get a paginated list of prospect lists with filtering and sorting
   */
  list(
    orgID: string,
    query: ListListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListListResponse> {
    return this._client.get(path`/org/${orgID}/lists`, { query, ...options });
  }

  /**
   * Soft delete a prospect list and all its prospects (sets deleted_at timestamp)
   */
  delete(listID: string, params: ListDeleteParams, options?: RequestOptions): APIPromise<DeleteListResponse> {
    const { org_id } = params;
    return this._client.delete(path`/org/${org_id}/lists/${listID}`, options);
  }

  /**
   * Permanently delete a prospect list and all its prospects for GDPR compliance
   */
  deleteGdpr(
    listID: string,
    params: ListDeleteGdprParams,
    options?: RequestOptions,
  ): APIPromise<DeleteListResponse> {
    const { org_id } = params;
    return this._client.delete(path`/org/${org_id}/lists/${listID}/gdpr`, options);
  }
}

export interface DeleteListResponse {
  message?: string;

  prospects_deleted_count?: number;

  status?: string;
}

export interface ListResponse {
  id?: string;

  created_at?: string;

  deleted_at?: string;

  name?: string;

  prospect_count?: number;

  source?: string;
}

export interface ListListResponse {
  data?: Array<ListResponse>;

  meta?: ListListResponse.Meta;
}

export namespace ListListResponse {
  export interface Meta {
    page?: number;

    size?: number;

    total?: number;

    total_pages?: number;
  }
}

export interface ListCreateParams {
  name: string;

  source?: 'CSV' | 'API' | 'MANUAL' | 'INTEGRATION';
}

export interface ListRetrieveParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface ListUpdateParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  name?: string;
}

export interface ListListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Search in list name
   */
  search?: string;

  /**
   * Page size
   */
  size?: number;

  /**
   * Sort order
   */
  sort?: 'name_asc' | 'name_desc' | 'created_asc' | 'created_desc';

  /**
   * Filter by source
   */
  source?: 'CSV' | 'API' | 'MANUAL' | 'INTEGRATION';
}

export interface ListDeleteParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface ListDeleteGdprParams {
  /**
   * Organization ID
   */
  org_id: string;
}

Lists.Prospects = Prospects;

export declare namespace Lists {
  export {
    type DeleteListResponse as DeleteListResponse,
    type ListResponse as ListResponse,
    type ListListResponse as ListListResponse,
    type ListCreateParams as ListCreateParams,
    type ListRetrieveParams as ListRetrieveParams,
    type ListUpdateParams as ListUpdateParams,
    type ListListParams as ListListParams,
    type ListDeleteParams as ListDeleteParams,
    type ListDeleteGdprParams as ListDeleteGdprParams,
  };

  export {
    Prospects as Prospects,
    type ListProspectOperationResponse as ListProspectOperationResponse,
    type ProspectAddResponse as ProspectAddResponse,
    type ProspectRemoveResponse as ProspectRemoveResponse,
    type ProspectAddParams as ProspectAddParams,
    type ProspectAddBulkParams as ProspectAddBulkParams,
    type ProspectRemoveParams as ProspectRemoveParams,
    type ProspectRemoveBulkParams as ProspectRemoveBulkParams,
  };
}
