import TextInput from "../../../../../components/TextInput";
import Search from "../../../../../components/Icons/Search";
import About from "../../../../../components/Icons/About";
import { colors } from "../../../../../styles/colors";
import SortUnactivated from "../../../../../components/Icons/SortUnactivated";
import SortAsc from "../../../../../components/Icons/SortAsc";
import SortDesc from "../../../../../components/Icons/SortDesc";
import { Header as HeaderItem } from "../types";
import { HEADERS, SORT_STATE } from "../constants"
import styles from '../TableHero.module.scss';
import { HeaderItemProps, Props } from "./types";

const _renderItem = ({onSort, sortBy}:HeaderItemProps)=>
({title, colspan, key}:HeaderItem)=>{

  const nextState = {
    [SORT_STATE.DEFAULT]: SORT_STATE.DESC,
    [SORT_STATE.ASC]: SORT_STATE.DEFAULT,
    [SORT_STATE.DESC]: SORT_STATE.ASC
  }

  const handleSort = ()=>{
    onSort({
      key,
      state: nextState[sortBy?.state ?? SORT_STATE.DEFAULT]
    })
  }

  const icon = {
    [SORT_STATE.DEFAULT]: <SortUnactivated size={14}/>,
    [SORT_STATE.ASC]: <SortAsc size={14}/>,
    [SORT_STATE.DESC]: <SortDesc size={14}/>
  }

  return (
    <th colSpan={colspan} key={key} onClick={handleSort}>
      {title}
      {
        icon[sortBy?.state && key===sortBy.key ? sortBy.state  : SORT_STATE.DEFAULT]
      }
    </th>
  )
}

const Header = ({handleShowAboutModal, onSearch, onSort, sortBy}: Props)=>{
  return(
    <thead className={styles['table-header-container']}>
      <tr>
        <th colSpan={HEADERS.length+1}>
          <div className={styles['search-container']}>
            <TextInput
              placeholder="Search Hero" 
              onChange={({currentTarget})=>onSearch(currentTarget.value)}  
              className={styles['search-input']}
              rightIcon={<Search />}
            />
            <div className={styles['info-container']} onClick={handleShowAboutModal}>
              <About color={colors.primary} size={42}/>
            </div>
          </div>
        </th>
      </tr>
      <tr className={styles['table-hero-header']}>
        {HEADERS.map(_renderItem({onSort, sortBy}))}
      </tr>
    </thead>
  )
}

export default Header