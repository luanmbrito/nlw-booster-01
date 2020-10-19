import React from 'react'

interface HeaderProps{
  title: string;
  desc:string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return(
    <header>
      <h1>{props.title}</h1>
      <h2>{props.desc}</h2>
    </header>
  )
}

export default Header
