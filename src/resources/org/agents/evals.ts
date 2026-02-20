// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class Evals extends APIResource {}

export interface Eval {
  id?: number;

  agent_id?: string;

  category?: string;

  created_at?: string;

  org_id?: string;

  prompt?: string;

  score?: number;

  title?: string;
}

export declare namespace Evals {
  export { type Eval as Eval };
}
