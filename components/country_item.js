import React, {Fragment} from 'react';
import { Link } from '../routes';
import slug from '../helpers/slug';

const CountryItem = ({country}) => (
  <Fragment>
    <Link 
      route="detail"
      params={{
        slug: slug(country.name),
        code: country.alpha2Code 
      }}
      key={country.id}>
      <a className="country">
        <img 
          src={ country.flag }
          alt={ country.name }/>
        <h2>{ country.name } - { country.alpha2Code} </h2>
      </a>
    </Link>
    <style jsx>{`
      .country {
        display: block;
        border-radius: 3px;
        box-shadow: 02px 6px rgba(0,0,0,0.15);
        margin-bottom: 0.5em;
        border-width: 0.5px 2px 0px 2px;
        border-color: rgba(0,0,0,0.15);
        border-style: solid;
        text-decoration: none;
      }
      a.country {
        display: block;
        margin-bottom: 0.5em;
        color: #333;
        text-decoration: none;
      }
      .country img{
        width: 100%;
        height: 100px
      }
      h2{
        padding: 5px;
        font-size: 0.9em;
        font-weight: 600;
        margin: 0;
        text-align:center;
      }
    `}</style>
  </Fragment>
);

export default CountryItem;