import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { motion, AnimatePresence } from 'framer-motion';

function ModalPage({ show, handleClose, country, state, zip, city }) {
  const modalStyle = {
    content: {
      borderRadius: '16px',
      border: 'none',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
      padding: '0'
    },
    header: {
      background: 'linear-gradient(135deg, #ff7a3d, #ff956b)',
      color: 'white',
      borderBottom: 'none',
      padding: '1.5rem',
      borderTopLeftRadius: '16px',
      borderTopRightRadius: '16px'
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: '600',
      margin: '0',
      letterSpacing: '0.01em'
    },
    body: {
      padding: '1.5rem',
      fontSize: '1rem',
      color: '#2c3e50'
    },
    footer: {
      borderTop: '1px solid #e2e8f0',
      padding: '1rem 1.5rem',
      background: '#f8f9fa'
    },
    infoItem: {
      marginBottom: '1rem',
      padding: '0.75rem',
      background: 'rgba(255, 122, 61, 0.05)',
      borderRadius: '8px',
      border: '1px solid rgba(255, 122, 61, 0.1)'
    },
    label: {
      color: '#7f8c8d',
      fontSize: '0.9rem',
      marginBottom: '0.25rem'
    },
    value: {
      color: '#2c3e50',
      fontSize: '1.1rem',
      fontWeight: '600'
    },
    note: {
      marginTop: '1.5rem',
      padding: '1rem',
      background: 'rgba(255, 122, 61, 0.05)',
      border: '1px solid rgba(255, 122, 61, 0.2)',
      borderRadius: '8px',
      color: '#ff7a3d',
      fontSize: '0.9rem',
      fontWeight: '500'
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <Modal 
          show={show} 
          onHide={handleClose}
          centered
          style={{ backdropFilter: 'blur(10px)' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <Modal.Header closeButton style={modalStyle.header}>
              <Modal.Title style={modalStyle.title}>
                Location Details
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={modalStyle.body}>
              {state && (
                <motion.div 
                  style={modalStyle.infoItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div style={modalStyle.label}>Region/State</div>
                  <div style={modalStyle.value}>{state}</div>
                </motion.div>
              )}
              {city && (
                <motion.div 
                  style={modalStyle.infoItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div style={modalStyle.label}>City</div>
                  <div style={modalStyle.value}>{city}</div>
                </motion.div>
              )}
              {zip && (
                <motion.div 
                  style={modalStyle.infoItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div style={modalStyle.label}>Zip Code</div>
                  <div style={modalStyle.value}>{zip}</div>
                </motion.div>
              )}
              <motion.div 
                style={modalStyle.note}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                If this is not your current location, you can update it in the form
              </motion.div>
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
                onClick={handleClose}
              >
                Continue
              </Button>
            </Modal.Footer>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
}

export default ModalPage;