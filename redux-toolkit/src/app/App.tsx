import React from 'react'

import { Menu } from 'components/Menu'
import { Posts } from 'components/Posts'

import './App.css'

const App: React.FC = () => {
return (
  <div className="App">
    <div className="nav"><Menu/></div>
    <Posts />
  </div>
)};

export default App
