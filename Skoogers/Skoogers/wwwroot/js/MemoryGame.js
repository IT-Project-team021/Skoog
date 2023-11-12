// Array to hold the sequence of colors to be played
sequence = ['blue', 'green', 'blue', 'green', 'orange'];
let currentStep = 0; // Tracks the current step in the sequence the player is on
let health = 3; // Tracks the player's health (number of tries)

function generateRandomSequence(length) {
  const colors = ['blue', 'green', 'orange', 'yellow', 'red'];
  const randomSequence = [];
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    randomSequence.push(colors[randomIndex]);
  }
  return randomSequence;
}

// Plays the sound and shows the note associated with the given color
function playSound(color) {
  const sound = document.getElementById(color + '_sound');
  //sound.play();
  if (sound.paused) {
    sound.play();
  } else {
    sound.currentTime = 0; // Reset the audio to the start if it's already playing
    sound.play();
  }
  const note = document.getElementById(color + '_note');
  note.style.visibility = 'visible';
  setTimeout(() => {
    note.style.visibility = 'hidden'; // Hide the note after 1 second
  }, 1000);
}

// Starts the sequence of sounds with a delay between each
function startSequence() {
    sequence.forEach((color, index) => {
    setTimeout(() => {
      playSound(color);
    }, 1500 * index); // Start each sound 3 seconds after the last
  });
}

// Checks the player's input against the sequence
function checkInput(color) {
    // If the input color is not the next in the sequence, show failure
    if (sequence[currentStep] !== color) {
      setTimeout(showFailure, 1000);
    } else {
      // Otherwise, play the sound and increment the step
      playSound(color);
      currentStep++;
      // If the end of the sequence is reached, show success
      if (currentStep === sequence.length) {
        setTimeout(showSuccess, 1000);
      }
    }
  }

// Function to show the success message
function showSuccess() {
  setTimeout(() => {
    alert('Great job!');
    sequence = generateRandomSequence(sequence.length + 1); // Increase the sequence length by 1
    resetGame();
  }, 1000);
}

// Function to show the failure message
function showFailure() {
    //const failImage = document.getElementById('fail_image');
    //failImage.style.display = 'block'; // Make the fail image visible
    //failImage.classList.add('visible'); // Use class to control visibility
    health--; // Deduct a health point
    updateHealthDisplay(); 

    setTimeout(() => {
        const failImage = document.getElementById('fail_image');
        failImage.classList.add('visible'); // Use class to control visibility
    
        // If health has reached 0, end the game after the fail message has been shown
        if (health === 0) {
          setTimeout(() => {
            alert('Just a little, you will do it next time!');
            resetGame();
          }, 1000); // Adjust this timeout as needed
        } else {
          // Allow the player to try again
          currentStep = 0;
        }
      }, 1000); // Delay the fail message until after the last note is hidden
    }

// Updates the health display (hearts)
function updateHealthDisplay() {
    const hearts = document.querySelectorAll('.health_points img'); // Select all heart images
    hearts.forEach((heart, index) => {
        // Hide or show hearts based on the current health
        heart.style.visibility = index < health ? 'visible' : 'hidden';
      });
  }

  function resetGame() {
    currentStep = 0;
    health = 3; // Reset health if needed
    hideMessages();
    updateHealthDisplay();
    sequence = generateRandomSequence(5); // Generate a new sequence of 5 notes
    setTimeout(startSequence, 1500);
  }

// Stops click events from hiding messages if clicked on the message itself
function stopPropagation(event) {
    event.stopPropagation();
  }

// Hides success and failure messages
function hideMessages() {
    const successImage = document.getElementById('success_image');
    const failImage = document.getElementById('fail_image');
    //if (successImage) successImage.style.display = 'none';
    //if (failImage) failImage.style.display = 'none';
    if (successImage) successImage.classList.remove('visible');
    if (failImage) failImage.classList.remove('visible');
  }

// Event listener for hiding messages on window click
window.addEventListener('click', hideMessages);

// Prevent immediate hiding on click
document.getElementById('success_image').addEventListener('click', stopPropagation);
document.getElementById('fail_image').addEventListener('click', stopPropagation);

// Attaches event listeners to the buttons after the DOM content has loaded
document.addEventListener('DOMContentLoaded', () => {

    // Assuming you have defined buttons for 'yellow' and 'red' in your HTML
    const allColors = ['blue', 'green', 'orange', 'yellow', 'red'];

    allColors.forEach(color => {
        const button = document.getElementById(color + '_button');
        if (button) {
          button.addEventListener('click', () => {
            checkInput(color); // Pass the color to the checkInput function
          });
        }
      });

  // Start the game sequence 3 seconds after the page loads
  setTimeout(startSequence, 1500);
});
