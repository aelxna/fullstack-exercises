const PersonsList = ({ peopleToShow, deletePerson }) => {
  return (
    <div>
      {peopleToShow.map(person =>
        <div key={person.id}>
          {person.name} {person.number} <button onClick={() => deletePerson(person)}>delete</button>
          
        </div>
      )}
    </div>
  );
}
export default PersonsList;