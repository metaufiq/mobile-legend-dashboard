import { Header } from "./types"

export const SORT_STATE = {
  ASC: 'ASC',
  DEFAULT: 'DEFAULT',
  DESC: 'DESC'
} as const

export const HEADER_KEY = {
  HERO: 'HERO',
  WIN_RATE: 'WIN_RATE',
  USE_RATE: 'USE_RATE',
  BAN_RATE: 'BAN_RATE',
} as const

export const HEADERS = [
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
] as const