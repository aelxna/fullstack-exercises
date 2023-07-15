const Search = ({ search, updateSearch }) => {
  return (
    <div>
      Find countries: <input
        value={search}
        onChange={updateSearch} />
    </div>
  );
}
export default Search;