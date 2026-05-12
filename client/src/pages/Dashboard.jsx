import { FilePenLineIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloud, UploadCloudIcon, XIcon } from 'lucide-react'
import React, {useEffect, useState} from 'react'
import { dummyResumeData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const colors = ["#9333ea","#d97706","#dc2626","#0284c7","#16a34a"]
  const [allResumes, setAllResumes] = useState([])
  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [title, setTitle] = useState('')
  const [resume, setResume] = useState(null)
  const [editResumeId, setEditResumeId] = useState('')

  const navigate = useNavigate()
  const loadAllResumes = async () => {
    setAllResumes(dummyResumeData)
  }
  const createResume = async (event) => {
    event.preventDefault()
    setShowCreateResume(false)
    navigate('/app/builder/res123')
  }
  const uploadResume = async (event) => {
    event.preventDefault()
    setShowUploadResume(false)
    navigate('/app/builder/res123')
  }
  const editTitle = async (event) => {
    event.preventDefault()
  }
  const deleteResume = async (resumeId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this resume?")
    if(confirmDelete){
      setAllResumes(prev => prev.filter(resume => resume._id !== resumeId))
    }
  }
  useEffect(() => {
    loadAllResumes()
  },[])
  
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent hidden sm:block'>Welcome to your dashboard!</p>
        <div className='flex gap-4'>
          <button onClick={() => setShowCreateResume(true)} className='hidden md:flex bg-gray-900 hover:bg-gray-800 text-white p-4 rounded-md aspect-square font-medium transition flex-col items-center justify-center'>
            <PlusIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-full'/>
            <p className='text-sm group-hover:text-green-600 transition-all duration-300 mt-2'>Create Resume</p>
          </button>
          <button onClick={() => setShowUploadResume(true)} className='hidden md:flex bg-gray-900 hover:bg-gray-800 text-white p-4 rounded-md aspect-square font-medium transition flex-col items-center justify-center'>
            <UploadCloudIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-full'/>
            <p className='text-sm group-hover:text-green-600 transition-all duration-300 mt-2'>Upload Resume</p>
          </button>
        </div>
        <hr className='border-slate-300 my-6 sm:w-[305px]' />
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4 ">
          {allResumes.map((resume, index) => {
            const baseColor = colors[index % colors.length];
            return (
              <button onClick={() => navigate(`/app/builder/${resume._id}`)} key={index} className='relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer' style={{background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`, bordercolor: baseColor+'40'}}>
                <FilePenLineIcon className='size-7 group-hover:scale-105 transition-all' style={{color: baseColor}} />
                <p className='text-sm font-medium group-hover:scale-105 transition-all px-2 text-center' style={{color: baseColor}}>{resume.title}</p>
                <p className='absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center' style={{color: baseColor+'90'}}>
                  updated on {new Date(resume.updatedAt).toLocaleDateString()}
                </p>
                <div onClick={(e) => e.stopPropagation()} className='absolute top-1 right-1 group-hover:flex items-center hidden'>
                  <TrashIcon  onClick={() => deleteResume(resume._id)} className='size-7 p-1.5 text-slate-700 hover:bg-white/50 rounded transition-colors' />
                  <PencilIcon onClick={() => {setEditResumeId(resume._id); setTitle(resume.title)}} className='size-7 p-1.5 text-slate-700 hover:bg-white/50 rounded transition-colors' />
                </div>
              </button>
            )
          })}
        </div>
        <div>
          {
            showCreateResume && (
              <form onSubmit={createResume} onClick={() => setShowCreateResume(false)} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
                <div onClick={e => e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
                  <h2 className='text-2xl font-medium mb-4'>Create New Resume</h2>
                  <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Resume Title' className='w-full p-3 rounded-md mb-4 border' />
                  <button className='px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition'>Create</button>
                  <XIcon onClick={() => {setShowCreateResume(false); setTitle('')}} className='size-6 p-1.5 text-slate-700 hover:bg-white/50 rounded transition-colors absolute top-2 right-2 cursor-pointer' />
                </div>
              </form>
            )
          }
          {
            showUploadResume && (
              <form onSubmit={uploadResume} onClick={() => setShowUploadResume(false)} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
                <div onClick={e => e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
                  <h2 className='text-2xl font-medium mb-4'>Upload Resume</h2>
                  <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Resume Title' className='w-full p-3 rounded-md mb-4 border' />
                  <div>
                    <label htmlFor="resume-input" className='block text-sm font-medium text-slate-700 mb-2'>
                      Choose a file
                      <div className='flex flex-col items-center justify-center border gap-2 text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-green-500 hover:text-green-600 transition-colors cursor-pointer'>
                        {resume ? 
                        (<p className='text-green-700'>{resume.name}</p>) : 
                        (<>
                          <UploadCloud className='size-14 inline-block mb-1 text-slate-400' />
                          <p>upload your resume</p>
                        </>)}
                      </div>
                    </label>
                    <input onChange={(e) => setResume(e.target.files[0])} id='resume-input' type="file" accept=".pdf" className='hidden' />
                  </div>
                  <button className='px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition'>Upload</button>
                  <XIcon onClick={() => {setShowUploadResume(false); setTitle('')}} className='size-6 p-1.5 text-slate-700 hover:bg-white/50 rounded transition-colors absolute top-2 right-2 cursor-pointer' />
                </div>
              </form>
            )
          }
          {
            editResumeId && (
              <form onSubmit={editTitle} onClick={() => setEditResumeId('')} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
                <div onClick={e => e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
                  <h2 className='text-2xl font-medium mb-4'>Edit Resume Title</h2>
                  <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Resume Title' className='w-full p-3 rounded-md mb-4 border' />
                  <button className='px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition'>Update</button>
                  <XIcon onClick={() => {setEditResumeId(''); setTitle('')}} className='size-6 p-1.5 text-slate-700 hover:bg-white/50 rounded transition-colors absolute top-2 right-2 cursor-pointer' />
                </div>
              </form>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard
