import { BillInterface } from 'interfaces/bill';
import { OfferInterface } from 'interfaces/offer';
import { SuggestionInterface } from 'interfaces/suggestion';
import { VendorInterface } from 'interfaces/vendor';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  vendor_id: string;
  price: number;
  stock: number;
  created_at?: any;
  updated_at?: any;
  bill?: BillInterface[];
  offer?: OfferInterface[];
  suggestion?: SuggestionInterface[];
  vendor?: VendorInterface;
  _count?: {
    bill?: number;
    offer?: number;
    suggestion?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  vendor_id?: string;
}
