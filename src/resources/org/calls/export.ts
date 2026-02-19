// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Export extends APIResource {
  /**
   * Returns the total count of calls matching the export filters
   */
  getCount(
    orgID: string,
    query: ExportGetCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExportGetCountResponse> {
    return this._client.get(path`/org/${orgID}/calls/export/count`, { query, ...options });
  }

  /**
   * Returns a CSV file containing all calls matching the filters (max 10,000)
   */
  getCsv(
    orgID: string,
    query: ExportGetCsvParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get(path`/org/${orgID}/calls/export`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/csv' }, options?.headers]),
    });
  }
}

export interface ExportGetCountResponse {
  count?: number;

  /**
   * true if count > 10000
   */
  limited?: boolean;

  message?: string;
}

export type ExportGetCsvResponse = Uploadable;

export interface ExportGetCountParams {
  /**
   * Filter by agent ID
   */
  agent_id?: string;

  /**
   * Filter by direction
   */
  direction?: string;

  /**
   * Filter by end date (ISO 8601)
   */
  end_date?: string;

  /**
   * Filter by minimum duration in seconds
   */
  min_duration?: number;

  /**
   * Search by phone number
   */
  phone?: string;

  /**
   * Filter by prospect external ID
   */
  prospect_external_id?: string;

  /**
   * Filter by prospect ID
   */
  prospect_id?: string;

  /**
   * Filter by start date (ISO 8601)
   */
  start_date?: string;

  /**
   * Filter by status
   */
  status?: string;

  /**
   * Filter by workflow ID
   */
  workflow_id?: string;
}

export interface ExportGetCsvParams {
  /**
   * Filter by agent ID
   */
  agent_id?: string;

  /**
   * Filter by direction
   */
  direction?: string;

  /**
   * Filter by end date (ISO 8601)
   */
  end_date?: string;

  /**
   * Filter by minimum duration in seconds
   */
  min_duration?: number;

  /**
   * Search by phone number
   */
  phone?: string;

  /**
   * Filter by prospect external ID
   */
  prospect_external_id?: string;

  /**
   * Filter by prospect ID
   */
  prospect_id?: string;

  /**
   * Filter by start date (ISO 8601)
   */
  start_date?: string;

  /**
   * Filter by status
   */
  status?: string;

  /**
   * Filter by workflow ID
   */
  workflow_id?: string;
}

export declare namespace Export {
  export {
    type ExportGetCountResponse as ExportGetCountResponse,
    type ExportGetCsvResponse as ExportGetCsvResponse,
    type ExportGetCountParams as ExportGetCountParams,
    type ExportGetCsvParams as ExportGetCsvParams,
  };
}
