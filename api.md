# Agents

Types:

- <code><a href="./src/resources/agents.ts">AgentResponse</a></code>
- <code><a href="./src/resources/agents.ts">BackgroundSoundConfig</a></code>
- <code><a href="./src/resources/agents.ts">ExtraConfig</a></code>
- <code><a href="./src/resources/agents.ts">GoodbyeConfig</a></code>
- <code><a href="./src/resources/agents.ts">GreetingConfig</a></code>
- <code><a href="./src/resources/agents.ts">LlmConfig</a></code>
- <code><a href="./src/resources/agents.ts">RoomDurationConfig</a></code>
- <code><a href="./src/resources/agents.ts">TranscriberConfig</a></code>
- <code><a href="./src/resources/agents.ts">VadConfig</a></code>
- <code><a href="./src/resources/agents.ts">VoiceConfig</a></code>
- <code><a href="./src/resources/agents.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/agents.ts">AgentDeleteResponse</a></code>

Methods:

- <code title="post /org/{org_id}/agents">client.agents.<a href="./src/resources/agents.ts">create</a>(orgID, { ...params }) -> AgentResponse</code>
- <code title="get /org/{org_id}/agents/{agent_id}">client.agents.<a href="./src/resources/agents.ts">retrieve</a>(agentID, { ...params }) -> AgentResponse</code>
- <code title="patch /org/{org_id}/agents/{agent_id}">client.agents.<a href="./src/resources/agents.ts">update</a>(agentID, { ...params }) -> AgentResponse</code>
- <code title="get /org/{org_id}/agents">client.agents.<a href="./src/resources/agents.ts">list</a>(orgID, { ...params }) -> AgentListResponse</code>
- <code title="delete /org/{org_id}/agents/{agent_id}">client.agents.<a href="./src/resources/agents.ts">delete</a>(agentID, { ...params }) -> AgentDeleteResponse</code>

# Calls

Types:

- <code><a href="./src/resources/calls.ts">CallRetrieveResponse</a></code>
- <code><a href="./src/resources/calls.ts">CallListResponse</a></code>

Methods:

- <code title="get /org/{org_id}/calls/{call_id}">client.calls.<a href="./src/resources/calls.ts">retrieve</a>(callID, { ...params }) -> CallRetrieveResponse</code>
- <code title="get /org/{org_id}/calls">client.calls.<a href="./src/resources/calls.ts">list</a>(orgID, { ...params }) -> CallListResponse</code>

# Workflows

Types:

- <code><a href="./src/resources/workflows.ts">WorkflowRetrieveResponse</a></code>
- <code><a href="./src/resources/workflows.ts">WorkflowListResponse</a></code>

Methods:

- <code title="get /org/{org_id}/workflows/{workflow_id}">client.workflows.<a href="./src/resources/workflows.ts">retrieve</a>(workflowID, { ...params }) -> WorkflowRetrieveResponse</code>
- <code title="get /org/{org_id}/workflows">client.workflows.<a href="./src/resources/workflows.ts">list</a>(orgID, { ...params }) -> WorkflowListResponse</code>

# Voices

Types:

- <code><a href="./src/resources/voices.ts">VoiceListResponse</a></code>

Methods:

- <code title="get /org/{org_id}/voices">client.voices.<a href="./src/resources/voices.ts">list</a>(orgID, { ...params }) -> VoiceListResponse</code>
