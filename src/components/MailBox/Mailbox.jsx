
const Mailbox = ({ onLogEmail, onDeleteEmail }) => {

  return (
    <div>
        <h2>MailBox</h2>
       <ul>
        <li>Mail-1<button onClick={() => onDeleteEmail(1)} type="button">😵</button></li>
        <li>Mail-2<button onClick={() => onDeleteEmail(2)} type="button">😵</button></li>
        <li>Mail-3<button onClick={() => onDeleteEmail(3)} type="button">😵</button></li>
       </ul>
       <button onClick={onLogEmail} type='button' >Send mail</button>
    </div>
  )
}
export default Mailbox
