// Fetch a random nature image from the Unsplash API
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())  // Convert the response to JSON format
    .then(data => {
        console.log(data);  // Log the response to check if it's correct
        
        // Set the background image using the retrieved image URL
        document.body.style.backgroundImage = `url(${data.urls.full})`;
        
        // Display the author of the image
        document.getElementById("author").textContent = `By: (${data.user.name})`;
    });
