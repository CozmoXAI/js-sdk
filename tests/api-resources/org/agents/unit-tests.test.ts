// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cozmoai from 'cozmoai';

const client = new Cozmoai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource unitTests', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.org.agents.unitTests.create('agent_id', {
      org_id: 'org_id',
      answer_prompt: 'answer_prompt',
      question_prompt: 'question_prompt',
      question_variance: 'low',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.org.agents.unitTests.create('agent_id', {
      org_id: 'org_id',
      answer_prompt: 'answer_prompt',
      question_prompt: 'question_prompt',
      question_variance: 'low',
      function_tool_assertion: 'function_tool_assertion',
      title: 'title',
      yaml_config: 'yaml_config',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.org.agents.unitTests.update('test_id', {
      org_id: 'org_id',
      agent_id: 'agent_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.org.agents.unitTests.update('test_id', {
      org_id: 'org_id',
      agent_id: 'agent_id',
      answer_prompt: 'answer_prompt',
      function_tool_assertion: 'function_tool_assertion',
      question_prompt: 'question_prompt',
      question_variance: 'low',
      title: 'title',
      yaml_config: 'yaml_config',
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.org.agents.unitTests.list('agent_id', { org_id: 'org_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.org.agents.unitTests.list('agent_id', {
      org_id: 'org_id',
      page: 0,
      size: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.org.agents.unitTests.delete('agent_id', {
      org_id: 'org_id',
      ids: ['string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.org.agents.unitTests.delete('agent_id', {
      org_id: 'org_id',
      ids: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('generate: only required params', async () => {
    const responsePromise = client.org.agents.unitTests.generate('agent_id', { org_id: 'org_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('generate: required and optional params', async () => {
    const response = await client.org.agents.unitTests.generate('agent_id', { org_id: 'org_id', count: 1 });
  });
});
