
const text = ["Web Designer", "Web Developer", "Student"];
let index = 0;
let letterIndex = 0;
let currentText = "";
let isDeleting = false;

function typeText() {
  const speed = 100; // سرعة الكتابة

  if (index >= text.length) {
    index = 0;
  }

  currentText = text[index];

  if (isDeleting) {
    currentText = currentText.slice(0, --letterIndex);
  } else {
    currentText = currentText.slice(0, ++letterIndex);
  }

  document.getElementById("type-text").textContent = currentText;

  if (!isDeleting && currentText === text[index]) {
    isDeleting = true;
    speedWait = 1000; // انتظار قبل الحذف
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    index++;
    speedWait = 500; // انتظار قبل الكتابة
  }

  setTimeout(() => typeText(), speed);
}

typeText();
