import React from 'react'
import styles from "../AboutUsSection/AboutUsPage.module.scss"
import aboutUs from "../../../img/aboutUs.svg"

const AboutUsPage = () => {
  return (
    <section className={styles.container}>
        <div className={styles.innerWrapper}>
          <div className={styles.left}>
            <h1>About Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam sapien non felis bibendum, eget ultrices nulla sollicitudin. Fusce eget dui eget urna porttitor malesuada. Praesent ut tincidunt tellus. Duis eget tincidunt tellus. Duis ornare egestas odio ut placerat. Nunc cursus leo ligula, vitae efficitur justo mattis non. Duis feugiat tincidunt elit, vel bibendum lacus sodales a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam sapien non felis bibendum, eget ultrices nulla sollicitudin. Fusce eget dui eget urna porttitor malesuada. Praesent ut tincidunt tellus. Duis eget tincidunt tellus. Duis ornare egestas odio ut placerat. Nunc cursus leo ligula, vitae efficitur justo mattis non. Duis feugiat tincidunt elit, vel bibendum lacus sodales a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
          </div>
          <div className={styles.right}>
              <img src={aboutUs} alt="image" />
          </div>
        </div>
    </section>
  )
}

export default AboutUsPage