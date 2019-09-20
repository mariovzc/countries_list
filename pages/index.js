import React from 'react';
import fetch from 'isomorphic-fetch';
import {APIURL} from '../helpers/consts.js'
import Error from './_error';

import Layout from '../components/Layout.js';
import CountriesList from '../components/countries_list';

const Index = ({countries, statusCode}) => {
  if (statusCode != 200) {
    return <Error statusCode={statusCode} />
  }

  return (
    <Layout title="Home">
      <CountriesList
        countriesList={countries}
      />
    </Layout>
  );
};

Index.getInitialProps = async ({res}) => {
  try {
    let req = await fetch(APIURL + '/all?fields=flag;name;alpha2Code;');
    let countries = await req.json();
    return { countries: countries, statusCode: 200 } 
  } catch(e) {
    res.statusCode = 503;
    return { channels: null, statusCode: 503 }
  }
}

export default Index;