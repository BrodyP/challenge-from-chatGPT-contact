import { ItemId } from "@/api/types";
import classes from "./contact-item.module.css";

function ContactItem(props: ItemId) {
  return (
    <div className={classes.card}>
      <h1> Detail for ID : {props.id}</h1>
      <div className={classes.detail}>
        <h2>Name : {props.name}</h2>
        <h2>E-mail : {props.email}</h2>
        <h2>Description : {props.name}</h2>
      </div>
    </div>
  );
}

export default ContactItem;
