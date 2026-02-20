// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class EmailTemplates extends APIResource {}

export interface Template {
  id?: string;

  body_html?: string;

  body_text?: string;

  created_at?: string;

  name?: string;

  subject?: string;

  updated_at?: string;
}

export declare namespace EmailTemplates {
  export { type Template as Template };
}
