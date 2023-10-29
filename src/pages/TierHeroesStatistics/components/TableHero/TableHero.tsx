import { useEffect, useState } from 'react';

import SortUnactivated from '../../../../components/Icons/SortUnactivated';
import SortAsc from '../../../../components/Icons/SortAsc';
import SortDesc from '../../../../components/Icons/SortDesc';
import styles from './TableHero.module.scss';
import { Header, HeaderParams, Props, SortBy } from './types';
import { HEADERS, SORT_STATE } from './constants';
import { getSortedHeroes } from './utils';
import TextInput from '../../../../components/TextInput';
import IconLoading from '../../../../components/Icons/Loading';
import Search from '../../../../components/Icons/Search';
import About from '../../../../components/Icons/About';
import { colors } from '../../../../styles/colors';


const _renderHeader = ({setSortBy, sortBy}:HeaderParams)=>
({title, colspan, key}:Header)=>{
  const nextState = {
    [SORT_STATE.DEFAULT]: SORT_STATE.DESC,
    [SORT_STATE.ASC]: SORT_STATE.DEFAULT,
    [SORT_STATE.DESC]: SORT_STATE.ASC
  }

  const handleSort = ()=>{
    setSortBy({
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

const TableHero = ({data, loading}:Props)=>{
  const [heroes, setHeroes] = useState(data);
  const [sortBy, setSortBy] = useState<SortBy>();
  const [searchInput, setSearchInput] = useState('');

  useEffect(()=>{
    const filteredResult = data?.filter(hero=>{
      const input = searchInput.toLowerCase()
      return hero.name.toLowerCase().includes(input)
    })

    searchInput ? setHeroes(filteredResult) : setHeroes(data)

  }, [data, searchInput])

  useEffect(()=>{
    setHeroes(data)
  }, [data]);

  useEffect(()=>{
    if (!sortBy) return

    
    setHeroes((currentHeroes)=>getSortedHeroes({
      currentHeroes,
      originalData: data,
      sortBy
    }))
  }, [data, sortBy])

  if (loading) return(
    <div className={styles['loading']}>
      <IconLoading/>
    </div>
  )

  return(
    <table className={styles['table-hero']} cellSpacing="0">  

      <thead className={styles['table-header-container']}>
        <tr>
          <th colSpan={HEADERS.length+1}>
            <div className={styles['search-container']}>
              <TextInput 
                placeholder="Search Hero" 
                onChange={({currentTarget})=>setSearchInput(currentTarget.value)}  
                className={styles['search-input']}
                rightIcon={<Search />}
              />
              <div className={styles['info-container']}>
                <About color={colors.primary} size={42}/>
              </div>
            </div>
          </th>
        </tr>
        <tr className={styles['table-hero-header']}>
          {HEADERS.map(_renderHeader({setSortBy, sortBy}))}
        </tr>
      </thead>
      <tbody>
        {heroes?.map(({ban, avatar, name, use, win})=>(
          <tr className={styles['item-hero']}>
            <td><img src={avatar} alt="" className={styles['avatar-img']} /></td>
            <td>{name}</td>
            <td>{win}</td>
            <td>{use}</td>
            <td>{ban}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableHero