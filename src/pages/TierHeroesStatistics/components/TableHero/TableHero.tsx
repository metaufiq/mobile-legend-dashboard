import styles from './TableHero.module.scss';
import { Props } from './types';

const TableHero = ({data}:Props)=>{
  return(
    <table className={styles['table-hero']}>  
      <thead>
        <tr className={styles['table-hero-header']}>
          <th colSpan={2}>Hero</th>
          <th>Win Rate</th>
          <th>Use Rate</th>
          <th>Ban Rate</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(({ban, avatar, name, use, win})=>(
          <tr className={styles['item-hero']}>
            <td><img src={avatar} alt="" className={styles['avatar-img']} /></td>
            <td>{name}</td>
            <td>{win}</td>
            <td>{use}</td>
            <td>{ban}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableHero