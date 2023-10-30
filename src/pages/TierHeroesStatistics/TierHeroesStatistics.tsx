import { useCallback, useEffect, useState } from 'react';

import heroAPI from '../../api/hero';
import {Data as Hero} from '../../api/hero/types';
import { RANK_TYPE } from '../../api/hero/constants';
import TableHero from './components/TableHero';
import AboutModal from './components/AboutModal';
import styles from './TierHeroesStatistics.module.scss'

const TierHeroesStatisctics = ()=>{
  const [heroes, setHeroes] = useState<Hero[]>()
  const [loading, setLoading] = useState<boolean>(true)
  const handleInitHeroes = useCallback(async ()=>{    
    const {data} = await heroAPI.getRankData({lang:'en', language: 'en', type: RANK_TYPE.ALL})
    setLoading(false)
    setHeroes(data.data)
  }, [])

  useEffect(()=>{
    handleInitHeroes()
  }, [handleInitHeroes])

  return (
    <div>
      <AboutModal 
        isOpen 
        overlayClassName={styles['modal-overlay']}
      />
      <TableHero data={heroes} loading={loading}/>
    </div>
  );
}

export default TierHeroesStatisctics;
