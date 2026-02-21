// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class Prospects extends APIResource {}

export interface BulkOperationResponseTags {
  count?: number;

  message?: string;

  status?: string;
}

export declare namespace Prospects {
  export { type BulkOperationResponseTags as BulkOperationResponseTags };
}
