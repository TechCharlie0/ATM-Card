// Grab elements
const wordElement = document.querySelector(".word");
const bubbleElement = document.getElementById("bubble");

// Function to create bubble effect
function showBubble(event) {
  const wordRect = wordElement.getBoundingClientRect();
  const mouseX = event.clientX - wordRect.left;
  const mouseY = event.clientY - wordRect.top;

  bubbleElement.style.left = `${mouseX - 25}px`; // Position bubble relative to cursor
  bubbleElement.style.top = `${mouseY - 25}px`;

  bubbleElement.classList.add("active");
}

// Function to hide bubble after it disappears
function hideBubble() {
  bubbleElement.classList.remove("active");
}

// Add event listeners
wordElement.addEventListener("mousemove", showBubble);
wordElement.addEventListener("mouseleave", hideBubble);
