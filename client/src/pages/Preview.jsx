import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ResumePreview from '../components/ResumePreview'
import Loader from '../components/Loader'
import { ArrowLeftIcon } from 'lucide-react'

const Preview = () => {
  const { resumeId } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [resumeData, setResumeData] = useState(null)
  const loadResume = async () => {
    setResumeData(dummyResumeData.find(resume => resume._id === resumeId || null))
    setIsLoading(false)
  }
  useEffect(() => {
    loadResume()
  }, [])

  return resumeData ? (
    <div className='bg-slate-100'>
      <div className='max-w-3xl mx-auto py-10'>
        <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accentColor} className='py-4 bg-white' />
      </div>
    </div>
  ) : (
    <div>
      {isLoading ? <Loader /> : (
        <div className='flex flex-col items-center justify-center h-screen'>
        <p className='text-center text-6x1 text-slate-400 font-medium'>Resume not found.</p>
        <a href='/' className='mt-6 bg-green-500 hover:bg-green-600 text-white px-6 h-9 m-1 rounded-full ring-offset-1 ring-1 ring-green-400 flex items-center transition-colors'>
        <ArrowLeftIcon className='size-4 mr-2' />
        Go back to home
        </a>
        </div>
        )}
    </div>
  )
}

export default Preview
