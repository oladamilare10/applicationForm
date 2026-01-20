import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { motion } from 'framer-motion'
import { logo } from './assets/indes'
import { Container, Card, Row, Col } from 'react-bootstrap'

const Home = () => {
  const navigate = useNavigate()
  
  const loadNewForm = () => {
    let r = (Math.random() + 1).toString(36).substring(7)
    navigate("/form/survey/token/" + r)
  }

  const features = [
    {
      icon: '📋',
      title: 'Easy Application',
      description: 'Simple and intuitive form process'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your data is encrypted and protected'
    },
    {
      icon: '⚡',
      title: 'Quick Process',
      description: 'Complete your application in minutes'
    },
    {
      icon: '📱',
      title: 'Mobile Friendly',
      description: 'Works perfectly on all devices'
    }
  ]
  
  return (
    <div className="form-wrapper" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '2rem 0'
    }}>
      <Container className="py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="shadow-lg" style={{
            border: 'none',
            borderRadius: '24px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)'
          }}>
            <Card.Body className="p-5">
              <motion.div
                className="text-center mb-5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <motion.img
                  src={logo}
                  width={200}
                  alt="Logo"
                  className="mb-4"
                  initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  style={{
                    filter: 'drop-shadow(0 4px 15px rgba(102, 126, 234, 0.3))',
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </motion.div>
              
              <motion.h1 
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#2c3e50',
                  letterSpacing: '-0.01em'
                }}
              >
                Welcome to Our Team!
              </motion.h1>
              
              <motion.p
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                style={{
                  fontSize: '1.1rem',
                  color: '#555',
                  lineHeight: '1.8',
                  marginBottom: '2rem'
                }}
              >
                We're excited that you're interested in joining our team! This simple application form will help us get to know you better. 
                Take your time to fill out the details, and feel free to showcase your skills and experience. We look forward to learning more about you 
                and how you could be a great addition to our community.
              </motion.p>

              <Row className="mb-5" style={{ marginTop: '3rem' }}>
                {features.map((feature, index) => (
                  <Col md={6} key={index} className="mb-3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      style={{
                        padding: '1.5rem',
                        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                        borderRadius: '16px',
                        border: '1px solid rgba(102, 126, 234, 0.2)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      whileHover={{
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 24px rgba(102, 126, 234, 0.15)'
                      }}
                    >
                      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                        {feature.icon}
                      </div>
                      <h5 style={{
                        color: '#2c3e50',
                        fontWeight: '600',
                        marginBottom: '0.5rem'
                      }}>
                        {feature.title}
                      </h5>
                      <p style={{
                        color: '#7f8c8d',
                        fontSize: '0.95rem',
                        margin: 0
                      }}>
                        {feature.description}
                      </p>
                    </motion.div>
                  </Col>
                ))}
              </Row>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      borderColor: 'transparent',
                      padding: '14px 50px',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      borderRadius: '12px',
                      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={loadNewForm}
                    size="lg"
                    className="px-5"
                  >
                    Start Your Application
                    <span style={{ marginLeft: '0.5rem' }}>→</span>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="mt-4 text-center text-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                style={{
                  fontSize: '0.9rem',
                  color: '#7f8c8d'
                }}
              >
                <span>🔒 Your information is secure and will only be used for application purposes</span>
              </motion.div>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </div>
  )
}

export default Home
