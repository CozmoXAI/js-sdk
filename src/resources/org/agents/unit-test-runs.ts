// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class UnitTestRuns extends APIResource {}

export interface PaginationMetaUnitTests {
  page?: number;

  size?: number;

  total?: number;

  total_pages?: number;
}

export declare namespace UnitTestRuns {
  export { type PaginationMetaUnitTests as PaginationMetaUnitTests };
}
