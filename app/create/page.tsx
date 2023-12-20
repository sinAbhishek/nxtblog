"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import { BlogDetails } from '@/types';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import { doc, setDoc } from "firebase/firestore";
import { auth } from '../firebase';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const page = () => {
  type Types = "Technology" | "Sports" | "Fashion" | "Travel" | "Food"
  const [value, setValue] = useState("");
  const time = new Date()
  const [data, setdata] = useState<BlogDetails>({
    title: "",
    description: value,
    time: time.getTime(),
    userimage: auth.currentUser?.photoURL,
    username: auth.currentUser?.displayName,
    blogid: uuidv4(),
    userid: auth.currentUser?.uid,
    type: ""
  })
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setdata((prev) => ({ ...prev, userimage: user.photoURL, username: user.displayName, userid: user.uid }))
      }
      else {
        console.log("nothing")
      }
    })
  }, [])

  var toolbarOptions: String[] = ["bold", "italic", "underline", "strike", "image"];

  const handlechange = (e: any) => {
    setValue(e)
    setdata((prev) => ({ ...prev, description: e }))
  }
  const titlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setdata((prev) => ({ ...prev, title: e.target.value }))
  }
  const change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setdata((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }
  const addData = async () => {
    const id: any = auth.currentUser?.uid
    try {
      const value = await setDoc(doc(db, "blogs", id), { [data.blogid]: data }, { merge: true });
      console.log("success")
    }
    catch (err) {
      console.log(err)
    }


  }
  return (
    <div>
      <input className=' bg-black text-white' onChange={titlechange} type="text" name="" id="" />
      <select onChange={change} name="" id="type">
        <option disabled selected value="">
          Type
        </option>
        <option>
          Technology
        </option>
        <option>
          Sports
        </option>
        <option>
          Food
        </option>
        <option>
          Fashion
        </option>
        <option>
          Travel
        </option>
      </select>
      <div className="z-10 w-screen ">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={handlechange}
          modules={{ toolbar: toolbarOptions }}
        />
        <button onClick={() => console.log(data)}>Check</button>
        <button onClick={() => addData()}>Check22</button>
      </div>

    </div>
  )
}

export default page