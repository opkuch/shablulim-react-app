import { useState } from 'react'

export const ShortComment = ({ commentStr }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <span>{isOpen? commentStr : commentStr.substring(0, 90)} </span>
      <a style={{textDecoration: 'underline', fontSize: '0.8rem'}} onClick={() => setIsOpen((prevState) => !prevState)}>{isOpen? 'סגור תגובה' : 'קרא עוד..'}</a>
    </>
  )
}
