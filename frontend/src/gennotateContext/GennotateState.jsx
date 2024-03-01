import React, { useState } from "react";
import GennotateContext from "./gennotateContext";

const GennotateState = (props) =>{
    const host = 'http://127.0.0.1:8000'
    const [authentication, setAuthentication] = useState('Login')
    const [seeLoginPassword, setSeeLoginPassword] = useState(true)
    const [seeSignUpPassword, setSeeSignUpPassword] = useState(true)
    const [seeSignUpConfirmPassword, setSeeSignUpConfirmPassword] = useState(true)
    const [user, setUser] = useState({})
    const [authenticationMsg, setAuthenticationMsg] = useState('No Text')
    function hasOnlySpacesAndAlphabets(inputString) {
      const regex = /^[a-zA-Z\s]+$/;
      return regex.test(inputString);
    }
    function isUsernameValid(username) {
      const regex = /^[a-zA-Z0-9_]+$/;
      return regex.test(username);
    }
    const login = (obj) => {
        fetch(`${host}/api/login/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(obj),
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((responseData) => {
          if (responseData.token) {
            setUser(responseData.user)
            setAuthenticationMsg('Success')
          } else {
            setAuthenticationMsg('wrong username or password')
          }
        })
        .catch((error) => {
          console.log('Error:', error.message || 'An error occurred.');
          setAuthenticationMsg('internal server error')
        });
    };
    const signup = (obj) => {
      fetch(`${host}/api/signup/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        if (responseData.token) {
          setUser(responseData.user)
          setAuthenticationMsg('Success')
        } else {
          setAuthenticationMsg('username already taken')
        }
      })
      .catch((error) => {
        console.error('Error:', error.message || 'An error occurred.');
        setAuthenticationMsg('internal server error')
      });
    };
  return(
        <GennotateContext.Provider value={{ authentication, setAuthentication, seeLoginPassword, setSeeLoginPassword, seeSignUpPassword, setSeeSignUpPassword, seeSignUpConfirmPassword, setSeeSignUpConfirmPassword, login, user, authenticationMsg, setAuthenticationMsg, signup, hasOnlySpacesAndAlphabets, isUsernameValid }}>
            {props.children}
        </GennotateContext.Provider>
    )
}
export default GennotateState;