import React from 'react';
import './App.scss';
import HeaderContainer from './components/Header/headerContainer';
import ReleaseListContainer from './components/ReleaseListContainer/ReleaseListContainer';
import Footer from './components/Footer/footerContainer';

function App() {
  return (
    <div>
        <HeaderContainer/>
        <main>
          <ReleaseListContainer/>
        </main>
    <Footer/>
    </div>
  );
}

export default App;
