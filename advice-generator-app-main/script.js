const dice = document.querySelector(".blockquote__btn"); // Get the dice button element
const adviceNum = document.querySelector(".blockquote__digit"); // Get the element to display the advice number
const adviceText = document.querySelector(".blockquote__para"); // Get the element to display the advice text

dice.addEventListener("click", function () {
  showQuote(); // When the dice button is clicked, call the showQuote function
});

async function showQuote() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice"); // Fetch a random advice from the API
    const data = await response.json(); // Parse the response data
    console.log(data); 
    const advice = data.slip; // Extract the advice object from the data

    dice.style.filter = "blur(10px)"; // Apply a blur effect to the dice button
    adviceText.style.filter = "blur(10px)"; // Apply a blur effect to the advice text
    adviceText.textContent = advice.advice; // Set the advice text content to the fetched advice
    adviceNum.textContent = advice.id; // Set the advice number content to the fetched advice number

    setTimeout(() => {
      dice.style.filter = "none"; // Remove the blur effect from the dice button after a delay
      adviceText.style.filter = "none"; // Remove the blur effect from the advice text after a delay
    }, 1200);
  } catch (error) {
    console.error(`Error ${error}`); // Log any errors that occur during the fetch operation
  }
}
