// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class Tools extends APIResource {}

export interface AgentTool {
  config_override?: { [key: string]: unknown };

  description?: string;

  is_enabled?: boolean;

  method?: string;

  name?: string;

  parameters?: Array<AgentTool.Parameter>;

  tool_id?: string;

  url?: string;
}

export namespace AgentTool {
  export interface Parameter {
    description?: string;

    name?: string;

    required?: boolean;

    type?: string;
  }
}

export declare namespace Tools {
  export { type AgentTool as AgentTool };
}
