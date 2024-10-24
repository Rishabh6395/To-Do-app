"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask, {title, desc}])

    setTitle("")
    setDesc("")
  }

  // This code snippet defines a function `deleteHandler` that deletes a task from the `mainTask` array at the specified index `i`. It creates a copy of the `mainTask` array, removes the task at index `i` using `splice`, and then updates the `mainTask` state with the updated array.
  const deleteHandler = (i) =>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }

  let renderTask = <h2 className='text-2xl font-semibold'>No Task Available</h2>

  if(mainTask.length > 0){
    renderTask = mainTask.map((t,i)=>{
      return (
        <li key={i} className='flex items-center justify-between mb-5'>
          <div className='flex items-center justify-between mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold '>{t.title}</h5>
            <h6 className='text-lg font-medium'>{t.desc}</h6>
        </div>
        <button
        onClick={()=>{
          deleteHandler(i)
        }}
        className='bg-red-400 text-white rounded font-bold px-5 p-3'>Delete</button>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className='bg-black text-white text-2xl p-5 font-semibold text-center '>Rishabh's Todo List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className='text-2xl border-zinc-800 border-2 rounded-md m-5 px-4 py-2 '
        placeholder='Enter Title Here'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
      />
        <input type="text" className='text-2xl border-zinc-800 border-2 rounded-md m-5 px-4 py-2 '
        placeholder='Type Description Here'
        value={desc}
        onChange={(e)=>{
          setDesc(e.target.value)
        }}
      />
      <button className='bg-black text-white rounded-md px-5 py-3 text-2xl m-5'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-orange-100'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page
