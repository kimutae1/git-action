import React, { useState, useReducer, createContext } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import MainPage from "./Main";
import GroupCreatePage from "./groupCreate";
import Header from "../../components/users/Header";
import { initalState, userIndexReducer } from "../../reducer/users";

const StyledUserPage = styled.div``;

export const UserContext = createContext();

const UserPage = () => {
  const [userInfo, setUserInfo] = useState({
    userEmail: "",
    userName: "",
    userAgeRange: -1,
    userGender: "",
    profileImage: ""
  });

  const [userIndexState, userIndexDispatch] = useReducer(
    userIndexReducer,
    initalState
  );

  return (
    <UserContext.Provider
      value={{ userInfo, setUserInfo, userIndexState, userIndexDispatch }}
    >
      <StyledUserPage>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/group/create" component={GroupCreatePage} />
        </Switch>
      </StyledUserPage>
    </UserContext.Provider>
  );
};

export default UserPage;
