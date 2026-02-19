// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class Bulk extends APIResource {
  /**
   * Update multiple prospects with the same field values. At least one update field
   * must be provided. Phone cannot be bulk updated.
   */
  update(
    orgID: string,
    body: BulkUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BulkOperationResponseProspects> {
    return this._client.patch(path`/org/${orgID}/prospects/bulk`, { body, ...options });
  }

  /**
   * Soft delete multiple prospects at once
   */
  delete(
    orgID: string,
    body: BulkDeleteParams,
    options?: RequestOptions,
  ): APIPromise<BulkOperationResponseProspects> {
    return this._client.delete(path`/org/${orgID}/prospects/bulk`, { body, ...options });
  }

  /**
   * Import prospects from a CSV file. Creates a prospect list and upserts prospects.
   * Auto-detects country/timezone from phone.
   */
  import(orgID: string, body: BulkImportParams, options?: RequestOptions): APIPromise<BulkImportResponse> {
    return this._client.post(
      path`/org/${orgID}/prospects/bulk`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface BulkOperationResponseProspects {
  affected_ids?: Array<string>;

  count?: number;
}

export interface BulkImportResponse {
  list_id?: string;

  list_name?: string;

  prospect_ids?: Array<string>;

  skipped_rows?: Array<BulkImportResponse.SkippedRow>;

  total_imported?: number;

  total_rows?: number;

  total_skipped?: number;

  total_updated?: number;
}

export namespace BulkImportResponse {
  export interface SkippedRow {
    phone?: string;

    reason?: string;

    row?: number;
  }
}

export interface BulkUpdateParams {
  prospect_ids: Array<string>;

  updates: BulkUpdateParams.Updates;
}

export namespace BulkUpdateParams {
  export interface Updates {
    country?: string;

    custom_data?: { [key: string]: unknown };

    email?: string;

    external_id?: string;

    first_name?: string;

    last_name?: string;

    list_id?: string;

    /**
     * Explicit flag to set list_id to NULL
     */
    remove_from_list?: boolean;

    status?: string;

    timezone?: string;
  }
}

export interface BulkDeleteParams {
  prospect_ids: Array<string>;
}

export interface BulkImportParams {
  /**
   * CSV file (max 2MB)
   */
  file: Uploadable;

  /**
   * Name for the prospect list
   */
  list_name: string;
}

export declare namespace Bulk {
  export {
    type BulkOperationResponseProspects as BulkOperationResponseProspects,
    type BulkImportResponse as BulkImportResponse,
    type BulkUpdateParams as BulkUpdateParams,
    type BulkDeleteParams as BulkDeleteParams,
    type BulkImportParams as BulkImportParams,
  };
}
