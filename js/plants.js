const PLANTS_KEY = "plants";
let editingPlantId = null;

/* =========================
   UTILIDADES
========================= */

function getPlants() {
  return Storage.get(PLANTS_KEY);
}

function savePlants(plants) {
  Storage.set(PLANTS_KEY, plants);
}

function clearForm() {
  document.getElementById("pName").value = "";
  document.getElementById("pGenetic").value = "";
  document.getElementById("pStage").value = "Germinación";
  editingPlantId = null;
}

/* =========================
   CRUD
========================= */

function addOrUpdatePlant() {
  const name = document.getElementById("pName").value.trim();
  const genetic = document.getElementById("pGenetic").value.trim();
  const stage = document.getElementById("pStage").value;

  if (!name || !genetic) {
    alert("Completá todos los campos");
    return;
  }

  const plants = getPlants();

  if (editingPlantId) {
    // EDITAR
    const plant = plants.find(p => p.id === editingPlantId);
    if (!plant) return;

    plant.name = name;
    plant.genetic = genetic;
    plant.stage = stage;
  } else {
    // AGREGAR
    plants.push({
      id: Date.now(),
      name,
      genetic,
      stage,
      history: []
    });
  }

  savePlants(plants);
  clearForm();
  renderPlants();
}

function editPlant(id) {
  const plant = getPlants().find(p => p.id === id);
  if (!plant) return;

  document.getElementById("pName").value = plant.name;
  document.getElementById("pGenetic").value = plant.genetic;
  document.getElementById("pStage").value = plant.stage;

  editingPlantId = id;
}

function deletePlant(id) {
  if (!confirm("¿Eliminar esta planta?")) return;

  const plants = getPlants().filter(p => p.id !== id);
  savePlants(plants);
  renderPlants();
}

/* =========================
   RENDER
========================= */

function renderPlants() {
  const plants = getPlants();
  const container = document.getElementById("plants");

  container.innerHTML = `
    <h2>Plantas</h2>
    <input id="pName" placeholder="Nombre">
    <input id="pGenetic" placeholder="Genética">
    <select id="pStage">
      <option>Germinación</option>
      <option>Vegetativo</option>
      <option>Floración</option>
    </select>
    <button onclick="addOrUpdatePlant()">
      ${editingPlantId ? "Actualizar" : "Agregar"}
    </button>

    <ul>
      ${plants.map(p => `
        <li>
          <strong>${p.name}</strong> (${p.genetic}) - ${p.stage}
          <button onclick="editPlant(${p.id})">Editar</button>
          <button onclick="deletePlant(${p.id})">Eliminar</button>
        </li>
      `).join("")}
    </ul>
  `;
}

/* =========================
   INIT
========================= */

renderPlants();
