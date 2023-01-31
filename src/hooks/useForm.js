import { useState } from "react";

const regExp = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/,
};

const isValidInitial = {
  name: "",
  dni: "",
  email: "",
  phone: "",
  address: "",
  card: {
    number: "",
    exp: "",
    cvv: "",
  },
};

export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const [isValid, setIsValid] = useState(isValidInitial);

  const validateFields = (e) => {
    let { name, value } = e.target;

    switch (name) {
      case "name": {
        if (value !== "" && regExp.name.test(value)) {
          setIsValid({ ...isValid, name: "valid" });
        } else {
          setIsValid({ ...isValid, name: "invalid" });
        }
        break;
      }

      case "dni": {
        if (value !== "" && !isNaN(value)) {
          setIsValid({ ...isValid, dni: "valid" });
        } else {
          setIsValid({ ...isValid, dni: "invalid" });
        }
        break;
      }

      case "email": {
        if (value !== "" && regExp.email.test(value)) {
          setIsValid({ ...isValid, email: "valid" });
        } else {
          setIsValid({ ...isValid, email: "invalid" });
        }
        break;
      }

      case "phone": {
        if (value !== "" && !isNaN(value)) {
          setIsValid({ ...isValid, phone: "valid" });
        } else {
          setIsValid({ ...isValid, phone: "invalid" });
        }
        break;
      }

      case "address": {
        if (value !== "") {
          setIsValid({ ...isValid, address: "valid" });
        } else {
          setIsValid({ ...isValid, address: "invalid" });
        }
        break;
      }

      case "cardNumber": {
        if (value !== "" && !isNaN(value)) {
          setIsValid({
            ...isValid,
            card: { ...isValid.card, number: "valid" },
          });
        } else {
          setIsValid({
            ...isValid,
            card: { ...isValid.card, number: "invalid" },
          });
        }
        break;
      }

      case "exp": {
        if (value !== "") {
          setIsValid({ ...isValid, card: { ...isValid.card, exp: "valid" } });
        } else {
          setIsValid({ ...isValid, card: { ...isValid.card, exp: "invalid" } });
        }
        break;
      }

      case "cvv": {
        if (value !== "" && !isNaN(value)) {
          setIsValid({ ...isValid, card: { ...isValid.card, cvv: "valid" } });
        } else {
          setIsValid({ ...isValid, card: { ...isValid.card, cvv: "invalid" } });
        }
        break;
      }

      default:
    }
  };

  const validateContactForm = () => {
    if (
      isValid.name !== "valid" ||
      isValid.dni !== "valid" ||
      isValid.email !== "valid" ||
      isValid.phone !== "valid" ||
      isValid.address !== "valid"
    ) {
      return true;
    } else {
      return false;
    }
  };

  const validatePayForm = () => {
    if (
      isValid.card.number !== "valid" ||
      isValid.card.exp !== "valid" ||
      isValid.card.cvv !== "valid"
    ) {
      return true;
    } else {
      return false;
    }
  };
  
  const handleChange = (e) => {
    let { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    validateFields(e);
  };

  const handleBlur = (e) => {
    handleChange(e);
    validateFields(e);
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setIsValid(isValidInitial);
  };

  return {
    form,
    isValid,
    handleChange,
    handleBlur,
    handleReset,
    validateContactForm,
    validatePayForm,
  };
};
