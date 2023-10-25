import { useCallback, useEffect, useState } from 'react';

import heroAPI from '../../api/hero';
import {Data as Hero} from '../../api/hero/types';
import { RANK_TYPE } from '../../api/hero/constants';
import TableHero from './components/TableHero';

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
      <TableHero data={heroes} loading={loading}/>
    </div>
  );
}

export default TierHeroesStatisctics;
