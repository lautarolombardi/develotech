import { useState } from "react";
import { Link } from "react-router-dom";

import ContactForm from "./ContactForm/ContactForm";
import PayForm from "./PayForm/PayForm";
import Summary from "./Summary/Summary";

import { useLoader } from "../../hooks/useLoader";

import { ContactSpan, Container, Main, Modal, PaySpan } from "./styles";

import loader from "../../assets/loader.svg";

import { BiCheckCircle } from "react-icons/bi";
import { Button } from "../../app/styles";

const Checkout = () => {
  const { loading, setLoading } = useLoader(true);

  const [payStep, setPayStep] = useState(false);
  const [paymentMade, setPaymentMade] = useState(false);

  const nextStep = () => {
    setPayStep(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const makePayment = () => {
    setPaymentMade(true);
  }

  return (
    <Main>
      <h2>Finaliza tu compra</h2>
      <h3>
        <ContactSpan payStep={payStep}>
          <b>1.</b> Contacto
        </ContactSpan>
        <PaySpan payStep={payStep}>
          <b>2.</b> Pago
        </PaySpan>
      </h3>
      <Container>
        {payStep ? (
          loading ? (
            <div className="loader">
              <img src={loader} alt="Loader" />
            </div>
          ) : (
            <PayForm makePayment={makePayment} />
          )
        ) : (
          <ContactForm nextStep={nextStep} />
        )}
        <Summary />
      </Container>
      {paymentMade && (
        <Modal>
          <div>
            <BiCheckCircle className="icon" />
            <h4>Compra realizada</h4>
            <p>Recibirás esta información a tu correo electrónico</p>
            <Link to="/">
              <Button type="button">
                Cerrar
              </Button>
            </Link>
          </div>
        </Modal>
      )}
    </Main>
  );
};

export default Checkout;
