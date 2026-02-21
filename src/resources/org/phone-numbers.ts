// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class PhoneNumbers extends APIResource {}

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

export declare namespace PhoneNumbers {
  export {
    type PaginationMetaTelephony as PaginationMetaTelephony,
    type PhoneNumberResponse as PhoneNumberResponse,
  };
}
