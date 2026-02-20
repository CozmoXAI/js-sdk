// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from './api-keys';
import { APIKeys, Response } from './api-keys';
import * as BatchesAPI from './batches';
import { BatchResponse, Batches, PaginationMetaWorkflowBatches } from './batches';
import * as EmailTemplatesAPI from './email-templates';
import { EmailTemplates, Template } from './email-templates';
import * as FaqsAPI from './faqs';
import { Faq, Faqs } from './faqs';
import * as IntegrationsAPI from './integrations';
import { ConnectedIntegrationResponse, Integrations } from './integrations';
import * as OutcomeDefinitionsAPI from './outcome-definitions';
import { OutcomeDefinition, OutcomeDefinitions } from './outcome-definitions';
import * as PhoneNumbersAPI from './phone-numbers';
import {
  PaginationMetaTelephony,
  PhoneNumberCreateParams,
  PhoneNumberDeleteParams,
  PhoneNumberDeleteResponse,
  PhoneNumberListParams,
  PhoneNumberListResponse,
  PhoneNumberResponse,
  PhoneNumberRetrieveParams,
  PhoneNumberUpdateParams,
  PhoneNumbers,
} from './phone-numbers';
import * as QualityRulesAPI from './quality-rules';
import { QualityRuleResponse, QualityRules } from './quality-rules';
import * as RunsAPI from './runs';
import { PaginatedRunsExtendedResponse, ProspectInfo, RunResponse, Runs } from './runs';
import * as SipTrunksAPI from './sip-trunks';
import { SipTrunkResponse, SipTrunks } from './sip-trunks';
import * as ToolsAPI from './tools';
import { ParameterProp, ToolResponse, Tools } from './tools';
import * as AgentsAPI from './agents/agents';
import {
  Agent,
  AgentCreateParams,
  AgentDeleteParams,
  AgentDeleteResponse,
  AgentListParams,
  AgentListResponse,
  AgentRetrieveParams,
  AgentUpdateParams,
  Agents,
  BackgroundSoundConfig,
  GoodbyeConfig,
  PaginationMetaEvalsPostcall,
  RecallWebhook,
  RunTests,
} from './agents/agents';
import * as AnalyticsAPI from './analytics/analytics';
import { Analytics, AnalyticsPeriod } from './analytics/analytics';
import * as BillingAPI from './billing/billing';
import { Billing, Numeric } from './billing/billing';
import * as CallsAPI from './calls/calls';
import {
  CallEvaluation,
  CallGetDetailsParams,
  CallGetDetailsResponse,
  CallGetRecordingParams,
  CallGetRecordingResponse,
  CallGetTranscriptParams,
  CallGetTranscriptResponse,
  CallListParams,
  CallListResponse,
  CallToolLog,
  Calls,
  PaginationMetaCalls,
} from './calls/calls';
import * as ChatAPI from './chat/chat';
import { Chat } from './chat/chat';
import * as ListsAPI from './lists/lists';
import {
  DeleteListResponse,
  ListCreateParams,
  ListDeleteParams,
  ListListParams,
  ListListResponse,
  ListResponse,
  ListRetrieveParams,
  ListUpdateParams,
  Lists,
} from './lists/lists';
import * as ProspectsAPI from './prospects/prospects';
import {
  ProspectCreateParams,
  ProspectDeleteParams,
  ProspectListCallsParams,
  ProspectListCallsResponse,
  ProspectListParams,
  ProspectListResponse,
  ProspectResponse,
  ProspectRetrieveParams,
  ProspectUpdateParams,
  Prospects,
  ResponseError,
  TagResponseProspect,
} from './prospects/prospects';
import * as TagsAPI from './tags/tags';
import { TagResponseTag, Tags } from './tags/tags';
import * as WorkflowsAPI from './workflows/workflows';
import {
  PaginationMetaWorkflows,
  WorkflowCreateParams,
  WorkflowDeleteParams,
  WorkflowDeleteResponse,
  WorkflowListParams,
  WorkflowListResponse,
  WorkflowResponse,
  WorkflowRetrieveParams,
  WorkflowRetrieveRunsParams,
  WorkflowUpdateDefinitionParams,
  Workflows,
} from './workflows/workflows';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Org extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
  batches: BatchesAPI.Batches = new BatchesAPI.Batches(this._client);
  billing: BillingAPI.Billing = new BillingAPI.Billing(this._client);
  calls: CallsAPI.Calls = new CallsAPI.Calls(this._client);
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
  emailTemplates: EmailTemplatesAPI.EmailTemplates = new EmailTemplatesAPI.EmailTemplates(this._client);
  faqs: FaqsAPI.Faqs = new FaqsAPI.Faqs(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
  outcomeDefinitions: OutcomeDefinitionsAPI.OutcomeDefinitions = new OutcomeDefinitionsAPI.OutcomeDefinitions(
    this._client,
  );
  phoneNumbers: PhoneNumbersAPI.PhoneNumbers = new PhoneNumbersAPI.PhoneNumbers(this._client);
  prospects: ProspectsAPI.Prospects = new ProspectsAPI.Prospects(this._client);
  qualityRules: QualityRulesAPI.QualityRules = new QualityRulesAPI.QualityRules(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);
  sipTrunks: SipTrunksAPI.SipTrunks = new SipTrunksAPI.SipTrunks(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);
  workflows: WorkflowsAPI.Workflows = new WorkflowsAPI.Workflows(this._client);

  /**
   * Create a new workflow run with prospect creation in a single operation (API
   * endpoint)
   */
  createWorkflowRun(
    orgID: string,
    body: OrgCreateWorkflowRunParams,
    options?: RequestOptions,
  ): APIPromise<OrgCreateWorkflowRunResponse> {
    return this._client.post(path`/org/${orgID}/workflow-runs`, { body, ...options });
  }

  /**
   * Get a paginated list of available voices from the specified provider
   */
  listVoices(
    orgID: string,
    query: OrgListVoicesParams,
    options?: RequestOptions,
  ): APIPromise<OrgListVoicesResponse> {
    return this._client.get(path`/org/${orgID}/voices`, { query, ...options });
  }
}

