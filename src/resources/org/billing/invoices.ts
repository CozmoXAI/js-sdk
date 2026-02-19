// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Invoices extends APIResource {
  /**
   * Get paginated list of invoices with optional filtering
   */
  list(
    orgID: string,
    query: InvoiceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceListResponse> {
    return this._client.get(path`/org/${orgID}/billing/invoices`, { query, ...options });
  }

  /**
   * Get the PDF URL for a specific invoice
   */
  getPdfURL(
    orgID: string,
    query: InvoiceGetPdfURLParams,
    options?: RequestOptions,
  ): APIPromise<InvoiceGetPdfURLResponse> {
    return this._client.get(path`/org/${orgID}/billing/invoices/pdf`, { query, ...options });
  }
}

export interface PaginationMetaBilling {
  page?: number;

  size?: number;

  total?: number;

  total_pages?: number;
}

export interface InvoiceListResponse {
  data?: Array<InvoiceListResponse.Data>;

  meta?: PaginationMetaBilling;
}

export namespace InvoiceListResponse {
  export interface Data {
    id?: string;

    amount?: string;

    amount_due?: string;

    amount_paid?: string;

    amount_remaining?: string;

    billing_period?: string;

    billing_reason?: string;

    created_at?: string;

    currency?: string;

    customer_id?: string;

    description?: string;

    due_date?: string;

    finalized_at?: string;

    invoice_number?: string;

    invoice_pdf_url?: string;

    /**
     * Summary fields
     */
    line_items_count?: number;

    paid_at?: string;

    payment_status?: string;

    period_end?: string;

    period_start?: string;

    status?: string;

    subscription_id?: string;

    subtotal?: string;

    total?: string;

    total_discount?: string;

    total_tax?: string;

    type?: string;
  }
}

export interface InvoiceGetPdfURLResponse {
  invoice_id?: string;

  pdf_url?: string;
}

export interface InvoiceListParams {
  /**
   * Filter by end date (ISO 8601)
   */
  end_date?: string;

  /**
   * Filter by invoice status (DRAFT, FINALIZED, VOIDED)
   */
  invoice_status?: Array<string>;

  /**
   * Page number
   */
  page?: number;

  /**
   * Filter by payment status (INITIATED, PENDING, SUCCEEDED, etc.)
   */
  payment_status?: Array<string>;

  /**
   * Items per page
   */
  per_page?: number;

  /**
   * Filter by start date (ISO 8601)
   */
  start_date?: string;
}

export interface InvoiceGetPdfURLParams {
  /**
   * Invoice ID
   */
  invoice_id: string;

  /**
   * Return URL (optional)
   */
  url?: string;
}

export declare namespace Invoices {
  export {
    type PaginationMetaBilling as PaginationMetaBilling,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceGetPdfURLResponse as InvoiceGetPdfURLResponse,
    type InvoiceListParams as InvoiceListParams,
    type InvoiceGetPdfURLParams as InvoiceGetPdfURLParams,
  };
}
