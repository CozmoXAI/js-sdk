// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Prospects extends APIResource {
  /**
   * Add this tag to multiple prospects
   */
  create(
    tagID: string,
    params: ProspectCreateParams,
    options?: RequestOptions,
  ): APIPromise<BulkOperationResponseTags> {
    const { org_id, ...body } = params;
    return this._client.post(path`/org/${org_id}/tags/${tagID}/prospects`, { body, ...options });
  }

  /**
   * Remove this tag from multiple prospects
   */
  deleteAll(
    tagID: string,
    params: ProspectDeleteAllParams,
    options?: RequestOptions,
  ): APIPromise<BulkOperationResponseTags> {
    const { org_id, ...body } = params;
    return this._client.delete(path`/org/${org_id}/tags/${tagID}/prospects`, { body, ...options });
  }
}

export interface BulkOperationResponseTags {
  count?: number;

  message?: string;

  status?: string;
}

export interface ProspectCreateParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  prospect_ids: Array<string>;
}

export interface ProspectDeleteAllParams {
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
    type BulkOperationResponseTags as BulkOperationResponseTags,
    type ProspectCreateParams as ProspectCreateParams,
    type ProspectDeleteAllParams as ProspectDeleteAllParams,
  };
}
