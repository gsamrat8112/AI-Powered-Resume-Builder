import { Plus, Briefcase, Trash2, Sparkles } from 'lucide-react'
import React from 'react'

const ExperienceForm = ({data, onChange}) => {
    const addExperience = () => {
        const newExperience = {
            company: '',
            position: '',
            start_date: '',
            end_date: '',
            description: '',
            is_current: false
        };
        onChange([...data, newExperience])
    }
    const removeExperience = (index) => {
        const updatedExperience = data.filter((_, i) => i !== index);
        onChange(updatedExperience)
    }
    const updateExperience = (index, field, value) => {
        const updatedExperience = [...data];
        updatedExperience[index] = {...updatedExperience[index], [field]: value};
        onChange(updatedExperience);
    }
  return (
    <div className='space-y-6'>
        <div className='flex items-center justify-between'>
            <div>
                <h3 className='flex item-center gap-2 text-lg font-semibold text-gray-900'>Professional Experience</h3>
                <p className='text-sm text-gray-500'>Add your professional experience details here </p>
            </div>
            <button onClick={addExperience} className='flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors'>
                <Plus className='size-4' />
                Add Experience
            </button>
        </div>
        {data.length === 0 ? (
            <div className='text-center py-8 text-gray-500'>
                <Briefcase className='size-12 mx-auto mb-3 text-gray-300' />
                <p>No experience added yet.</p>
                <p className='text-sm'>Click the "Add Experience" button to start adding your work history.</p>
            </div>
        ) : (
            <div className='space-y-4'>
                {data.map((experience, index) => (
                    <div key={index} className='border border-gray-200 rounded-lg p-4 space-y-3'>
                        <div className='flex justify-between items-start'>
                            <h4>Experience #{index + 1}</h4>
                            <button onClick={() => removeExperience(index)} className='text-red-500 hover:text-red-700 transition-colors'>
                                <Trash2 className='size-4' />
                            </button>
                        </div>
                        <div className='grid md:grid-cols-2 gap-4'>
                            <input value={experience.company || ''} onChange={(e) => updateExperience(index, 'company', e.target.value)} type='text' placeholder='Company Name' className='px-3 py-2 rounded-lg text-sm' />
                            <input value={experience.position || ''} onChange={(e) => updateExperience(index, 'position', e.target.value)} type='text' placeholder='Job Title' className='px-3 py-2 rounded-lg text-sm' />
                            <input value={experience.start_date || ''} onChange={(e) => updateExperience(index, 'start_date', e.target.value)} type='month' className='px-3 py-2 rounded-lg text-sm' />
                            <input value={experience.end_date || ''} onChange={(e) => updateExperience(index, 'end_date', e.target.value)} type='month' disabled={experience.is_current} className='px-3 py-2 rounded-lg text-sm disabled:bg-gray-100' />
                        </div>
                        <label className='flex items-center gap-2 text-sm'>
                            <input type='checkbox' checked={experience.is_current || false} onChange={(e) => {updateExperience(index, 'is_current', e.target.checked ? true : false)}} className='rounded text-gray-300 text-blue-600 focus:ring-blue-500' />
                            <span className='text-gray-700 text-sm'>Currently working in this role</span>
                        </label>
                        <div className='space-y-2'>
                            <div className='flex items-center justify-between'>
                                <label className='text-sm font-medium text-gray-700'>Job Description</label>
                                <button className='flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50'>
                                    <Sparkles className='size-3' />
                                    Enhance with AI
                                </button>
                            </div>
                            <textarea value={experience.description || ''} onChange={(e) => updateExperience(index, 'description', e.target.value)} placeholder='Describe your responsibilities and achievements in this role.' className='w-full resize-none px-3 py-2 rounded-lg text-sm' rows='4' />
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default ExperienceForm
