function validateApplicationForm(formData) {
    let errors = {}
    let success = {}
    let isValid = true

    // --- FULL NAME ---
    if (formData.fname.trim().length < 2) {
        errors.fname = true
        isValid = false
    } else {
        success.fname = true
    }

    // --- EMAIL ---
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.femail.trim())) {
        errors.femail = true
        isValid = false
    } else {
        success.femail = true
    }

    // --- PASSWORD ---
    const fpassVal = formData.fpass.trim();
    if (!(fpassVal.length >= 8 && /[0-9]+/.test(fpassVal))) {
        errors.fpass = true
        isValid = false
    } else {
        success.fpass = true
    }

    // --- DEPARTMENT ---
    if (formData.fdept === "") {
        errors.fdept = true
        isValid = false
    } else {
        success.fdept = true
    }

    return { errors, success, isValid }
}

export default validateApplicationForm