// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class Invoices extends APIResource {}

export interface PaginationMetaBilling {
  page?: number;

  size?: number;

  total?: number;

  total_pages?: number;
}

export declare namespace Invoices {
  export { type PaginationMetaBilling as PaginationMetaBilling };
}
