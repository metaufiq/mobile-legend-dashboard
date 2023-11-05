import { Header, SortBy } from "../../types"

export interface Props extends Header{
  onSort: (sortBy:SortBy)=>void,
  sortBy?: SortBy
  sortKey: Header['key']
}