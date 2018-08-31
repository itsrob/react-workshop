import React from 'react'
import UserList from '../UserList'

const users = [
  {
    name: 'Jevgenija',
    preferredName: 'Zhenya',
    email: 'jevgenija.zigisova@n26.com'
  },
  { name: 'Hugo', email: 'hugo.giraudel@n26.com',  countryCode: 'fr'},
  { name: 'Robert', email: 'mail@robert-philipps.com', countryCode: 'de'}
]

const UserIndex = () => (
  <div>
    <h2>Users:</h2>
    <UserList users={users} />
  </div>
)

export default UserIndex
