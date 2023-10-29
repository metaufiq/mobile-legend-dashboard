import { ReactNode } from "react";

export interface Props extends 
React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement
> {
  rightIcon?: ReactNode
}