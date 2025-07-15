import './App.css'
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

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


//special code here
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

function App() {

  const [name, setName] = useState()
  useEffect(() => {
    async function testFirestore() {
      const docRef = doc(db, "AppCollection", "AppDocument");
      const docSnap = await getDoc(docRef);

      await updateDoc(docRef, {
      age: "78", 
      name: "mat Traboslsi++"
      })

      if(docSnap.exists()){
        setName(docSnap.data().name)
      } else {
        console.log("no such document!")
      }
    }
    testFirestore();
  }, []);

  return (
    <Router>
      <div className="back__color"></div>
      <Header />
      <NewsWrap />
        
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/mission' element={<MissionPage />} />
          <Route path='/members' element={<MembersPage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/electives' element={<ElectivesPage />} />
          <Route path='/conference' element={<ConferencePage />} />
          <Route path="*" element={<h2>404 - Page {name}Not Found</h2>} />
        </Routes>
        
      <Footer />
    </Router>
  )
}

export default App
