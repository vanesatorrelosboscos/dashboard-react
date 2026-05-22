import FormInput from './FormInput'
import FormSelect from './FormSelect'
import { useState } from 'react'
import validateApplicationForm from './validateApplicationForm'
import { useToast } from '../../../../../../../context/ToastContext'

function FormTab({ isTabActive }) {
    const showToast = useToast()
    const [formData, setFormData] = useState({
        fname: '',
        femail: '',
        fpass: '',
        fdept: ''
    })

    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState({})

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value })
        
        setErrors(prev => ({ ...prev, [id]: false }))
        setSuccess(prev => ({ ...prev, [id]: false }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const { errors: newErrors, success: newSuccess, isValid } = validateApplicationForm(formData)
        setErrors(newErrors)
        setSuccess(newSuccess)

        if (isValid) {
            showToast('Application submitted successfully! 🎉', "success", "Form submitted")
            setFormData({ fname: '', femail: '', fpass: '', fdept: '' })
            setErrors({})
            setSuccess({})
        } else {
            showToast('Please fix the errors above.', "error")
        }
    }

    return (
        <div className={`tab-panel ${isTabActive ? 'active' : ''}`} id="tab-form">
            <form id="contactForm" onSubmit={handleSubmit} noValidate>
                
                <div className="form-group-container">
                    {/* 1. FULL NAME */}
                    <FormInput 
                        label="Full Name"
                        type="text"
                        id="fname"
                        placeholder="Jane Doe"
                        value={formData.fname}
                        onChange={handleChange}
                        hasError={errors.fname}
                        isSuccess={success.fname}
                        errorMsg="Min. 2 characters required."
                    />

                    {/* 2. EMAIL ADDRESS */}
                    <FormInput 
                        label="Email Address"
                        type="email"
                        id="femail"
                        placeholder="jane@nexus.io"
                        value={formData.femail}
                        onChange={handleChange}
                        hasError={errors.femail}
                        isSuccess={success.femail}
                        errorMsg="Enter a valid email address."
                    />
                </div>

                <div className="form-group-container">
                    {/* 3. PASSWORD */}
                    <FormInput 
                        label="Password"
                        type="password"
                        id="fpass"
                        placeholder="Min 8 chars + 1 number"
                        value={formData.fpass}
                        onChange={handleChange}
                        hasError={errors.fpass}
                        isSuccess={success.fpass}
                        errorMsg="Min 8 chars, at least 1 number."
                    />

                    {/* 4. DEPARTMENT */}
                    <FormSelect 
                        label="Department"
                        id="fdept"
                        options={['Engineering', 'Design', 'Marketing', 'Operations']}
                        value={formData.fdept}
                        onChange={handleChange}
                        hasError={errors.fdept}
                        isSuccess={success.fdept}
                        errorMsg="Please select a department."
                    />

                </div>

                <button type="submit" id="submitBtn" className="btn btn-primary">Submit Application →</button>
            </form>
        </div>
    )
}

export default FormTab