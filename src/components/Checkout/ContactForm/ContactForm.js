import { useForm } from "../../../hooks/useForm";

import { Button } from "../../../app/styles";
import { Btns, Main, Row } from "./styles";

const initialForm = {
  name: "",
  dni: "",
  email: "",
  phone: "",
  address: "",
};

const ContactForm = ({nextStep}) => {
  const { form, isValid, handleChange, handleBlur, handleReset, validateContactForm } =
    useForm(initialForm);

  return (
    <Main>
      <Row>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          placeholder="Ingresá tu nombre"
          value={form.name}
          className={
            (isValid.name === "valid" && "valid") ||
            (isValid.name === "invalid" && "invalid") ||
            ""
          }
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        />
      </Row>
      <Row>
        <label htmlFor="dni">DNI</label>
        <input
          type="text"
          name="dni"
          placeholder="Ingresá tu DNI"
          value={form.dni}
          className={
            (isValid.dni === "valid" && "valid") ||
            (isValid.dni === "invalid" && "invalid") ||
            ""
          }
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        />
      </Row>
      <Row>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Ingresá tu email"
          value={form.email}
          className={
            (isValid.email === "valid" && "valid") ||
            (isValid.email === "invalid" && "invalid") ||
            ""
          }
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        />
      </Row>
      <Row>
        <label htmlFor="phone">Tel</label>
        <input
          type="text"
          name="phone"
          placeholder="Ingresá tu numero de teléfono"
          value={form.phone}
          className={
            (isValid.phone === "valid" && "valid") ||
            (isValid.phone === "invalid" && "invalid") ||
            ""
          }
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        />
      </Row>
      <Row>
        <label htmlFor="address">Domicilio</label>
        <input
          type="text"
          name="address"
          placeholder="Ingresá tu domicilio"
          value={form.address}
          className={
            (isValid.address === "valid" && "valid") ||
            (isValid.address === "invalid" && "invalid") ||
            ""
          }
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        />
      </Row>
      <Btns>
        <Button type="button" className="reset" onClick={(e) => handleReset(e)}>
          Limpiar
        </Button>
        <Button type="button" disabled={validateContactForm()} onClick={() => nextStep()}>
          Siguiente
        </Button>
      </Btns>
    </Main>
  );
};

export default ContactForm;
