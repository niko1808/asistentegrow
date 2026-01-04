function calculateWater(stage, potSize) {
  const factor = stage === "Floración" ? 0.3 : 0.2;
  return (potSize * factor).toFixed(2);
}

document.getElementById("calculator").innerHTML = `
<h2>Calculadora de Riego</h2>
<select id="cStage">
  <option>Vegetativo</option>
  <option>Floración</option>
</select>
<input id="cPot" type="number" placeholder="Litros maceta">
<button onclick="alert(calculateWater(cStage.value, cPot.value) + ' L')">
Calcular
</button>
`;
