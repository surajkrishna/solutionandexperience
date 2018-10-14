import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import Typing from "../UI/Typing/Typing";
import classes from "./Dashboard.css";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Typing />;
    } else {
      dashboardContent = <h2>Hello</h2>;
    }

    return (
      <div className={classes.Dashboard}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    profile: state.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrentProfile: () => dispatch(actionTypes.getCurrentProfile())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
