const DisplayCountry = ({ country }) => {
    const languages = Object.values(country.languages);
    return (
      <div>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
        
        <h1>{country.name.common}</h1>
        <p>Official name: {country.name.official}</p>
        {country.capital.length === 1 
        ? <p>Capital: {country.capital}</p>
        : <div>
          <p>Capitals:</p>
          <ul>
            {country.capital.map(x =>
              <li key={x}>
                {x}
              </li>
            )}
          </ul>
        </div>
          }
        <p>Population: {country.population.toLocaleString()}</p>
        <p>Area: {country.area.toLocaleString()} sq. km</p>

        <b>Languages:</b>
        <ul>
          {languages.map(l =>
            <li key={l}>
              {l}
            </li>
          )}
        </ul>
      </div>
    )
}
export default DisplayCountry;