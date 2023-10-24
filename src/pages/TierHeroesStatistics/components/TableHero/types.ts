import { Data as Hero } from '../../../../api/hero/types';
import { HEADER_KEY, SORT_STATE } from './constants';

export type SortState = typeof SORT_STATE[keyof typeof SORT_STATE]


export interface Props{
  data?: Hero[]
}

export interface Header{
  title: string,
  colspan?: number,
  onSortAsc?: VoidFunction,
  onSortDesc?: VoidFunction,
  key: typeof HEADER_KEY[keyof typeof HEADER_KEY]
}

export interface SortBy{
  key: Header['key'],
  state: SortState
}

export interface  HeaderParams{
  setSortBy: (sortBy:SortBy)=>void,
  sortBy?: SortBy
}
