import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import PersonsList from './components/PersonsList';
import Notification from './components/Notification';
import personService from './services/persons';
import './index.css';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');
  const [filter, setFilter] = useState('');
  const [isSuccess, setStatus] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    console.log('effect');
    personService
      .getAll()
      .then(initList => {
        setPersons(initList);
      })
      .catch(error => {
        console.log("Failed to retrieve data from server");
      })
  }, [])

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  }

  const handleNumChange = (event) => {
    // console.log(event.target.value);
    setNewNum(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName,
      number: newNum
    }
    const found = persons.find(person => person.name === newName);
    if (found === undefined) {
      personService
        .create(personObj)
        .then(ret => {
          console.log(newName, "added to phonebook");
          setPersons(persons.concat(ret));
          setNewName('');
          setNewNum('');
          setStatus(true);
          setMessage(`${newName} added to phonebook`);
        })
      setStatus(true);
      setMessage(`${newName} added to phonebook`);
    } else {
      if (window.confirm(`${found.name} is already added to the phonebook. Do you want to replace their number?`)) {
        const newObj = { ...found, number: newNum };
        personService
          .update(found.id, newObj)
          .then(ret => {
            console.log(found.name, "updated");
            setPersons(persons.map(person => person.id !== found.id ? person : ret));
            setNewName('');
            setNewNum('');
            setStatus(true);
            setMessage(`${found.name} updated`);
          })
          .catch(error => {
            console.log(`Error: ${found.name} was already removed from the server`);
            setStatus(false);
            setMessage(`Error: ${found.name} was already removed from the server`);
            setPersons(persons.filter(person => person.id !== found.id));
          })
      }
    }
    console.log('Button clicked', event.target);
  }

  const updateFilter = (event) => {
    // console.log(event.target.value);
    setFilter(event.target.value);
  }

  const deletePerson = person => {
    if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
      personService
        .del(person.id)
        .then(() =>
          setPersons(persons.filter(p => p.id !== person.id))
        )
        .catch(error => {
          console.log(`Error: ${person.name} was already removed from the server`);
          setStatus(false);
          setMessage(`Error: ${person.name} was already removed from the server`);
          setPersons(persons.filter(p => p.id !== person.id));
        })
      console.log(person.name, "deleted")
    }
  }

  const peopleToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h1>Phonebook</h1>

      <Notification type={isSuccess} message={message} setMessage={setMessage} />

      <Filter filter={filter} updateFilter={updateFilter} />

      <h2>Add to phonebook</h2>
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNum={newNum}
        handleNumChange={handleNumChange}
        addPerson={addPerson} />

      <h2>Numbers</h2>
      {/* { peopleToShow.map(person => <p key={person.name}>{person.name} {person.number}</p>) } */}
      <PersonsList
        peopleToShow={peopleToShow}
        deletePerson={deletePerson}
      />
    </div>
  );
}

export default App