# Org

Types:

- <code><a href="./src/resources/org/org.ts">OrgListVoicesResponse</a></code>

Methods:

- <code title="get /org/{org_id}/voices">client.org.<a href="./src/resources/org/org.ts">listVoices</a>(orgID, { ...params }) -> OrgListVoicesResponse</code>

## Agents

Types:

- <code><a href="./src/resources/org/agents.ts">AgentResponse</a></code>
- <code><a href="./src/resources/org/agents.ts">BackgroundSoundConfig</a></code>
- <code><a href="./src/resources/org/agents.ts">ExtraConfig</a></code>
- <code><a href="./src/resources/org/agents.ts">GoodbyeConfig</a></code>
- <code><a href="./src/resources/org/agents.ts">GreetingConfig</a></code>
- <code><a href="./src/resources/org/agents.ts">LlmConfig</a></code>
- <code><a href="./src/resources/org/agents.ts">RoomDurationConfig</a></code>
- <code><a href="./src/resources/org/agents.ts">TranscriberConfig</a></code>
- <code><a href="./src/resources/org/agents.ts">VadConfig</a></code>
- <code><a href="./src/resources/org/agents.ts">VoiceConfig</a></code>
- <code><a href="./src/resources/org/agents.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/org/agents.ts">AgentDeleteResponse</a></code>

Methods:

- <code title="post /org/{org_id}/agents">client.org.agents.<a href="./src/resources/org/agents.ts">create</a>(orgID, { ...params }) -> AgentResponse</code>
- <code title="get /org/{org_id}/agents/{agent_id}">client.org.agents.<a href="./src/resources/org/agents.ts">retrieve</a>(agentID, { ...params }) -> AgentResponse</code>
- <code title="patch /org/{org_id}/agents/{agent_id}">client.org.agents.<a href="./src/resources/org/agents.ts">update</a>(agentID, { ...params }) -> AgentResponse</code>
- <code title="get /org/{org_id}/agents">client.org.agents.<a href="./src/resources/org/agents.ts">list</a>(orgID, { ...params }) -> AgentListResponse</code>
- <code title="delete /org/{org_id}/agents/{agent_id}">client.org.agents.<a href="./src/resources/org/agents.ts">delete</a>(agentID, { ...params }) -> AgentDeleteResponse</code>

## Calls

Types:

- <code><a href="./src/resources/org/calls.ts">CallRetrieveResponse</a></code>
- <code><a href="./src/resources/org/calls.ts">CallListResponse</a></code>

Methods:

- <code title="get /org/{org_id}/calls/{call_id}">client.org.calls.<a href="./src/resources/org/calls.ts">retrieve</a>(callID, { ...params }) -> CallRetrieveResponse</code>
- <code title="get /org/{org_id}/calls">client.org.calls.<a href="./src/resources/org/calls.ts">list</a>(orgID, { ...params }) -> CallListResponse</code>

## Workflows

Types:

- <code><a href="./src/resources/org/workflows.ts">WorkflowRetrieveResponse</a></code>
- <code><a href="./src/resources/org/workflows.ts">WorkflowListResponse</a></code>

Methods:

- <code title="get /org/{org_id}/workflows/{workflow_id}">client.org.workflows.<a href="./src/resources/org/workflows.ts">retrieve</a>(workflowID, { ...params }) -> WorkflowRetrieveResponse</code>
- <code title="get /org/{org_id}/workflows">client.org.workflows.<a href="./src/resources/org/workflows.ts">list</a>(orgID, { ...params }) -> WorkflowListResponse</code>
