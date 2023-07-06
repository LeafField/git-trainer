import React, { FC } from 'react'
import Link from 'next/link'

type Props = {
  title: string
  link: string
  color?: 'primary' | 'secondary'
}

const Button: FC<Props> = ({ title, link, color = 'primary' }) => {
  return (
    <Link
      className={`text-white  text-2xl rounded-[2.8125rem] py-4 px-10 font-normal ${
        color === 'primary' && 'bg-primary'
      } ${color === 'secondary' && 'border-white border'}`}
      href={`${link}`}
    >
      {title}
    </Link>
  )
}

export default Button
