// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RunsAPI from './runs';
import * as BatchesAPI from './batches';

export class Runs extends APIResource {}

export interface PaginatedRunsExtendedResponse {
  data?: Array<PaginatedRunsExtendedResponse.Data>;

  pagination?: BatchesAPI.PaginationMetaWorkflowBatches;
}

export namespace PaginatedRunsExtendedResponse {
  export interface Data {
    id?: string;

    batch_id?: string;

    batch_name?: string;

    current_step_id?: string;

    ended_at?: string;

    prospect?: RunsAPI.ProspectInfo;

    prospect_id?: string;

    started_at?: string;

    status?: string;

    workflow_id?: string;

    workflow_name?: string;

    workflow_version_id?: string;
  }
}

export interface ProspectInfo {
  email?: string;

  first_name?: string;

  last_name?: string;

  phone?: string;
}

export interface RunResponse {
  id?: string;

  batch_id?: string;

  current_step_id?: string;

  ended_at?: string;

  prospect?: ProspectInfo;

  prospect_id?: string;

  started_at?: string;

  status?: string;

  workflow_id?: string;

  workflow_version_id?: string;
}

export declare namespace Runs {
  export {
    type PaginatedRunsExtendedResponse as PaginatedRunsExtendedResponse,
    type ProspectInfo as ProspectInfo,
    type RunResponse as RunResponse,
  };
}
