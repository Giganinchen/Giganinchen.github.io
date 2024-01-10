// Funktion, die prüft, ob ein Element im sichtbaren Bereich ist
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const footerHeight = document.querySelector("footer").offsetHeight;
  const bottomLimit = windowHeight - footerHeight;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= bottomLimit &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Funktion, die alle scroll-reveal-Elemente prüft und bei Bedarf sichtbar macht
function revealItems() {
  const items = document.querySelectorAll(".scroll-reveal-item");
  items.forEach((item) => {
    if (isInViewport(item)) {
      if (!item.classList.contains("visible")) {
        item.classList.add("visible");
        item.classList.remove("fade-out");
      }
    } else {
      if (item.classList.contains("visible")) {
        item.classList.remove("visible");
        item.classList.add("fade-out");
      }
    }
  });
}

// Event-Listener, der revealItems bei jedem Scroll-Event ausführt
window.addEventListener("scroll", revealItems);

// Sofortiges Ausführen von revealItems, um die sichtbaren Elemente anzuzeigen
revealItems();

// Funktion, um den Scroll-Event zu überwachen und den Button anzuzeigen
function handleScroll() {
  const button = document.getElementById("scrollToTopButton");
  if (window.scrollY > 200) {
    button.classList.add("visible");
  } else {
    button.classList.remove("visible");
  }
}

// Funktion, um beim Klicken auf den Button zur Oberseite der Website zu scrollen
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Event-Listener für den Scroll-Event und den Klick auf den Button
window.addEventListener("scroll", handleScroll);
document.getElementById("scrollToTopButton").addEventListener("click", scrollToTop);

const words = ["Web Developer", "Designer", "Freelancer", "Code Enthusiast", "HTML Veteran"];
let index = 0;
let wordIndex = 0;
let isDeleting = false;
let text = "";
const typingText = document.querySelector(".typing-text");
const cursor = document.querySelector(".cursor");

function type() {
  const currentWord = words[index];
  const currentLetter = currentWord[wordIndex];

  if (isDeleting) {
    text = currentWord.substring(0, wordIndex - 1);
    wordIndex--;
  } else {
    text = currentWord.substring(0, wordIndex + 1);
    wordIndex++;
  }

  typingText.textContent = `I am a ${text}`;

  // Hier wird überprüft, ob das Wort fertig getippt wurde.
  // Wenn ja, wird ein längeres Timeout gestartet, bevor das Löschen beginnt.
  if (!isDeleting && wordIndex === currentWord.length) {
    setTimeout(() => {
      isDeleting = true;
    }, 1000);
  }

  // Hier wird überprüft, ob das Wort komplett gelöscht wurde.
  // Wenn ja, wird ein kurzes Timeout gestartet, bevor das nächste Wort getippt wird.
  if (isDeleting && wordIndex === 0) {
    setTimeout(() => {
      isDeleting = false;
      index++;
      if (index === words.length) {
        index = 0;
      }
    }, 500);
  }

  const typingSpeed = isDeleting ? 50 : 100;
  setTimeout(type, typingSpeed);
}

type();

 // Set the date to compare with
  const birthday = new Date('2007-03-25');

  // Calculate the age
  function calculateAge() {
    const diff = Date.now() - birthday.getTime();
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25) * 100000000000000) / 100000000000000;
    document.getElementById('age').textContent = age;
  }

  // Call the function to update the age
  calculateAge();

  // Update the age every second
  setInterval(calculateAge, 1000);
