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
    <table>
      {heroes?.map(({ban, avatar, name, use, win})=>(
        <tr>
          <td><img src={avatar} alt="" /></td>
          <td>{name}</td>
          <td>{ban}</td>
          <td>{use}</td>
          <td>{win}</td>
        </tr>
      ))}
    </table>
  );
}

export default TierHeroesStatisctics;
