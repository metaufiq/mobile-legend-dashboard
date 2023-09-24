import { useEffect, useState } from 'react';

import heroAPI from '../../api/hero';
import {Data as Hero} from '../../api/hero/types';
import { RANK_TYPE } from '../../api/hero/constants';
import styles from './TierHeroesStatistics.module.scss';
import IconLoading from '../../components/Icons/Loading';
import TextInput from '../../components/TextInput';
import TableHero from './components/TableHero';
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
    <div>
      <div>
        <TextInput placeholder='hero name'/>
      </div>
      <TableHero data={heroes}/>
    </div>
  );
}

export default TierHeroesStatisctics;
