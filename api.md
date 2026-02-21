# Me

# Org

Types:

- <code><a href="./src/resources/org/org.ts">OrgListVoicesResponse</a></code>

Methods:

- <code title="get /org/{org_id}/voices">client.org.<a href="./src/resources/org/org.ts">listVoices</a>(orgID, { ...params }) -> OrgListVoicesResponse</code>

## Agents

Types:

- <code><a href="./src/resources/org/agents/agents.ts">Agent</a></code>
- <code><a href="./src/resources/org/agents/agents.ts">AgentsThinkingSound</a></code>
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

Methods:

- <code title="get /org/{org_id}/calls">client.org.calls.<a href="./src/resources/org/calls/calls.ts">list</a>(orgID, { ...params }) -> CallListResponse</code>
- <code title="get /org/{org_id}/calls/{call_id}">client.org.calls.<a href="./src/resources/org/calls/calls.ts">getDetails</a>(callID, { ...params }) -> CallGetDetailsResponse</code>

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

### Prospects

Types:

- <code><a href="./src/resources/org/lists/prospects.ts">ListProspectOperationResponse</a></code>

## OutcomeDefinitions

Types:

- <code><a href="./src/resources/org/outcome-definitions.ts">OutcomeDefinition</a></code>

## PhoneNumbers

Types:

- <code><a href="./src/resources/org/phone-numbers.ts">PaginationMetaTelephony</a></code>
- <code><a href="./src/resources/org/phone-numbers.ts">PhoneNumberResponse</a></code>

## Prospects

Types:

- <code><a href="./src/resources/org/prospects/prospects.ts">ProspectResponse</a></code>
- <code><a href="./src/resources/org/prospects/prospects.ts">ResponseError</a></code>
- <code><a href="./src/resources/org/prospects/prospects.ts">TagResponseProspect</a></code>

### Tags

### Bulk

Types:

- <code><a href="./src/resources/org/prospects/bulk.ts">BulkOperationResponseProspects</a></code>

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

## Tools

Types:

- <code><a href="./src/resources/org/tools.ts">ParameterProp</a></code>
- <code><a href="./src/resources/org/tools.ts">ToolResponse</a></code>

## Workflows

Types:

- <code><a href="./src/resources/org/workflows/workflows.ts">PaginationMetaWorkflows</a></code>
- <code><a href="./src/resources/org/workflows/workflows.ts">WorkflowResponse</a></code>
- <code><a href="./src/resources/org/workflows/workflows.ts">WorkflowListResponse</a></code>

Methods:

- <code title="get /org/{org_id}/workflows/{workflow_id}">client.org.workflows.<a href="./src/resources/org/workflows/workflows.ts">retrieve</a>(workflowID, { ...params }) -> WorkflowResponse</code>
- <code title="get /org/{org_id}/workflows">client.org.workflows.<a href="./src/resources/org/workflows/workflows.ts">list</a>(orgID, { ...params }) -> WorkflowListResponse</code>

### Batches

### Versions

# Organizations

## Members
