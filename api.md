# Billing

Types:

- <code><a href="./src/resources/billing.ts">BillingHandleWebhookResponse</a></code>

Methods:

- <code title="post /billing/webhook">client.billing.<a href="./src/resources/billing.ts">handleWebhook</a>({ ...params }) -> BillingHandleWebhookResponse</code>

# Me

Types:

- <code><a href="./src/resources/me.ts">MeListOrganizationsResponse</a></code>

Methods:

- <code title="get /me/organizations">client.me.<a href="./src/resources/me.ts">listOrganizations</a>() -> MeListOrganizationsResponse</code>

# Org

Types:

- <code><a href="./src/resources/org/org.ts">OrgCreateWorkflowRunResponse</a></code>
- <code><a href="./src/resources/org/org.ts">OrgListAuditLogsResponse</a></code>
- <code><a href="./src/resources/org/org.ts">OrgListVoicesResponse</a></code>
- <code><a href="./src/resources/org/org.ts">OrgSendChatMessageResponse</a></code>

Methods:

- <code title="post /org/{org_id}/workflow-runs">client.org.<a href="./src/resources/org/org.ts">createWorkflowRun</a>(orgID, { ...params }) -> OrgCreateWorkflowRunResponse</code>
- <code title="get /org/{org_id}/audit-logs">client.org.<a href="./src/resources/org/org.ts">listAuditLogs</a>(orgID, { ...params }) -> OrgListAuditLogsResponse</code>
- <code title="get /org/{org_id}/voices">client.org.<a href="./src/resources/org/org.ts">listVoices</a>(orgID, { ...params }) -> OrgListVoicesResponse</code>
- <code title="post /org/{org_id}/chat-stream">client.org.<a href="./src/resources/org/org.ts">sendChatMessage</a>(orgID, { ...params }) -> OrgSendChatMessageResponse</code>

## Agents

Types:

- <code><a href="./src/resources/org/agents/agents.ts">Agent</a></code>
- <code><a href="./src/resources/org/agents/agents.ts">BackgroundSoundConfig</a></code>
- <code><a href="./src/resources/org/agents/agents.ts">GoodbyeConfig</a></code>
- <code><a href="./src/resources/org/agents/agents.ts">PaginationMetaEvalsPostcall</a></code>
- <code><a href="./src/resources/org/agents/agents.ts">RecallWebhook</a></code>
- <code><a href="./src/resources/org/agents/agents.ts">RunTests</a></code>
- <code><a href="./src/resources/org/agents/agents.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/org/agents/agents.ts">AgentDeleteResponse</a></code>
- <code><a href="./src/resources/org/agents/agents.ts">AgentListEvalRunsResponse</a></code>

Methods:

- <code title="post /org/{org_id}/agents">client.org.agents.<a href="./src/resources/org/agents/agents.ts">create</a>(orgID, { ...params }) -> Agent</code>
- <code title="get /org/{org_id}/agents/{agent_id}">client.org.agents.<a href="./src/resources/org/agents/agents.ts">retrieve</a>(agentID, { ...params }) -> Agent</code>
- <code title="patch /org/{org_id}/agents/{agent_id}">client.org.agents.<a href="./src/resources/org/agents/agents.ts">update</a>(agentID, { ...params }) -> Agent</code>
- <code title="get /org/{org_id}/agents">client.org.agents.<a href="./src/resources/org/agents/agents.ts">list</a>(orgID, { ...params }) -> AgentListResponse</code>
- <code title="delete /org/{org_id}/agents/{agent_id}">client.org.agents.<a href="./src/resources/org/agents/agents.ts">delete</a>(agentID, { ...params }) -> AgentDeleteResponse</code>
- <code title="get /org/{org_id}/agents/eval-runs">client.org.agents.<a href="./src/resources/org/agents/agents.ts">listEvalRuns</a>(orgID, { ...params }) -> AgentListEvalRunsResponse</code>
- <code title="post /org/{org_id}/agents/{agent_id}/run-specific-tests">client.org.agents.<a href="./src/resources/org/agents/agents.ts">runSpecificTests</a>(agentID, { ...params }) -> RunTests</code>
- <code title="post /org/{org_id}/agents/{agent_id}/run-tests">client.org.agents.<a href="./src/resources/org/agents/agents.ts">runTests</a>(agentID, { ...params }) -> RunTests</code>

### SipTrunks

Types:

- <code><a href="./src/resources/org/agents/sip-trunks.ts">SipTrunkListResponse</a></code>
- <code><a href="./src/resources/org/agents/sip-trunks.ts">SipTrunkAddResponse</a></code>
- <code><a href="./src/resources/org/agents/sip-trunks.ts">SipTrunkRemoveResponse</a></code>

Methods:

- <code title="get /org/{org_id}/agents/{agent_id}/sip-trunks">client.org.agents.sipTrunks.<a href="./src/resources/org/agents/sip-trunks.ts">list</a>(agentID, { ...params }) -> SipTrunkListResponse</code>
- <code title="post /org/{org_id}/agents/{agent_id}/sip-trunks">client.org.agents.sipTrunks.<a href="./src/resources/org/agents/sip-trunks.ts">add</a>(agentID, { ...params }) -> SipTrunkAddResponse</code>
- <code title="delete /org/{org_id}/agents/{agent_id}/sip-trunks/{trunk_id}">client.org.agents.sipTrunks.<a href="./src/resources/org/agents/sip-trunks.ts">remove</a>(trunkID, { ...params }) -> SipTrunkRemoveResponse</code>

### Tools

Types:

- <code><a href="./src/resources/org/agents/tools.ts">AgentTool</a></code>
- <code><a href="./src/resources/org/agents/tools.ts">ToolUpdateResponse</a></code>
- <code><a href="./src/resources/org/agents/tools.ts">ToolListResponse</a></code>
- <code><a href="./src/resources/org/agents/tools.ts">ToolAddResponse</a></code>
- <code><a href="./src/resources/org/agents/tools.ts">ToolRemoveResponse</a></code>

Methods:

