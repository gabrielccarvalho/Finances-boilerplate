import { getUserInfo } from '@/api/user';
import { User } from '@/lib/types';
import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({
  user: {} as User,
  update: (() => {}) as React.Dispatch<React.SetStateAction<User>>,
})

export function UserProvider ({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({} as unknown as User)

  useEffect(() => {
    async function fetchUserInfo() {
      const info = await getUserInfo()
      
      setUser(info)

      console.log(info)
    }

    fetchUserInfo()
  }, [])

  return (
    <UserContext.Provider value={{ user, update: setUser }}>
      {children}
    </UserContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  const { user, update } = useContext(UserContext)

  return { user, update }
}