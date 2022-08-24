import type { NextPage } from 'next'
import Head from 'next/head'
import MonoLogo from '../components/MonoLogo'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='d-flex'>
      <aside className='col-3'>
        <MonoLogo />

      </aside>
      <main className='col-9'>

      </main>
    </div>
  )
}

export default Home
