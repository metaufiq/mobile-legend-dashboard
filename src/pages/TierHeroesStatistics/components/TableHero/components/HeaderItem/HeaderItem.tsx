import { useCallback } from "react"

import { SORT_STATE } from "../../constants"
import { ICON_SORT, NEXT_SORT } from "../Header/constants"
import { Props } from "./types"

const HeaderItem = ({title, colspan, sortKey, onSort, sortBy}:Props)=>{
  
  const handleSort = useCallback(()=>{
    onSort({
      key: sortKey,
      state: NEXT_SORT[sortBy?.state ?? SORT_STATE.DEFAULT]
    })
  }, [sortKey, onSort, sortBy?.state])

  return (
    <th colSpan={colspan} onClick={handleSort}>
      {title}
      {
        ICON_SORT[sortBy?.state && sortKey===sortBy.key ? sortBy.state  : SORT_STATE.DEFAULT]
      }
    </th>
  )
}

export default HeaderItem