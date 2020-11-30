import * as Next from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { User } from '../models'
import { StatelessComponent } from 'react'
import { fetchUsers } from '../rest-api/github'
import { Table } from '../components/Body'

interface Props {
  user: User[]
}

const Home: Next.NextComponentType<Props> = (props) => {
  const { users }: any = props

  return (
    <div className={styles.container}>
      <p>Hello Next.Js</p>
      <Table users={users} />
      <Link href="/user-info">
        <a>Navigate to user info page</a>
      </Link>
    </div>
  )
}

Home.getInitialProps = async () => {
  const users = await fetchUsers();
  return {
    users,
  }
}

export default Home