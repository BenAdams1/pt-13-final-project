import React from 'react'
import styles from './Profile.module.scss'

const Profile = () => {
const profileData = 
{ 
  name: 'Ben Adams',
  email: 'ben@email', 
  cohort: 1, 
  role: 'Front-end', 
  company: 'Genius Plaza', 
  socialMedia: 'https://linkedin.com/en/BenAdams',
  imageSrc: 'https://via.placeholder.com/150'
}

  return (
    <div className={styles.profileContainer}>
      <img className={styles.circleImage}  src={profileData.imageSrc} alt="profile image"/>  
      <h3>{profileData.name}</h3>
      <p>{profileData.cohort}</p>
      <p>{profileData.email}</p>
      <p>{profileData.role}</p>
      <p>{profileData.company}</p>
      <p>{profileData.socialMedia}</p>
    </div>
  )
}

export default Profile
