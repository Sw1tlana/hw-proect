import Contact from '../Contact/Contact';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
      {contacts.map(contact => (
        <Contact 
          key={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
    </div>
  );
};

export default ContactList;