import './App.css'
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer'; 
import Header from './components/Header/Header';
import NewsWrap from './components/NewsWrap/NewsWrap';
import HomePage from './pages/HomePage/HomePage';
import MissionPage from './pages/MissionPage/MissionPage'
import MembersPage from './pages/MembersPage/MembersPage';
import NewsPage from './pages/NewsPage/NewsPage';
import ElectivesPage from './pages/Electives/ElectivesPage';
import ConferencePage from './pages/Conference/ConferencePage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

//special code here

function App() {


  const [email, setEmail] = useState('');
  const [passowrd, setPassword] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // check the user's authentication state when the app loads
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
      if(currentUser){
        //user is signed in
        setUser(currentUser);
      }else{
        // user is signed out
        setUser(null);
      }
    })

    return() => unsubscribe();
  })

  const signUp =() => {
    createUserWithEmailAndPassword(auth, email, passowrd)
    .then(userCredential => {
      setUser(userCredential.user);
      console.log('user signed up:', userCredential.user);
    })
    .catch(error => {
      console.error('Error signing up: ', error);
    });
  }

  const signIn =() => {
    signInWithEmailAndPassword(auth, email, passowrd)
    .then(userCredential => {
      setUser(userCredential.user);
      console.log('user signed IN:', userCredential.user);
    })
    .catch(error => {
      console.error('Error signing in: ', error);
    });
  }

  const logOut = () => {
    signOut(auth)
    .then(() => {
      setUser(null);
      console.log('User signed out');
    })
    .catch(error =>{
      console.error('Error signing out:', error);
    });
  }


  return (
    <>
      <p>Firestore Authientication</p>

      <div>

        {
          !user && (
            <>
              <input type="text" placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)} />
              <input type="password" placeholder='Passowrd' value={passowrd} onChange={(event) => setPassword(event.target.value)}/>
              <button onClick={signUp}>Sign Up</button>
              <button onClick={signIn}>Sign IN</button>
            </>
          )
        }
        
      </div>
      {
        user && (
          <div>
            <p>Logged in as: {user.email}</p>
            <button onClick={logOut}>Sign Out</button>
          </div>
        )
      }
    </>

    // <Router>
    //   <div className="back__color"></div>
    //   <Header />
    //   <NewsWrap />
    //     <Routes>
    //       <Route path='/' element={<HomePage />} />
    //       <Route path='/mission' element={<MissionPage />} />
    //       <Route path='/members' element={<MembersPage />} />
    //       <Route path='/news' element={<NewsPage />} />
    //       <Route path='/electives' element={<ElectivesPage />} />
    //       <Route path='/conference' element={<ConferencePage />} />
    //       <Route path="*" element={<h2>404 - Page {name}Not Found</h2>} />
    //     </Routes>
        
    //   <Footer />
    // </Router>
  )
}

export default App