- <code title="patch /org/{org_id}/agents/{agent_id}/tools/{tool_id}">client.org.agents.tools.<a href="./src/resources/org/agents/tools.ts">update</a>(toolID, { ...params }) -> ToolUpdateResponse</code>
- <code title="get /org/{org_id}/agents/{agent_id}/tools">client.org.agents.tools.<a href="./src/resources/org/agents/tools.ts">list</a>(agentID, { ...params }) -> ToolListResponse</code>
- <code title="post /org/{org_id}/agents/{agent_id}/tools">client.org.agents.tools.<a href="./src/resources/org/agents/tools.ts">add</a>(agentID, { ...params }) -> ToolAddResponse</code>
- <code title="delete /org/{org_id}/agents/{agent_id}/tools/{tool_id}">client.org.agents.tools.<a href="./src/resources/org/agents/tools.ts">remove</a>(toolID, { ...params }) -> ToolRemoveResponse</code>

### UnitTestRuns

Types:

- <code><a href="./src/resources/org/agents/unit-test-runs.ts">PaginationMetaUnitTests</a></code>
- <code><a href="./src/resources/org/agents/unit-test-runs.ts">UnitTestRunLatestResponse</a></code>

Methods:

- <code title="get /org/{org_id}/agents/{agent_id}/unit-test-runs/latest">client.org.agents.unitTestRuns.<a href="./src/resources/org/agents/unit-test-runs.ts">latest</a>(agentID, { ...params }) -> UnitTestRunLatestResponse</code>

### UnitTests

Types:

- <code><a href="./src/resources/org/agents/unit-tests.ts">UnitTest</a></code>
- <code><a href="./src/resources/org/agents/unit-tests.ts">UnitTestListResponse</a></code>
- <code><a href="./src/resources/org/agents/unit-tests.ts">UnitTestDeleteResponse</a></code>
- <code><a href="./src/resources/org/agents/unit-tests.ts">UnitTestGenerateResponse</a></code>

Methods:

- <code title="post /org/{org_id}/agents/{agent_id}/unit-tests">client.org.agents.unitTests.<a href="./src/resources/org/agents/unit-tests.ts">create</a>(agentID, { ...params }) -> UnitTest</code>
- <code title="put /org/{org_id}/agents/{agent_id}/unit-tests/{test_id}">client.org.agents.unitTests.<a href="./src/resources/org/agents/unit-tests.ts">update</a>(testID, { ...params }) -> UnitTest</code>
- <code title="get /org/{org_id}/agents/{agent_id}/unit-tests">client.org.agents.unitTests.<a href="./src/resources/org/agents/unit-tests.ts">list</a>(agentID, { ...params }) -> UnitTestListResponse</code>
- <code title="post /org/{org_id}/agents/{agent_id}/unit-tests/delete">client.org.agents.unitTests.<a href="./src/resources/org/agents/unit-tests.ts">delete</a>(agentID, { ...params }) -> UnitTestDeleteResponse</code>
- <code title="post /org/{org_id}/agents/{agent_id}/unit-tests/generate">client.org.agents.unitTests.<a href="./src/resources/org/agents/unit-tests.ts">generate</a>(agentID, { ...params }) -> UnitTestGenerateResponse</code>

### Evals

Types:

- <code><a href="./src/resources/org/agents/evals.ts">Eval</a></code>
- <code><a href="./src/resources/org/agents/evals.ts">EvalListResponse</a></code>

Methods:

- <code title="post /org/{org_id}/agents/evals">client.org.agents.evals.<a href="./src/resources/org/agents/evals.ts">create</a>(orgID, { ...params }) -> Eval</code>
- <code title="put /org/{org_id}/agents/evals/{evalId}">client.org.agents.evals.<a href="./src/resources/org/agents/evals.ts">update</a>(evalID, { ...params }) -> Eval</code>
- <code title="get /org/{org_id}/agents/evals">client.org.agents.evals.<a href="./src/resources/org/agents/evals.ts">list</a>(orgID, { ...params }) -> EvalListResponse</code>
- <code title="delete /org/{org_id}/agents/evals/{evalId}">client.org.agents.evals.<a href="./src/resources/org/agents/evals.ts">delete</a>(evalID, { ...params }) -> void</code>

## Analytics

Types:

- <code><a href="./src/resources/org/analytics/analytics.ts">AnalyticsPeriod</a></code>
- <code><a href="./src/resources/org/analytics/analytics.ts">AnalyticsGetDashboardSummaryResponse</a></code>
- <code><a href="./src/resources/org/analytics/analytics.ts">AnalyticsGetProspectAnalyticsResponse</a></code>
- <code><a href="./src/resources/org/analytics/analytics.ts">AnalyticsListAgentsResponse</a></code>
- <code><a href="./src/resources/org/analytics/analytics.ts">AnalyticsListBatchesResponse</a></code>

Methods:

- <code title="get /org/{org_id}/analytics/dashboard">client.org.analytics.<a href="./src/resources/org/analytics/analytics.ts">getDashboardSummary</a>(orgID, { ...params }) -> AnalyticsGetDashboardSummaryResponse</code>
- <code title="get /org/{org_id}/analytics/prospects">client.org.analytics.<a href="./src/resources/org/analytics/analytics.ts">getProspectAnalytics</a>(orgID, { ...params }) -> AnalyticsGetProspectAnalyticsResponse</code>
- <code title="get /org/{org_id}/analytics/agents">client.org.analytics.<a href="./src/resources/org/analytics/analytics.ts">listAgents</a>(orgID, { ...params }) -> AnalyticsListAgentsResponse</code>
- <code title="get /org/{org_id}/analytics/batches">client.org.analytics.<a href="./src/resources/org/analytics/analytics.ts">listBatches</a>(orgID, { ...params }) -> AnalyticsListBatchesResponse</code>

### Calls

Types:

- <code><a href="./src/resources/org/analytics/calls.ts">CallGetCallCostsResponse</a></code>
- <code><a href="./src/resources/org/analytics/calls.ts">CallListCallsResponse</a></code>
- <code><a href="./src/resources/org/analytics/calls.ts">CallListCallsByHourResponse</a></code>

Methods:

- <code title="get /org/{org_id}/analytics/calls/costs">client.org.analytics.calls.<a href="./src/resources/org/analytics/calls.ts">getCallCosts</a>(orgID, { ...params }) -> CallGetCallCostsResponse</code>
- <code title="get /org/{org_id}/analytics/calls">client.org.analytics.calls.<a href="./src/resources/org/analytics/calls.ts">listCalls</a>(orgID, { ...params }) -> CallListCallsResponse</code>
- <code title="get /org/{org_id}/analytics/calls/by-hour">client.org.analytics.calls.<a href="./src/resources/org/analytics/calls.ts">listCallsByHour</a>(orgID, { ...params }) -> CallListCallsByHourResponse</code>

