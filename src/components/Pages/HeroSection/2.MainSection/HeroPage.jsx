  import React from 'react'
  import Navbar from '../1.NavBar/Navbar'
  import styles from "../2.MainSection/HeroPage.module.scss"
 
  const HeroPage = () => {
    
    return (
      <div className = {styles.container}>
        <Navbar />
        <section >
          <h2>Based in Cebu, at Mandaue Drifting Center since 2021</h2>
          <h1>Discover the Art of Drifting: Learn, train and experience the thrill</h1>
          <button>BOOK SESSION</button>
        </section>
      </div>
    )
  }

  export default HeroPage