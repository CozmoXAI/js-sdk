// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProspectsAPI from './prospects';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tags extends APIResource {
  /**
   * Add one or more tags to a prospect
   */
  add(
    prospectID: string,
    params: TagAddParams,
    options?: RequestOptions,
  ): APIPromise<ProspectsAPI.ResponseError> {
    const { org_id, ...body } = params;
    return this._client.post(path`/org/${org_id}/prospects/${prospectID}/tags`, { body, ...options });
  }

  /**
   * Remove a specific tag from a prospect
   */
  remove(
    tagID: string,
    params: TagRemoveParams,
    options?: RequestOptions,
  ): APIPromise<ProspectsAPI.ResponseError> {
    const { org_id, prospect_id } = params;
    return this._client.delete(path`/org/${org_id}/prospects/${prospect_id}/tags/${tagID}`, options);
  }

  /**
   * Remove all tags from a prospect
   */
  removeAll(
    prospectID: string,
    params: TagRemoveAllParams,
    options?: RequestOptions,
  ): APIPromise<ProspectsAPI.ResponseError> {
    const { org_id } = params;
    return this._client.delete(path`/org/${org_id}/prospects/${prospectID}/tags`, options);
  }
}

export interface TagAddParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  tag_ids: Array<string>;
}

export interface TagRemoveParams {
  /**
   * Organization ID
   */
  org_id: string;

  /**
   * Prospect ID
   */
  prospect_id: string;
}

export interface TagRemoveAllParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export declare namespace Tags {
  export {
    type TagAddParams as TagAddParams,
    type TagRemoveParams as TagRemoveParams,
    type TagRemoveAllParams as TagRemoveAllParams,
  };
}
