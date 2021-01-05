import React from 'react'

import { Menu } from 'store/menu/Menu'
import { Posts } from 'store/posts/Posts'

import './App.css'

const App: React.FC = () => {
return (
  <div className="App">
    <div className="nav"><Menu/></div>
    <Posts />
  </div>
)};

export default App
