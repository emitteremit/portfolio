import React, { useState } from 'react'
import { BiTrash, BiEdit } from 'react-icons/bi'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Todo = () => {
  const [tasks, setTasks] = useState([])
  const [taskName, setTaskName] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editIndex, setEditIndex] = useState('')

  const HandleTaskAdding = () => {
    if (isEditing) {
      const updatedTasks = [...tasks]
      updatedTasks[editIndex] = taskName
      setTasks(updatedTasks)
      setTaskName('')
      setIsEditing(false)
      setEditIndex('')
    } else {
      setTasks([...tasks, taskName])
      setTaskName('')
    }
  }

  const deleteBut = (po) => {
    const newList = tasks.filter((update, index) => index !== po)
    setTasks(newList)
    alert(`Item ${po + 1} is about to be deleted`)
  }

  const editBut = (po) => {
    setIsEditing(true)
    setEditIndex(po)
    setTaskName(tasks[po])
  }

  return (
    <>
      <Header />
      <div className='flex justify-center'>

        <div className='h-screen  w-[100%] max-w-[600px] flex flex-col justify-center items-center text-center sm:mx-[10px]' >
          <div className='flex flex-col gap-3 container  rounded-lg'>
            <div className='bg-pink-300 p-2 pb-[50px] rounded-lg p'>
              <p className='text-center text-[28px] font-bold capitalize mb-3'>todo-List</p>
              <div className='flex justify-center gap-[20px]'>
                <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder='input your task' className='px-1 py-2 rounded-sm outline-none' />
                <button className='bg-[#800080] text-white rounded-lg px-3 py-1 outline border border-white p-2 pl-5' onClick={HandleTaskAdding}>
                  {isEditing ? 'Update' : 'Submit'}
                </button>
              </div>
              <table className='w-full mt-4'>
                <thead>
                  <tr>
                    <th className='border border-[#A4193D] px-4 py-2'>Task</th>
                    <th className='border border-[#A4193D] px-4 py-2'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task, k) => (
                    <tr key={k} style={{ display: k === editIndex ? 'none' : 'table-row' }}>
                      <td className='border border-[#A4193D]  px-4 py-2 capitalize'>{task}</td>
                      <td className='border border-[#A4193D] px-4 py-2'>
                        <div className='flex gap-[20px]'>
                          <BiEdit onClick={() => editBut(k)} className='cursor-pointer' />
                          <BiTrash onClick={() => deleteBut(k)} className='cursor-pointer' />
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Todo