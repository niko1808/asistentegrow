const knowledge = {
  Germinación: {
    title: "Etapa de Germinación",
    description: `
      En esta fase la semilla se activa y comienza a desarrollar la raíz principal.
      Es fundamental mantener una humedad elevada (70–80%) y una temperatura estable
      entre 22 °C y 26 °C. No requiere fertilizantes; el exceso puede dañar la semilla.
    `,
    tips: [
      "Usar agua sin cloro",
      "No exponer a luz directa intensa",
      "Mantener el sustrato húmedo, no encharcado"
    ]
  },
  Vegetativo: {
    title: "Etapa Vegetativa",
    description: `
      La planta desarrolla hojas, tallos y estructura. Aquí necesita mayor cantidad
      de nitrógeno para favorecer el crecimiento. La luz debe ser intensa y constante.
    `,
    tips: [
      "Fotoperiodo recomendado: 18/6",
      "Incrementar riego progresivamente",
      "Controlar plagas desde temprano"
    ]
  },
  Floración: {
    title: "Etapa de Floración",
    description: `
      La planta deja de crecer en tamaño y concentra su energía en producir flores.
      Se reduce el nitrógeno y se aumenta fósforo y potasio. La humedad debe bajar
      para evitar hongos.
    `,
    tips: [
      "Fotoperiodo recomendado: 12/12",
      "Humedad ideal: 40–50%",
      "Evitar estrés lumínico"
    ]
  }
};

document.getElementById("knowledge").innerHTML = `
  <h2 class="section-title">Guía de Cultivo</h2>
  <div class="card-grid">
    ${Object.values(knowledge).map(stage => `
      <div class="card">
        <h3>${stage.title}</h3>
        <p>${stage.description}</p>
        <ul>
          ${stage.tips.map(tip => `<li>${tip}</li>`).join("")}
        </ul>
      </div>
    `).join("")}
  </div>
`;
