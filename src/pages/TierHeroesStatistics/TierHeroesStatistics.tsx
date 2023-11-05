import { useCallback, useEffect, useState } from 'react';

import heroAPI from 'api/hero';
import {Data as Hero} from 'api/hero/types';
import { RANK_TYPE } from 'api/hero/constants';
import TableHero from './components/TableHero';
import AboutModal from './components/AboutModal';
import styles from './TierHeroesStatistics.module.scss'

const TierHeroesStatisctics = ()=>{
  const [heroes, setHeroes] = useState<Hero[]>()
  const [loading, setLoading] = useState<boolean>(true)
  const [showAbouModal, setShowAboutModal] = useState<boolean>(false)
  const [updatedAt, setUpdatedAt] = useState<string>()

  const handleInitHeroes = useCallback(async ()=>{    
    const {data} = await heroAPI.getRankData({lang:'en', language: 'en', type: RANK_TYPE.ALL})
    setLoading(false)
    setHeroes(data.data)
    setUpdatedAt(data.time)
  }, [])

  useEffect(()=>{
    handleInitHeroes()
  }, [handleInitHeroes])

  return (
    <div>
      <AboutModal 
        isOpen={showAbouModal}
        overlayClassName={styles['modal-overlay']}
        updatedAt={updatedAt}
        handleClose={()=>setShowAboutModal(false)}
      />
      <TableHero data={heroes} loading={loading} handleShowAboutModal={()=>{setShowAboutModal(true)}}/>
    </div>
  );
}

export default TierHeroesStatisctics;
