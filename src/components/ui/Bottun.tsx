import { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode,
    className?:string,
    width?:'w-full' | 'w-fit'
}

function Button({className,children, width="w-full",...rest}:IProps) {
    console.log({rest});
    
  return (
    <button className={`${className} p-2 ${width} rounded-md text-white`} {...rest}>{children}</button>
  )
}

export default Button