### Insights

Types:

- <code><a href="./src/resources/org/analytics/insights.ts">InsightGenerateInsightsResponse</a></code>
- <code><a href="./src/resources/org/analytics/insights.ts">InsightListInsightsResponse</a></code>

Methods:

- <code title="post /org/{org_id}/analytics/insights">client.org.analytics.insights.<a href="./src/resources/org/analytics/insights.ts">generateInsights</a>(orgID, { ...params }) -> InsightGenerateInsightsResponse</code>
- <code title="get /org/{org_id}/analytics/insights">client.org.analytics.insights.<a href="./src/resources/org/analytics/insights.ts">listInsights</a>(orgID, { ...params }) -> InsightListInsightsResponse</code>

### Workflows

Types:

- <code><a href="./src/resources/org/analytics/workflows.ts">WorkflowGetWorkflowAnalyticsResponse</a></code>
- <code><a href="./src/resources/org/analytics/workflows.ts">WorkflowListWorkflowsResponse</a></code>

Methods:

- <code title="get /org/{org_id}/analytics/workflows/{id}">client.org.analytics.workflows.<a href="./src/resources/org/analytics/workflows.ts">getWorkflowAnalytics</a>(id, { ...params }) -> WorkflowGetWorkflowAnalyticsResponse</code>
- <code title="get /org/{org_id}/analytics/workflows">client.org.analytics.workflows.<a href="./src/resources/org/analytics/workflows.ts">listWorkflows</a>(orgID, { ...params }) -> WorkflowListWorkflowsResponse</code>

## APIKeys

Types:

- <code><a href="./src/resources/org/api-keys.ts">Response</a></code>
- <code><a href="./src/resources/org/api-keys.ts">APIKeyCreateAPIKeyResponse</a></code>
- <code><a href="./src/resources/org/api-keys.ts">APIKeyListAPIKeysResponse</a></code>

Methods:

- <code title="post /org/{org_id}/api-keys">client.org.apiKeys.<a href="./src/resources/org/api-keys.ts">createAPIKey</a>(orgID, { ...params }) -> APIKeyCreateAPIKeyResponse</code>
- <code title="get /org/{org_id}/api-keys">client.org.apiKeys.<a href="./src/resources/org/api-keys.ts">listAPIKeys</a>(orgID) -> APIKeyListAPIKeysResponse</code>
- <code title="delete /org/{org_id}/api-keys">client.org.apiKeys.<a href="./src/resources/org/api-keys.ts">revokeAllAPIKeys</a>(orgID) -> Response</code>
- <code title="delete /org/{org_id}/api-keys/{key_id}">client.org.apiKeys.<a href="./src/resources/org/api-keys.ts">revokeAPIKey</a>(keyID, { ...params }) -> Response</code>
- <code title="patch /org/{org_id}/api-keys/{key_id}/scopes">client.org.apiKeys.<a href="./src/resources/org/api-keys.ts">updateAPIKeyScopes</a>(keyID, { ...params }) -> Response</code>

## Batches

Types:

- <code><a href="./src/resources/org/batches.ts">BatchResponse</a></code>
- <code><a href="./src/resources/org/batches.ts">PaginationMetaWorkflowBatches</a></code>
- <code><a href="./src/resources/org/batches.ts">BatchListWorkflowRunsResponse</a></code>

Methods:

- <code title="get /org/{org_id}/batches/{batch_id}">client.org.batches.<a href="./src/resources/org/batches.ts">getWorkflowBatch</a>(batchID, { ...params }) -> BatchResponse</code>
- <code title="get /org/{org_id}/batches/{batch_id}/runs">client.org.batches.<a href="./src/resources/org/batches.ts">listWorkflowRuns</a>(batchID, { ...params }) -> BatchListWorkflowRunsResponse</code>
- <code title="patch /org/{org_id}/batches/{batch_id}">client.org.batches.<a href="./src/resources/org/batches.ts">updateBatchStatus</a>(batchID, { ...params }) -> BatchResponse</code>

## Billing

Types:

- <code><a href="./src/resources/org/billing/billing.ts">Numeric</a></code>
- <code><a href="./src/resources/org/billing/billing.ts">BillingGetBalanceResponse</a></code>
- <code><a href="./src/resources/org/billing/billing.ts">BillingGetSummaryResponse</a></code>
- <code><a href="./src/resources/org/billing/billing.ts">BillingGetUsageSummaryResponse</a></code>
- <code><a href="./src/resources/org/billing/billing.ts">BillingInitiateTopupResponse</a></code>

Methods:

- <code title="get /org/{org_id}/billing/balance">client.org.billing.<a href="./src/resources/org/billing/billing.ts">getBalance</a>(orgID) -> BillingGetBalanceResponse</code>
- <code title="get /org/{org_id}/billing/summary">client.org.billing.<a href="./src/resources/org/billing/billing.ts">getSummary</a>(orgID) -> BillingGetSummaryResponse</code>
- <code title="get /org/{org_id}/billing/usage">client.org.billing.<a href="./src/resources/org/billing/billing.ts">getUsageSummary</a>(orgID, { ...params }) -> BillingGetUsageSummaryResponse</code>
- <code title="post /org/{org_id}/billing/topup">client.org.billing.<a href="./src/resources/org/billing/billing.ts">initiateTopup</a>(orgID, { ...params }) -> BillingInitiateTopupResponse</code>

### Invoices

Types:

- <code><a href="./src/resources/org/billing/invoices.ts">PaginationMetaBilling</a></code>
- <code><a href="./src/resources/org/billing/invoices.ts">InvoiceListResponse</a></code>
- <code><a href="./src/resources/org/billing/invoices.ts">InvoiceGetPdfURLResponse</a></code>

Methods:

- <code title="get /org/{org_id}/billing/invoices">client.org.billing.invoices.<a href="./src/resources/org/billing/invoices.ts">list</a>(orgID, { ...params }) -> InvoiceListResponse</code>
- <code title="get /org/{org_id}/billing/invoices/pdf">client.org.billing.invoices.<a href="./src/resources/org/billing/invoices.ts">getPdfURL</a>(orgID, { ...params }) -> InvoiceGetPdfURLResponse</code>

