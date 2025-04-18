import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { BsCheckCircleFill } from 'react-icons/bs';

function SuccessModal({ show, onClose }) {
  const modalStyle = {
    content: {
      borderRadius: '16px',
      border: 'none',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
      padding: '0'
    },
    body: {
      padding: '2.5rem 1.5rem',
      fontSize: '1rem',
      color: '#2c3e50',
      textAlign: 'center'
    },
    icon: {
      color: '#ff7a3d',
      fontSize: '4rem',
      marginBottom: '1.5rem'
    },
    title: {
      color: '#2c3e50',
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1rem'
    },
    message: {
      color: '#7f8c8d',
      fontSize: '1rem',
      lineHeight: '1.6',
      maxWidth: '400px',
      margin: '0 auto 1.5rem'
    },
    footer: {
      borderTop: '1px solid #e2e8f0',
      padding: '1rem 1.5rem',
      background: '#f8f9fa',
      display: 'flex',
      justifyContent: 'center'
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <Modal
          show={show}
          onHide={onClose}
          centered
          style={{ backdropFilter: 'blur(10px)' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Modal.Body style={modalStyle.body}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2 
                }}
              >
                <BsCheckCircleFill style={modalStyle.icon} />
              </motion.div>
              
              <motion.h3
                style={modalStyle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Application Submitted Successfully!
              </motion.h3>
              
              <motion.p
                style={modalStyle.message}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Thank you for your interest! We have received your application and will review it shortly. 
                We will contact you through the provided email address.
              </motion.p>
            </Modal.Body>
            
            <Modal.Footer style={modalStyle.footer}>
              <Button
                style={{
                  backgroundColor: '#ff7a3d',
                  borderColor: '#ff7a3d',
                  padding: '0.75rem 2rem',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  letterSpacing: '0.02em',
                  boxShadow: '0 4px 6px rgba(255, 122, 61, 0.2)',
                  transition: 'all 0.3s ease'
                }}
                onClick={onClose}
              >
                Close
              </Button>
            </Modal.Footer>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
}

export default SuccessModal; 