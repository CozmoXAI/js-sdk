// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class EmailTemplates extends APIResource {
  /**
   * Create a new email template for the organization
   */
  create(orgID: string, body: EmailTemplateCreateParams, options?: RequestOptions): APIPromise<Template> {
    return this._client.post(path`/org/${orgID}/email-templates`, { body, ...options });
  }

  /**
   * Get a single email template by ID
   */
  retrieve(
    templateID: string,
    params: EmailTemplateRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Template> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/email-templates/${templateID}`, options);
  }

  /**
   * Update email template properties (name, subject, body_html, body_text)
   */
  update(
    templateID: string,
    params: EmailTemplateUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Template> {
    const { org_id, ...body } = params;
    return this._client.patch(path`/org/${org_id}/email-templates/${templateID}`, { body, ...options });
  }

  /**
   * Get all email templates for the organization with pagination
   */
  list(
    orgID: string,
    query: EmailTemplateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailTemplateListResponse> {
    return this._client.get(path`/org/${orgID}/email-templates`, { query, ...options });
  }

  /**
   * Soft-delete an email template
   */
  delete(templateID: string, params: EmailTemplateDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { org_id } = params;
    return this._client.delete(path`/org/${org_id}/email-templates/${templateID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Template {
  id?: string;

  body_html?: string;

  body_text?: string;

  created_at?: string;

  name?: string;

  subject?: string;

  updated_at?: string;
}

export interface EmailTemplateListResponse {
  data?: Array<Template>;

  meta?: EmailTemplateListResponse.Meta;
}

export namespace EmailTemplateListResponse {
  export interface Meta {
    page?: number;

    size?: number;

    total?: number;

    total_pages?: number;
  }
}

export interface EmailTemplateCreateParams {
  body_html: string;

  name: string;

  subject: string;

  body_text?: string;
}

export interface EmailTemplateRetrieveParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface EmailTemplateUpdateParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  body_html?: string;

  /**
   * Body param
   */
  body_text?: string;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  subject?: string;
}

export interface EmailTemplateListParams {
  /**
   * Page number (default: 1)
   */
  page?: number;

  /**
   * Search in template name
   */
  search?: string;

  /**
   * Page size (default: 20, max: 100)
   */
  size?: number;
}

export interface EmailTemplateDeleteParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export declare namespace EmailTemplates {
  export {
    type Template as Template,
    type EmailTemplateListResponse as EmailTemplateListResponse,
    type EmailTemplateCreateParams as EmailTemplateCreateParams,
    type EmailTemplateRetrieveParams as EmailTemplateRetrieveParams,
    type EmailTemplateUpdateParams as EmailTemplateUpdateParams,
    type EmailTemplateListParams as EmailTemplateListParams,
    type EmailTemplateDeleteParams as EmailTemplateDeleteParams,
  };
}
