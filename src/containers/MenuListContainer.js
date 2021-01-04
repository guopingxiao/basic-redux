import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectSubreddit, fetchPosts } from "../actions";
import MenuList from "../components/MenuList";

class MenuListContainer extends Component {
  static propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  handleChange = nextSubreddit => {
    this.props.dispatch(selectSubreddit(nextSubreddit));
    const { dispatch } = this.props;
    dispatch(fetchPosts(nextSubreddit));
  };

  render() {
    const { selectedSubreddit } = this.props;
    return (
      <MenuList
        value={selectedSubreddit}
        onChange={this.handleChange}
        options={["reactjs", "vuejs", "angularjs"]}
      />
    );
  }
}

const mapStateToProps = ({ selectedSubreddit }) => {
  return { selectedSubreddit: selectedSubreddit };
};

export default connect(mapStateToProps)(MenuListContainer);
