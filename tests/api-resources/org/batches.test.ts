// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cozmoai from 'cozmoai';

const client = new Cozmoai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batches', () => {
  // Mock server tests are disabled
  test.skip('getWorkflowBatch: only required params', async () => {
    const responsePromise = client.org.batches.getWorkflowBatch('batch_id', { org_id: 'org_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getWorkflowBatch: required and optional params', async () => {
    const response = await client.org.batches.getWorkflowBatch('batch_id', { org_id: 'org_id' });
  });

  // Mock server tests are disabled
  test.skip('listWorkflowRuns: only required params', async () => {
    const responsePromise = client.org.batches.listWorkflowRuns('batch_id', { org_id: 'org_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listWorkflowRuns: required and optional params', async () => {
    const response = await client.org.batches.listWorkflowRuns('batch_id', {
      org_id: 'org_id',
      limit: 0,
      page: 0,
      status: 'status',
    });
  });

  // Mock server tests are disabled
  test.skip('updateBatchStatus: only required params', async () => {
    const responsePromise = client.org.batches.updateBatchStatus('batch_id', {
      org_id: 'org_id',
      status: 'PENDING',
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
  test.skip('updateBatchStatus: required and optional params', async () => {
    const response = await client.org.batches.updateBatchStatus('batch_id', {
      org_id: 'org_id',
      status: 'PENDING',
    });
  });
});
