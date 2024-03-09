const SearchBox = ({ searchText, handleSearch }) => {
  return (
    <div>
        <label>
            <span>Find contacts by name</span>
            <input 
            type="text" 
            name="text"
            value={searchText}
            onChange={(e) => {handleSearch(e.target.value)}}/>
        </label>
    </div>
  )
}

export default SearchBox
