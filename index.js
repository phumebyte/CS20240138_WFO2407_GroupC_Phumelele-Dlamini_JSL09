// Fetch a random nature image from the Unsplash API
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())  // Convert the response to JSON format
    .then(data => {
        console.log(data);  // Log the response to check if it's correct
        
        // Set the background image using the retrieved image URL
        document.body.style.backgroundImage = `url(${data.urls.full})`;
        
        // Display the author of the image
        document.getElementById("author").textContent = `By: (${data.user.name})`;
    })
    .catch(err => {
        // Fallback background image if the API request fails
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`;
        
        // Display a fallback author name
        document.getElementById("author").textContent = `By: Dodi Achmad`;
    });
