// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class OutcomeDefinitions extends APIResource {}

export interface OutcomeDefinition {
  id?: string;

  created_at?: string;

  description?: string;

  display_name?: string;

  is_unique_per_call?: boolean;

  key?: string;

  organization_id?: string;

  value_type?: string;
}

export declare namespace OutcomeDefinitions {
  export { type OutcomeDefinition as OutcomeDefinition };
}
