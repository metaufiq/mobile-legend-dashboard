import { Props } from "./types"
import styles from '../TableHero.module.scss';

const Item = ({data:{
  avatar,
  ban,
  name,
  use,
  win
}}:Props)=>{
  return(
    <tr className={styles['item-hero']}>
      <td><img src={avatar} alt="" className={styles['avatar-img']} /></td>
      <td>{name}</td>
      <td>{win}</td>
      <td>{use}</td>
      <td>{ban}</td>
    </tr>
  )
}

export default Item