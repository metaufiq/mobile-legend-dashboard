import ReactModal from "react-modal"

import Close from "../Icons/Close"
import { Props } from "./types"
import styles from "./Modal.module.scss"

const Modal = ({isOpen, handleClose, contentStyle, children}: Props)=>{
  
  return(
    <ReactModal
      isOpen={isOpen}
      overlayClassName={styles['overlay']}
      style={{
        content:contentStyle
      }}
    >
      {handleClose && 
        <div className={styles['close-container']}>
          <div onClick={handleClose}>
            <Close/>
          </div>
        </div>
      }
      {children}
    </ReactModal>
  )
}

export default Modal