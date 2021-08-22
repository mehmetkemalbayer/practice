import React, { useState } from "react";

import AddUser from "./components/AddUser/AddUser";
import ErrorModal from "./components/ErrorModal/ErrorModal";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();
  const newUsersAdditionHandler = (user) => {
    setUsers((prevUsers) => [user, ...prevUsers]);
  };
  const errorHandler = (ex) => {
    setError(ex);
  };
  const closeErrorHandler = () => {
    setError(undefined);
  };
  return (
    <div>
      {error && <ErrorModal error={error} onClose={closeErrorHandler} />}
      <AddUser
        onNewUserAdded={newUsersAdditionHandler}
        onError={errorHandler}
      ></AddUser>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
