import { useForm } from "../../../hooks/useForm";

import { Button } from "../../../app/styles";
import { Btns, Row } from "../ContactForm/styles";
import { Main } from "./styles";

const initialForm = {
  cardNumber: "",
  exp: "",
  cvv: "",
};

const PayForm = ({makePayment}) => {
  const {
    form,
    isValid,
    handleChange,
    handleBlur,
    handleReset,
    validatePayForm,
  } = useForm(initialForm);

  return (
    <Main>
      <Row>
        <label htmlFor="cardNumber">Número de tarjeta</label>
        <input
          type="text"
          name="cardNumber"
          value={form.cardNumber}
          className={
            (isValid.card.number === "valid" && "valid") ||
            (isValid.card.number === "invalid" && "invalid") ||
            ""
          }
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        />
      </Row>
      <Row>
        <label htmlFor="exp">Fecha de expiración</label>
        <input
          type="date"
          name="exp"
          value={form.exp}
          className={
            (isValid.card.exp === "valid" && "valid") ||
            (isValid.card.exp === "invalid" && "invalid") ||
            ""
          }
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        />
      </Row>
      <Row>
        <label htmlFor="cvv">Código de seguridad</label>
        <input
          type="text"
          name="cvv"
          value={form.cvv}
          className={
            (isValid.card.cvv === "valid" && "valid") ||
            (isValid.card.cvv === "invalid" && "invalid") ||
            ""
          }
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        />
      </Row>
      <Btns>
        <Button type="button" className="reset" onClick={() => handleReset()}>
          Limpiar
        </Button>
        <Button type="button" disabled={validatePayForm()} onClick={() => makePayment()}>
          Realizar pago
        </Button>
      </Btns>
    </Main>
  );
};

export default PayForm;
