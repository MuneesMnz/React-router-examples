import React from 'react';
import { useParams } from 'react-router-dom';


const UserDetailes = () => {

    // const params=useParams() 
    // const id=params.id

    const {id}=useParams()
  return (
    <div>
      <h3>Detailes about User  {id}</h3>
    </div>
  )
}

export default UserDetailes
