import React from 'react'
import northernlights from '../Images/northernlights.avif';
import oldtown from '../Images/oldtown.avif';
import thedarkhedges from '../Images/darkhedges.avif'
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <>
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <div className='absolute top-0 left-0 w-1/3 h-full bg-cover bg-center bg-linear-to-r from-black/70 to-transparent' style={{backgroundImage:`url(${northernlights})`}}></div>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-linear-to-r from-black/70 to-transparent"></div>

      <div className='absolute top-0 left-1/3 w-1/3 h-full bg-cover bg-center bg-linear-to-r from-black/70 to-transparent' style={{backgroundImage:`url(${oldtown})`}}></div>
      <div className="absolute top-0 left-1/3 w-1/3 h-full bg-linear-to-r from-black/70 to-transparent"></div>



       <div className='absolute top-0 left-2/3 w-1/3 h-full bg-cover bg-center bg-linear-to-r from-black/70 to-transparent' style={{backgroundImage:`url(${thedarkhedges})`}}></div>

       <div className="absolute top-0 left-2/3 w-1/3 h-full bg-linear-to-r from-black/70 to-transparent"></div>



       <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Plan Your Dream Trip</h1>
        <p className="text-lg md:text-2xl mb-6">Discover amazing places with ease</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded">
          <Link to="/search">
           Get Started
          </Link>
        </button>
      </div>

    </section>
    
    </>
  )
}

export default Hero


