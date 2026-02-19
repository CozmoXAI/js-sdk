// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProspectsAPI from './prospects';
import {
  BulkOperationResponseTags,
  ProspectCreateParams,
  ProspectDeleteAllParams,
  Prospects,
} from './prospects';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tags extends APIResource {
  prospects: ProspectsAPI.Prospects = new ProspectsAPI.Prospects(this._client);

  /**
   * Create a new tag for the organization
   */
  create(orgID: string, body: TagCreateParams, options?: RequestOptions): APIPromise<TagResponseTag> {
    return this._client.post(path`/org/${orgID}/tags`, { body, ...options });
  }

  /**
   * Get a single tag by ID with prospect count
   */
  retrieve(tagID: string, params: TagRetrieveParams, options?: RequestOptions): APIPromise<TagResponseTag> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/tags/${tagID}`, options);
  }

  /**
   * Update tag properties (name, color, description)
   */
  update(tagID: string, params: TagUpdateParams, options?: RequestOptions): APIPromise<TagResponseTag> {
    const { org_id, ...body } = params;
    return this._client.patch(path`/org/${org_id}/tags/${tagID}`, { body, ...options });
  }

  /**
   * Get all tags for the organization with prospect counts
   */
  list(
    orgID: string,
    query: TagListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TagListResponse> {
    return this._client.get(path`/org/${orgID}/tags`, { query, ...options });
  }

  /**
   * Delete a tag and remove it from all prospects
   */
  delete(tagID: string, params: TagDeleteParams, options?: RequestOptions): APIPromise<TagDeleteResponse> {
    const { org_id } = params;
    return this._client.delete(path`/org/${org_id}/tags/${tagID}`, options);
  }
}

export interface TagResponseTag {
  id?: string;

  color?: string;

  created_at?: string;

  description?: string;

  name?: string;

  prospect_count?: number;
}

export interface TagListResponse {
  data?: Array<TagResponseTag>;
}

export type TagDeleteResponse = { [key: string]: unknown };

export interface TagCreateParams {
  color: string;

  name: string;

  description?: string;
}

export interface TagRetrieveParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface TagUpdateParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  color?: string;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  name?: string;
}

export interface TagListParams {
  /**
   * Search in tag name
   */
  search?: string;
}

export interface TagDeleteParams {
  /**
   * Organization ID
   */
  org_id: string;
}

Tags.Prospects = Prospects;

export declare namespace Tags {
  export {
    type TagResponseTag as TagResponseTag,
    type TagListResponse as TagListResponse,
    type TagDeleteResponse as TagDeleteResponse,
    type TagCreateParams as TagCreateParams,
    type TagRetrieveParams as TagRetrieveParams,
    type TagUpdateParams as TagUpdateParams,
    type TagListParams as TagListParams,
    type TagDeleteParams as TagDeleteParams,
  };

  export {
    Prospects as Prospects,
    type BulkOperationResponseTags as BulkOperationResponseTags,
    type ProspectCreateParams as ProspectCreateParams,
    type ProspectDeleteAllParams as ProspectDeleteAllParams,
  };
}
