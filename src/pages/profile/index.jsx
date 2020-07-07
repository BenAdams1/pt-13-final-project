import React from 'react'
import styles from './Profile.module.scss'

const Profile = () => {
const profileData = 
{ 
  name: 'Ben Adams',
  email: 'ben@email.com', 
  cohort: 1, 
  role: 'Front-end Developer', 
  company: 'Genius Plaza', 
  socialMedia: 'https://linkedIn.com/en/BenAdams',
  imageSrc: 'https://via.placeholder.com/150'
}

  return (
    <div className={styles.profileContainer}>
      <img className={styles.circleImage}  src={profileData.imageSrc} alt="profile image"/>  
      <section>
        <dl>
          <dt>Name</dt>
          <dd>
            <p>{profileData.name}</p>
          </dd>

          <dt>Cohort</dt>
          <dd>
            <p>{profileData.cohort}</p>
          </dd>

          <dt>Email</dt>
          <dd>
            <p>{profileData.email}</p>
          </dd>

          <dt>Role</dt>
          <dd>
            <p>{profileData.role}</p>
          </dd>

          <dt>Company</dt>
          <dd>
            <p>{profileData.company}</p>
          </dd>

          <dt>Social Media</dt>
          <dd>
            <p>{profileData.socialMedia}</p>
          </dd>
        </dl>  
          
      </section>
    </div>
  )
}

export default Profile
