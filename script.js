// Mood and song suggestions
const moodSuggestions = {
    Happy: [
      { title: "Happy - Pharrell Williams", link: "https://youtu.be/ZbZSe6N_BXs" },
      { title: "Can't Stop the Feeling - Justin Timberlake", link: "https://youtu.be/ru0K8uYEZWw" },
      { title: "Walking on Sunshine - Katrina & The Waves", link: "https://youtu.be/iPUmE-tne5U" }
    ],
    Sad: [
      { title: "Someone Like You - Adele", link: "https://youtu.be/hLQl3WQQoQ0" },
      { title: "Fix You - Coldplay", link: "https://youtu.be/k4V3Mo61fJM" },
      { title: "Let Her Go - Passenger", link: "https://youtu.be/RBumgq5yVrA" }
    ],
    Excited: [
      { title: "Eye of the Tiger - Survivor", link: "https://youtu.be/btPJPFnesV4" },
      { title: "Thunder - Imagine Dragons", link: "https://youtu.be/fKopy74weus" },
      { title: "Uptown Funk - Bruno Mars", link: "https://youtu.be/OPf0YbXqDm0" }
    ],
    Relaxed: [
      { title: "Weightless - Marconi Union", link: "https://youtu.be/UfcAVejslrU" },
      { title: "Ocean Eyes - Billie Eilish", link: "https://youtu.be/viimfQi_pUw" },
      { title: "Let It Be - The Beatles", link: "https://youtu.be/QDYfEBY9NM4" }
    ]
  };
  
  
  // Background colors for moods
  const moodColors = {
    Happy: "#ffecb3",
    Sad: "#800080", // Black background for Sad
    Excited: "#ffcdd2",
    Relaxed: "#c8e6c9"
  };
  
  // Selectors
  const moodButtons = document.querySelectorAll(".mood-btn");
  const suggestionText = document.getElementById("suggestion-text");
  const suggestionBox = document.getElementById("suggestion-box");
  moodButtons.forEach(button => {
    button.addEventListener("click", () => {
      const mood = button.getAttribute("data-mood");
  
      // Generate HTML for song suggestions
      const suggestions = moodSuggestions[mood]
        .map(song => `<a href="${song.link}" target="_blank">${song.title}</a>`)
        .join("<br>");
  
      // Update the suggestion box
      suggestionText.innerHTML = `Songs for ${mood} mood:<br>${suggestions}`;
  
      // Change background and suggestion box style
      document.body.style.background = moodColors[mood];
      suggestionBox.style.background = mood === "Sad" ? "rgba(0, 0, 0, 0.8)" : moodColors[mood];
  
      // Adjust text color for contrast
      
    });
  });
  // Set the home page background image
document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWMlMjBiYXNlZCUyMHRoZW1lfGVufDB8fDB8fHww')";
document.body.style.backgroundSize = "cover"; // Ensures the image covers the entire page
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundAttachment = "fixed"; // Keeps the background fixed while scrolling

 
  
