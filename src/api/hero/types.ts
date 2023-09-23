import { RANK_TYPE } from "./constants"

type Language = "en"
type Status = "success"
type RankType = typeof RANK_TYPE[keyof typeof RANK_TYPE]


export interface Params{
  lang: Language
  language: Language
  type: RankType
}

export interface Data {
  id: number,
  use: string,
  win: string,
  ban: string,
  avatar: string,
  name: string
}

export interface Response{
  type: RankType
  status: Status,
  data: {
    data: Data[]
    time:string
  },
}