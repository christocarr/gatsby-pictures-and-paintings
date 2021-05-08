import React from "react"
import Title from "../components/Title"

import profilePic from "../images/profile_pic.jpg"

import * as styles from "../css/about.module.css"

const About = () => (
  <section>
    <div className="page-title">
      <Title title="About Us" />
    </div>
    <div>
      <p>
        The artworks on offer in our gallery represents a variety of genres,
        executed in oils, acrylics and mixed media. All the paintings featured
        on this website are original and are reasonably priced.
      </p>

      <p>
        Richard Carr's gallery showcases landscapes, fantasy art, surreal art
        and abstract art.
      </p>
      <div className={styles.profileBlock}>
        <img src={profilePic} alt="Richard Carr's profile" />
        <p>
          Richard studied art in the seventies at the Pretoria School of Art in
          South Africa. His major subjects were painting and sculpture. While
          busy with his fine art studies he also qualified as an art teacher.
        </p>

        <p>
          After leaving art school he taught in Pretoria for two years before
          leaving the classroom to become a graphic artist and photographer -
          subjects he had studied at art school. He never stopped painting and
          drawing however and, when he took an early retirement, it was the
          natural thing for him to decide to embark on a career as an artist.
        </p>

        <p>
          Richard left South Africa in 2009 to settle in West Yorkshire. He now
          lives and works in Haworth.
        </p>

        <p>
          Whilst in South Africa Richard took part in many group exhibitions in
          Johannesburg, Pretoria and Cape Town. He is presently concentrating on
          abstract painting and loves exploring colour, form and texture.
        </p>
      </div>
    </div>
  </section>
)

export default About
