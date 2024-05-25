import "./styles.css";

import { states } from "./states";

import { useState, useEffect } from "react";

export default function App() {
  const calculate = () => {
    console.log("valores do formulário", formValues);

    if (
      formValues.produto == "" ||
      formValues.estado == "" ||
      formValues.preco == ""
    ) {
      return window.alert("Campos vazios");
    }

    const foundState = states.find((i) => i.name === formValues.estado);

    console.log(foundState);

    const taxa = (Number(formValues.preco) / 100) * foundState.tax;

    const finalPrice = `O valor final é ${Number(formValues.preco) + taxa}`;

    window.alert(finalPrice);
  };

  const [formValues, setFormValues] = useState({
    produto: "",
    estado: "",
    preco: 0,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h1>Calculadora</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Produto"
            name="produto"
            id="produto"
            required
            value={formValues.produto}
            onChange={(event) => handleChange(event)}
          />
          <i className="bx bxs-user" />
        </div>
        <div className="input-box">
          <input
            list="Estado"
            type="text"
            name="estado"
            id="estado"
            placeholder="Estado"
            required
            value={formValues.estado}
            onChange={(event) => handleChange(event)}
          />
          <datalist id="Estado">
            {states.map((i) => {
              return <option key={i.id} value={i.name} />;
            })}
          </datalist>
        </div>
        <div className="input-box">
          <input
            type="number"
            id="preco"
            name="preco"
            placeholder="Preço"
            required
            onChange={(event) => handleChange(event)}
          />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <button className="btn" onClick={() => calculate()}>
          Calcular
        </button>
      </div>
    </div>
  );
}
