import styles from "./AddUser.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { useState } from "react";
const AddUser = (props) => {
  const initialState = { username: "", age: "" };
  const [userInfo, setUserInfo] = useState(initialState);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userInfo.username.trim().length === 0) {
      props.onError({
        title: "Invalid username",
        message: "Username can not be empty",
      });
      return;
    }
    if (userInfo.age.trim().length === 0) {
      props.onError({
        title: "Invalid age",
        message: "Age can not be empty",
      });
      return;
    }
    if (+userInfo.age < 1) {
      props.onError({
        title: "Invalid age",
        message: "Age must be bigger than 0",
      });
      return;
    }
    props.onNewUserAdded({ ...userInfo, id: Math.random().toString() });
    setUserInfo(initialState);
  };
  const usernameChangeHandler = (event) => {
    setUserInfo((prevUserInfo) => {
      return { ...prevUserInfo, username: event.target.value };
    });
  };
  const ageChangeHandler = (event) => {
    setUserInfo((prevUserInfo) => {
      return { ...prevUserInfo, age: event.target.value };
    });
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={userInfo.username}
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">Your age (years)</label>
        <input
          id="age"
          type="number"
          step="1"
          value={userInfo.age}
          onChange={ageChangeHandler}
        ></input>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};
export default AddUser;
