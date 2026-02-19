// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Prospects extends APIResource {
  /**
   * Add a single prospect to a prospect list (moves if already in another list)
   */
  add(
    prospectID: string,
    params: ProspectAddParams,
    options?: RequestOptions,
  ): APIPromise<ProspectAddResponse> {
    const { org_id, list_id } = params;
    return this._client.put(path`/org/${org_id}/lists/${list_id}/prospects/${prospectID}`, options);
  }

  /**
   * Add multiple prospects to a prospect list (moves if already in another list)
   */
  addBulk(
    listID: string,
    params: ProspectAddBulkParams,
    options?: RequestOptions,
  ): APIPromise<ListProspectOperationResponse> {
    const { org_id, ...body } = params;
    return this._client.post(path`/org/${org_id}/lists/${listID}/prospects`, { body, ...options });
  }

  /**
   * Remove a single prospect from a prospect list (sets list_id to NULL)
   */
  remove(
    prospectID: string,
    params: ProspectRemoveParams,
    options?: RequestOptions,
  ): APIPromise<ProspectRemoveResponse> {
    const { org_id, list_id } = params;
    return this._client.delete(path`/org/${org_id}/lists/${list_id}/prospects/${prospectID}`, options);
  }

  /**
   * Remove multiple prospects from a prospect list (sets list_id to NULL)
   */
  removeBulk(
    listID: string,
    params: ProspectRemoveBulkParams,
    options?: RequestOptions,
  ): APIPromise<ListProspectOperationResponse> {
    const { org_id, ...body } = params;
    return this._client.delete(path`/org/${org_id}/lists/${listID}/prospects`, { body, ...options });
  }
}

export interface ListProspectOperationResponse {
  affected_count?: number;

  message?: string;

  status?: string;
}

export type ProspectAddResponse = { [key: string]: unknown };

export type ProspectRemoveResponse = { [key: string]: unknown };

export interface ProspectAddParams {
  /**
   * Organization ID
   */
  org_id: string;

  /**
   * List ID
   */
  list_id: string;
}

export interface ProspectAddBulkParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  prospect_ids: Array<string>;
}

export interface ProspectRemoveParams {
  /**
   * Organization ID
   */
  org_id: string;

  /**
   * List ID
   */
  list_id: string;
}

export interface ProspectRemoveBulkParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  prospect_ids: Array<string>;
}

export declare namespace Prospects {
  export {
    type ListProspectOperationResponse as ListProspectOperationResponse,
    type ProspectAddResponse as ProspectAddResponse,
    type ProspectRemoveResponse as ProspectRemoveResponse,
    type ProspectAddParams as ProspectAddParams,
    type ProspectAddBulkParams as ProspectAddBulkParams,
    type ProspectRemoveParams as ProspectRemoveParams,
    type ProspectRemoveBulkParams as ProspectRemoveBulkParams,
  };
}
