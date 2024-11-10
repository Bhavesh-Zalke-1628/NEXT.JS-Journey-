import Image from "next/image";
import fs from 'fs/promises'
export default function Home() {

  const submitAction = async (e) => {
    "use server"

    console.log(e.get('name'), e.get('add'))
    fs.writeFile("bhavesh.txt", "i am good")
  }
  return (

    <div className=" w-2/3 mx-auto my-5" >
      <form action={submitAction}>
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
