import React from 'react'

export const Button = ({
  text = '',
  type = 'default',
  disableShadow = false,
  disableButton = false,
  clickFunc,
  size = '',
  iconSrc = null,
  round = false,
  isActive = false,
  isHover = true,
  btnType = '',
  pill = false,
  manualClass = ''
}) => {
    const handleClick = (e) => {
        if (clickFunc) return clickFunc(e)
        else return null
    }
  return (
    <button
      className={`btn ${type} ${size} ${disableShadow ? '' : 'shadow'} ${iconSrc? 'icon-button' : ''} ${round? 'round' : ''} ${isActive? 'active' : ''} ${isHover? 'hover' : ''} ${pill? 'pill' : ''} ${manualClass}`}
      disabled={disableButton}
      onClick={(e) => handleClick(e)}
      type={btnType}
    >
        {iconSrc? <img className='icon-img' src={iconSrc} alt=''/> : ''}
      {text? <span className="btn-txt">{text}</span> : ''}
    </button>
  )
}
