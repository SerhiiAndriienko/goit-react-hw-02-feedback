function Options({ clickOnButtonG, clickOnButtonN, clickOnButtonB }) {
  return (
    <div>
      <button onClick={clickOnButtonG}>Good</button>

      <button onClick={clickOnButtonN}>Neutral</button>
      <button onClick={clickOnButtonB}>Bad</button>
    </div>
  );
}

export default Options;
