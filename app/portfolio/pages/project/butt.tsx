"use client";
import { useSearchParams } from 'next/navigation';


import React from 'react'

export default function Butt() {
   const usesearchparams= useSearchParams()
   console.log(usesearchparams.values);
  return <div>{usesearchparams}</div>;
}
