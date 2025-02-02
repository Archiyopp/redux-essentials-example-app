import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { selectUserById } from '../users/usersSlice'
import { selectPostsByUser } from '../posts/postSlice'
import { useAppSelector } from '../../app/store'

export const UserPage = () => {
  const { userId } = useParams()

  const user = useAppSelector((state) => selectUserById(state, userId))

  const postsForUser = useAppSelector((state) =>
    selectPostsByUser(state, userId)
  )

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))

  return (
    <section>
      <h2>{user.name}</h2>

      <ul>{postTitles}</ul>
    </section>
  )
}
