// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CallsAPI from './calls';
import { Calls } from './calls';
import * as InsightsAPI from './insights';
import { Insights } from './insights';
import * as WorkflowsAPI from './workflows';
import { Workflows } from './workflows';

export class Analytics extends APIResource {
  calls: CallsAPI.Calls = new CallsAPI.Calls(this._client);
  insights: InsightsAPI.Insights = new InsightsAPI.Insights(this._client);
  workflows: WorkflowsAPI.Workflows = new WorkflowsAPI.Workflows(this._client);
}

export interface AnalyticsPeriod {
  end?: string;

  start?: string;
}

Analytics.Calls = Calls;
Analytics.Insights = Insights;
Analytics.Workflows = Workflows;

export declare namespace Analytics {
  export { type AnalyticsPeriod as AnalyticsPeriod };

  export { Calls as Calls };

  export { Insights as Insights };

  export { Workflows as Workflows };
}
