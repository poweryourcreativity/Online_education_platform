let currentIndex = 0;
const slides = document.querySelector(".carousel-inner").children;
const totalSlides = slides.length;

function showSlide(index) {
  const offset = -1200 * index;
  document.querySelector(
    ".carousel-inner"
  ).style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
  currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
  showSlide(currentIndex);
}

setInterval(nextSlide, 5000);
showSlide(currentIndex);

function updateTimeAndGreeting() {
  const now = new Date();
  const timeOptions = {
    timeZone: "Asia/Shanghai",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const localTime = now.toLocaleTimeString("en-US", timeOptions);
  document.getElementById("announcement-time").innerText =
    "现在是北京时间：" + localTime;

  const hour = parseInt(
    now.toLocaleTimeString("en-US", {
      timeZone: "Asia/Shanghai",
      hour: "2-digit",
      hour12: false,
    }),
    10
  );
  let greeting;
  if (hour >= 6 && hour < 12) {
    greeting = "早上好！";
  } else if (hour >= 12 && hour < 13) {
    greeting = "中午好！";
  } else if (hour >= 13 && hour < 17) {
    greeting = "下午好！";
  } else {
    greeting = "晚上好！";
  }

  document.getElementById(
    "greeting-message"
  ).innerText = `尊敬的客户，${greeting}`;
}

setInterval(updateTimeAndGreeting, 1000);
updateTimeAndGreeting();

function showCategory(categoryId) {
  const categories = document.querySelectorAll(".course-list");
  categories.forEach((category) => {
    category.style.display = category.id === categoryId ? "flex" : "none";
  });

  const buttons = document.querySelectorAll(".tab-button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  document
    .querySelector(`.tab-button[onclick="showCategory('${categoryId}')"]`)
    .classList.add("active");
}
