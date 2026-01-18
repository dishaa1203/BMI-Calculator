export function updateResult(bmi, category) {
  const result = document.getElementById("result");
  result.innerHTML = `
    <h2 style="color:${category.color}">
      BMI: ${bmi.toFixed(1)} (${category.label})
    </h2>
    <p>Your BMI indicates <strong>${category.label}</strong>.</p>
  `;
}

export function updateProgress(bmi) {
  const bar = document.getElementById("progress");
  bar.value = Math.min(bmi, 40);
}
