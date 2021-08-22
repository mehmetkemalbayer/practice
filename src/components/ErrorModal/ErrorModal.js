import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};
const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.error.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.error.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onClose}>Close</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay error={props.error} onClose={props.onClose} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};
export default ErrorModal;
