import styles from "@styles/Contacts.module.css";
import useInput from "@utils/useInput";
import { FormEvent } from "react";

export default function Contacts() {
  const name = useInput("");
  const email = useInput("");
  const message = useInput("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(
      JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      })
    );

    name.reset();
    email.reset();
    message.reset();
  };

  return (
    <main className={`${styles.Contacts} container`}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Name:</h3>
          <input className={styles.input} type="text" {...name} required />
        </div>
        <div>
          <h3>Email:</h3>
          <input className={styles.input} type="email" {...email} required />
        </div>
        <div>
          <h3>Message:</h3>
          <textarea className={styles.textarea} {...message} required />
        </div>
        <button className={styles.button} type="submit">
          Send
        </button>
      </form>
    </main>
  );
}
