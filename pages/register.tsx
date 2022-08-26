import type { NextPage } from 'next'
import MonoLogo from '../components/MonoLogo'
import Link from 'next/link'
import { useState } from 'react'
import Axios from '@/services/Axios'
import { useRouter } from 'next/router'
import { SimpleValidationError, ValidationError } from '@/types/index'
import ErrorMessage from '@/components/ErrorMessage'

const Home: NextPage = () => {
  const router = useRouter()
  const [errors, setErrors] = useState<SimpleValidationError>({})

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const formIsValid = firstName && lastName && email && password

  function register() {
    Axios.post('/v1/user/register',
      { first_name: firstName, last_name: lastName, email, password }).
      then(({ data }) => {
        router.push('/')
      }).
      catch((r) => {
        if (r.response.status === 422) {
          setErrors(r.response.data.errors.reduce(
            (errors: ValidationError[], error: ValidationError) => ({
              ...errors,
              [error.field]: error.message,
            }), {}))
        }

        alert('Registration not successful!')
      })
  }

  return (
    <>
      <main className='card card-body auth-card'>
        <MonoLogo />

        <p className='my-4 text-center'>
          Track all your bank expenses in one place
        </p>

        <section>
          <form action=''>
            <div className='d-flex flex-wrap flex-md-nowrap'>
              <div className='me-md-3 mb-3'>
                <input type='text' className='form-control'
                       placeholder='First name'
                       value={firstName}
                       required={true}
                       onChange={(e) => setFirstName(e.target.value)} />
                <ErrorMessage message={errors.first_name} />
              </div>

              <div className='mb-3'>
                <input type='text' className='form-control'
                       placeholder='Last name'
                       value={lastName}
                       required={true}
                       onChange={(e) => setLastName(e.target.value)}
                />
                <ErrorMessage message={errors.last_name} />
              </div>
            </div>

            <div className='mb-3'>
              <input type='text' className='form-control' placeholder='Email'
                     value={email}
                     required={true}
                     onChange={(e) => setEmail(e.target.value)} />
              <ErrorMessage message={errors.email} />
            </div>

            <div className='mb-4'>
              <input type='password' className='form-control'
                     placeholder='Password'
                     value={password}
                     required={true}
                     onChange={(e) => setPassword(e.target.value)} />
              <ErrorMessage message={errors.password} />
            </div>

            <div className='mb-4'>
              <button type='button'
                      className='btn btn-primary default-btn w-100'
                      onClick={register}
                      disabled={!formIsValid}
              >
                GET STARTED
              </button>
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
