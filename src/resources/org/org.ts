// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from './api-keys';
import {
  APIKeyCreateAPIKeyParams,
  APIKeyCreateAPIKeyResponse,
  APIKeyListAPIKeysResponse,
  APIKeyRevokeAPIKeyParams,
  APIKeyUpdateAPIKeyScopesParams,
  APIKeys,
  Response,
} from './api-keys';
import * as BatchesAPI from './batches';
import {
  BatchGetWorkflowBatchParams,
  BatchListWorkflowRunsParams,
  BatchListWorkflowRunsResponse,
  BatchResponse,
  BatchUpdateBatchStatusParams,
  Batches,
  PaginationMetaWorkflowBatches,
} from './batches';
import * as EmailTemplatesAPI from './email-templates';
import {
  EmailTemplateCreateParams,
  EmailTemplateDeleteParams,
  EmailTemplateListParams,
  EmailTemplateListResponse,
  EmailTemplateRetrieveParams,
  EmailTemplateUpdateParams,
  EmailTemplates,
  Template,
} from './email-templates';
import * as FaqsAPI from './faqs';
import {
  Faq,
  FaqCreateParams,
  FaqDeleteParams,
  FaqListParams,
  FaqListResponse,
  FaqRetrieveParams,
  FaqUpdateParams,
  Faqs,
} from './faqs';
import * as IntegrationsAPI from './integrations';
import {
  ConnectedIntegrationResponse,
  IntegrationConnectParams,
  IntegrationDisconnectParams,
  IntegrationListConnectedResponse,
  IntegrationListResponse,
  IntegrationRetrieveBySlugParams,
  IntegrationRetrieveParams,
  IntegrationToggleParams,
  IntegrationUpdateSettingsParams,
  Integrations,
} from './integrations';
import * as OutcomeDefinitionsAPI from './outcome-definitions';
import {
  OutcomeDefinition,
  OutcomeDefinitionCreateParams,
  OutcomeDefinitionDeleteParams,
  OutcomeDefinitionListResponse,
  OutcomeDefinitionUpdateParams,
  OutcomeDefinitions,
} from './outcome-definitions';
import * as PhoneNumbersAPI from './phone-numbers';
import {
  PaginationMetaTelephony,
  PhoneNumberCreateBulkParams,
  PhoneNumberCreateBulkResponse,
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
import {
  QualityRuleCreateParams,
  QualityRuleDeleteParams,
  QualityRuleListParams,
  QualityRuleListResponse,
  QualityRuleResponse,
  QualityRuleRetrieveParams,
  QualityRuleUpdateParams,
  QualityRules,
} from './quality-rules';
import * as RunsAPI from './runs';
import {
  PaginatedRunsExtendedResponse,
  ProspectInfo,
  RunListParams,
  RunResponse,
  RunRetrieveParams,
  Runs,
} from './runs';
import * as SipTrunksAPI from './sip-trunks';
import {
  SipTrunkDeleteParams,
  SipTrunkDeleteResponse,
  SipTrunkResponse,
  SipTrunkRetrieveParams,
  SipTrunkRetrieveResponse,
  SipTrunkRetrieveSipTrunksParams,
  SipTrunkRetrieveSipTrunksResponse,
  SipTrunkSipTrunksParams,
  SipTrunkSipTrunksResponse,
  SipTrunkUpdateParams,
  SipTrunks,
} from './sip-trunks';
import * as ToolsAPI from './tools';
import {
  ParameterProp,
  ToolCreateParams,
  ToolDeleteParams,
  ToolListParams,
  ToolListResponse,
  ToolResponse,
  ToolRetrieveParams,
  ToolUpdateParams,
  Tools,
} from './tools';
import * as AgentsAPI from './agents/agents';
import {
  Agent,
  AgentCreateParams,
  AgentDeleteParams,
  AgentDeleteResponse,
  AgentListEvalRunsParams,
  AgentListEvalRunsResponse,
  AgentListParams,
  AgentListResponse,
  AgentRetrieveParams,
  AgentRunSpecificTestsParams,
  AgentRunTestsParams,
  AgentUpdateParams,
  Agents,
  BackgroundSoundConfig,
  GoodbyeConfig,
  PaginationMetaEvalsPostcall,
  RecallWebhook,
  RunTests,
} from './agents/agents';
import * as AnalyticsAPI from './analytics/analytics';
import {
  Analytics,
  AnalyticsGetDashboardSummaryParams,
  AnalyticsGetDashboardSummaryResponse,
  AnalyticsGetProspectAnalyticsParams,
  AnalyticsGetProspectAnalyticsResponse,
  AnalyticsListAgentsParams,
  AnalyticsListAgentsResponse,
  AnalyticsListBatchesParams,
  AnalyticsListBatchesResponse,
  AnalyticsPeriod,
} from './analytics/analytics';
import * as BillingAPI from './billing/billing';
import {
  Billing,
  BillingGetBalanceResponse,
  BillingGetSummaryResponse,
  BillingGetUsageSummaryParams,
  BillingGetUsageSummaryResponse,
  BillingInitiateTopupParams,
  BillingInitiateTopupResponse,
  Numeric,
} from './billing/billing';
import * as CallsAPI from './calls/calls';
import {
  CallCreateDashboardCallParams,
  CallCreateDashboardCallResponse,
  CallEvaluation,
  CallGetDetailsParams,
  CallGetDetailsResponse,
  CallGetEvaluationsParams,
  CallGetEvaluationsResponse,
  CallGetRecordingParams,
  CallGetRecordingResponse,
  CallGetToolLogsParams,
  CallGetToolLogsResponse,
  CallGetTranscriptParams,
  CallGetTranscriptResponse,
  CallListParams,
  CallListResponse,
  CallToolLog,
  Calls,
  PaginationMetaCalls,
} from './calls/calls';
import * as ChatAPI from './chat/chat';
import { Chat, ChatSendMessageParams, ChatSendMessageResponse } from './chat/chat';
import * as ListsAPI from './lists/lists';
import {
  DeleteListResponse,
  ListCreateParams,
  ListDeleteGdprParams,
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
  ProspectHardDeleteParams,
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
import {
  TagCreateParams,
  TagDeleteParams,
  TagDeleteResponse,
  TagListParams,
  TagListResponse,
  TagResponseTag,
  TagRetrieveParams,
  TagUpdateParams,
  Tags,
} from './tags/tags';
import * as WorkflowsAPI from './workflows/workflows';
import {
  PaginationMetaWorkflows,
  WorkflowCreateParams,
  WorkflowDeleteParams,
  WorkflowDeleteResponse,
  WorkflowDuplicateParams,
  WorkflowListParams,
  WorkflowListResponse,
  WorkflowResponse,
  WorkflowRetrieveCallsParams,
  WorkflowRetrieveCallsResponse,
  WorkflowRetrieveParams,
  WorkflowRetrieveRunsParams,
  WorkflowUpdateDefinitionParams,
  WorkflowUpdateParams,
  Workflows,
} from './workflows/workflows';
import { APIPromise } from '../../core/api-promise';
import { Stream } from '../../core/streaming';
import { buildHeaders } from '../../internal/headers';
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
   * Returns a paginated list of audit logs for the organization (OWNER and ADMIN
   * only)
   */
  listAuditLogs(
    orgID: string,
    query: OrgListAuditLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrgListAuditLogsResponse> {
    return this._client.get(path`/org/${orgID}/audit-logs`, { query, ...options });
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

  /**
   * Send a message to the analytics chat assistant and receive a streaming
   * AI-generated response via Server-Sent Events
   */
  sendChatMessage(
    orgID: string,
    body: OrgSendChatMessageParams,
    options?: RequestOptions,
  ): APIPromise<Stream<OrgSendChatMessageResponse>> {
    return this._client.post(path`/org/${orgID}/chat-stream`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<OrgSendChatMessageResponse>>;
  }
}

export interface OrgCreateWorkflowRunResponse {
  external_id?: string;

  workflow_run_id?: string;
}

export interface OrgListAuditLogsResponse {
  data?: Array<OrgListAuditLogsResponse.Data>;

  meta?: OrgListAuditLogsResponse.Meta;
}

export namespace OrgListAuditLogsResponse {
  export interface Data {
    action?: string;

    created_at?: string;

    organization_id?: string;

    resource_id?: string;

    resource_type?: string;

    user_id?: string;
  }

  export interface Meta {
    page?: number;

    size?: number;

    total?: number;

    total_pages?: number;
  }
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

export interface OrgSendChatMessageResponse {
  data?: unknown;

  event?: string;
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

export interface OrgListAuditLogsParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Page size
   */
  size?: number;
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

export interface OrgSendChatMessageParams {
  message: string;

  conversation_id?: string;
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
    type OrgListAuditLogsResponse as OrgListAuditLogsResponse,
    type OrgListVoicesResponse as OrgListVoicesResponse,
    type OrgSendChatMessageResponse as OrgSendChatMessageResponse,
    type OrgCreateWorkflowRunParams as OrgCreateWorkflowRunParams,
    type OrgListAuditLogsParams as OrgListAuditLogsParams,
    type OrgListVoicesParams as OrgListVoicesParams,
    type OrgSendChatMessageParams as OrgSendChatMessageParams,
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
    type AgentListEvalRunsResponse as AgentListEvalRunsResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentDeleteParams as AgentDeleteParams,
    type AgentListEvalRunsParams as AgentListEvalRunsParams,
    type AgentRunSpecificTestsParams as AgentRunSpecificTestsParams,
    type AgentRunTestsParams as AgentRunTestsParams,
  };

  export {
    Analytics as Analytics,
    type AnalyticsPeriod as AnalyticsPeriod,
    type AnalyticsGetDashboardSummaryResponse as AnalyticsGetDashboardSummaryResponse,
    type AnalyticsGetProspectAnalyticsResponse as AnalyticsGetProspectAnalyticsResponse,
    type AnalyticsListAgentsResponse as AnalyticsListAgentsResponse,
    type AnalyticsListBatchesResponse as AnalyticsListBatchesResponse,
    type AnalyticsGetDashboardSummaryParams as AnalyticsGetDashboardSummaryParams,
    type AnalyticsGetProspectAnalyticsParams as AnalyticsGetProspectAnalyticsParams,
    type AnalyticsListAgentsParams as AnalyticsListAgentsParams,
    type AnalyticsListBatchesParams as AnalyticsListBatchesParams,
  };

  export {
    APIKeys as APIKeys,
    type Response as Response,
    type APIKeyCreateAPIKeyResponse as APIKeyCreateAPIKeyResponse,
    type APIKeyListAPIKeysResponse as APIKeyListAPIKeysResponse,
    type APIKeyCreateAPIKeyParams as APIKeyCreateAPIKeyParams,
    type APIKeyRevokeAPIKeyParams as APIKeyRevokeAPIKeyParams,
    type APIKeyUpdateAPIKeyScopesParams as APIKeyUpdateAPIKeyScopesParams,
  };

  export {
    Batches as Batches,
    type BatchResponse as BatchResponse,
    type PaginationMetaWorkflowBatches as PaginationMetaWorkflowBatches,
    type BatchListWorkflowRunsResponse as BatchListWorkflowRunsResponse,
    type BatchGetWorkflowBatchParams as BatchGetWorkflowBatchParams,
    type BatchListWorkflowRunsParams as BatchListWorkflowRunsParams,
    type BatchUpdateBatchStatusParams as BatchUpdateBatchStatusParams,
  };

  export {
    Billing as Billing,
    type Numeric as Numeric,
    type BillingGetBalanceResponse as BillingGetBalanceResponse,
    type BillingGetSummaryResponse as BillingGetSummaryResponse,
    type BillingGetUsageSummaryResponse as BillingGetUsageSummaryResponse,
    type BillingInitiateTopupResponse as BillingInitiateTopupResponse,
    type BillingGetUsageSummaryParams as BillingGetUsageSummaryParams,
    type BillingInitiateTopupParams as BillingInitiateTopupParams,
  };

  export {
    Calls as Calls,
    type CallEvaluation as CallEvaluation,
    type CallToolLog as CallToolLog,
    type PaginationMetaCalls as PaginationMetaCalls,
    type CallListResponse as CallListResponse,
    type CallCreateDashboardCallResponse as CallCreateDashboardCallResponse,
    type CallGetDetailsResponse as CallGetDetailsResponse,
    type CallGetEvaluationsResponse as CallGetEvaluationsResponse,
    type CallGetRecordingResponse as CallGetRecordingResponse,
    type CallGetToolLogsResponse as CallGetToolLogsResponse,
    type CallGetTranscriptResponse as CallGetTranscriptResponse,
    type CallListParams as CallListParams,
    type CallCreateDashboardCallParams as CallCreateDashboardCallParams,
    type CallGetDetailsParams as CallGetDetailsParams,
    type CallGetEvaluationsParams as CallGetEvaluationsParams,
    type CallGetRecordingParams as CallGetRecordingParams,
    type CallGetToolLogsParams as CallGetToolLogsParams,
    type CallGetTranscriptParams as CallGetTranscriptParams,
  };

  export {
    Chat as Chat,
    type ChatSendMessageResponse as ChatSendMessageResponse,
    type ChatSendMessageParams as ChatSendMessageParams,
  };

  export {
    EmailTemplates as EmailTemplates,
    type Template as Template,
    type EmailTemplateListResponse as EmailTemplateListResponse,
    type EmailTemplateCreateParams as EmailTemplateCreateParams,
    type EmailTemplateRetrieveParams as EmailTemplateRetrieveParams,
    type EmailTemplateUpdateParams as EmailTemplateUpdateParams,
    type EmailTemplateListParams as EmailTemplateListParams,
    type EmailTemplateDeleteParams as EmailTemplateDeleteParams,
  };

  export {
    Faqs as Faqs,
    type Faq as Faq,
    type FaqListResponse as FaqListResponse,
    type FaqCreateParams as FaqCreateParams,
    type FaqRetrieveParams as FaqRetrieveParams,
    type FaqUpdateParams as FaqUpdateParams,
    type FaqListParams as FaqListParams,
    type FaqDeleteParams as FaqDeleteParams,
  };

  export {
    Integrations as Integrations,
    type ConnectedIntegrationResponse as ConnectedIntegrationResponse,
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationListConnectedResponse as IntegrationListConnectedResponse,
    type IntegrationRetrieveParams as IntegrationRetrieveParams,
    type IntegrationConnectParams as IntegrationConnectParams,
    type IntegrationDisconnectParams as IntegrationDisconnectParams,
    type IntegrationRetrieveBySlugParams as IntegrationRetrieveBySlugParams,
    type IntegrationToggleParams as IntegrationToggleParams,
    type IntegrationUpdateSettingsParams as IntegrationUpdateSettingsParams,
  };

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
    type ListDeleteGdprParams as ListDeleteGdprParams,
  };

  export {
    OutcomeDefinitions as OutcomeDefinitions,
    type OutcomeDefinition as OutcomeDefinition,
    type OutcomeDefinitionListResponse as OutcomeDefinitionListResponse,
    type OutcomeDefinitionCreateParams as OutcomeDefinitionCreateParams,
    type OutcomeDefinitionUpdateParams as OutcomeDefinitionUpdateParams,
    type OutcomeDefinitionDeleteParams as OutcomeDefinitionDeleteParams,
  };

  export {
    PhoneNumbers as PhoneNumbers,
    type PaginationMetaTelephony as PaginationMetaTelephony,
    type PhoneNumberResponse as PhoneNumberResponse,
    type PhoneNumberListResponse as PhoneNumberListResponse,
    type PhoneNumberDeleteResponse as PhoneNumberDeleteResponse,
    type PhoneNumberCreateBulkResponse as PhoneNumberCreateBulkResponse,
    type PhoneNumberCreateParams as PhoneNumberCreateParams,
    type PhoneNumberRetrieveParams as PhoneNumberRetrieveParams,
    type PhoneNumberUpdateParams as PhoneNumberUpdateParams,
    type PhoneNumberListParams as PhoneNumberListParams,
    type PhoneNumberDeleteParams as PhoneNumberDeleteParams,
    type PhoneNumberCreateBulkParams as PhoneNumberCreateBulkParams,
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
    type ProspectHardDeleteParams as ProspectHardDeleteParams,
    type ProspectListCallsParams as ProspectListCallsParams,
  };

  export {
    QualityRules as QualityRules,
    type QualityRuleResponse as QualityRuleResponse,
    type QualityRuleListResponse as QualityRuleListResponse,
    type QualityRuleCreateParams as QualityRuleCreateParams,
    type QualityRuleRetrieveParams as QualityRuleRetrieveParams,
    type QualityRuleUpdateParams as QualityRuleUpdateParams,
    type QualityRuleListParams as QualityRuleListParams,
    type QualityRuleDeleteParams as QualityRuleDeleteParams,
  };

  export {
    Runs as Runs,
    type PaginatedRunsExtendedResponse as PaginatedRunsExtendedResponse,
    type ProspectInfo as ProspectInfo,
    type RunResponse as RunResponse,
    type RunRetrieveParams as RunRetrieveParams,
    type RunListParams as RunListParams,
  };

  export {
    SipTrunks as SipTrunks,
    type SipTrunkResponse as SipTrunkResponse,
    type SipTrunkRetrieveResponse as SipTrunkRetrieveResponse,
    type SipTrunkDeleteResponse as SipTrunkDeleteResponse,
    type SipTrunkRetrieveSipTrunksResponse as SipTrunkRetrieveSipTrunksResponse,
    type SipTrunkSipTrunksResponse as SipTrunkSipTrunksResponse,
    type SipTrunkRetrieveParams as SipTrunkRetrieveParams,
    type SipTrunkUpdateParams as SipTrunkUpdateParams,
    type SipTrunkDeleteParams as SipTrunkDeleteParams,
    type SipTrunkRetrieveSipTrunksParams as SipTrunkRetrieveSipTrunksParams,
    type SipTrunkSipTrunksParams as SipTrunkSipTrunksParams,
  };

  export {
    Tags as Tags,
    type TagResponseTag as TagResponseTag,
    type TagListResponse as TagListResponse,
    type TagDeleteResponse as TagDeleteResponse,
    type TagCreateParams as TagCreateParams,
    type TagRetrieveParams as TagRetrieveParams,
    type TagUpdateParams as TagUpdateParams,
    type TagListParams as TagListParams,
    type TagDeleteParams as TagDeleteParams,
  };

  export {
    Tools as Tools,
    type ParameterProp as ParameterProp,
    type ToolResponse as ToolResponse,
    type ToolListResponse as ToolListResponse,
    type ToolCreateParams as ToolCreateParams,
    type ToolRetrieveParams as ToolRetrieveParams,
    type ToolUpdateParams as ToolUpdateParams,
    type ToolListParams as ToolListParams,
    type ToolDeleteParams as ToolDeleteParams,
  };

  export {
    Workflows as Workflows,
    type PaginationMetaWorkflows as PaginationMetaWorkflows,
    type WorkflowResponse as WorkflowResponse,
    type WorkflowListResponse as WorkflowListResponse,
    type WorkflowDeleteResponse as WorkflowDeleteResponse,
    type WorkflowRetrieveCallsResponse as WorkflowRetrieveCallsResponse,
    type WorkflowCreateParams as WorkflowCreateParams,
    type WorkflowRetrieveParams as WorkflowRetrieveParams,
    type WorkflowUpdateParams as WorkflowUpdateParams,
    type WorkflowListParams as WorkflowListParams,
    type WorkflowDeleteParams as WorkflowDeleteParams,
    type WorkflowDuplicateParams as WorkflowDuplicateParams,
    type WorkflowRetrieveCallsParams as WorkflowRetrieveCallsParams,
    type WorkflowRetrieveRunsParams as WorkflowRetrieveRunsParams,
    type WorkflowUpdateDefinitionParams as WorkflowUpdateDefinitionParams,
  };
}
