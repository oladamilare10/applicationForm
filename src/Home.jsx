import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { motion } from 'framer-motion'
import { logo } from './assets/indes'
import { Container, Card } from 'react-bootstrap'

const Home = () => {
  const navigate = useNavigate()
  
  const loadNewForm = () => {
    let r = (Math.random() + 1).toString(36).substring(7)
    navigate("/form/survey/token/" + r)
  }
  
  return (
    <div className="form-wrapper">
      <Container className="py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="shadow-lg text-center p-5">
            <Card.Body>
              <motion.img
                src={logo}
                width={200}
                alt="Logo"
                className="mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
              
              <motion.h2 
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Welcome to Our Application Portal
              </motion.h2>
              
              <motion.p
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                We're excited that you're interested in joining our team! This simple application form will help us get to know you better. 
                Take your time to fill out the details, and feel free to showcase your skills and experience. We look forward to learning more about you 
                and how you could be a great addition to our community.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Button 
                  style={{backgroundColor: "#ff7a3d", borderColor:"#ff7a3d"}} 
                  onClick={loadNewForm}
                  size="lg"
                  className="px-5"
                >
                  Proceed
                </Button>
              </motion.div>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </div>
  )
}

export default Home
