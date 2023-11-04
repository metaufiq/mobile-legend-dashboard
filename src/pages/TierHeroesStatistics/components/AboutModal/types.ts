export interface Props{
  overlayClassName?: string | ReactModal.Classes
  isOpen: boolean
  handleClose: VoidFunction
  updatedAt?: string
}