import type { NextPage } from 'next'
import Head from 'next/head'
import MonoLogo from '../components/MonoLogo'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <main className='card card-body auth-card'>
        <MonoLogo />

        <p className='my-4 text-center'>
          Track all your bank expenses in one place
        </p>

        <section>
          <form action=''>
            <div className='d-flex mb-3'>
              <input type='text' className='form-control me-3'
                     placeholder='First name' />

              <input type='text' className='form-control'
                     placeholder='Last name' />
            </div>

            <div className='mb-3'>
              <input type='text' className='form-control' placeholder='Email' />
            </div>

            <div className='mb-4'>
              <input type='password' className='form-control'
                     placeholder='Password' />
            </div>

            <div className='mb-4'>
              <input type='button'
                     className='btn btn-primary default-btn w-100'
                     value='GET STARTED' />
            </div>

            <div className='text-center'>
              <Link href='/'>
                <a>
                  Already have an account? <span
                  className={'sign-up-link'}>Sign in</span>
                </a>
              </Link>
            </div>

          </form>
        </section>
      </main>
    </>
  )
}

export default Home
