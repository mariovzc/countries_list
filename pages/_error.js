import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const Error = ({ statusCode }) => {
    return (
      <div>
        { statusCode === 404 ?
          <div className="message">
          <h1>Esta Pagina no existe :(</h1>
          <p>
              <Link href="/">
              <a>Volver a Home</a>
              </Link>
          </p>
          </div>
          :
          <div className="message">
            <h1>Hubo un Problema</h1>
            <p>Intenta nuevamente en unos segundos</p>
          </div>
        }
      </div>
    );
}

Error.getInitialProps = (res, err) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
}

export default Error;