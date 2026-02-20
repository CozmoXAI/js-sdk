// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InvoicesAPI from './invoices';
import { Invoices, PaginationMetaBilling } from './invoices';
import * as LedgerAPI from './ledger';
import { Ledger } from './ledger';

export class Billing extends APIResource {
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);
  ledger: LedgerAPI.Ledger = new LedgerAPI.Ledger(this._client);
}

export interface Numeric {
  exp?: number;

  infinityModifier?: 1 | 0 | -1;

  int?: unknown;

  naN?: boolean;

  valid?: boolean;
}

Billing.Invoices = Invoices;
Billing.Ledger = Ledger;

export declare namespace Billing {
  export { type Numeric as Numeric };

  export { Invoices as Invoices, type PaginationMetaBilling as PaginationMetaBilling };

  export { Ledger as Ledger };
}
