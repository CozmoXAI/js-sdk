// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class Faqs extends APIResource {}

export interface Faq {
  id?: string;

  answer?: string;

  created_at?: string;

  instruction?: string;

  logic?: string;

  question?: string;

  updated_at?: string;
}

export declare namespace Faqs {
  export { type Faq as Faq };
}
