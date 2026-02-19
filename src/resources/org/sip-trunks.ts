// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PhoneNumbersAPI from './phone-numbers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SipTrunks extends APIResource {
  /**
   * Returns a SIP trunk with its associated phone numbers
   */
  retrieve(
    trunkID: string,
    params: SipTrunkRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SipTrunkRetrieveResponse> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/sip-trunks/${trunkID}`, options);
  }

  /**
   * Updates the specified SIP trunk's configuration
   */
  update(
    trunkID: string,
    params: SipTrunkUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SipTrunkResponse> {
    const { org_id, ...body } = params;
    return this._client.patch(path`/org/${org_id}/sip-trunks/${trunkID}`, { body, ...options });
  }

  /**
   * Deletes the specified SIP trunk and its associated phone numbers
   */
  delete(
    trunkID: string,
    params: SipTrunkDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SipTrunkDeleteResponse> {
    const { org_id } = params;
    return this._client.delete(path`/org/${org_id}/sip-trunks/${trunkID}`, options);
  }

  /**
   * Returns a paginated list of SIP trunks for the organization
   */
  retrieveSipTrunks(
    orgID: string,
    query: SipTrunkRetrieveSipTrunksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SipTrunkRetrieveSipTrunksResponse> {
    return this._client.get(path`/org/${orgID}/sip-trunks`, { query, ...options });
  }

  /**
   * Creates a new SIP trunk pair (inbound and outbound) with the specified phone
   * numbers
   */
  sipTrunks(
    orgID: string,
    body: SipTrunkSipTrunksParams,
    options?: RequestOptions,
  ): APIPromise<SipTrunkSipTrunksResponse> {
    return this._client.post(path`/org/${orgID}/sip-trunks`, { body, ...options });
  }
}

export interface SipTrunkResponse {
  id?: string;

  is_active?: boolean;

  max_concurrency?: number;

  name?: string;

  phone_count?: number;

  provider?: string;

  type?: string;
}

export interface SipTrunkRetrieveResponse {
  id?: string;

  is_active?: boolean;

  max_concurrency?: number;

  name?: string;

  phone_numbers?: Array<PhoneNumbersAPI.PhoneNumberResponse>;

  provider?: string;

  type?: string;
}

export type SipTrunkDeleteResponse = { [key: string]: string };

export interface SipTrunkRetrieveSipTrunksResponse {
  data?: Array<SipTrunkResponse>;

  meta?: PhoneNumbersAPI.PaginationMetaTelephony;
}

export interface SipTrunkSipTrunksResponse {
  inbound_trunk?: SipTrunkResponse;

  outbound_trunk?: SipTrunkResponse;

  phone_numbers?: Array<PhoneNumbersAPI.PhoneNumberResponse>;
}

export interface SipTrunkRetrieveParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface SipTrunkUpdateParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  is_active?: boolean;

  /**
   * Body param
   */
  max_concurrency?: number;

  /**
   * Body param
   */
  name?: string;
}

export interface SipTrunkDeleteParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface SipTrunkRetrieveSipTrunksParams {
  /**
   * Filter by active status
   */
  is_active?: boolean;

  /**
   * Page number
   */
  page?: number;

  /**
   * Filter by provider (TWILIO, TELNYX, VONAGE, GENERIC)
   */
  provider?: string;

  /**
   * Page size
   */
  size?: number;
}

export interface SipTrunkSipTrunksParams {
  address: string;

  name: string;

  phone_numbers: Array<string>;

  provider: 'twilio' | 'telnyx' | 'custom' | 'did-logic' | 'vonage' | 'other';

  auth_password?: string;

  auth_username?: string;

  max_concurrency?: number;
}

export declare namespace SipTrunks {
  export {
    type SipTrunkResponse as SipTrunkResponse,
    type SipTrunkRetrieveResponse as SipTrunkRetrieveResponse,
    type SipTrunkDeleteResponse as SipTrunkDeleteResponse,
    type SipTrunkRetrieveSipTrunksResponse as SipTrunkRetrieveSipTrunksResponse,
    type SipTrunkSipTrunksResponse as SipTrunkSipTrunksResponse,
    type SipTrunkRetrieveParams as SipTrunkRetrieveParams,
    type SipTrunkUpdateParams as SipTrunkUpdateParams,
    type SipTrunkDeleteParams as SipTrunkDeleteParams,
    type SipTrunkRetrieveSipTrunksParams as SipTrunkRetrieveSipTrunksParams,
    type SipTrunkSipTrunksParams as SipTrunkSipTrunksParams,
  };
}
