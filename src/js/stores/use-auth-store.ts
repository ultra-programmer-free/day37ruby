import { create } from 'zustand'
import { persist } from 'zustand/middleware';

type AuthState ={
  isLoggedIn: boolean;
  isLoginCheckDone: boolean;
  userName: string;
  login: (_userName: string) => void;
  logout: () => void;
}

 export const useAuthStore = create<AuthState>()
 (persist(
    (set) => ({
    isLoggedIn: false,
    isLoginCheckDone: false,
    userName: "",
    login: (_userName) => {
      if  (_userName) {
        set({ isLoggedIn: true, userName: _userName   })
      }
    },
    logout: () => {
        set({ isLoggedIn: false, userName: ""})
    }
}),{
    name: "auth-state",
    partialize: (state) => ({isLoggedIn: state.isLoggedIn, userName: state.userName,
    }),
    
    onRehydrateStorage: () => {
        return (state, error) => {
          if (error) {
            console.log('an error happened during hydration', error)
          } else {
           if(state){
            state.isLoginCheckDone = true;
           }
          }
        }
      },
},
),
);
