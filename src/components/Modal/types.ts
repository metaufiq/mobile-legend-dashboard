import React from "react"

export interface Props{
  isOpen: boolean
  handleClose: VoidFunction
  contentStyle?: React.CSSProperties
  updatedAt?: string
  children?: React.ReactNode
}