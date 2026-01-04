document.getElementById("costs").innerHTML = `
<h2>Costos</h2>
<input id="light" placeholder="Luz">
<input id="supplies" placeholder="Insumos">
<input id="time" placeholder="Tiempo">
<button onclick="alert(
  Number(light.value) + Number(supplies.value) + Number(time.value)
)">
Calcular
</button>
`;
