import { Button } from './Button'
import { useState } from 'react';
import { paypalService } from '../services/paypal-service';
import { useEffect } from 'react';
import { useRef } from 'react';
import { authService } from '../services/auth-service';
import paypalButtonImg from '../assets/images/paypal-button.png'

export const EnterCoupon = () => {
  const [orderUrl, setOrderUrl] = useState('')
  const [codeInput, setCodeInput] = useState('')
  const paypalAnchorRef = useRef()
  const inputRef = useRef()
  useEffect(() => {
    async function getPayPalUrl() {
      const url = await paypalService.createPayPalOrder()
      setOrderUrl(url)
    }
    if (!orderUrl) getPayPalUrl()
    inputRef.current.focus()
  }, [orderUrl])

 const submitCodeManually = async (e) => {
    e.preventDefault()
    document.cookie = `code=${codeInput};max-age=86400;path=/`
    const isCodeValid = await authService.validateCoupon()
    if(isCodeValid) {
      window.location.reload()
    }
 }
  return (
    <div className="enter-coupon-wrapper">
      <div className="modal">
        <h1>אופס, נראה שאין לכם עדיין קוד!</h1>
        <p>
          כדי לצפות בתכנים תצטרכו להכניס את הקוד שנשלח אליכם במייל או לרכוש אחד
          במידה ולא רכשתם עדיין.
        </p>
        <section className="flex column align-center">
          <form className="flex" onSubmit={(e) => submitCodeManually(e)}>
            <input ref={inputRef} type="text" placeholder="הכניסו קוד כאן" value={codeInput} onChange={(e) => setCodeInput(e.target.value)}/>
            <Button text="שלח" />
          </form>
          <span>
            או
          </span>
          {orderUrl? <a ref={paypalAnchorRef} href={orderUrl} target="_blank">
            <img style={{maxWidth: '200px'}} src={paypalButtonImg} alt="לחץ פה על מנת לשלם"/>
          </a> : 'טוען תשלום דרך PayPal...'}
        </section>
      </div>
    </div>
  )
}
