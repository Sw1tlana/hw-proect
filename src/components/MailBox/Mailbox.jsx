import { useEffect } from "react"

const Mailbox = ({ emails, onLogEmail, onDeleteEmail, emailCounter, onClose }) => {
  useEffect(() => {
   const onKeyDown = (event) => {
    if(event.code === "Escape") {
      onClose()
    }
   }

   window.addEventListener("keydown", onKeyDown);

   return () => {
    window.removeEventListener("keydown", onKeyDown);
   }
  }, [onClose]);

  return (
    <div>
        <h2>MailBox: {emailCounter}</h2>
        <button type="button" onClick={onClose}>Clouse</button>
       <ul>
      {emails.map((email) => 
      <li key={email.id}>
       {email.email}{' '}
       <button onClick={() => onDeleteEmail(email.id)} type="button">😵</button>
      </li>
      )}
        </ul>   
        {/* <li>Mail-1<button onClick={() => onDeleteEmail(1)} type="button">😵</button></li>
        <li>Mail-2<button onClick={() => onDeleteEmail(2)} type="button">😵</button></li>
        <li>Mail-3<button onClick={() => onDeleteEmail(3)} type="button">😵</button></li> */}
       <button onClick={onLogEmail} type='button' >Send mail</button>
    </div>
  )
}
export default Mailbox