### Ledger

Types:

- <code><a href="./src/resources/org/billing/ledger.ts">LedgerListResponse</a></code>
- <code><a href="./src/resources/org/billing/ledger.ts">LedgerGetEntryResponse</a></code>

Methods:

- <code title="get /org/{org_id}/billing/ledger">client.org.billing.ledger.<a href="./src/resources/org/billing/ledger.ts">list</a>(orgID, { ...params }) -> LedgerListResponse</code>
- <code title="get /org/{org_id}/billing/ledger/{entry_id}">client.org.billing.ledger.<a href="./src/resources/org/billing/ledger.ts">getEntry</a>(entryID, { ...params }) -> LedgerGetEntryResponse</code>

## Calls

Types:

- <code><a href="./src/resources/org/calls/calls.ts">CallEvaluation</a></code>
- <code><a href="./src/resources/org/calls/calls.ts">CallToolLog</a></code>
- <code><a href="./src/resources/org/calls/calls.ts">PaginationMetaCalls</a></code>
- <code><a href="./src/resources/org/calls/calls.ts">CallListResponse</a></code>
- <code><a href="./src/resources/org/calls/calls.ts">CallCreateDashboardCallResponse</a></code>
- <code><a href="./src/resources/org/calls/calls.ts">CallGetDetailsResponse</a></code>
- <code><a href="./src/resources/org/calls/calls.ts">CallGetEvaluationsResponse</a></code>
- <code><a href="./src/resources/org/calls/calls.ts">CallGetRecordingResponse</a></code>
- <code><a href="./src/resources/org/calls/calls.ts">CallGetToolLogsResponse</a></code>
- <code><a href="./src/resources/org/calls/calls.ts">CallGetTranscriptResponse</a></code>

Methods:

- <code title="get /org/{org_id}/calls">client.org.calls.<a href="./src/resources/org/calls/calls.ts">list</a>(orgID, { ...params }) -> CallListResponse</code>
- <code title="post /org/{org_id}/calls">client.org.calls.<a href="./src/resources/org/calls/calls.ts">createDashboardCall</a>(orgID, { ...params }) -> CallCreateDashboardCallResponse</code>
- <code title="get /org/{org_id}/calls/{call_id}">client.org.calls.<a href="./src/resources/org/calls/calls.ts">getDetails</a>(callID, { ...params }) -> CallGetDetailsResponse</code>
- <code title="get /org/{org_id}/calls/{call_id}/evaluations">client.org.calls.<a href="./src/resources/org/calls/calls.ts">getEvaluations</a>(callID, { ...params }) -> CallGetEvaluationsResponse</code>
- <code title="get /org/{org_id}/calls/{call_id}/recording">client.org.calls.<a href="./src/resources/org/calls/calls.ts">getRecording</a>(callID, { ...params }) -> CallGetRecordingResponse</code>
- <code title="get /org/{org_id}/calls/{call_id}/tool-logs">client.org.calls.<a href="./src/resources/org/calls/calls.ts">getToolLogs</a>(callID, { ...params }) -> CallGetToolLogsResponse</code>
- <code title="get /org/{org_id}/calls/{call_id}/transcript">client.org.calls.<a href="./src/resources/org/calls/calls.ts">getTranscript</a>(callID, { ...params }) -> CallGetTranscriptResponse</code>

### Export

Types:

- <code><a href="./src/resources/org/calls/export.ts">ExportGetCountResponse</a></code>
- <code><a href="./src/resources/org/calls/export.ts">ExportGetCsvResponse</a></code>

Methods:

- <code title="get /org/{org_id}/calls/export/count">client.org.calls.export.<a href="./src/resources/org/calls/export.ts">getCount</a>(orgID, { ...params }) -> ExportGetCountResponse</code>
- <code title="get /org/{org_id}/calls/export">client.org.calls.export.<a href="./src/resources/org/calls/export.ts">getCsv</a>(orgID, { ...params }) -> string</code>

## Chat

Types:

- <code><a href="./src/resources/org/chat/chat.ts">ChatSendMessageResponse</a></code>

Methods:

- <code title="post /org/{org_id}/chat">client.org.chat.<a href="./src/resources/org/chat/chat.ts">sendMessage</a>(orgID, { ...params }) -> ChatSendMessageResponse</code>

### Conversations

Types:

- <code><a href="./src/resources/org/chat/conversations.ts">ConversationListResponse</a></code>
- <code><a href="./src/resources/org/chat/conversations.ts">ConversationDeleteResponse</a></code>
- <code><a href="./src/resources/org/chat/conversations.ts">ConversationGetResponse</a></code>

Methods:

- <code title="get /org/{org_id}/chat/conversations">client.org.chat.conversations.<a href="./src/resources/org/chat/conversations.ts">list</a>(orgID, { ...params }) -> ConversationListResponse</code>
- <code title="delete /org/{org_id}/chat/conversations/{conversation_id}">client.org.chat.conversations.<a href="./src/resources/org/chat/conversations.ts">delete</a>(conversationID, { ...params }) -> ConversationDeleteResponse</code>
- <code title="get /org/{org_id}/chat/conversations/{conversation_id}">client.org.chat.conversations.<a href="./src/resources/org/chat/conversations.ts">get</a>(conversationID, { ...params }) -> ConversationGetResponse</code>

## EmailTemplates

Types:

- <code><a href="./src/resources/org/email-templates.ts">Template</a></code>
- <code><a href="./src/resources/org/email-templates.ts">EmailTemplateListResponse</a></code>

Methods:

- <code title="post /org/{org_id}/email-templates">client.org.emailTemplates.<a href="./src/resources/org/email-templates.ts">create</a>(orgID, { ...params }) -> Template</code>
- <code title="get /org/{org_id}/email-templates/{template_id}">client.org.emailTemplates.<a href="./src/resources/org/email-templates.ts">retrieve</a>(templateID, { ...params }) -> Template</code>
- <code title="patch /org/{org_id}/email-templates/{template_id}">client.org.emailTemplates.<a href="./src/resources/org/email-templates.ts">update</a>(templateID, { ...params }) -> Template</code>
- <code title="get /org/{org_id}/email-templates">client.org.emailTemplates.<a href="./src/resources/org/email-templates.ts">list</a>(orgID, { ...params }) -> EmailTemplateListResponse</code>
- <code title="delete /org/{org_id}/email-templates/{template_id}">client.org.emailTemplates.<a href="./src/resources/org/email-templates.ts">delete</a>(templateID, { ...params }) -> void</code>

