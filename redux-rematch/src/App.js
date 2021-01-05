import React from 'react'
import {Menu} from './components/Menu';
import {Posts} from './components/Posts';

const App = props => (
  <div style={{ display: "flex" }}>
    <div
      style={{
        minWidth: 120,
        minHeight: "100vh",
        background: "#ddd",
        paddingLeft: 10
      }}
    >
      <Menu />
    </div>
    <Posts />
  </div>
);

export default App;
