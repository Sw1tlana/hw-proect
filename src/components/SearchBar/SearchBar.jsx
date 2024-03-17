import toast from "react-hot-toast";
const SearchBar = ({ onSubmit }) => {
const handleSubmit = (evt) => {
evt.preventDefault(evt);
const form = evt.target;
const query = form.elements.query.value.trim();
if(query !== "") {
  onSubmit(query); 
} else {
  toast.error('Please enter a search query!');
}
form.reset();
}

return (
<header>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="query"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>
</header>
  )
}

export default SearchBar
