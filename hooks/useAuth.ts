import { useSelector } from '@/hooks/redux'
import { RootState } from '../store'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function useAuth(forGuest = false){
  const router = useRouter()

  const user = useSelector((state: RootState) => state.user)
  const loggedIn = !!Object.keys(user).length;

  useEffect(() => {
    if(loggedIn && !forGuest) router.push('/dashboard')
    if(!loggedIn && forGuest) router.push('/')
  }, [loggedIn])


  return {loggedIn, user}
}