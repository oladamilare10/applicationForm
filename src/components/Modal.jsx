import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalPage({ show, handleClose, country, state, zip, city }) {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{country}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {state && 
                <div>
                    Region/State: <strong>{state}</strong>
                </div>
            }
            {zip && 
                <div>
                    Zip Code: <strong>{zip}</strong>
                </div>
            }
            {city && 
                <div>
                    City: <strong>{city}</strong>
                </div>
            }
            <p style={{marginTop: "20px",fontSize: "90%",fontWeight:"500"}}>If this is not your current location, you can change this in the form</p> 
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button style={{backgroundColor: "#ff7a3d",borderColor:"#ff7a3d"}} onClick={handleClose}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPage;