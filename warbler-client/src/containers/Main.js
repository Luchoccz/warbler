import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from '../component/Homepage';
import Authform from '../component/AuthForm';
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import WithAuth from "../hocs/WithAuth";
import MessageForm from "./MessageForm.js";


const Main = props => {
  const { authUser, errors, removeError, currentUser } = props;
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" render={props => <Homepage currentUser={currentUser} {...props} />} />
          <Route 
            exact 
            path="/signin" 
            render={props => {
              return (
                <Authform 
                removeError={removeError} 
                errors={errors} 
                onAuth={ authUser } 
                buttonText="Log in" 
                heading="Bienvenido!" 
                {...props} 
                />
              );
            }} 
          />
          <Route 
            exact 
            path="/signUp" 
            render={props => {
              return (
                <Authform 
                  removeError={removeError} 
                  errors={errors} onAuth={ authUser } 
                  signUp 
                  buttonText="Sign me up" 
                  heading="Entraste a warbler hoy!" 
                  {...props} 
                  />
              );
            }} 
          />  
          <Route 
          path="/users/:id/messages/new" 
          component={WithAuth(MessageForm)} 
          />
        </Switch>
      </div>
    );
  };

function mapStateToProps(state){
  return{
    currentUser: state.currentUser,
    errors: state.errors
  }
};

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));