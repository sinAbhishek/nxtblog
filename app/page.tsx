"use client"

import Image from 'next/image'
import { doc, onSnapshot, query, collection } from "firebase/firestore";
import { db } from './firebase';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
export default function Home() {


  const q = query(collection(db, "blogs"))

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const array: any = []
    querySnapshot.forEach((doc) => {
      Object.values(doc.data()).forEach((c) => array.push(c))

      // array.push(doc.data());
      console.log(doc.data());
      console.log(array)
    });

  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


    </main>
  )
}
