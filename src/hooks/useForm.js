import { useState } from "react";

const regExp = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/,
};

export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const validateFields = (e) => {
    let { id, value } = e.target;

    switch (id) {
      case "name": {
        if (value !== "" && regExp.name.test(value)) {
          setForm({ ...form, name: [value, "valid"] });
        } else {
          setForm({ ...form, name: [value, "invalid"] });
        }
        break;
      }

      case "dni": {
        if (value !== "" && !isNaN(value)) {
          setForm({ ...form, dni: [value, "valid"] });
        } else {
          setForm({ ...form, dni: [value, "invalid"] });
        }
        break;
      }

      case "email": {
        if (value !== "" && regExp.email.test(value)) {
          setForm({ ...form, email: [value, "valid"] });
        } else {
          setForm({ ...form, email: [value, "invalid"] });
        }
        break;
      }

      case "phone": {
        if (value !== "" && !isNaN(value)) {
          setForm({ ...form, phone: [value, "valid"]});
        } else {
          setForm({ ...form, phone: [value, "invalid"] });
        }
        break;
      }

      case "address": {
        if (value !== "") {
          setForm({ ...form, address: [value, "valid"] });
        } else {
          setForm({ ...form, address: [value, "invalid"] });
        }
        break;
      }

      case "cardNumber" : {
        if(value !== "" && !isNaN(value)){
          setForm({...form, card: {...form.card, number: [value, "valid"]}});
        } else{
          setForm({...form, card: {...form.card, number: [value, "invalid"]}});
        }
        break;
      }

      case "exp" : {
        if(value !== ""){
          setForm({...form, card: {...form.card, exp: [value, "valid"]}});
        } else{
          setForm({...form, card: {...form.card, exp: [value, "invalid"]}});
        }
        break;
      }

      case "cvv" : {
        if(value !== "" && !isNaN(value)){
          setForm({...form, card: {...form.card, cvv: [value, "valid"]}});
        } else{
          setForm({...form, card: {...form.card, cvv: [value, "invalid"]}});
        }
        break;
      }

      default:
    }
  };

  const handleChange = (e) => {
    let { id, value } = e.target;

    setForm({ ...form, [id]: [value, ""] });

    validateFields(e);
  };

  const reset = (e) => {
    setForm(initialForm);
  };

  return {
    form,
    handleChange,
    reset,
  };
};
