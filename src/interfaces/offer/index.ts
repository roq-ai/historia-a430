import { SuggestionInterface } from 'interfaces/suggestion';
import { ProductInterface } from 'interfaces/product';
import { GetQueryInterface } from 'interfaces';

export interface OfferInterface {
  id?: string;
  product_id: string;
  discount: number;
  start_date: any;
  end_date: any;
  created_at?: any;
  updated_at?: any;
  suggestion?: SuggestionInterface[];
  product?: ProductInterface;
  _count?: {
    suggestion?: number;
  };
}

export interface OfferGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_id?: string;
}