export interface OrgCreateWorkflowRunResponse {
  external_id?: string;

  workflow_run_id?: string;
}

export interface OrgListVoicesResponse {
  meta?: OrgListVoicesResponse.Meta;

  voices?: Array<OrgListVoicesResponse.Voice>;
}

export namespace OrgListVoicesResponse {
  export interface Meta {
    has_more?: boolean;

    /**
     * Cursor for next page (cartesia, elevenlabs)
     */
    next_page?: string;

    page?: number;

    size?: number;

    /**
     * May not be available with cursor pagination
     */
    total?: number;

    /**
     * May not be available with cursor pagination
     */
    total_pages?: number;
  }

  export interface Voice {
    id?: string;

    accent?: string;

    age?: string;

    category?: string;

    description?: string;

    gender?: string;

    language?: string;

    name?: string;

    preview_url?: string;

    /**
     * "elevenlabs", "cartesia", "openai"
     */
    provider?: string;

    use_case?: string;
  }
}

export interface OrgCreateWorkflowRunParams {
  prospect: OrgCreateWorkflowRunParams.Prospect;

  workflow_id: string;

  scheduled_at?: string;
}

export namespace OrgCreateWorkflowRunParams {
  export interface Prospect {
    phone: string;

    country?: string;

    custom_data?: { [key: string]: unknown };

    email?: string;

    external_id?: string;

    first_name?: string;

    last_name?: string;

    timezone?: string;
  }
}

export interface OrgListVoicesParams {
  /**
   * Voice provider
   */
  provider: 'elevenlabs' | 'cartesia' | 'openai';

  /**
   * Cursor for next page - used for native pagination (cartesia, elevenlabs)
   */
  next_page?: string;

  /**
   * Page number (default: 1) - used for offset pagination
   */
  page?: number;

  /**
   * Page size (default: 50, max: 100)
   */
  size?: number;
}

Org.Agents = Agents;
Org.Analytics = Analytics;
Org.APIKeys = APIKeys;
Org.Batches = Batches;
Org.Billing = Billing;
Org.Calls = Calls;
Org.Chat = Chat;
Org.EmailTemplates = EmailTemplates;
Org.Faqs = Faqs;
Org.Integrations = Integrations;
Org.Lists = Lists;
Org.OutcomeDefinitions = OutcomeDefinitions;
Org.PhoneNumbers = PhoneNumbers;
Org.Prospects = Prospects;
Org.QualityRules = QualityRules;
Org.Runs = Runs;
Org.SipTrunks = SipTrunks;
Org.Tags = Tags;
Org.Tools = Tools;
Org.Workflows = Workflows;

export declare namespace Org {
  export {
    type OrgCreateWorkflowRunResponse as OrgCreateWorkflowRunResponse,
    type OrgListVoicesResponse as OrgListVoicesResponse,
    type OrgCreateWorkflowRunParams as OrgCreateWorkflowRunParams,
    type OrgListVoicesParams as OrgListVoicesParams,
  };

  export {
    Agents as Agents,
    type Agent as Agent,
    type BackgroundSoundConfig as BackgroundSoundConfig,
    type GoodbyeConfig as GoodbyeConfig,
    type PaginationMetaEvalsPostcall as PaginationMetaEvalsPostcall,
    type RecallWebhook as RecallWebhook,
    type RunTests as RunTests,
    type AgentListResponse as AgentListResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentDeleteParams as AgentDeleteParams,
  };

