// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BillingAPI from './billing';
import * as InvoicesAPI from './invoices';
import {
  InvoiceGetPdfURLParams,
  InvoiceGetPdfURLResponse,
  InvoiceListParams,
  InvoiceListResponse,
  Invoices,
  PaginationMetaBilling,
} from './invoices';
import * as LedgerAPI from './ledger';
import {
  Ledger,
  LedgerGetEntryParams,
  LedgerGetEntryResponse,
  LedgerListParams,
  LedgerListResponse,
} from './ledger';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Billing extends APIResource {
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);
  ledger: LedgerAPI.Ledger = new LedgerAPI.Ledger(this._client);

  /**
   * Get the current credits balance and billing tier
   */
  getBalance(orgID: string, options?: RequestOptions): APIPromise<BillingGetBalanceResponse> {
    return this._client.get(path`/org/${orgID}/billing/balance`, options);
  }

  /**
   * Get comprehensive billing summary including balance, monthly totals, and daily
   * report
   */
  getSummary(orgID: string, options?: RequestOptions): APIPromise<BillingGetSummaryResponse> {
    return this._client.get(path`/org/${orgID}/billing/summary`, options);
  }

  /**
   * Get usage summary grouped by product type
   */
  getUsageSummary(
    orgID: string,
    query: BillingGetUsageSummaryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BillingGetUsageSummaryResponse> {
    return this._client.get(path`/org/${orgID}/billing/usage`, { query, ...options });
  }

  /**
   * Initiate a credit top-up and return redirect URL to payment provider
   */
  initiateTopup(
    orgID: string,
    body: BillingInitiateTopupParams,
    options?: RequestOptions,
  ): APIPromise<BillingInitiateTopupResponse> {
    return this._client.post(path`/org/${orgID}/billing/topup`, { body, ...options });
  }
}

export interface Numeric {
  exp?: number;

  infinityModifier?: 1 | 0 | -1;

  int?: unknown;

  naN?: boolean;

  valid?: boolean;
}

export interface BillingGetBalanceResponse {
  billing_tier_id?: string;

  credits_balance?: Numeric;
}

export interface BillingGetSummaryResponse {
  credits_this_month?: Numeric;

  current_balance?: Numeric;

  daily_report?: Array<BillingGetSummaryResponse.DailyReport>;

  usage_this_month?: Numeric;
}

export namespace BillingGetSummaryResponse {
  export interface DailyReport {
    call_count?: number;

    charges?: BillingAPI.Numeric;

    credits?: BillingAPI.Numeric;

    date?: string;
  }
}

export interface BillingGetUsageSummaryResponse {
  data?: Array<BillingGetUsageSummaryResponse.Data>;

  end_date?: string;

  start_date?: string;
}

export namespace BillingGetUsageSummaryResponse {
  export interface Data {
    product_name?: string;

    product_type?: string;

    total_cost?: BillingAPI.Numeric;

    total_quantity?: BillingAPI.Numeric;

    unit_type?: string;
  }
}

export interface BillingInitiateTopupResponse {
  redirect_url?: string;
}

export interface BillingGetUsageSummaryParams {
  /**
   * Filter by end date (ISO 8601)
   */
  end_date?: string;

  /**
   * Filter by start date (ISO 8601)
   */
  start_date?: string;
}

export interface BillingInitiateTopupParams {
  amount: number;
}

Billing.Invoices = Invoices;
Billing.Ledger = Ledger;

export declare namespace Billing {
  export {
    type Numeric as Numeric,
    type BillingGetBalanceResponse as BillingGetBalanceResponse,
    type BillingGetSummaryResponse as BillingGetSummaryResponse,
    type BillingGetUsageSummaryResponse as BillingGetUsageSummaryResponse,
    type BillingInitiateTopupResponse as BillingInitiateTopupResponse,
    type BillingGetUsageSummaryParams as BillingGetUsageSummaryParams,
    type BillingInitiateTopupParams as BillingInitiateTopupParams,
  };

  export {
    Invoices as Invoices,
    type PaginationMetaBilling as PaginationMetaBilling,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceGetPdfURLResponse as InvoiceGetPdfURLResponse,
    type InvoiceListParams as InvoiceListParams,
    type InvoiceGetPdfURLParams as InvoiceGetPdfURLParams,
  };

  export {
    Ledger as Ledger,
    type LedgerListResponse as LedgerListResponse,
    type LedgerGetEntryResponse as LedgerGetEntryResponse,
    type LedgerListParams as LedgerListParams,
    type LedgerGetEntryParams as LedgerGetEntryParams,
  };
}
