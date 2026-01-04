function exportPDF() {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("p", "mm", "a4");

  let y = 15;

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(16);
  pdf.text("Grow Assistant", 10, y);

  y += 10;

  pdf.setFontSize(10);
  pdf.setFont("helvetica", "normal");
  pdf.text("Reporte generado automáticamente", 10, y);

  y += 10;

  const plants = Storage.get("plants");

  if (!plants.length) {
    pdf.text("No hay plantas registradas.", 10, y);
  } else {
    plants.forEach((plant, index) => {
      y += 8;

      if (y > 280) {
        pdf.addPage();
        y = 15;
      }

      pdf.setFont("helvetica", "bold");
      pdf.text(`${index + 1}. ${plant.name}`, 10, y);

      y += 5;
      pdf.setFont("helvetica", "normal");
      pdf.text(`Genética: ${plant.genetic}`, 14, y);

      y += 5;
      pdf.text(`Etapa: ${plant.stage}`, 14, y);
    });
  }

  y += 15;
  pdf.setFontSize(9);
  pdf.text(
    "Grow Assistant es software gratuito. No incentiva actividades ilegales.",
    10,
    y
  );

  pdf.save("grow-assistant-reporte.pdf");
}
