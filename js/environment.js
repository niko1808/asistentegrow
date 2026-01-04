function checkEnvironment() {
  const temp = document.getElementById("temp").value;
  const hum = document.getElementById("hum").value;

  if (temp > 30) alert("Temperatura alta");
  if (hum > 70) alert("Humedad alta");
}

document.getElementById("environment").innerHTML = `
<h2>Ambiente</h2>
<input id="temp" placeholder="Temperatura °C">
<input id="hum" placeholder="Humedad %">
<button onclick="checkEnvironment()">Verificar</button>
`;
