import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMdCloseCircle } from "react-icons/io";
export default function Blog() {
  const [taskbar,setTaskbar]=useState(false);
  const [task,setTask]=useState();
  const [date,setDate]=useState();
  const [time,setTime]=useState();
  const [items,setItems]=useState([
    {
      taskinput:'Morning',
      taskdate:'24/11/2002',
      tasktime:"12:00"
    },
  ]);
  const dataSubmit=(e)=>{
    e.preventDefault();
   setItems([...items,{taskinput:task,taskdate:date,tasktime:time}]);
    setTask("");
    setDate("");
    setTime("");
    toast.success('🦄 Data Added!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  const handleRemove= (id)=>{
    console.log(id);
    const updateItems=items.filter((elems,ind)=>{
        return ind!==id
    });
    setItems(updateItems);
  }
  return (
    <>
      <section className='bg-bgblog flex flex-col justify-center items-center h-[100vh] bg-no-repeat bg-cover'>
       <div className='sm:w-2/4  lg:w-1/4    bg-gray-300 p-5  rounded-lg'>
        <div className='flex text-3xl items-center justify-center font-normal'>
          <img src={process.env.PUBLIC_URL+"./dog.png"} alt="my-pic" />
          <div>Task Tracker</div>
        </div>
         <div className='mt-3 flex flex-col'>
          <button onClick={()=>{setTaskbar(!taskbar)}} className='w-full bg-amber-500 text-white font-medium py-1 rounded-md'>{ taskbar ? "Show Taskbar" : "Hide Taskbar" }</button>
       <form action="" onSubmit={dataSubmit}>
       <div className={`flex flex-col ${taskbar?'hidden':'static'} `}>
         <label className='p-1 text-lg font-medium ' htmlFor="task">Task:</label>
          <input className='p-1  active:border-red-300 focus:ring-amber-500 outline-none focus:border-red-300 ring-2 rounded-md w-full' type="text" placeholder='Enter Task' value={task} onChange={(e)=>{setTask( e.target.value)}} />
          <label className='p-1 text-lg font-medium ' htmlFor="task">Date:</label>
          <input className='p-1 active:border-red-300 focus:ring-amber-500 outline-none focus:border-red-300 ring-2 rounded-md w-full' type="date" placeholder='Enter Task' value={date} onChange={(e)=>{setDate(e.target.value)}}  />
          <label className='p-1 text-lg font-medium ' htmlFor="task">Time:</label>
          <input className='p-1 active:border-red-300 focus:ring-amber-500 outline-none focus:border-red-300 ring-2 rounded-md w-full' type="time" placeholder='Enter Task' value={time} onChange={(e)=>{setTime(e.target.value)}}  />
           <button className='p-1 bg-slate-600 text-white mt-3 w-20 mx-auto font-medium rounded-md active:bg-slate-800 outline-none '  >Save</button>
          </div>
       </form>
        
          <div className=' flex flex-col mt-3'>
         {
          items.map((val,i)=>{
           return(
            <ul key={i} className='bg-amber-500 p-1 m-1 text-white' >
              <div className='flex  justify-between items-center'>
              <div className='p-1' id={i}>
                <li>{val.taskinput}</li>
                <li>{val.taskdate}</li>
                <li>{val.tasktime}</li>
               </div>
               <IoMdCloseCircle className='text-red-800 text-xl' onClick={()=>{handleRemove(i)}}/>
              </div>
             </ul>
           )
          })
         }
          </div>
         </div>
       </div>
             
      </section>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    </>
  )
}
