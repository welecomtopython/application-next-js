import Link from 'next/link'
import React from 'react'
import Nav from './components/Nav/page';
import Header from './components/header/page';
import MyWork from './components/MyWork/page';
import WhCanDo from './components/WhatIcoaDo/page';
import Foder from './components/foder/page';
import Forms from './components/forms/Forms';
enum Project{
  Pr="python",
  Js="javaScript"
}
function Portfolio() {
  return (
    <div>
      <div className="flex flex-col min-h-[100dvh]">
          {/*  1 ///////////////////// */}
        <Nav/>
        <main className="flex-1">
          {/*  2 ///////////////////// */}
         <Header/>

          {/*  3 ///////////////////// */}
          <MyWork/>
          {/*  4 ///////////////////// */}
        
          <WhCanDo/>
          {/*  5 ///////////////////// */}

          <Foder/>
          {/*  6 ///////////////////// */}

          <Forms/>
 
        </main>

      </div>
    </div>
  );
}

export default Portfolio
