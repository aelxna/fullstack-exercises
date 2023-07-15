import { useState, useEffect } from 'react';
import Search from './components/Search';
import CountryList from './components/CountryList';
import DisplayCountry from './components/DisplayCountry';
import countryService from './services/countries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [showOne, setShowOne] = useState(null);

  useEffect(() => {
    console.log('effect');
    countryService
      .getAll()
      .then(initList => {
        setCountries(initList);
      })
  }, [])

  const updateSearch = (e) => {
    // console.log(e.target.value);
    setShowOne(null);
    setSearch(e.target.value);
  }

  const showCountry = country => {
    setShowOne(country);
  }

  const countriesToShow = countries.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()));
  
  return (
    <div>
      <Search search={search} updateSearch={updateSearch} />

      <hr />
      
      {showOne
      ? <DisplayCountry country={showOne} />
      : <CountryList countriesToShow={countriesToShow} showCountry={showCountry}/>
      }

    </div>
  );
}

export default App;
