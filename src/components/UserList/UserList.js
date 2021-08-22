import styles from "./UserList.module.css";
import Card from "../Card/Card";
const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => {
          return <li key={user.id}>{`${user.username} (${user.age})`}</li>;
        })}
      </ul>
    </Card>
  );
};
export default UserList;
