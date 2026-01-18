import { calculateBMI, getCategory, targetWeight } from "./calculator.js";
import { isValid } from "./validation.js";
import { Storage } from "./storage.js";
import { updateResult, updateProgress } from "./ui.js";

let unit = "metric";
let history = Storage.get("history", []);

const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const unitToggle = document.getElementById("unit");

function handleInput() {
  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);

  if (!isValid(height) || !isValid(weight)) return;

  const bmi = calculateBMI(height, weight, unit);
  const category = getCategory(bmi);

  updateResult(bmi, category);
  updateProgress(bmi);

  history.unshift({
    date: new Date().toLocaleDateString(),
    bmi: bmi.toFixed(1),
    status: category.label
  });

  history = history.slice(0, 5);
  Storage.set("history", history);
}

heightInput.addEventListener("input", handleInput);
weightInput.addEventListener("input", handleInput);

unitToggle.addEventListener("change", e => {
  unit = e.target.value;
  handleInput();
});
