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
  const [initHeroes, setInitHeroes] = useState<Hero[]>()
  const [loading, setLoading] = useState<boolean>(true)
  const [searchInput, setSearchInput] = useState('')
  const handleInitHeroes = async ()=>{
    const {data} = await heroAPI.getRankData({lang:'en', language: 'en', type: RANK_TYPE.ALL})
    setLoading(false)
    setInitHeroes(data.data)
    setHeroes(data.data)
  }

  useEffect(()=>{

    if (!searchInput) {
      handleInitHeroes()
      return 
    }
    const filteredResult = initHeroes?.filter(hero=>{
      const input = searchInput.toLowerCase()
      return hero.name.toLowerCase().includes(input)
    })

    searchInput ? setHeroes(filteredResult) : handleInitHeroes()

  }, [initHeroes, searchInput])


  if (loading) return(
    <div className={styles['loading']}>
      <IconLoading/>
    </div>
  )

  return (
    <div>
      <div>
        <TextInput placeholder='hero name' onChange={({currentTarget})=>setSearchInput(currentTarget.value)}/>
      </div>
      <TableHero data={heroes}/>
    </div>
  );
}

export default TierHeroesStatisctics;
