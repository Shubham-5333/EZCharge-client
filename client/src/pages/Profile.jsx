import React from 'react'
import useFetchUserData from '../hook/userData'

const Profile = ({userId}) => {
    const {userData,loading,error} = useFetchUserData(userId);

    if(loading) return <p>loading...</p>
    if(error) return <p>Error:{error}</p>

  return (
    <div>
      <h1>{userData.fullName}</h1>
      <h1>{userData.email}</h1>
    </div>
  )
}

export default Profile
