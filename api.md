# Me

Types:

- <code><a href="./src/resources/me.ts">MeListOrganizationsResponse</a></code>

Methods:

- <code title="get /me/organizations">client.me.<a href="./src/resources/me.ts">listOrganizations</a>() -> MeListOrganizationsResponse</code>

# Org

Types:

- <code><a href="./src/resources/org/org.ts">OrgCreateWorkflowRunResponse</a></code>
- <code><a href="./src/resources/org/org.ts">OrgListVoicesResponse</a></code>

Methods:

- <code title="post /org/{org_id}/workflow-runs">client.org.<a href="./src/resources/org/org.ts">createWorkflowRun</a>(orgID, { ...params }) -> OrgCreateWorkflowRunResponse</code>
- <code title="get /org/{org_id}/voices">client.org.<a href="./src/resources/org/org.ts">listVoices</a>(orgID, { ...params }) -> OrgListVoicesResponse</code>

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

Methods:

- <code title="post /org/{org_id}/agents">client.org.agents.<a href="./src/resources/org/agents/agents.ts">create</a>(orgID, { ...params }) -> Agent</code>
- <code title="get /org/{org_id}/agents/{agent_id}">client.org.agents.<a href="./src/resources/org/agents/agents.ts">retrieve</a>(agentID, { ...params }) -> Agent</code>
- <code title="patch /org/{org_id}/agents/{agent_id}">client.org.agents.<a href="./src/resources/org/agents/agents.ts">update</a>(agentID, { ...params }) -> Agent</code>
- <code title="get /org/{org_id}/agents">client.org.agents.<a href="./src/resources/org/agents/agents.ts">list</a>(orgID, { ...params }) -> AgentListResponse</code>
- <code title="delete /org/{org_id}/agents/{agent_id}">client.org.agents.<a href="./src/resources/org/agents/agents.ts">delete</a>(agentID, { ...params }) -> AgentDeleteResponse</code>

### SipTrunks

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

### UnitTests

Types:

- <code><a href="./src/resources/org/agents/unit-tests.ts">UnitTest</a></code>

### Evals

Types:

- <code><a href="./src/resources/org/agents/evals.ts">Eval</a></code>

## Analytics

Types:

- <code><a href="./src/resources/org/analytics/analytics.ts">AnalyticsPeriod</a></code>

### Calls

### Insights

### Workflows

## APIKeys

Types:

- <code><a href="./src/resources/org/api-keys.ts">Response</a></code>

## Batches

Types:

- <code><a href="./src/resources/org/batches.ts">BatchResponse</a></code>
- <code><a href="./src/resources/org/batches.ts">PaginationMetaWorkflowBatches</a></code>

## Billing

Types:

- <code><a href="./src/resources/org/billing/billing.ts">Numeric</a></code>

### Invoices

Types:

- <code><a href="./src/resources/org/billing/invoices.ts">PaginationMetaBilling</a></code>

### Ledger

## Calls

Types:

- <code><a href="./src/resources/org/calls/calls.ts">CallEvaluation</a></code>
- <code><a href="./src/resources/org/calls/calls.ts">CallToolLog</a></code>
- <code><a href="./src/resources/org/calls/calls.ts">PaginationMetaCalls</a></code>
- <code><a href="./src/resources/org/calls/calls.ts">CallListResponse</a></code>
- <code><a href="./src/resources/org/calls/calls.ts">CallGetDetailsResponse</a></code>
- <code><a href="./src/resources/org/calls/calls.ts">CallGetRecordingResponse</a></code>
- <code><a href="./src/resources/org/calls/calls.ts">CallGetTranscriptResponse</a></code>

Methods:

- <code title="get /org/{org_id}/calls">client.org.calls.<a href="./src/resources/org/calls/calls.ts">list</a>(orgID, { ...params }) -> CallListResponse</code>
- <code title="get /org/{org_id}/calls/{call_id}">client.org.calls.<a href="./src/resources/org/calls/calls.ts">getDetails</a>(callID, { ...params }) -> CallGetDetailsResponse</code>
- <code title="get /org/{org_id}/calls/{call_id}/recording">client.org.calls.<a href="./src/resources/org/calls/calls.ts">getRecording</a>(callID, { ...params }) -> CallGetRecordingResponse</code>
- <code title="get /org/{org_id}/calls/{call_id}/transcript">client.org.calls.<a href="./src/resources/org/calls/calls.ts">getTranscript</a>(callID, { ...params }) -> CallGetTranscriptResponse</code>

### Export

## Chat

### Conversations

## EmailTemplates

Types:

- <code><a href="./src/resources/org/email-templates.ts">Template</a></code>

## Faqs

Types:

- <code><a href="./src/resources/org/faqs.ts">Faq</a></code>

## Integrations

Types:

