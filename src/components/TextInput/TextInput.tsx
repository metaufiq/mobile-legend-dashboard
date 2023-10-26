import { ReactElement } from "react";

import styles from "./TextInput.module.scss";
import { Props } from "./types";

/**
 * Text Input components
 * @param {Props} props component props 
 * @returns {ReactElement} Text Input components
 */
const TextInput = (props: Props): ReactElement=>{
  return(
    <div className={styles.container} style={props.style}>      
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className={styles.input}
      />
    </div>
  )
}

export default TextInput;