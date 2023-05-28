import {Link} from 'react-router-dom'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function Top() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="container menu">
            <div className="row">
                <div className="col-12 col-sm-7">
                    <ul className="left">
                        <li><Link to='/'>Logo</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className="col-12 col-sm-5">
                    <ul  className="right">
                        <li><Link to='/Cart'>Cart: </Link>
                        <a href='#cart-number'>0</a>
                        </li>
                        <li><Link onClick={() => setModalShow(true)}>SignIn</Link></li>
                        <li><Link to='/register'>SignUp</Link></li>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Email(*)</label>
                    <div class="col-sm-10">
                    <input  class="form-control" id="inputPassword" ></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password"></input>
                    </div>
                </div>
                <input type="submit" value="signIn"></input>
                <a href="#signUp">SignUp</a>
            </form>      
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  