import React, {useEffect, useState, Fragment} from 'react';
import CountryItem from '../components/country_item';

const CountriesList = ({countriesList}) => {
    const [countries, setCountries] = useState(countriesList)
    const [offset, setOffset] = useState(50)
    return (
      <Fragment>
        <div>
          <input
            type="search"
            className="form-control"
          ></input>
        </div>
        <div className="countries">
          {countries.map(country => (            
            <CountryItem
              key={country.alpha2Code}
              country={country}
            />
          ))}
       </div>
       <style jsx>{`
          .countries {
            display: grid;
            grid-gap: 15px;
            padding: 15px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
       `}</style>
      </Fragment>
    );
}

export default CountriesList;