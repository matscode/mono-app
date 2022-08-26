import type { NextPage } from 'next'
import MonoLogo from '@/components/MonoLogo'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { destroyUserSession, updateUser } from '../store/userSlice'
import useAuth from '@/hooks/useAuth'
import { useDispatch } from '@/hooks/redux'

const Home: NextPage = () => {
  useAuth(true)

  const dispatch = useDispatch()

  const [linkAccount, setLinkAccount] = useState(false)

  return (
    <div className='d-flex vw-100 vh-100'>
      <aside className='col-2 p-4'>
        <div className='mb-5'>
          <MonoLogo isDark={false} width={'116px'} />
        </div>

        <nav className='nav flex-column side-menu'>
          <a className='nav-link active' href='#'>Dashboard</a>
          <a className='nav-link' href='#'>Expenses</a>
          <a className='nav-link' href='#'>Wallets</a>
          <a className='nav-link' href='#'>Summary</a>
          <a className='nav-link' href='#'>Accounts</a>
          <a className='nav-link' href='#'>Settings</a>
          <a className='nav-link' href='#' onClick={(e) => {
            e.preventDefault()
            dispatch(destroyUserSession())
          }}>Logout</a>
        </nav>
      </aside>

      <main
        className='col-10 bg-white p-4 d-flex justify-content-center align-items-center'>
        <section className='link-account-card text-center'>
          {!linkAccount ?
            (<div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src='padlock.svg' alt='' style={{ width: '60px' }}
                   className='mb-2' />
              <h3 className={'mb-3'}>Final Step</h3>
              <p className={'mb-5'}>Link your Bank Account in seconds</p>

              <button
                className='btn btn-light bg-white link-account-btn px-4'
                onClick={() => setLinkAccount(true)}
              >
                LINK NOW
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src='arrow-right.svg'
                  alt=''
                  style={{ width: '12px' }}
                  className='ms-1'
                />
              </button>
            </div>)
            :
            (<div>
              <div className='mb-3'>
                <input type='text' className='form-control'
                       placeholder='Account number' />
              </div>

              <div className='mb-3'>
                <input type='text' className='form-control'
                       placeholder='Bank name' />
              </div>

              <div className='mb-3'>
                <input type='text' className='form-control'
                       placeholder='Account name'
                />
              </div>

              <div className='d-flex justify-content-end'>
                <button
                  className='btn btn-light bg-white link-account-btn px-4'
                  onClick={() => setLinkAccount(false)}
                >
                  + LINK ACCOUNT
                </button>
              </div>
            </div>)}
        </section>
      </main>
    </div>
  )
}

export default Home
