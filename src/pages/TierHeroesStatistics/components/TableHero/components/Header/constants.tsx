import SortAsc from "../../../../../../components/Icons/SortAsc";
import SortDesc from "../../../../../../components/Icons/SortDesc";
import SortUnactivated from "../../../../../../components/Icons/SortUnactivated";
import { SORT_STATE } from "../../constants";

export const NEXT_SORT = {
  [SORT_STATE.DEFAULT]: SORT_STATE.DESC,
  [SORT_STATE.ASC]: SORT_STATE.DEFAULT,
  [SORT_STATE.DESC]: SORT_STATE.ASC
}

export const ICON_SORT = {
  [SORT_STATE.DEFAULT]: <SortUnactivated size={14}/>,
  [SORT_STATE.ASC]: <SortAsc size={14}/>,
  [SORT_STATE.DESC]: <SortDesc size={14}/>
}