## Faqs

Types:

- <code><a href="./src/resources/org/faqs.ts">Faq</a></code>
- <code><a href="./src/resources/org/faqs.ts">FaqListResponse</a></code>

Methods:

- <code title="post /org/{org_id}/faqs">client.org.faqs.<a href="./src/resources/org/faqs.ts">create</a>(orgID, { ...params }) -> Faq</code>
- <code title="get /org/{org_id}/faqs/{faq_id}">client.org.faqs.<a href="./src/resources/org/faqs.ts">retrieve</a>(faqID, { ...params }) -> Faq</code>
- <code title="patch /org/{org_id}/faqs/{faq_id}">client.org.faqs.<a href="./src/resources/org/faqs.ts">update</a>(faqID, { ...params }) -> Faq</code>
- <code title="get /org/{org_id}/faqs">client.org.faqs.<a href="./src/resources/org/faqs.ts">list</a>(orgID, { ...params }) -> FaqListResponse</code>
- <code title="delete /org/{org_id}/faqs/{faq_id}">client.org.faqs.<a href="./src/resources/org/faqs.ts">delete</a>(faqID, { ...params }) -> void</code>

## Integrations

Types:

- <code><a href="./src/resources/org/integrations.ts">ConnectedIntegrationResponse</a></code>
- <code><a href="./src/resources/org/integrations.ts">IntegrationListResponse</a></code>
- <code><a href="./src/resources/org/integrations.ts">IntegrationListConnectedResponse</a></code>

Methods:

- <code title="get /org/{org_id}/integrations/{id}">client.org.integrations.<a href="./src/resources/org/integrations.ts">retrieve</a>(id, { ...params }) -> ConnectedIntegrationResponse</code>
- <code title="get /org/{org_id}/integrations">client.org.integrations.<a href="./src/resources/org/integrations.ts">list</a>(orgID) -> IntegrationListResponse</code>
- <code title="post /org/{org_id}/integrations">client.org.integrations.<a href="./src/resources/org/integrations.ts">connect</a>(orgID, { ...params }) -> ConnectedIntegrationResponse</code>
- <code title="delete /org/{org_id}/integrations/{id}">client.org.integrations.<a href="./src/resources/org/integrations.ts">disconnect</a>(id, { ...params }) -> void</code>
- <code title="get /org/{org_id}/integrations/connected">client.org.integrations.<a href="./src/resources/org/integrations.ts">listConnected</a>(orgID) -> IntegrationListConnectedResponse</code>
- <code title="get /org/{org_id}/integrations/slug/{slug}">client.org.integrations.<a href="./src/resources/org/integrations.ts">retrieveBySlug</a>(slug, { ...params }) -> ConnectedIntegrationResponse</code>
- <code title="patch /org/{org_id}/integrations/{id}/toggle">client.org.integrations.<a href="./src/resources/org/integrations.ts">toggle</a>(id, { ...params }) -> ConnectedIntegrationResponse</code>
- <code title="patch /org/{org_id}/integrations/{id}/settings">client.org.integrations.<a href="./src/resources/org/integrations.ts">updateSettings</a>(id, { ...params }) -> ConnectedIntegrationResponse</code>

## Lists

Types:

- <code><a href="./src/resources/org/lists/lists.ts">DeleteListResponse</a></code>
- <code><a href="./src/resources/org/lists/lists.ts">ListResponse</a></code>
- <code><a href="./src/resources/org/lists/lists.ts">ListListResponse</a></code>

Methods:

- <code title="post /org/{org_id}/lists">client.org.lists.<a href="./src/resources/org/lists/lists.ts">create</a>(orgID, { ...params }) -> ListResponse</code>
- <code title="get /org/{org_id}/lists/{list_id}">client.org.lists.<a href="./src/resources/org/lists/lists.ts">retrieve</a>(listID, { ...params }) -> ListResponse</code>
- <code title="patch /org/{org_id}/lists/{list_id}">client.org.lists.<a href="./src/resources/org/lists/lists.ts">update</a>(listID, { ...params }) -> ListResponse</code>
- <code title="get /org/{org_id}/lists">client.org.lists.<a href="./src/resources/org/lists/lists.ts">list</a>(orgID, { ...params }) -> ListListResponse</code>
- <code title="delete /org/{org_id}/lists/{list_id}">client.org.lists.<a href="./src/resources/org/lists/lists.ts">delete</a>(listID, { ...params }) -> DeleteListResponse</code>
- <code title="delete /org/{org_id}/lists/{list_id}/gdpr">client.org.lists.<a href="./src/resources/org/lists/lists.ts">deleteGdpr</a>(listID, { ...params }) -> DeleteListResponse</code>

### Prospects

Types:

- <code><a href="./src/resources/org/lists/prospects.ts">ListProspectOperationResponse</a></code>
- <code><a href="./src/resources/org/lists/prospects.ts">ProspectAddResponse</a></code>
- <code><a href="./src/resources/org/lists/prospects.ts">ProspectRemoveResponse</a></code>

Methods:

- <code title="put /org/{org_id}/lists/{list_id}/prospects/{prospect_id}">client.org.lists.prospects.<a href="./src/resources/org/lists/prospects.ts">add</a>(prospectID, { ...params }) -> ProspectAddResponse</code>
- <code title="post /org/{org_id}/lists/{list_id}/prospects">client.org.lists.prospects.<a href="./src/resources/org/lists/prospects.ts">addBulk</a>(listID, { ...params }) -> ListProspectOperationResponse</code>
- <code title="delete /org/{org_id}/lists/{list_id}/prospects/{prospect_id}">client.org.lists.prospects.<a href="./src/resources/org/lists/prospects.ts">remove</a>(prospectID, { ...params }) -> ProspectRemoveResponse</code>
- <code title="delete /org/{org_id}/lists/{list_id}/prospects">client.org.lists.prospects.<a href="./src/resources/org/lists/prospects.ts">removeBulk</a>(listID, { ...params }) -> ListProspectOperationResponse</code>

