import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import '../../components/Footer/Footer.css';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons';
import wspIcon from '../../assets/img/wspicon.png';


const Contacto = () => {

  // Los useStates y useEffect para el form
  const [formValues, setformValues] = useState({
    nombre: '',
    email: '',
  });

  const { nombre, email} = formValues;
  const [formValid, setFormValid] = useState(false);
  const [show, setShow] = useState(false);

  const handleChange = ({ target }) => {
    setformValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    const { nombre, email} = formValues;
    if (nombre && email) {
      setFormValid(true);
      console.log("Se actualizó el formulario")
    } else {
      setFormValid(false);
    }
  }, [formValues]);

  useEffect(() => {
    setFormValid(nombre && email);
  }, [nombre, email]);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (formValid) {
      setShow(true);
    }
  };

  //Estilos del botón acá, porque en css no se leía (no sé por qué)
  const styles = {
    container: {
      backgroundColor: '#001946',
      border: 'none',
    },
  };

  return (
    <>
      <div className="grid-layout">
        <div className="nav">
          <Navbar />
        </div>
        <div className="header"></div>
        <div className="main">
          <h2 className="tituloC">CONTACTO</h2>
          <hr style={{ width: '300px', position: 'relative', right: '100px', bottom: '200px' }}></hr>
          <Form className="formulario">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                name="nombre"
                placeholder="Ingrese su nombre"
                style={{ width: '400px' }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                onChange={handleChange}
                name="email"
                placeholder="Ingrese su correo electrónico"
                style={{ width: '400px' }}
                required
              />
              <div className="form-text">
                <i>No compartiremos tu correo electrónico con nadie más.</i>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Deja tu mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Escriba su consulta aquí"
                style={{ width: '400px' }}
                required
              />
            </Form.Group>
            <Button
              type="submit"
              style={styles.container}
              onClick={handleShow}
              value="enviar"
              disabled={!formValid}
            >
              Enviar
            </Button>
            {/*Aquí comienza el codigo del modal*/}
            <Modal show={show} onHide={handleClose} animation={true}>
              <Modal.Header closeButton>
                <Modal.Title>¡Mensaje envíado!</Modal.Title>
              </Modal.Header>
              <Modal.Body>¡Nos pondremos en contacto con vos cuanto antes!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} style={{backgroundColor: '#001946'}}>
                  Cerrar
                </Button>
                <Button variant="success" onClick={handleClose} style={{backgroundColor: '#001946'}}>
                  Aceptar
                </Button>
              </Modal.Footer>
            </Modal>
          </Form>
          <div className="containerSegundo">
            <h2 className="tituloS"> MÁS INFORMACIÓN</h2>
            <hr style={{ width: '300px', position: 'relative', left: '500px', bottom: '710px' }} />
            <ul className="datos">
              <li>
                <FontAwesomeIcon icon={faMapMarked}></FontAwesomeIcon> Argentina
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> (666) 666 666 666
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> PhoneTup@gmail.com
              </li>
            </ul>
            <hr style={{ width: '300px', position: 'relative', left: '500px', bottom: '650px' }} />
            <p className="parrafito">Si tienes algun problema, no dudes en consultarnos o contactarte con nuestro servicio de telefonia!</p>
            <p className="parrafito1">EvilGeniusMovies.com</p>
            <hr style={{ width: '300px', position: 'relative', left: '500px', bottom: '630px' }} />
            <div className="wsp">
              <h4>¡Nuestro WhatsApp</h4>
              <a href="http://Whatsapp.com">
                <img src={wspIcon} alt="WhatsApp" style={{ height: '100px' }} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contacto;
