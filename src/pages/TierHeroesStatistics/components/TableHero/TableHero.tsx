import { useEffect, useState } from 'react';

import IconLoading from '../../../../components/Icons/Loading';
import { getSortedHeroes } from './utils';
import { Props, SortBy } from './types';
import styles from './TableHero.module.scss';
import Header from './Header';
import Item from './Item/Item';

const TableHero = ({data, loading, handleShowAboutModal}:Props)=>{
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
      <Header
        handleShowAboutModal={handleShowAboutModal}
        onSearch={setSearchInput}
        onSort={setSortBy}
        sortBy={sortBy}
      />
      <tbody>
        {heroes?.map(hero=><Item data={hero}/>)}
      </tbody>
    </table>
  )
}

export default TableHero