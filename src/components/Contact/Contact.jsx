
const Contact = ({ id, name, number, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  }
    return (
      <div>
        <li >
          <div>
            <div>
              <p>Name: {name}</p>
              <p>Number: {number}</p>
            </div>
            <button type="button" onClick={handleDelete}>Delete</button>
          </div>
        </li>
      </div>
    );
  };
  
  export default Contact; 