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

// Fetch Dogecoin data from the CoinGecko API
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
.then(res => {
    if (!res.ok) {
        // Throw an error if the response is not OK
        throw Error("Something went wrong");
    }
    console.log(res.status);  // Log the response status
    return res.json();  // Convert the response to JSON format
})
.then(data => {
    // Display the Dogecoin image and name
    document.getElementById("crypto-top").innerHTML = `
    <img src=${data.image.small} />
    <span>${data.name}</span>
`;
    
    // Display current, highest, and lowest Dogecoin prices in ZAR
    document.getElementById("crypto").innerHTML += `
    <p>🎯: R${data.market_data.current_price.zar}</p>
    <p>👆: R${data.market_data.high_24h.zar}</p>
    <p>👇: R${data.market_data.low_24h.zar}</p>
`;
})
.catch(err => console.error(err));  // Log an error if the request fails

// Function to get and display the current time
function getCurrentTime() {
    const date = new Date();
    
    // Display the time in short format (hh:mm AM/PM)
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", { timeStyle: "short" });
}

// Update the time every second
setInterval(getCurrentTime, 1000);

