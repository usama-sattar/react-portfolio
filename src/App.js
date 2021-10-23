import React from "react"
import NavigationBar from "./components/Navbar";
import Banner from './components/Banner'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  return (
    <>
        <NavigationBar />
        <Banner />
        <About />
        <Skills/>
        <Portfolio />
        <Contact />
    </>
  );
}
