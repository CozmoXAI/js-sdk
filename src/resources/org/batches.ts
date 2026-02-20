// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class Batches extends APIResource {}

export interface BatchResponse {
  id?: string;

  created_at?: string;

  created_by?: string;

  name?: string;

  organization_id?: string;

  scheduled_at?: string;

  source_type?: string;

  stats?: BatchResponse.Stats;

  status?: string;

  total_prospects?: number;

  updated_at?: string;

  workflow_id?: string;

  workflow_version_id?: string;

  workflow_version_number?: number;
}

export namespace BatchResponse {
  export interface Stats {
    cancelled_count?: number;

    failed_count?: number;

    finished_count?: number;

    in_progress_count?: number;

    paused_count?: number;

    pending_count?: number;

    total_count?: number;
  }
}

export interface PaginationMetaWorkflowBatches {
  limit?: number;

  page?: number;

  total?: number;

  total_pages?: number;
}

export declare namespace Batches {
  export {
    type BatchResponse as BatchResponse,
    type PaginationMetaWorkflowBatches as PaginationMetaWorkflowBatches,
  };
}
