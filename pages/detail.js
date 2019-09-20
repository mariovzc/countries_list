import React from 'react';
import {APIURL} from '../helpers/consts';
import fetch from 'isomorphic-fetch';
import Error from './_error';
import Layout from '../components/layout';
import { Link } from '../routes';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const Detail = ({ country, statusCode}) => {
    if (statusCode != 200) {
      return <Error statusCode={statusCode} />
    }
    return (
      <Layout title={country.name}>
        <div className='modal'>
          <div className='country'>
            <nav>
              <Link
                route="/"
              >
                <a className='close'>&lt; Volver</a>
              </Link>
            </nav>
            <picture>
              <div>
              <Map 
                center={[
                  country.latlng[0],
                  country.latlng[1],
                ]}
                zoom={10}
              >
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[
                  country.latlng[0],
                  country.latlng[1],
                ]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </Map>

              </div>
            </picture>
            <div className='player'>
              <h3>
                { country.name } -
                &nbsp;
                { country.alpha2Code }
              </h3>
              <h6></h6>
              <h6>{ country.capital } { country.region }</h6>
            </div>
          </div>
        </div>
        <style jsx>{`
          nav a {
            display: inline-block;
            padding: 15px;
            color: white;
            cursor: pointer;
            text-decoration: none;
          }
          .country {
            display: flex;
            height: 100%;
            flex-direction: column;
            background: #37474f;
            color: white;
          }
          picture {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1 1;
            flex-direction: column;
            width: auto;
            padding: 10%;
          }
          picture div {
            width: 100%;
            height: 100%;
            background-position: 50% 50%;
            background-size: contain;
            background-repeat: no-repeat;
          }
          .player {
            padding: 30px;
            background: rgba(0,0,0,0.3);
            text-align: center;
          }
          h3 {
            margin: 0;
          }
          h6 {
            margin: 0;
            margin-top: 1em;
          }
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 99999;
          }
      `}</style>
      </Layout>
    )
}

Detail.getInitialProps = async ({ query, res }) => {
    const code = query.code;
    try {
        let req = await fetch(`${APIURL}/alpha/${code}`);
        let country = await req.json();
        return { country, statusCode: 200 }
      } catch(e) {
        res.statusCode = 503;
        return { country: null, statusCode: 503 }
      }

}

export default Detail;