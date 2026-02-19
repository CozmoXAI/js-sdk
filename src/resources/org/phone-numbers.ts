// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PhoneNumbers extends APIResource {
  /**
   * Creates a new phone number and associates it with a SIP trunk
   */
  create(
    orgID: string,
    body: PhoneNumberCreateParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberResponse> {
    return this._client.post(path`/org/${orgID}/phone-numbers`, { body, ...options });
  }

  /**
   * Returns a phone number with its associated trunk information
   */
  retrieve(
    numberID: string,
    params: PhoneNumberRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberResponse> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/phone-numbers/${numberID}`, options);
  }

  /**
   * Updates the specified phone number's configuration
   */
  update(
    numberID: string,
    params: PhoneNumberUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberResponse> {
    const { org_id, ...body } = params;
    return this._client.patch(path`/org/${org_id}/phone-numbers/${numberID}`, { body, ...options });
  }

  /**
   * Returns a paginated list of phone numbers for the organization
   */
  list(
    orgID: string,
    query: PhoneNumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PhoneNumberListResponse> {
    return this._client.get(path`/org/${orgID}/phone-numbers`, { query, ...options });
  }

  /**
   * Deletes the specified phone number
   */
  delete(
    numberID: string,
    params: PhoneNumberDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberDeleteResponse> {
    const { org_id } = params;
    return this._client.delete(path`/org/${org_id}/phone-numbers/${numberID}`, options);
  }

  /**
   * Creates multiple phone numbers and associates them with a SIP trunk
   */
  createBulk(
    orgID: string,
    body: PhoneNumberCreateBulkParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberCreateBulkResponse> {
    return this._client.post(path`/org/${orgID}/phone-numbers/bulk`, { body, ...options });
  }
}

export interface PaginationMetaTelephony {
  page?: number;

  size?: number;

  total?: number;

  total_pages?: number;
}

export interface PhoneNumberResponse {
  id?: string;

  is_verified?: boolean;

  label?: string;

  number?: string;

  provider?: string;

  sip_trunk_id?: string;

  trunk_name?: string;
}

export interface PhoneNumberListResponse {
  data?: Array<PhoneNumberResponse>;

  meta?: PaginationMetaTelephony;
}

export type PhoneNumberDeleteResponse = { [key: string]: string };

export interface PhoneNumberCreateBulkResponse {
  count?: number;

  created?: Array<PhoneNumberResponse>;
}

export interface PhoneNumberCreateParams {
  number: string;

  sip_trunk_id: string;

  label?: string;
}

export interface PhoneNumberRetrieveParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface PhoneNumberUpdateParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  is_verified?: boolean;

  /**
   * Body param
   */
  label?: string;

  /**
   * Body param
   */
  sip_trunk_id?: string;
}

export interface PhoneNumberListParams {
  /**
   * Filter by SIP trunk type/direction
   */
  direction?: 'inbound' | 'outbound';

  /**
   * Filter by verification status
   */
  is_verified?: boolean;

  /**
   * Page number
   */
  page?: number;

  /**
   * Search by number or label
   */
  search?: string;

  /**
   * Filter by SIP trunk ID
   */
  sip_trunk_id?: string;

  /**
   * Page size
   */
  size?: number;
}

export interface PhoneNumberDeleteParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface PhoneNumberCreateBulkParams {
  numbers: Array<PhoneNumberCreateBulkParams.Number>;

  sip_trunk_id: string;
}

export namespace PhoneNumberCreateBulkParams {
  export interface Number {
    number: string;

    label?: string;
  }
}

export declare namespace PhoneNumbers {
  export {
    type PaginationMetaTelephony as PaginationMetaTelephony,
    type PhoneNumberResponse as PhoneNumberResponse,
    type PhoneNumberListResponse as PhoneNumberListResponse,
    type PhoneNumberDeleteResponse as PhoneNumberDeleteResponse,
    type PhoneNumberCreateBulkResponse as PhoneNumberCreateBulkResponse,
    type PhoneNumberCreateParams as PhoneNumberCreateParams,
    type PhoneNumberRetrieveParams as PhoneNumberRetrieveParams,
    type PhoneNumberUpdateParams as PhoneNumberUpdateParams,
    type PhoneNumberListParams as PhoneNumberListParams,
    type PhoneNumberDeleteParams as PhoneNumberDeleteParams,
    type PhoneNumberCreateBulkParams as PhoneNumberCreateBulkParams,
  };
}
