import DisplayCountry from "./DisplayCountry";

const CountryList = ({ countriesToShow, showCountry }) => {
  
  if (countriesToShow.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    );
  }

  if (countriesToShow.length === 0) {
    return (
      <div>
        No matches found
      </div>
    );
  }

  if (countriesToShow.length === 1) {
    const c = countriesToShow[0];
    return (
      <DisplayCountry country={c} />
    )
  }

  return (
    <div>
      {countriesToShow.map(country =>
        <div key={country.cca3}>
          {country.name.common} <button onClick={() => showCountry(country)}>show</button>
        </div>
      )}
    </div>
  );
}
export default CountryList;