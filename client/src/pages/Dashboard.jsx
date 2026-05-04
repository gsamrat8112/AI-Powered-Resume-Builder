import { PlusIcon, UploadCloudIcon } from 'lucide-react'
import React, {useEffect} from 'react'


const Dashboard = () => {
  const colors = ["#9333ea","#d97706","#dc2626","#0284c7","#16a34a"]
  const [allResumes, setAllResumes] = useState([])
  const loadAllResumes = async () => {
    setAllResumes(dummyResumeData)
  }
  useEffect(() => {
    loadAllResumes()
  },[])
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent hidden sm:block'>Welcome to your dashboard!</p>
        <div className='flex gap-4'>
          <button className='hidden md:flex bg-gray-900 hover:bg-gray-800 text-white p-4 rounded-md aspect-square font-medium transition flex-col items-center justify-center'>
            <PlusIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-full'/>
            <p className='text-sm group-hover:text-green-600 transition-all duration-300 mt-2'>Create Resume</p>
          </button>
          <button className='hidden md:flex bg-gray-900 hover:bg-gray-800 text-white p-4 rounded-md aspect-square font-medium transition flex-col items-center justify-center'>
            <UploadCloudIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-full'/>
            <p className='text-sm group-hover:text-green-600 transition-all duration-300 mt-2'>Upload Resume</p>
          </button>
        </div>
        <hr className='border-slate-300 my-6 sm:w-[305px]' />
        <div class="grid grid-cols-2 sm:flex flex-wrap gap-4 ">
          {allResumes.map((resume, index) => {
            const baseColor = colors[index % colors.length];
            return (
              <button key={index} className='relative w-full sm:max-w-36 h-48'>

              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
