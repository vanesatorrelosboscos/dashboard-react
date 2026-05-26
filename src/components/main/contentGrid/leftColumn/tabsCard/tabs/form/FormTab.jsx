import { useState } from 'react'
import Input from '../../../../../../ui/Input'
import FormSelect from './FormSelect'
import { useToast } from '../../../../../../../context/ToastContext'
import Button from '../../../../../../ui/Button'

const FORM_PATTERNS = {
    name: /^.{2,}$/,
    password: /^(?=.*[0-9]).{8,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}

function FormTab({ isTabActive }) {
    const showToast = useToast()
    const [formData, setFormData] = useState({
        fname: '',
        femail: '',
        fpass: '',
        fdept: ''
    })

    const [submitCount, setSubmitCount] = useState(0)
    const [selectValidations, setSelectValidations] = useState({ hasError: false, isSuccess: false })

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData({ ...formData, [id]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const isNameValid = FORM_PATTERNS.name.test(formData.fname.trim())
        const isEmailValid = FORM_PATTERNS.email.test(formData.femail.trim())
        const isPassValid = FORM_PATTERNS.password.test(formData.fpass.trim())
        const isDeptValid = formData.fdept !== ''

        const isValid = isNameValid && isEmailValid && isPassValid && isDeptValid

        if (isValid) {
            showToast('Application submitted successfully! 🎉', "success", "Form submitted")
            setFormData({ fname: '', femail: '', fpass: '', fdept: '' })
            setSubmitCount(0)
            setSelectValidations({ hasError: false, isSuccess: false })
        } else {
            setSubmitCount(prev => prev + 1)
            setSelectValidations({
                hasError: !isDeptValid,
                isSuccess: isDeptValid
            })
            showToast('Please fix the errors above.', "error")
        }
    }

    return (
        <div className={`tab-panel ${isTabActive ? 'active' : ''}`} id="tab-form">
            <form id="contactForm" onSubmit={handleSubmit} noValidate>
                
                <div className="form-group-container">
                    {/* 1. FULL NAME */}
                    <Input 
                        label="Full Name"
                        type="text"
                        id="fname"
                        placeholder="Jane Doe"
                        value={formData.fname}
                        onChange={handleChange}
                        required
                        pattern={FORM_PATTERNS.name}
                        errorMsg="Min. 2 characters required."
                        submitCount={submitCount}
                    />

                    {/* 2. EMAIL ADDRESS */}
                    <Input 
                        label="Email Address"
                        type="email"
                        id="femail"
                        placeholder="jane@nexus.io"
                        value={formData.femail}
                        onChange={handleChange}
                        required
                        pattern={FORM_PATTERNS.email}
                        errorMsg="Enter a valid email address."
                        submitCount={submitCount}
                    />
                </div>

                <div className="form-group-container">
                    {/* 3. PASSWORD */}
                    <Input 
                        label="Password"
                        type="password"
                        id="fpass"
                        placeholder="Min 8 chars + 1 number"
                        value={formData.fpass}
                        onChange={handleChange}
                        required
                        pattern={FORM_PATTERNS.password}
                        errorMsg="Min 8 chars, at least 1 number."
                        submitCount={submitCount}
                    />

                    {/* 4. DEPARTMENT */}
                    <FormSelect 
                        label="Department"
                        id="fdept"
                        options={['Engineering', 'Design', 'Marketing', 'Operations']}
                        value={formData.fdept}
                        onChange={handleChange}
                        hasError={selectValidations.hasError}
                        isSuccess={selectValidations.isSuccess}
                        errorMsg="Please select a department."
                    />
                </div>

                <Button type="submit" id="submitBtn" variant="primary" text="Submit Application →"/>
            </form>
        </div>
    )
}

export default FormTab