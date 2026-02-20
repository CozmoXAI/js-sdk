// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class Integrations extends APIResource {}

export interface ConnectedIntegrationResponse {
  id?: string;

  created_at?: string;

  is_active?: boolean;

  last_sync_at?: string;

  last_sync_error?: string;

  last_sync_status?: string;

  name?: string;

  schema_config?: Array<number>;

  settings?: Array<number>;

  slug?: string;
}

export declare namespace Integrations {
  export { type ConnectedIntegrationResponse as ConnectedIntegrationResponse };
}
