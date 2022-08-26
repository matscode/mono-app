import { useSelector } from '@/hooks/redux'
import { RootState } from '../store'

export default function useAuth(){
  const user = useSelector((state: RootState) => state.user)
  const loggedIn = !!Object.keys(user).length;

  return {loggedIn, user}
}