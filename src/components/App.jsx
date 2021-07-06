import React from 'react';
import Header from "./Header"
import Footer from "./Footer"
import Introduction from './Introduction';
import Socials from "./Socials"

function App(){
    return (
        <div className="container">
            <div className="content-wrap">
                <Header/>
                <Introduction/>
                <Socials/>
            </div>
                <Footer/>
        </div>
    )
}

export default App;