## OutcomeDefinitions

Types:

- <code><a href="./src/resources/org/outcome-definitions.ts">OutcomeDefinition</a></code>
- <code><a href="./src/resources/org/outcome-definitions.ts">OutcomeDefinitionListResponse</a></code>

Methods:

- <code title="post /org/{org_id}/outcome-definitions">client.org.outcomeDefinitions.<a href="./src/resources/org/outcome-definitions.ts">create</a>(orgID, { ...params }) -> OutcomeDefinition</code>
- <code title="patch /org/{org_id}/outcome-definitions/{id}">client.org.outcomeDefinitions.<a href="./src/resources/org/outcome-definitions.ts">update</a>(id, { ...params }) -> OutcomeDefinition</code>
- <code title="get /org/{org_id}/outcome-definitions">client.org.outcomeDefinitions.<a href="./src/resources/org/outcome-definitions.ts">list</a>(orgID) -> OutcomeDefinitionListResponse</code>
- <code title="delete /org/{org_id}/outcome-definitions/{id}">client.org.outcomeDefinitions.<a href="./src/resources/org/outcome-definitions.ts">delete</a>(id, { ...params }) -> void</code>

## PhoneNumbers

Types:

- <code><a href="./src/resources/org/phone-numbers.ts">PaginationMetaTelephony</a></code>
- <code><a href="./src/resources/org/phone-numbers.ts">PhoneNumberResponse</a></code>
- <code><a href="./src/resources/org/phone-numbers.ts">PhoneNumberListResponse</a></code>
- <code><a href="./src/resources/org/phone-numbers.ts">PhoneNumberDeleteResponse</a></code>
- <code><a href="./src/resources/org/phone-numbers.ts">PhoneNumberCreateBulkResponse</a></code>

Methods:

- <code title="post /org/{org_id}/phone-numbers">client.org.phoneNumbers.<a href="./src/resources/org/phone-numbers.ts">create</a>(orgID, { ...params }) -> PhoneNumberResponse</code>
- <code title="get /org/{org_id}/phone-numbers/{number_id}">client.org.phoneNumbers.<a href="./src/resources/org/phone-numbers.ts">retrieve</a>(numberID, { ...params }) -> PhoneNumberResponse</code>
- <code title="patch /org/{org_id}/phone-numbers/{number_id}">client.org.phoneNumbers.<a href="./src/resources/org/phone-numbers.ts">update</a>(numberID, { ...params }) -> PhoneNumberResponse</code>
- <code title="get /org/{org_id}/phone-numbers">client.org.phoneNumbers.<a href="./src/resources/org/phone-numbers.ts">list</a>(orgID, { ...params }) -> PhoneNumberListResponse</code>
- <code title="delete /org/{org_id}/phone-numbers/{number_id}">client.org.phoneNumbers.<a href="./src/resources/org/phone-numbers.ts">delete</a>(numberID, { ...params }) -> PhoneNumberDeleteResponse</code>
- <code title="post /org/{org_id}/phone-numbers/bulk">client.org.phoneNumbers.<a href="./src/resources/org/phone-numbers.ts">createBulk</a>(orgID, { ...params }) -> PhoneNumberCreateBulkResponse</code>

## Prospects

Types:

- <code><a href="./src/resources/org/prospects/prospects.ts">ProspectResponse</a></code>
- <code><a href="./src/resources/org/prospects/prospects.ts">ResponseError</a></code>
- <code><a href="./src/resources/org/prospects/prospects.ts">TagResponseProspect</a></code>
- <code><a href="./src/resources/org/prospects/prospects.ts">ProspectListResponse</a></code>
- <code><a href="./src/resources/org/prospects/prospects.ts">ProspectListCallsResponse</a></code>

Methods:

- <code title="post /org/{org_id}/prospects">client.org.prospects.<a href="./src/resources/org/prospects/prospects.ts">create</a>(orgID, { ...params }) -> ProspectResponse</code>
- <code title="get /org/{org_id}/prospects/{prospect_id}">client.org.prospects.<a href="./src/resources/org/prospects/prospects.ts">retrieve</a>(prospectID, { ...params }) -> ProspectResponse</code>
- <code title="patch /org/{org_id}/prospects/{prospect_id}">client.org.prospects.<a href="./src/resources/org/prospects/prospects.ts">update</a>(prospectID, { ...params }) -> ProspectResponse</code>
- <code title="get /org/{org_id}/prospects">client.org.prospects.<a href="./src/resources/org/prospects/prospects.ts">list</a>(orgID, { ...params }) -> ProspectListResponse</code>
- <code title="delete /org/{org_id}/prospects/{prospect_id}">client.org.prospects.<a href="./src/resources/org/prospects/prospects.ts">delete</a>(prospectID, { ...params }) -> ResponseError</code>
- <code title="delete /org/{org_id}/prospects/{prospect_id}/gdpr">client.org.prospects.<a href="./src/resources/org/prospects/prospects.ts">hardDelete</a>(prospectID, { ...params }) -> ResponseError</code>
- <code title="get /org/{org_id}/prospects/{prospect_id}/calls">client.org.prospects.<a href="./src/resources/org/prospects/prospects.ts">listCalls</a>(prospectID, { ...params }) -> ProspectListCallsResponse</code>

### Tags

Methods:

- <code title="post /org/{org_id}/prospects/{prospect_id}/tags">client.org.prospects.tags.<a href="./src/resources/org/prospects/tags.ts">add</a>(prospectID, { ...params }) -> ResponseError</code>
- <code title="delete /org/{org_id}/prospects/{prospect_id}/tags/{tag_id}">client.org.prospects.tags.<a href="./src/resources/org/prospects/tags.ts">remove</a>(tagID, { ...params }) -> ResponseError</code>
- <code title="delete /org/{org_id}/prospects/{prospect_id}/tags">client.org.prospects.tags.<a href="./src/resources/org/prospects/tags.ts">removeAll</a>(prospectID, { ...params }) -> ResponseError</code>

### Bulk

Types:

- <code><a href="./src/resources/org/prospects/bulk.ts">BulkOperationResponseProspects</a></code>
- <code><a href="./src/resources/org/prospects/bulk.ts">BulkImportResponse</a></code>

Methods:

