import { Data } from "../../../../api/hero/types"
import { getPercentageNumber } from "../../utils"
import { HEADER_KEY, SORT_STATE } from "./constants"
import { GetSortedHeroes, SortBy } from "./types"

export const getSortedHeroes = ({currentHeroes, sortBy, originalData}:GetSortedHeroes)=>{
  if (!currentHeroes?.length) {
    return currentHeroes
  }
  if (sortBy.state === SORT_STATE.DEFAULT) {
    return originalData
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
        [SORT_STATE.ASC]: getPercentageNumber(currentHero.ban) > getPercentageNumber(nextHero.ban) ? 1 : -1,
        [SORT_STATE.DESC]: getPercentageNumber(currentHero.ban) < getPercentageNumber(nextHero.ban)? 1 : -1
      }

      return nextSort[sortBy.state]
    },
    [HEADER_KEY.USE_RATE]: (currentHero,nextHero)=>{
      const nextSort:{
        [key in SortBy['state']]: number
      }  = {
        [SORT_STATE.DEFAULT]: 1,
        [SORT_STATE.ASC]: getPercentageNumber(currentHero.use) > getPercentageNumber(nextHero.use) ? 1 : -1,
        [SORT_STATE.DESC]: getPercentageNumber(currentHero.use) < getPercentageNumber(nextHero.use)? 1 : -1
      }

      return nextSort[sortBy.state]
    },
    [HEADER_KEY.WIN_RATE]: (currentHero,nextHero)=>{
      const nextSort:{
        [key in SortBy['state']]: number
      }  = {
        [SORT_STATE.DEFAULT]: 1,
        [SORT_STATE.ASC]: getPercentageNumber(currentHero.win) > getPercentageNumber(nextHero.win) ? 1 : -1,
        [SORT_STATE.DESC]: getPercentageNumber(currentHero.win) < getPercentageNumber(nextHero.win)? 1 : -1
      }

      return nextSort[sortBy.state]
    },
  }
  
  return ([] as Data[]).concat(currentHeroes ?? []).sort(sortCondition[sortBy.key])
}