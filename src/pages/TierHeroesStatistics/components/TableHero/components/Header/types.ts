import { SortBy } from "../../types"

export interface  HeaderItemProps{
  onSort: (sortBy:SortBy)=>void,
  sortBy?: SortBy
}

export interface Props{
  handleShowAboutModal: VoidFunction
  onSearch: (searchInput:string)=>void
  onSort: (selectedSortBy: SortBy)=>void
  sortBy?: SortBy
}