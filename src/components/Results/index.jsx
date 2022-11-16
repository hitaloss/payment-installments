import "./styles.css";

function Results({ payment }) {
  const paymentKeys = Object.values(payment);
  return (
    <section>
      <div>
        <h3>VOCÊ RECEBERÁ:</h3>
        <hr />
      </div>
      <div className="results-holder">
        <p className="result-text">
          Amanhã:{" "}
          <span className="result-text-details"> R$ {paymentKeys[0]}</span>
        </p>
        <p className="result-text">
          Em 15 dias:{" "}
          <span className="result-text-details"> R$ {paymentKeys[1]}</span>
        </p>
        <p className="result-text">
          Em 30 dias:{" "}
          <span className="result-text-details"> R$ {paymentKeys[2]}</span>
        </p>
        <p className="result-text">
          Em 90 dias:{" "}
          <span className="result-text-details"> R$ {paymentKeys[3]}</span>
        </p>
      </div>
    </section>
  );
}

export default Results;
