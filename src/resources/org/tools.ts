// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class Tools extends APIResource {}

export interface ParameterProp {
  name: string;

  /**
   * string, number, boolean, object, array
   */
  type: string;

  description?: string;

  required?: boolean;
}

export interface ToolResponse {
  id?: string;

  body?: string;

  created_at?: string;

  description?: string;

  filler_phrases?: Array<string>;

  headers?: Array<number>;

  method?: string;

  name?: string;

  parameters?: Array<ToolResponse.Parameter>;

  updated_at?: string;

  url?: string;
}

export namespace ToolResponse {
  export interface Parameter {
    id?: string;

    created_at?: string;

    description?: string;

    name?: string;

    position?: number;

    required?: boolean;

    type?: string;
  }
}

export declare namespace Tools {
  export { type ParameterProp as ParameterProp, type ToolResponse as ToolResponse };
}
