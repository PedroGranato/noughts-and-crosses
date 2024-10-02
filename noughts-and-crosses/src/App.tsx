import React, { useState } from 'react';
import './index.css';
import Lines from './components/lines'

function App() {

  return (
  <>
    <div className='flex flex-col items-center justify-center bg-gray-200 minw-screen min-h-screen'>
      <div className="flex items-center justify text-start bg-gray-200">
        <h1 className=' text-4xl font-bold mb-48'>Jogo da Velha</h1> {/*Título*/}
      </div>

      <div className="flex items-center justify-center bg-gray-200">
        <Lines></Lines> {/*Tabuleiro*/}
      </div>

      <div className='flex items-center mt-24 justify-center bg-gray-200'>
        <button className='rounded-full p-3 font-bold  text-2xl bg-cyan-500  mr-12 shadow-lg shadow-cyan-600/50'>1 Player</button>
        <button className='rounded-full p-3 font-bold  text-2xl bg-red-500   ml-12 shadow-lg shadow-red-600/50 '>2 Player</button>
        </div>
    </div>
  </>
  );
}

export default App;
