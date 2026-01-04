const diagnosis = {
  "Hojas amarillas": {
    cause: `
      Generalmente indica exceso de riego o deficiencia de nitrógeno.
      Las raíces pueden estar saturadas de agua, impidiendo la absorción
      correcta de nutrientes.
    `,
    tips: [
      "Reducir la frecuencia de riego",
      "Comprobar drenaje del sustrato",
      "Aplicar fertilizante rico en nitrógeno",
      "Revisar el pH del agua (ideal 6.0–6.5)"
    ]
  },
  "Puntas quemadas": {
    cause: `
      Síntoma típico de sobrefertilización. La planta no puede procesar
      el exceso de sales minerales, dañando las hojas desde las puntas.
    `,
    tips: [
      "Reducir dosis de fertilizante",
      "Realizar un lavado de raíces",
      "Usar fertilizantes específicos para la etapa",
      "Esperar varios riegos antes de volver a fertilizar"
    ]
  },
  "Manchas blancas": {
    cause: `
      Puede tratarse de hongos (oídio) o plagas como trips o ácaros.
      La humedad elevada y mala ventilación son factores clave.
    `,
    tips: [
      "Reducir humedad ambiental",
      "Mejorar ventilación del cultivo",
      "Aplicar fungicida preventivo",
      "Revisar hojas por el reverso"
    ]
  }
};

document.getElementById("diagnosis").innerHTML = `
  <h2 class="section-title">Diagnóstico de la Planta</h2>
  <div class="card-grid">
    ${Object.entries(diagnosis).map(([symptom, data]) => `
      <div class="card">
        <h3>${symptom}</h3>
        <p>${data.cause}</p>
        <strong>Recomendaciones:</strong>
        <ul>
          ${data.tips.map(tip => `<li>${tip}</li>`).join("")}
        </ul>
      </div>
    `).join("")}
  </div>
`;
