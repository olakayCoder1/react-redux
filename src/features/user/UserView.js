import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {fetchUsers } from './userSlice'

function UserView() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  
  return (
    <div>
      <h2>List opf users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error : {user.error}</div> : null }
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user, index)=> {
            return (
              <li key={index}>
                {user.name} {user.email}
              </li>
            )
          })}
        </ul>
      ) : null }
    </div>
  )
}

export default UserView
