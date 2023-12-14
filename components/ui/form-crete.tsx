import { FormEvent, LegacyRef, useRef } from "react";
import classes from "./form-creaet.module.css";
import { Item } from "@/api/types";
import { useRouter } from "next/router";

function FormCreateContact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const router = useRouter()

  const submithandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      nameRef &&
      emailRef &&
      descriptionRef &&
      nameRef.current &&
      emailRef.current &&
      descriptionRef.current
    ) {
      const payload: Item = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        description: descriptionRef.current.value,
      };

      fetch("http://localhost:3000/api/items", {
        method: "POST",
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((json) => {
          router.replace(`/contacts/${json.id}`)

        });
    }
  };

  return (
    <form className={classes.form} onSubmit={submithandler}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input required type="text" id="name" ref={nameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="e-mail">E-mail</label>
        <input required type="email" id="e-mail" ref={emailRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea required id="description" ref={descriptionRef} />
      </div>
      <button type="submit" className={classes.btn}>
        Submit
      </button>
    </form>
  );
}

export default FormCreateContact;
