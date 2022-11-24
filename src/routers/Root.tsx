import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Details from '../pages/Details'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'
import Navbar from './Navbar'
import './root.scss';


function Root() {
    return (
        <div className="mainContainer">
            {/* <Navbar /> */}
            <div className="contents">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route element={<Navbar />}>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/products/*" element={<Products />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/details" element={<Details />} />
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default Root