import { useState } from "react";
import { Link } from "react-router-dom";

import Summary from "./Summary/Summary";

import { useCartContext } from "../../contexts/CartProvider";

import { useForm } from "../../hooks/useForm";
import { useLoader } from "../../hooks/useLoader";

import { createOrder } from "../../services/products";

import { Button } from "../../app/styles";
import { ModalContainer, Form, Row, Layout, Main } from "./styles";

import loader from "../../assets/loader.svg";
import { BiCheckCircle } from "react-icons/bi";

const initialForm = {
  name: [""],
  dni: [""],
  email: [""],
  phone: [""],
  address: [""],
  card: {
    number: [""],
    exp: [""],
    cvv: [""],
  },
};

const Checkout = () => {
  const { cart, clearCart, totalPrice } = useCartContext();

  const { form, handleChange, reset } = useForm(initialForm);
  const { loading, setLoading } = useLoader(true);

  const [secondStep, setSecondStep] = useState(false);
  const [purchaseMade, setPurchaseMade] = useState(false);
  const [orderId, setOrderId] = useState();

  const order = {
    buyer: {
      name: form.name[0],
      dni: form.dni[0],
      email: form.email[0],
      phone: form.phone[0],
      address: form.address[0],
      card: {
        number: form.card.number[0],
        exp: form.card.exp[0],
        cvv: form.card.cvv[0],
      },
    },
    items: cart.map((product) => ({
      id: product.id,
      name: product.name,
      brand: product.brand,
      model: product.model,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };

  const nextStep = () => {
    setSecondStep(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const sendEmail = () => {
    const data = {
      service_id: "service_imm6ybj",
      template_id: "template_vf8d421",
      user_id: "NjDU5jD5Y4TQwwDs-",
      template_params: {
        to_name: form.name[0],
        to_dni: form.dni[0],
        to_email: form.email[0],
        to_cardNumber: form.card.number[0],
      },
    };

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const sendOrder = () => {
    setLoading(true);
    createOrder(order).then((res) => {
      setOrderId(res);
      setPurchaseMade(true);
      sendEmail();
      clearCart();
    });
  };

  return (
    <Main>
      <h2>Finaliza tu compra</h2>
      <h3>
        <span className={secondStep ? "opacity" : undefined}>
          <b>1.</b> Contacto
        </span>
        <span className={secondStep === false ? "opacity" : undefined}>
          <b>2.</b> Pago
        </span>
      </h3>
      <Layout>
        <Form>
          {secondStep ? (
            loading ? (
              <div className="loader">
                <img src={loader} alt="Loader" />
              </div>
            ) : (
              <>
                <Row>
                  <label htmlFor="cardNumber">Número de tarjeta</label>
                  <input
                    type="text"
                    id="cardNumber"
                    value={form.card.number[0]}
                    className={
                      (form.card.number[1] === "valid" && "valid") ||
                      (form.card.number[1] === "invalid" && "invalid") ||
                      ""
                    }
                    onChange={(e) => handleChange(e)}
                    onBlur={(e) => handleChange(e)}
                  />
                </Row>
                <Row>
                  <label htmlFor="exp">Fecha de vencimiento</label>
                  <input
                    type="date"
                    id="exp"
                    value={form.card.exp[0]}
                    className={
                      (form.card.exp[1] === "valid" && "valid") ||
                      (form.card.exp[1] === "invalid" && "invalid") ||
                      ""
                    }
                    onChange={(e) => handleChange(e)}
                    onBlur={(e) => handleChange(e)}
                  />
                </Row>
                <Row>
                  <label htmlFor="cvv">Código de seguridad</label>
                  <input
                    type="text"
                    id="cvv"
                    value={form.card.cvv[0]}
                    className={
                      (form.card.cvv[1] === "valid" && "valid") ||
                      (form.card.cvv[1] === "invalid" && "invalid") ||
                      ""
                    }
                    onChange={(e) => handleChange(e)}
                    onBlur={(e) => handleChange(e)}
                  />
                </Row>

                <div className="btns">
                  <Button
                    type="button"
                    className="reset"
                    onClick={() => reset()}
                  >
                    Limpiar
                  </Button>
                  {loading ? (
                    <span>
                      <img src={loader} alt="Loader" />
                    </span>
                  ) : (
                    <Button
                      type="button"
                      disabled={
                        form.card.number[1] !== "valid" ||
                        form.card.exp[1] !== "valid" ||
                        form.card.cvv[1] !== "valid"
                      }
                      onClick={() => sendOrder()}
                    >
                      Pagar
                    </Button>
                  )}
                </div>
              </>
            )
          ) : (
            <>
              <Row>
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  value={form.name[0]}
                  className={
                    (form.name[1] === "valid" && "valid") ||
                    (form.name[1] === "invalid" && "invalid") ||
                    ""
                  }
                  onChange={(e) => handleChange(e)}
                  onBlur={(e) => handleChange(e)}
                />
              </Row>
              <Row>
                <label htmlFor="dni">DNI</label>
                <input
                  type="text"
                  id="dni"
                  value={form.dni[0]}
                  className={
                    (form.dni[1] === "valid" && "valid") ||
                    (form.dni[1] === "invalid" && "invalid") ||
                    ""
                  }
                  onChange={(e) => handleChange(e)}
                  onBlur={(e) => handleChange(e)}
                />
              </Row>
              <Row>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={form.email[0]}
                  className={
                    (form.email[1] === "valid" && "valid") ||
                    (form.email[1] === "invalid" && "invalid") ||
                    ""
                  }
                  onChange={(e) => handleChange(e)}
                  onBlur={(e) => handleChange(e)}
                />
              </Row>
              <Row>
                <label htmlFor="phone">Tel</label>
                <input
                  type="text"
                  id="phone"
                  value={form.phone[0]}
                  className={
                    (form.phone[1] === "valid" && "valid") ||
                    (form.phone[1] === "invalid" && "invalid") ||
                    ""
                  }
                  onChange={(e) => handleChange(e)}
                  onBlur={(e) => handleChange(e)}
                />
              </Row>
              <Row>
                <label htmlFor="address">Dirección</label>
                <input
                  type="text"
                  id="address"
                  value={form.address[0]}
                  className={
                    (form.address[1] === "valid" && "valid") ||
                    (form.address[1] === "invalid" && "invalid") ||
                    ""
                  }
                  onChange={(e) => handleChange(e)}
                  onBlur={(e) => handleChange(e)}
                />
              </Row>

              <div className="btns">
                <Button type="button" className="reset" onClick={() => reset()}>
                  Limpiar
                </Button>
                <Button
                  type="button"
                  disabled={
                    form.name[1] !== "valid" ||
                    form.dni[1] !== "valid" ||
                    form.email[1] !== "valid" ||
                    form.phone[1] !== "valid" ||
                    form.address[1] !== "valid"
                  }
                  onClick={() => nextStep()}
                >
                  Siguiente
                </Button>
              </div>
            </>
          )}
        </Form>
        <Summary />
      </Layout>
      {purchaseMade && (
        <ModalContainer>
          <div>
            <BiCheckCircle className="icon" />
            <h3>Compra realizada</h3>
            <p>
              Tu id de compra es <b>{orderId}</b>. Recibirás un correo electrónico con
              más información
            </p>
            <Link to="/">
              <Button type="button">Volver</Button>
            </Link>
          </div>
        </ModalContainer>
      )}
    </Main>
  );
};

export default Checkout;
