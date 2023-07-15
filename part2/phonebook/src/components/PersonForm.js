const PersonForm = (props) => {
  const { newName, handleNameChange, newNum, handleNumChange, addPerson } = props

  return (
    <form onSubmit={addPerson}>
      <div>
        Name: <input
          value={newName}
          onChange={handleNameChange}
        />
      </div>
      <div>
        Number: <input
          value={newNum}
          onChange={handleNumChange}
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
export default PersonForm;