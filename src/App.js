import React, { Fragment } from 'react'
import { GlobalStyles } from './globalStyles';
import Weather from './components/Weather/Weather';

const App = () => (
  <Fragment>
    <GlobalStyles />
    <Weather />
  </Fragment>
) 
  
export default App