import React , {lazy , Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const Gobal_App = lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Gobal_App/>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

