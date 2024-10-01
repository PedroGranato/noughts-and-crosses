import React, { useState } from 'react';
import './index.css';
import Lines from './components/ui/lines'
import { Button } from "@/components/ui/button";

function App() {

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-200">
        <h1 className='items-start text-4xl font-bold mt-6'>Jogo da Velha</h1> {/*Título*/}
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <Lines></Lines> {/*Tabuleiro*/}
      </div>
    </>
  );
}

export default App;
