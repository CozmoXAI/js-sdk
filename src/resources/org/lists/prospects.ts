// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class Prospects extends APIResource {}

export interface ListProspectOperationResponse {
  affected_count?: number;

  message?: string;

  status?: string;
}

export declare namespace Prospects {
  export { type ListProspectOperationResponse as ListProspectOperationResponse };
}
