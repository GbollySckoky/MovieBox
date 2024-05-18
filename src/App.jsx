import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { auth } from './firebase'
import { useDispatch} from 'react-redux'
import { login, logout } from './features/User/UserSlice'
import HomePage from './pages/Home/HomePage'
import Security from './pages/Security/Security'
import Settings from './pages/Settings/Settings'

const App = () => {
  const [user, setUser] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        );
        setUser(userAuth);
      } else {
        dispatch(logout());
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div className='app'>
      <BrowserRouter >
        <Routes>
          {!user ? (
            <Route path='' element={<Security />} />
          ) : (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path='/profile' element={< Settings user={user} /> }/>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
