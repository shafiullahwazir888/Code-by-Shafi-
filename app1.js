
const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdown = document.querySelectorAll(".dropdown select");

const fromCurr= document.querySelector(".from select");
const toCurr= document.querySelector(".to select");
const btn= document.querySelector("form button");

// Assuming countryList is an object like { USD: "United States", PKR: "Pakistan", ... }
// If it's not defined, you'll need to define it or fetch it from an API.


for (let select of dropdown) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") { 
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "PKR") { 
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    // Event listener outside the inner loop
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
   
        img.src = newSrc;
};
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    const fromLower = fromCurr.value.toLowerCase();
    const toLower = toCurr.value.toLowerCase();

    // Fetch the base currency JSON (e.g., usd.json)
    const URL = `${BASE_URL}/${fromLower}.json`;

  // Add this line at the beginning of your script, or within the function
// scope if the element is dynamic, to get a reference to the HTML element.
// Replace 'exchange-rate-message' with the actual ID of your message display element.
const msg = document.querySelector(".msg");

// ... your existing try-catch block
    try {
        let response = await fetch(URL);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        let data = await response.json();

        // Access the rate for the target currency
        let rate = data[fromLower][toLower];
        let total = amtVal * rate;
        if (msg) { // Add a check for msg before setting innerText
            msg.innerText = `${amtVal} ${fromCurr.value} = ${total} ${toCurr.value}`;
        }
    } catch (error) {
        console.error("Failed to fetch exchange rate:", error);
        if (msg) { // Add a check for msg before setting innerText
            msg.innerText = "Error fetching rate. Please try again.";
            
        }
    }

});