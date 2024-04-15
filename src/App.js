import React from 'react'
import Home from './pages/Home'
import './normalize.css'
// Fontawesome Imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fab, fas, far)


function App() {
  return (
    <Home />
  )
}
export default App
