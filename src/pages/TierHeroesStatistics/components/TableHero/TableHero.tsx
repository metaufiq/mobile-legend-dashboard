import { useEffect, useState } from 'react';

import SortUnactivated from '../../../../components/Icons/SortUnactivated';
import SortAsc from '../../../../components/Icons/SortAsc';
import SortDesc from '../../../../components/Icons/SortDesc';
import styles from './TableHero.module.scss';
import { Header, HeaderParams, Props, SortBy } from './types';
import { HEADER_KEY, SORT_STATE } from './constants';
import { Data } from '../../../../api/hero/types';


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

const TableHero = ({data}:Props)=>{
  const [heroes, setHeroes] = useState(data);
  const [sortBy, setSortBy] = useState<SortBy>();

  useEffect(()=>{
    setHeroes(data)
  }, [data]);

  useEffect(()=>{
    if (!sortBy) return

    
    setHeroes(currentHeroes=>{
      if (sortBy.state === SORT_STATE.DEFAULT) {
        return data
      }

      const sortCondition:{
        [key in SortBy['key']]: (currentHero: Data, nextHero: Data) => number
      } = {
        [HEADER_KEY.HERO]: (currentHero,nextHero)=>{
          const nextSort:{
            [key in SortBy['state']]: number
          }  = {
            [SORT_STATE.DEFAULT]: 1,
            [SORT_STATE.ASC]: currentHero.name > nextHero.name ? 1 : -1,
            [SORT_STATE.DESC]: currentHero.name < nextHero.name? 1 : -1
          }

          return nextSort[sortBy.state]
        },
        [HEADER_KEY.BAN_RATE]: (currentHero,nextHero)=>{
          const nextSort:{
            [key in SortBy['state']]: number
          }  = {
            [SORT_STATE.DEFAULT]: 1,
            [SORT_STATE.ASC]: currentHero.name > nextHero.name ? 1 : -1,
            [SORT_STATE.DESC]: currentHero.name < nextHero.name? 1 : -1
          }

          return nextSort[sortBy.state]
        },
        [HEADER_KEY.USE_RATE]: (currentHero,nextHero)=>{
          const nextSort:{
            [key in SortBy['state']]: number
          }  = {
            [SORT_STATE.DEFAULT]: 1,
            [SORT_STATE.ASC]: currentHero.name > nextHero.name ? 1 : -1,
            [SORT_STATE.DESC]: currentHero.name < nextHero.name? 1 : -1
          }

          return nextSort[sortBy.state]
        },
        [HEADER_KEY.WIN_RATE]: (currentHero,nextHero)=>{
          const nextSort:{
            [key in SortBy['state']]: number
          }  = {
            [SORT_STATE.DEFAULT]: 1,
            [SORT_STATE.ASC]: currentHero.name > nextHero.name ? 1 : -1,
            [SORT_STATE.DESC]: currentHero.name < nextHero.name? 1 : -1
          }

          return nextSort[sortBy.state]
        },
      }


      
      return currentHeroes?.sort(sortCondition[sortBy.key])
    })
  }, [sortBy])

  const headers:Header[] = [
    {
      title: 'Hero',
      colspan: 2,
      key: HEADER_KEY.HERO
    },
    {
      title: 'Win Rate',
      key: HEADER_KEY.WIN_RATE
    },
    {
      title: 'Use Rate',
      key: HEADER_KEY.USE_RATE
    },
    {
      title: 'Ban Rate',
      key: HEADER_KEY.BAN_RATE
    }
  ];

  return(
    <table className={styles['table-hero']}>  
      <thead>
        <tr className={styles['table-hero-header']}>
          {headers.map(_renderHeader({setSortBy, sortBy}))}
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