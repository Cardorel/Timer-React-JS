import React , {lazy , Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const GobalApp = lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <GobalApp/>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

