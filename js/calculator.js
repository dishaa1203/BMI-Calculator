export function calculateBMI(height, weight, unit) {
  if (unit === "metric") {
    return weight / ((height / 100) ** 2);
  } else {
    return (703 * weight) / (height ** 2);
  }
}

export function getCategory(bmi) {
  if (bmi < 18.6) return { label: "Underweight", color: "blue" };
  if (bmi <= 24.9) return { label: "Normal", color: "green" };
  if (bmi <= 29.9) return { label: "Overweight", color: "orange" };
  return { label: "Obese", color: "red" };
}

export function targetWeight(height, unit) {
  if (unit === "metric") {
    return (22 * ((height / 100) ** 2)).toFixed(1);
  } else {
    return ((22 * height ** 2) / 703).toFixed(1);
  }
}
