const Filter = ({ filter, updateFilter }) => {
  return (
    <div>
      Filter: <input
        value={filter}
        onChange={updateFilter} />
    </div>
  );
}
export default Filter;