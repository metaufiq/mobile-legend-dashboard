import TextInput from "components/TextInput";
import Search from "components/Icons/Search";
import About from "components/Icons/About";
import { colors } from "styles/colors";
import { HEADERS } from "../../constants"
import styles from './Header.module.scss';
import { Props } from "./types";
import HeaderItem from "../HeaderItem";

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
        {HEADERS.map(header=>(
          <HeaderItem 
            {...header} 
            onSort={onSort}
            sortBy={sortBy} 
            sortKey={header.key} 
            key={header.key}
          />
        ))}
      </tr>
    </thead>
  )
}

export default Header