import { useCallback } from "react"

import { SORT_STATE } from "../../constants"
import { ICON_SORT, NEXT_SORT } from "../Header/constants"
import { Props } from "./types"

const HeaderItem = ({title, colspan, key, onSort, sortBy}:Props)=>{

  const handleSort = useCallback(()=>{
    onSort({
      key,
      state: NEXT_SORT[sortBy?.state ?? SORT_STATE.DEFAULT]
    })
  }, [key, onSort, sortBy?.state])

  return (
    <th colSpan={colspan} key={key} onClick={handleSort}>
      {title}
      {
        ICON_SORT[sortBy?.state && key===sortBy.key ? sortBy.state  : SORT_STATE.DEFAULT]
      }
    </th>
  )
}

export default HeaderItem