import { useNavigate } from 'react-router-dom'
import { Button } from './Button'

export const PaymentMessage = () => {
  const navigate = useNavigate()
  return (
    <div style={{ flexGrow: '1' }}>
      <div className="centered-message">
        נשלח אליכם קוד לאימייל, תשמרו אותו!
        <br />
        אתם יכולים כבר להתחיל לצפות בסרטים, אז למה אתם מחכים?
        <Button text="לקטלוג הסרטים" clickFunc={() => navigate('/movies')} />
      </div>
    </div>
  )
}