  export { Analytics as Analytics, type AnalyticsPeriod as AnalyticsPeriod };

  export { APIKeys as APIKeys, type Response as Response };

  export {
    Batches as Batches,
    type BatchResponse as BatchResponse,
    type PaginationMetaWorkflowBatches as PaginationMetaWorkflowBatches,
  };

  export { Billing as Billing, type Numeric as Numeric };

  export {
    Calls as Calls,
    type CallEvaluation as CallEvaluation,
    type CallToolLog as CallToolLog,
    type PaginationMetaCalls as PaginationMetaCalls,
    type CallListResponse as CallListResponse,
    type CallGetDetailsResponse as CallGetDetailsResponse,
    type CallGetRecordingResponse as CallGetRecordingResponse,
    type CallGetTranscriptResponse as CallGetTranscriptResponse,
    type CallListParams as CallListParams,
    type CallGetDetailsParams as CallGetDetailsParams,
    type CallGetRecordingParams as CallGetRecordingParams,
    type CallGetTranscriptParams as CallGetTranscriptParams,
  };

  export { Chat as Chat };

  export { EmailTemplates as EmailTemplates, type Template as Template };

  export { Faqs as Faqs, type Faq as Faq };

  export { Integrations as Integrations, type ConnectedIntegrationResponse as ConnectedIntegrationResponse };

  export {
    Lists as Lists,
    type DeleteListResponse as DeleteListResponse,
    type ListResponse as ListResponse,
    type ListListResponse as ListListResponse,
    type ListCreateParams as ListCreateParams,
    type ListRetrieveParams as ListRetrieveParams,
    type ListUpdateParams as ListUpdateParams,
    type ListListParams as ListListParams,
    type ListDeleteParams as ListDeleteParams,
  };

  export { OutcomeDefinitions as OutcomeDefinitions, type OutcomeDefinition as OutcomeDefinition };

  export {
    PhoneNumbers as PhoneNumbers,
    type PaginationMetaTelephony as PaginationMetaTelephony,
    type PhoneNumberResponse as PhoneNumberResponse,
    type PhoneNumberListResponse as PhoneNumberListResponse,
    type PhoneNumberDeleteResponse as PhoneNumberDeleteResponse,
    type PhoneNumberCreateParams as PhoneNumberCreateParams,
    type PhoneNumberRetrieveParams as PhoneNumberRetrieveParams,
    type PhoneNumberUpdateParams as PhoneNumberUpdateParams,
    type PhoneNumberListParams as PhoneNumberListParams,
    type PhoneNumberDeleteParams as PhoneNumberDeleteParams,
  };

  export {
    Prospects as Prospects,
    type ProspectResponse as ProspectResponse,
    type ResponseError as ResponseError,
    type TagResponseProspect as TagResponseProspect,
    type ProspectListResponse as ProspectListResponse,
    type ProspectListCallsResponse as ProspectListCallsResponse,
    type ProspectCreateParams as ProspectCreateParams,
    type ProspectRetrieveParams as ProspectRetrieveParams,
    type ProspectUpdateParams as ProspectUpdateParams,
    type ProspectListParams as ProspectListParams,
    type ProspectDeleteParams as ProspectDeleteParams,
    type ProspectListCallsParams as ProspectListCallsParams,
  };

  export { QualityRules as QualityRules, type QualityRuleResponse as QualityRuleResponse };

  export {
    Runs as Runs,
    type PaginatedRunsExtendedResponse as PaginatedRunsExtendedResponse,
    type ProspectInfo as ProspectInfo,
    type RunResponse as RunResponse,
  };

  export { SipTrunks as SipTrunks, type SipTrunkResponse as SipTrunkResponse };

  export { Tags as Tags, type TagResponseTag as TagResponseTag };

  export { Tools as Tools, type ParameterProp as ParameterProp, type ToolResponse as ToolResponse };

  export {
    Workflows as Workflows,
    type PaginationMetaWorkflows as PaginationMetaWorkflows,
    type WorkflowResponse as WorkflowResponse,
    type WorkflowListResponse as WorkflowListResponse,
    type WorkflowDeleteResponse as WorkflowDeleteResponse,
    type WorkflowCreateParams as WorkflowCreateParams,
    type WorkflowRetrieveParams as WorkflowRetrieveParams,
    type WorkflowListParams as WorkflowListParams,
    type WorkflowDeleteParams as WorkflowDeleteParams,
    type WorkflowRetrieveRunsParams as WorkflowRetrieveRunsParams,
    type WorkflowUpdateDefinitionParams as WorkflowUpdateDefinitionParams,
  };
}
