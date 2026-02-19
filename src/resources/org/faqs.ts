// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Faqs extends APIResource {
  /**
   * Create a new FAQ for the organization
   */
  create(orgID: string, body: FaqCreateParams, options?: RequestOptions): APIPromise<Faq> {
    return this._client.post(path`/org/${orgID}/faqs`, { body, ...options });
  }

  /**
   * Get a single FAQ by ID
   */
  retrieve(faqID: string, params: FaqRetrieveParams, options?: RequestOptions): APIPromise<Faq> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/faqs/${faqID}`, options);
  }

  /**
   * Update FAQ properties
   */
  update(faqID: string, params: FaqUpdateParams, options?: RequestOptions): APIPromise<Faq> {
    const { org_id, ...body } = params;
    return this._client.patch(path`/org/${org_id}/faqs/${faqID}`, { body, ...options });
  }

  /**
   * Get all FAQs for the organization with pagination
   */
  list(
    orgID: string,
    query: FaqListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FaqListResponse> {
    return this._client.get(path`/org/${orgID}/faqs`, { query, ...options });
  }

  /**
   * Delete an FAQ
   */
  delete(faqID: string, params: FaqDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { org_id } = params;
    return this._client.delete(path`/org/${org_id}/faqs/${faqID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Faq {
  id?: string;

  answer?: string;

  created_at?: string;

  instruction?: string;

  logic?: string;

  question?: string;

  updated_at?: string;
}

export interface FaqListResponse {
  data?: Array<Faq>;

  pagination?: FaqListResponse.Pagination;
}

export namespace FaqListResponse {
  export interface Pagination {
    has_more?: boolean;

    next_cursor?: string;
  }
}

export interface FaqCreateParams {
  answer: string;

  question: string;

  instruction?: string;

  logic?: string;
}

export interface FaqRetrieveParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface FaqUpdateParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  answer?: string;

  /**
   * Body param
   */
  instruction?: string;

  /**
   * Body param
   */
  logic?: string;

  /**
   * Body param
   */
  question?: string;
}

export interface FaqListParams {
  /**
   * Pagination cursor
   */
  cursor?: string;

  /**
   * Number of items to return (default 20, max 100)
   */
  limit?: number;
}

export interface FaqDeleteParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export declare namespace Faqs {
  export {
    type Faq as Faq,
    type FaqListResponse as FaqListResponse,
    type FaqCreateParams as FaqCreateParams,
    type FaqRetrieveParams as FaqRetrieveParams,
    type FaqUpdateParams as FaqUpdateParams,
    type FaqListParams as FaqListParams,
    type FaqDeleteParams as FaqDeleteParams,
  };
}