- <code title="patch /org/{org_id}/prospects/bulk">client.org.prospects.bulk.<a href="./src/resources/org/prospects/bulk.ts">update</a>(orgID, { ...params }) -> BulkOperationResponseProspects</code>
- <code title="delete /org/{org_id}/prospects/bulk">client.org.prospects.bulk.<a href="./src/resources/org/prospects/bulk.ts">delete</a>(orgID, { ...params }) -> BulkOperationResponseProspects</code>
- <code title="post /org/{org_id}/prospects/bulk">client.org.prospects.bulk.<a href="./src/resources/org/prospects/bulk.ts">import</a>(orgID, { ...params }) -> BulkImportResponse</code>

## QualityRules

Types:

- <code><a href="./src/resources/org/quality-rules.ts">QualityRuleResponse</a></code>
- <code><a href="./src/resources/org/quality-rules.ts">QualityRuleListResponse</a></code>

Methods:

- <code title="post /org/{org_id}/quality-rules">client.org.qualityRules.<a href="./src/resources/org/quality-rules.ts">create</a>(orgID, { ...params }) -> QualityRuleResponse</code>
- <code title="get /org/{org_id}/quality-rules/{rule_id}">client.org.qualityRules.<a href="./src/resources/org/quality-rules.ts">retrieve</a>(ruleID, { ...params }) -> QualityRuleResponse</code>
- <code title="patch /org/{org_id}/quality-rules/{rule_id}">client.org.qualityRules.<a href="./src/resources/org/quality-rules.ts">update</a>(ruleID, { ...params }) -> QualityRuleResponse</code>
- <code title="get /org/{org_id}/quality-rules">client.org.qualityRules.<a href="./src/resources/org/quality-rules.ts">list</a>(orgID, { ...params }) -> QualityRuleListResponse</code>
- <code title="delete /org/{org_id}/quality-rules/{rule_id}">client.org.qualityRules.<a href="./src/resources/org/quality-rules.ts">delete</a>(ruleID, { ...params }) -> void</code>

## Runs

Types:

- <code><a href="./src/resources/org/runs.ts">PaginatedRunsExtendedResponse</a></code>
- <code><a href="./src/resources/org/runs.ts">ProspectInfo</a></code>
- <code><a href="./src/resources/org/runs.ts">RunResponse</a></code>

Methods:

- <code title="get /org/{org_id}/runs/{run_id}">client.org.runs.<a href="./src/resources/org/runs.ts">retrieve</a>(runID, { ...params }) -> RunResponse</code>
- <code title="get /org/{org_id}/runs">client.org.runs.<a href="./src/resources/org/runs.ts">list</a>(orgID, { ...params }) -> PaginatedRunsExtendedResponse</code>

## SipTrunks

Types:

- <code><a href="./src/resources/org/sip-trunks.ts">SipTrunkResponse</a></code>
- <code><a href="./src/resources/org/sip-trunks.ts">SipTrunkRetrieveResponse</a></code>
- <code><a href="./src/resources/org/sip-trunks.ts">SipTrunkDeleteResponse</a></code>
- <code><a href="./src/resources/org/sip-trunks.ts">SipTrunkRetrieveSipTrunksResponse</a></code>
- <code><a href="./src/resources/org/sip-trunks.ts">SipTrunkSipTrunksResponse</a></code>

Methods:

- <code title="get /org/{org_id}/sip-trunks/{trunk_id}">client.org.sipTrunks.<a href="./src/resources/org/sip-trunks.ts">retrieve</a>(trunkID, { ...params }) -> SipTrunkRetrieveResponse</code>
- <code title="patch /org/{org_id}/sip-trunks/{trunk_id}">client.org.sipTrunks.<a href="./src/resources/org/sip-trunks.ts">update</a>(trunkID, { ...params }) -> SipTrunkResponse</code>
- <code title="delete /org/{org_id}/sip-trunks/{trunk_id}">client.org.sipTrunks.<a href="./src/resources/org/sip-trunks.ts">delete</a>(trunkID, { ...params }) -> SipTrunkDeleteResponse</code>
- <code title="get /org/{org_id}/sip-trunks">client.org.sipTrunks.<a href="./src/resources/org/sip-trunks.ts">retrieveSipTrunks</a>(orgID, { ...params }) -> SipTrunkRetrieveSipTrunksResponse</code>
- <code title="post /org/{org_id}/sip-trunks">client.org.sipTrunks.<a href="./src/resources/org/sip-trunks.ts">sipTrunks</a>(orgID, { ...params }) -> SipTrunkSipTrunksResponse</code>

## Tags

Types:

- <code><a href="./src/resources/org/tags/tags.ts">TagResponseTag</a></code>
- <code><a href="./src/resources/org/tags/tags.ts">TagListResponse</a></code>
- <code><a href="./src/resources/org/tags/tags.ts">TagDeleteResponse</a></code>

Methods:

- <code title="post /org/{org_id}/tags">client.org.tags.<a href="./src/resources/org/tags/tags.ts">create</a>(orgID, { ...params }) -> TagResponseTag</code>
- <code title="get /org/{org_id}/tags/{tag_id}">client.org.tags.<a href="./src/resources/org/tags/tags.ts">retrieve</a>(tagID, { ...params }) -> TagResponseTag</code>
- <code title="patch /org/{org_id}/tags/{tag_id}">client.org.tags.<a href="./src/resources/org/tags/tags.ts">update</a>(tagID, { ...params }) -> TagResponseTag</code>
- <code title="get /org/{org_id}/tags">client.org.tags.<a href="./src/resources/org/tags/tags.ts">list</a>(orgID, { ...params }) -> TagListResponse</code>
- <code title="delete /org/{org_id}/tags/{tag_id}">client.org.tags.<a href="./src/resources/org/tags/tags.ts">delete</a>(tagID, { ...params }) -> TagDeleteResponse</code>

### Prospects

Types:

- <code><a href="./src/resources/org/tags/prospects.ts">BulkOperationResponseTags</a></code>

Methods:

- <code title="post /org/{org_id}/tags/{tag_id}/prospects">client.org.tags.prospects.<a href="./src/resources/org/tags/prospects.ts">create</a>(tagID, { ...params }) -> BulkOperationResponseTags</code>
- <code title="delete /org/{org_id}/tags/{tag_id}/prospects">client.org.tags.prospects.<a href="./src/resources/org/tags/prospects.ts">deleteAll</a>(tagID, { ...params }) -> BulkOperationResponseTags</code>

