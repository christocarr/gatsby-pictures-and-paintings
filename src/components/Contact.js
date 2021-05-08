import React from "react"
import Title from "./Title"
import * as styles from "../css/contact.module.css"

const Contact = () => {
  return (
    <section>
      <div className="page-title">
        <Title title="Contact Us" />
      </div>
      <div className={styles.center}>
        <form
          className={styles.form}
          action="https://formspree.io/chris.carr.dev@gmail.com"
          method="POST"
        >
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              type="email"
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="A Message"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Send Message"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
