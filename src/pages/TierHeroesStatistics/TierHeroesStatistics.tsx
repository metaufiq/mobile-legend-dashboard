import { useEffect, useState } from 'react';

import heroAPI from '../../api/hero';
import {Data as Hero} from '../../api/hero/types';
import { RANK_TYPE } from '../../api/hero/constants';
import styles from './TierHeroesStatistics.module.scss';
import IconLoading from '../../components/Icons/Loading';
const TierHeroesStatisctics = ()=>{

  const [heroes, setHeroes] = useState<Hero[]>()
  const [loading, setLoading] = useState<boolean>(true)
  const initHeroes = async ()=>{
    const newHeroes = await heroAPI.getRankData({lang:'en', language: 'en', type: RANK_TYPE.ALL})
    setLoading(false)
    setHeroes(newHeroes.data.data)
  }

  useEffect(()=>{
    initHeroes()
  }, [])


  if (loading) return(
    <div className={styles['loading']}>
      <IconLoading/>
    </div>
  )
  return (
    <table className={styles['table-hero']}>  
      <thead>
        <tr className={styles['table-hero-header']}>
          <th colSpan={2}>Hero</th>
          <th>Win Rate</th>
          <th>Use Rate</th>
          <th>Ban Rate</th>
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
  );
}

export default TierHeroesStatisctics;
