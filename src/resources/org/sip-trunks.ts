// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class SipTrunks extends APIResource {}

export interface SipTrunkResponse {
  id?: string;

  is_active?: boolean;

  max_concurrency?: number;

  name?: string;

  phone_count?: number;

  provider?: string;

  type?: string;
}

export declare namespace SipTrunks {
  export { type SipTrunkResponse as SipTrunkResponse };
}