## Tools

Types:

- <code><a href="./src/resources/org/tools.ts">ParameterProp</a></code>
- <code><a href="./src/resources/org/tools.ts">ToolResponse</a></code>
- <code><a href="./src/resources/org/tools.ts">ToolListResponse</a></code>

Methods:

- <code title="post /org/{org_id}/tools">client.org.tools.<a href="./src/resources/org/tools.ts">create</a>(orgID, { ...params }) -> ToolResponse</code>
- <code title="get /org/{org_id}/tools/{tool_id}">client.org.tools.<a href="./src/resources/org/tools.ts">retrieve</a>(toolID, { ...params }) -> ToolResponse</code>
- <code title="patch /org/{org_id}/tools/{tool_id}">client.org.tools.<a href="./src/resources/org/tools.ts">update</a>(toolID, { ...params }) -> ToolResponse</code>
- <code title="get /org/{org_id}/tools">client.org.tools.<a href="./src/resources/org/tools.ts">list</a>(orgID, { ...params }) -> ToolListResponse</code>
- <code title="delete /org/{org_id}/tools/{tool_id}">client.org.tools.<a href="./src/resources/org/tools.ts">delete</a>(toolID, { ...params }) -> ResponseError</code>

## Workflows

Types:

- <code><a href="./src/resources/org/workflows/workflows.ts">PaginationMetaWorkflows</a></code>
- <code><a href="./src/resources/org/workflows/workflows.ts">WorkflowResponse</a></code>
- <code><a href="./src/resources/org/workflows/workflows.ts">WorkflowListResponse</a></code>
- <code><a href="./src/resources/org/workflows/workflows.ts">WorkflowDeleteResponse</a></code>
- <code><a href="./src/resources/org/workflows/workflows.ts">WorkflowRetrieveCallsResponse</a></code>

Methods:

- <code title="post /org/{org_id}/workflows">client.org.workflows.<a href="./src/resources/org/workflows/workflows.ts">create</a>(orgID, { ...params }) -> WorkflowResponse</code>
- <code title="get /org/{org_id}/workflows/{workflow_id}">client.org.workflows.<a href="./src/resources/org/workflows/workflows.ts">retrieve</a>(workflowID, { ...params }) -> WorkflowResponse</code>
- <code title="post /org/{org_id}/workflows/{workflow_id}/restore/{version}">client.org.workflows.<a href="./src/resources/org/workflows/workflows.ts">update</a>(version, { ...params }) -> WorkflowResponse</code>
- <code title="get /org/{org_id}/workflows">client.org.workflows.<a href="./src/resources/org/workflows/workflows.ts">list</a>(orgID, { ...params }) -> WorkflowListResponse</code>
- <code title="delete /org/{org_id}/workflows/{workflow_id}">client.org.workflows.<a href="./src/resources/org/workflows/workflows.ts">delete</a>(workflowID, { ...params }) -> WorkflowDeleteResponse</code>
- <code title="post /org/{org_id}/workflows/{workflow_id}/duplicate">client.org.workflows.<a href="./src/resources/org/workflows/workflows.ts">duplicate</a>(workflowID, { ...params }) -> WorkflowResponse</code>
- <code title="get /org/{org_id}/workflow/{node_id}/calls">client.org.workflows.<a href="./src/resources/org/workflows/workflows.ts">retrieveCalls</a>(nodeID, { ...params }) -> WorkflowRetrieveCallsResponse</code>
- <code title="get /org/{org_id}/workflows/{workflow_id}/runs">client.org.workflows.<a href="./src/resources/org/workflows/workflows.ts">retrieveRuns</a>(workflowID, { ...params }) -> PaginatedRunsExtendedResponse</code>
- <code title="put /org/{org_id}/workflows/{workflow_id}/definition">client.org.workflows.<a href="./src/resources/org/workflows/workflows.ts">updateDefinition</a>(workflowID, { ...params }) -> WorkflowResponse</code>

### Batches

Types:

- <code><a href="./src/resources/org/workflows/batches.ts">BatchListResponse</a></code>

Methods:

- <code title="post /org/{org_id}/workflows/{workflow_id}/batches">client.org.workflows.batches.<a href="./src/resources/org/workflows/batches.ts">create</a>(workflowID, { ...params }) -> BatchResponse</code>
- <code title="get /org/{org_id}/workflows/{workflow_id}/batches">client.org.workflows.batches.<a href="./src/resources/org/workflows/batches.ts">list</a>(workflowID, { ...params }) -> BatchListResponse</code>

### Versions

Types:

- <code><a href="./src/resources/org/workflows/versions.ts">VersionRetrieveResponse</a></code>
- <code><a href="./src/resources/org/workflows/versions.ts">VersionListResponse</a></code>

Methods:

- <code title="get /org/{org_id}/workflows/{workflow_id}/versions/{version}">client.org.workflows.versions.<a href="./src/resources/org/workflows/versions.ts">retrieve</a>(version, { ...params }) -> VersionRetrieveResponse</code>
- <code title="get /org/{org_id}/workflows/{workflow_id}/versions">client.org.workflows.versions.<a href="./src/resources/org/workflows/versions.ts">list</a>(workflowID, { ...params }) -> VersionListResponse</code>

# Organizations

Methods:

- <code title="post /organizations/{org_id}/leave">client.organizations.<a href="./src/resources/organizations/organizations.ts">leave</a>(orgID) -> ResponseError</code>

## Members

Types:

- <code><a href="./src/resources/organizations/members.ts">MemberListResponse</a></code>

Methods:

- <code title="get /organizations/{org_id}/members">client.organizations.members.<a href="./src/resources/organizations/members.ts">list</a>(orgID) -> MemberListResponse</code>
- <code title="delete /organizations/{org_id}/members/{user_id}">client.organizations.members.<a href="./src/resources/organizations/members.ts">remove</a>(userID, { ...params }) -> ResponseError</code>
- <code title="patch /organizations/{org_id}/members/{user_id}">client.organizations.members.<a href="./src/resources/organizations/members.ts">updateRole</a>(userID, { ...params }) -> ResponseError</code>

# Resource0
