// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BillingAPI from './billing';
import * as InvoicesAPI from './invoices';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Ledger extends APIResource {
  /**
   * Get paginated list of billing ledger entries with filtering
   */
  list(
    orgID: string,
    query: LedgerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LedgerListResponse> {
    return this._client.get(path`/org/${orgID}/billing/ledger`, { query, ...options });
  }

  /**
   * Get a ledger entry with its usage breakdown
   */
  getEntry(
    entryID: string,
    params: LedgerGetEntryParams,
    options?: RequestOptions,
  ): APIPromise<LedgerGetEntryResponse> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/billing/ledger/${entryID}`, options);
  }
}

export interface LedgerListResponse {
  data?: Array<LedgerListResponse.Data>;

  meta?: InvoicesAPI.PaginationMetaBilling;
}

export namespace LedgerListResponse {
  export interface Data {
    id?: string;

    amount?: BillingAPI.Numeric;

    balance_after?: BillingAPI.Numeric;

    call_id?: string;

    created_at?: string;

    description?: string;

    event_type?: string;

    external_provider?: string;

    is_reversal?: boolean;

    reversal_of_id?: string;

    sync_status?: string;
  }
}

export interface LedgerGetEntryResponse {
  id?: string;

  amount?: BillingAPI.Numeric;

  balance_after?: BillingAPI.Numeric;

  call_id?: string;

  created_at?: string;

  description?: string;

  event_type?: string;

  external_provider?: string;

  external_transaction_id?: string;

  idempotency_key?: string;

  is_reversal?: boolean;

  last_sync_error?: string;

  payment_provider_id?: string;

  reversal_of_id?: string;

  sync_status?: string;

  synced_at?: string;

  usage_breakdown?: Array<LedgerGetEntryResponse.UsageBreakdown>;
}

export namespace LedgerGetEntryResponse {
  export interface UsageBreakdown {
    id?: string;

    applied_unit_price?: BillingAPI.Numeric;

    created_at?: string;

    product_name?: string;

    product_type?: string;

    quantity?: BillingAPI.Numeric;

    total_cost?: BillingAPI.Numeric;

    unit_type?: string;
  }
}

export interface LedgerListParams {
  /**
   * Filter by end date (ISO 8601)
   */
  end_date?: string;

  /**
   * Filter by event type (TOPUP, CALL_USAGE, RENTAL)
   */
  event_type?: string;

  /**
   * Page number
   */
  page?: number;

  /**
   * Page size
   */
  size?: number;

  /**
   * Filter by start date (ISO 8601)
   */
  start_date?: string;
}

export interface LedgerGetEntryParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export declare namespace Ledger {
  export {
    type LedgerListResponse as LedgerListResponse,
    type LedgerGetEntryResponse as LedgerGetEntryResponse,
    type LedgerListParams as LedgerListParams,
    type LedgerGetEntryParams as LedgerGetEntryParams,
  };
}
