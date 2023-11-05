import TextInput from "../../../../../components/TextInput";
import Search from "../../../../../components/Icons/Search";
import About from "../../../../../components/Icons/About";
import { colors } from "../../../../../styles/colors";
import { Header as HeaderItem } from "../types";
import { HEADERS, SORT_STATE } from "../constants"
import { ICON_SORT, NEXT_SORT } from "./constants";
import styles from './Header.module.scss';
import { HeaderItemProps, Props } from "./types";

const _renderItem = ({onSort, sortBy}:HeaderItemProps)=>
({title, colspan, key}:HeaderItem)=>{

  const handleSort = ()=>{
    onSort({
      key,
      state: NEXT_SORT[sortBy?.state ?? SORT_STATE.DEFAULT]
    })
  }

  return (
    <th colSpan={colspan} key={key} onClick={handleSort}>
      {title}
      {
        ICON_SORT[sortBy?.state && key===sortBy.key ? sortBy.state  : SORT_STATE.DEFAULT]
      }
    </th>
  )
}

const Header = ({handleShowAboutModal, onSearch, onSort, sortBy}: Props)=>{
  return(
    <thead className={styles['container']}>
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
      <tr className={styles['item-container']}>
        {HEADERS.map(_renderItem({onSort, sortBy}))}
      </tr>
    </thead>
  )
}

export default Header