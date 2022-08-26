import { useDispatch, useSelector } from '@/hooks/redux'
import { RootState } from '../store'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Axios from '@/services/Axios'
import { updateUser } from '../store/userSlice'
import { IUser } from '@/types/index'

export default function useAuth(forGuest = false) {
  const router = useRouter()
  const dispatch = useDispatch()

  const user = useSelector((state: RootState) => state.user)
  let loggedIn = !!Object.keys(user).length

  async function bootstrap(): Promise<void> {
    const token = localStorage.getItem('token')
    if (!loggedIn && token) {
      Axios.prototype.setAuthorization(token)
      const user = (await Axios.get('/v1/user')) as IUser

      dispatch(updateUser(user))
      loggedIn = true
    }

    if (loggedIn && !forGuest) await router.push('/dashboard')
    if (!loggedIn && forGuest) await router.push('/')
  }

  useEffect(() => {
    bootstrap()
  }, [loggedIn])

  return { loggedIn, user }
}