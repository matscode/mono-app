import type { NextPage } from 'next'
import Head from 'next/head'
import MonoLogo from '../components/MonoLogo'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mono App</title>
      </Head>

      <main className='card card-body auth-card'>
        <MonoLogo />

        <p className='my-4 text-center'>
          Securely login to your account
        </p>

        <section>
          <form action=''>
            <div className='mb-3'>
              <input type='text' className='form-control' placeholder='Email' />
            </div>

            <div className='mb-4'>
              <input type='password' className='form-control'
                     placeholder='Password' />
            </div>

            <div className='d-flex mb-3'>
              <div>
                <label htmlFor=''>
                  <input type='checkbox' className='me-2' />
                  Remember me
                </label>
              </div>

              <div className={'ms-auto'}>
                I forgot my password
              </div>
            </div>

            <div className='mb-4'>
              <input type='button'
                     className='btn btn-primary default-btn w-100'
                     value='LOG IN' />
            </div>

            <div className='text-center'>
              <Link href='/register'>
                <a>
                  Don’t have an account? <span
                  className={'sign-up-link'}>Sign up</span>
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
