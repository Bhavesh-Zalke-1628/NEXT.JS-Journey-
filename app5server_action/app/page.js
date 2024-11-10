"use client"

import { useRef } from "react";
import { submitAction } from "./actions/form";
export default function Home() {

  const ref = useRef()
  return (
    <div className=" w-2/3 mx-auto my-5" >
      <form ref={ref} action={(e) => { submitAction(e); ref.current.reset() }}>
        <div >
          <label htmlFor="name">name</label>
          <input
            name="name"
            id="name"
            className=" text-black "
            type="text" />
        </div>
        <div>
          <label htmlFor="add">address</label>
          <input
            name="add"
            id="add"
            className=" text-black "
            type="text" />
        </div>
        <button className="  border border-2 px-2 text-white" type="submit">submit</button>
      </form>
    </div>
  );
}
