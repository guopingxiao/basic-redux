import React, { Component } from "react";
import MenuListContainer from "./MenuListContainer";
import PostsContanier from "./PostsContainer";

class App extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            minWidth: 120,
            minHeight: "100vh",
            background: "#ddd",
            paddingLeft: 10
          }}
        >
          <MenuListContainer />
        </div>
        <PostsContanier />
      </div>
    );
  }
}

export default App;
