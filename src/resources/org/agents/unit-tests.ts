// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class UnitTests extends APIResource {}

export interface UnitTest {
  id?: string;

  agent_id?: string;

  answer_prompt?: string;

  created_at?: string;

  function_tool_assertion?: string;

  organization_id?: string;

  question_prompt?: string;

  question_variance?: string;

  title?: string;

  updated_at?: string;

  yaml_config?: string;
}

export declare namespace UnitTests {
  export { type UnitTest as UnitTest };
}
