import "./style.css";

function ResultsCard(props) {
  const { drinkTitle, drinkImage, idDrink } = props;
  return (
    <div className="resultsCard" id={idDrink}>
      <h3>{drinkTitle}</h3>
      <img src={drinkImage} alt={drinkTitle} />
    </div>
  );
}

export default ResultsCard;
