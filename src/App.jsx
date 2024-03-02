import { useEffect, useState } from 'react';
import ProductGallery from './components/ProductCard/ProductGallery';
import productCard  from './productCard.json';
import Mailbox from './components/MailBox/Mailbox';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';


const emailsData = [
  { id: "1", email: "rex135@gmail.com"},
  { id: "2", email: "asdg@SDFH.COM"},
  { id: "3", email: "xcvbh@zsgsdfhj.com"},
]

function App() {
const [counter, setCounter] = useState(0);
const [emails, setEmails] = useState(emailsData);
const [showMailBox, setshowMailBox] = useState(false);

 const onLogEmail = () => {
  console.log('Email.for sent')
  setCounter(counter + 1);
 }

 const handleDelete = (mailId) => {
  console.log("mailId", mailId);
  setEmails(prevState => prevState.filter((email) => email.id !== mailId));
}

const handleMailBox = () => {
  setshowMailBox(prevState => !prevState);
}

const initialisationsFeedBackCounts = JSON.parse(localStorage.getItem("feedbackCounts")) || {
  good: 0,
	neutral: 0,
	bad: 0
}

const [feedbackCounts, setFeedbackCounts] = useState(initialisationsFeedBackCounts);

useEffect(() => {
localStorage.setItem("feedbackCounts", JSON.stringify(feedbackCounts));
}, [feedbackCounts]);

const updateFeedback = feedbackType => {
  setFeedbackCounts({
    ...feedbackCounts,
 [feedbackType]: feedbackCounts[feedbackType] + 1
  })
 }

 const { good, neutral, bad } = feedbackCounts;
 const totalFeedback = good + neutral + bad;
 const positivePercentage = totalFeedback > 0 ? Math.round(((good + neutral) / totalFeedback) * 100) : 0; 

 const resetFeedBack = () => {
 setFeedbackCounts({
    good: 0,
    neutral: 0,
    bad: 0
  })
 }

  return (
    <div>
      <Description/>
      <Options
       updateFeedback={updateFeedback}
       totalFeedback={totalFeedback}
       resetFeedBack={resetFeedBack}
      />
      { totalFeedback > 0 ?
      <Feedback 
      positivePercentage={positivePercentage}
      feedbackCounts={feedbackCounts}
      totalFeedback={totalFeedback}/>
      : <Notification/>
      } 
      


      <h2>Email counts: {counter}</h2>
      <button type="button" onClick={handleMailBox}>{showMailBox ? "Hide" : "Show"} mail Box</button>
      {showMailBox ? (<Mailbox emails={emails} 
      emailCounter={counter}
      onClose={handleMailBox}
      onLogEmail={onLogEmail} 
      onDeleteEmail={handleDelete}/>) : null}
      <ProductGallery productCard={productCard}/>
 </div>
      
  )
}

export default App
