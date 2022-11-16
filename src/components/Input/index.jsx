import axios from "axios";
import { useState, useEffect } from "react";
import "./styles.css";

function Input({ setPayment }) {
  const [amount, setAmount] = useState(0);
  const [installments, setInstallments] = useState(0);
  const [mdr, setMdr] = useState(0);

  const paymentData = {
    amount: amount,
    installments: installments,
    mdr: mdr,
  };

  const data = () => {
    axios
      .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", paymentData)
      .then((res) => setPayment(res.data))
      .catch(() => alert("Dados inválidos, favor conferir."));
  };

  useEffect(() => {
    if (amount && installments && mdr) {
      setTimeout(async () => {
        data();
      }, 2000);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, installments, mdr]);

  return (
    <div className="holder">
      <h1>Simule sua Antecipação</h1>
      <div className="input-field">
        <p>Informe o valor da venda *</p>
        <div className="brl-placeholder">
          <p className="money-placeholder">R$</p>
          <input
            className="input-placeholder"
            type="text"
            onChange={(event) => {
              setAmount(event.target.value);
            }}
          />
        </div>
      </div>

      <div className="input-field">
        <p>Em quantas parcelas *</p>
        <input
          type="text"
          onChange={(event) => {
            setInstallments(event.target.value);
          }}
        />
        <span className="input-details">Máximo de 12 parcelas</span>
      </div>

      <div className="input-field">
        <p>Informe o percentual de MDR *</p>
        <input
          type="text"
          onChange={(event) => {
            setMdr(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Input;
