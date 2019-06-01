import React from 'react';

import HeaderContainer from './components/Header/headerContainer';
import ReleaseListContainer from './components/releaseList/releaseListContainer';
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
