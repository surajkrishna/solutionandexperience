import React, { Component } from "react";
import PropTypes from "prop-types";
import classname from "classname";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import Loading from "../../UI/Loading/Loading";
import styles from "./Register.css";
import InputFormGroup from "../../common/inputFieldGroup";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      Object.keys(nextProps.errors).length &&
      nextProps.errors !== this.state.errors
    ) {
      this.setState({ errors: nextProps.errors });
    }
    if (Object.keys(nextProps.auth.user).length !== 0) {
      this.props.history.push("/login");
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const _this = this;
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    _this.props.onAuth(newUser);
    // axios
    // .post("/api/users/register", newUser)
    // .then(res => console.log(res.data))
    // .catch(err => _this.setState({ errors: err.response.data }));
  };
  render() {
    const { errors } = this.state;

    // Load Spinner
    const spinner = this.props.loading ? <Loading /> : null;

    return (
      <div className={styles.Register}>
        {spinner}
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Sign Up</h1>
                {this.props.auth.user ? this.props.auth.user.name : ""}
                <p className="lead text-center">
                  Create your DevConnector account
                </p>
                <form onSubmit={this.onSubmit}>
                  <InputFormGroup
                    type="text"
                    className={classname("form-control form-control-lg", {
                      "is-invalid": errors.name
                    })}
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    errors={errors.name}
                  />
                  <InputFormGroup
                    type="email"
                    className={classname("form-control form-control-lg", {
                      "is-invalid": errors.email
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    errors={errors.email}
                    info="This site uses Gravatar so if you want a profile image,
                    use a Gravatar email"
                  />
                  <InputFormGroup
                    type="password"
                    className={classname("form-control form-control-lg", {
                      "is-invalid": errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    errors={errors.password}
                  />

                  <InputFormGroup
                    type="password"
                    className={classname("form-control form-control-lg", {
                      "is-invalid": errors.password2
                    })}
                    placeholder="Confirm Password"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange}
                    errors={errors.password2}
                  />
                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  auth: PropTypes.object.isRequired,
  onAuth: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    loading: state.loadingState.loading,
    errors: state.errors_obj.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: newUser => dispatch(actions.auth(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