- <code><a href="./src/resources/org/integrations.ts">ConnectedIntegrationResponse</a></code>

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

## PhoneNumbers

Types:

- <code><a href="./src/resources/org/phone-numbers.ts">PaginationMetaTelephony</a></code>
- <code><a href="./src/resources/org/phone-numbers.ts">PhoneNumberResponse</a></code>
- <code><a href="./src/resources/org/phone-numbers.ts">PhoneNumberListResponse</a></code>
- <code><a href="./src/resources/org/phone-numbers.ts">PhoneNumberDeleteResponse</a></code>

Methods:

- <code title="post /org/{org_id}/phone-numbers">client.org.phoneNumbers.<a href="./src/resources/org/phone-numbers.ts">create</a>(orgID, { ...params }) -> PhoneNumberResponse</code>
- <code title="get /org/{org_id}/phone-numbers/{number_id}">client.org.phoneNumbers.<a href="./src/resources/org/phone-numbers.ts">retrieve</a>(numberID, { ...params }) -> PhoneNumberResponse</code>
- <code title="patch /org/{org_id}/phone-numbers/{number_id}">client.org.phoneNumbers.<a href="./src/resources/org/phone-numbers.ts">update</a>(numberID, { ...params }) -> PhoneNumberResponse</code>
- <code title="get /org/{org_id}/phone-numbers">client.org.phoneNumbers.<a href="./src/resources/org/phone-numbers.ts">list</a>(orgID, { ...params }) -> PhoneNumberListResponse</code>
- <code title="delete /org/{org_id}/phone-numbers/{number_id}">client.org.phoneNumbers.<a href="./src/resources/org/phone-numbers.ts">delete</a>(numberID, { ...params }) -> PhoneNumberDeleteResponse</code>

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

## Runs

Types:

- <code><a href="./src/resources/org/runs.ts">PaginatedRunsExtendedResponse</a></code>
- <code><a href="./src/resources/org/runs.ts">ProspectInfo</a></code>
- <code><a href="./src/resources/org/runs.ts">RunResponse</a></code>

## SipTrunks

Types:

- <code><a href="./src/resources/org/sip-trunks.ts">SipTrunkResponse</a></code>

## Tags

Types:

- <code><a href="./src/resources/org/tags/tags.ts">TagResponseTag</a></code>

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

## Workflows

Types:

- <code><a href="./src/resources/org/workflows/workflows.ts">PaginationMetaWorkflows</a></code>
- <code><a href="./src/resources/org/workflows/workflows.ts">WorkflowResponse</a></code>
- <code><a href="./src/resources/org/workflows/workflows.ts">WorkflowListResponse</a></code>
- <code><a href="./src/resources/org/workflows/workflows.ts">WorkflowDeleteResponse</a></code>

Methods:

- <code title="post /org/{org_id}/workflows">client.org.workflows.<a href="./src/resources/org/workflows/workflows.ts">create</a>(orgID, { ...params }) -> WorkflowResponse</code>
- <code title="get /org/{org_id}/workflows/{workflow_id}">client.org.workflows.<a href="./src/resources/org/workflows/workflows.ts">retrieve</a>(workflowID, { ...params }) -> WorkflowResponse</code>
- <code title="get /org/{org_id}/workflows">client.org.workflows.<a href="./src/resources/org/workflows/workflows.ts">list</a>(orgID, { ...params }) -> WorkflowListResponse</code>
- <code title="delete /org/{org_id}/workflows/{workflow_id}">client.org.workflows.<a href="./src/resources/org/workflows/workflows.ts">delete</a>(workflowID, { ...params }) -> WorkflowDeleteResponse</code>
- <code title="get /org/{org_id}/workflows/{workflow_id}/runs">client.org.workflows.<a href="./src/resources/org/workflows/workflows.ts">retrieveRuns</a>(workflowID, { ...params }) -> PaginatedRunsExtendedResponse</code>
- <code title="put /org/{org_id}/workflows/{workflow_id}/definition">client.org.workflows.<a href="./src/resources/org/workflows/workflows.ts">updateDefinition</a>(workflowID, { ...params }) -> WorkflowResponse</code>

### Batches

Types:

- <code><a href="./src/resources/org/workflows/batches.ts">BatchListResponse</a></code>

Methods:

- <code title="post /org/{org_id}/workflows/{workflow_id}/batches">client.org.workflows.batches.<a href="./src/resources/org/workflows/batches.ts">create</a>(workflowID, { ...params }) -> BatchResponse</code>
- <code title="get /org/{org_id}/workflows/{workflow_id}/batches">client.org.workflows.batches.<a href="./src/resources/org/workflows/batches.ts">list</a>(workflowID, { ...params }) -> BatchListResponse</code>

### Versions

# Organizations

## Members
