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

- <code title="post /agents">client.agents.<a href="./src/resources/agents.ts">create</a>({ ...params }) -> AgentResponse</code>
- <code title="get /agents/{agent_id}">client.agents.<a href="./src/resources/agents.ts">retrieve</a>(agentID) -> AgentResponse</code>
- <code title="patch /agents/{agent_id}">client.agents.<a href="./src/resources/agents.ts">update</a>(agentID, { ...params }) -> AgentResponse</code>
- <code title="get /agents">client.agents.<a href="./src/resources/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="delete /agents/{agent_id}">client.agents.<a href="./src/resources/agents.ts">delete</a>(agentID) -> AgentDeleteResponse</code>

# Calls

Types:

- <code><a href="./src/resources/calls.ts">CallRetrieveResponse</a></code>
- <code><a href="./src/resources/calls.ts">CallListResponse</a></code>

Methods:

- <code title="get /calls/{call_id}">client.calls.<a href="./src/resources/calls.ts">retrieve</a>(callID) -> CallRetrieveResponse</code>
- <code title="get /calls">client.calls.<a href="./src/resources/calls.ts">list</a>({ ...params }) -> CallListResponse</code>

# Workflows

Types:

- <code><a href="./src/resources/workflows.ts">WorkflowRetrieveResponse</a></code>
- <code><a href="./src/resources/workflows.ts">WorkflowListResponse</a></code>

Methods:

- <code title="get /workflows/{workflow_id}">client.workflows.<a href="./src/resources/workflows.ts">retrieve</a>(workflowID) -> WorkflowRetrieveResponse</code>
- <code title="get /workflows">client.workflows.<a href="./src/resources/workflows.ts">list</a>({ ...params }) -> WorkflowListResponse</code>

# Voices

Types:

- <code><a href="./src/resources/voices.ts">VoiceListResponse</a></code>

Methods:

- <code title="get /voices">client.voices.<a href="./src/resources/voices.ts">list</a>({ ...params }) -> VoiceListResponse</code>
