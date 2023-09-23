import { useEffect, useState } from 'react';

import heroAPI from '../../api/hero';
import {Data as Hero} from '../../api/hero/types';
import { RANK_TYPE } from '../../api/hero/constants';

const TierHeroesStatisctics = ()=>{

  const [heroes, setHeroes] = useState<Hero[]>()
  const initHeroes = async ()=>{
    const newHeroes = await heroAPI.getRankData({lang:'en', language: 'en', type: RANK_TYPE.ALL})
    
    setHeroes(newHeroes.data.data)
  }

  useEffect(()=>{
    initHeroes()
  }, [])

  return (
    <div>
      {heroes?.map(({ban, name, use, win})=>(
        <div>
          <div>{name}</div>
          <div>{ban}</div>
          <div>{use}</div>
          <div>{win}</div>
        </div>
      ))}
    </div>
  );
}

export default TierHeroesStatisctics;
