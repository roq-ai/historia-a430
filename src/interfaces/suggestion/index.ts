import { UserInterface } from 'interfaces/user';
import { ProductInterface } from 'interfaces/product';
import { OfferInterface } from 'interfaces/offer';
import { GetQueryInterface } from 'interfaces';

export interface SuggestionInterface {
  id?: string;
  user_id: string;
  product_id: string;
  offer_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  product?: ProductInterface;
  offer?: OfferInterface;
  _count?: {};
}

export interface SuggestionGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  product_id?: string;
  offer_id?: string;
  status?: string;
}
