import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Home = () => {
  const navigate = useNavigate()
  const loadNewForm = ()=> {
    let r = (Math.random() + 1).toString(36).substring(7);
    navigate("/form/survey/token/" + r);
  }
  return (
    <div>
      <div className="App">
        <div className="write-container">
          <div className="text-box">
            <h2>Background Check Authorization Form</h2><br />
            By clicking on <strong>Proceed</strong>, 
            you hereby authorize our Human Resource 
            Department to conduct a background check 
            for the purpose of evaluating your suitability 
            for the position you are applying for. 
            This authorization allows us to obtain information 
            from various sources, including but not limited to, 
            criminal records, employment history, educational 
            background, and professional references.
          </div><br />
          <Button style={{backgroundColor: "#ff7a3d",borderColor:"#ff7a3d"}} onClick={loadNewForm}>
            Proceed
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
