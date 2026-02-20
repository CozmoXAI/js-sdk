// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class QualityRules extends APIResource {}

export interface QualityRuleResponse {
  id?: string;

  created_at?: string;

  is_active?: boolean;

  is_global?: boolean;

  key?: string;

  organization_id?: string;

  penalty?: number;

  prompt?: string;

  updated_at?: string;
}

export declare namespace QualityRules {
  export { type QualityRuleResponse as QualityRuleResponse };
}
