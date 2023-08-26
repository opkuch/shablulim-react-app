import { Button } from "../components/Button"
import contactUsImg from '../assets/images/snailmail.png'

export const ContactUs = () => {
  return (
    <div className="contact-us-wrapper main-layout">
      <header className="flex column align-center">
        <h1>אנחנו רוצות לשמוע מכם!</h1>
        <p>
          אם אתם מעוניינים לייצר שיתוף פעולה, לשמוע עוד על מיזמים ואירועים או כל דבר אחר, אל תהססו לכתוב לנו
        </p>
        <img src={contactUsImg} alt=""/>
      </header>
      <form className="flex column">
        <div>
          <input type="text" id="contact_name" placeholder="מה השם שלך?" />
        </div>
        <div>
          <input type="email" id="contact_email" placeholder="מה האימייל שלך?" />
        </div>
        <div className="flex column">
          <textarea
            id="contact_message"
            placeholder="כאן כותבים את ההודעה"
          ></textarea>
        </div>
        <Button text="שלח הודעה"/>
      </form>
    </div>
  )
}
