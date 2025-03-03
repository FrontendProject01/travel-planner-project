document.addEventListener("DOMContentLoaded", function () {
    const packageSelect = document.getElementById("package");
    const guestsInput = document.getElementById("guests");
    const totalPriceDisplay = document.createElement("p");
    totalPriceDisplay.style.fontWeight = "bold";
    totalPriceDisplay.style.fontSize = "1.2rem";
    totalPriceDisplay.style.marginTop = "10px";

    const form = document.getElementById("booking-form");
    form.appendChild(totalPriceDisplay);

    const packagePrices = {
        "Economy Package": 500,
        "Premium Package": 1200,
        "Luxury Package": 2500
    };

    function updateTotalPrice() {
        const selectedPackage = packageSelect.value;
        const guests = parseInt(guestsInput.value) || 0;

        if (selectedPackage && guests > 0) {
            const pricePerPerson = packagePrices[selectedPackage];
            const totalPrice = pricePerPerson * guests;
            totalPriceDisplay.textContent = `Total Price: ₹${totalPrice}`;
        } else {
            totalPriceDisplay.textContent = "";
        }
    }

    packageSelect.addEventListener("change", updateTotalPrice);
    guestsInput.addEventListener("input", updateTotalPrice);

    // Handle Form Submission
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const destination = document.getElementById("destination").value;
        const travel_date = document.getElementById("date").value;
        const guests = parseInt(document.getElementById("guests").value);
        const package_name = document.getElementById("package").value;
        const payment_method = document.getElementById("payment").value;
        const notes = document.getElementById("notes").value;

        if (!packagePrices[package_name] || guests <= 0) {
            alert("Please select a valid package and number of guests.");
            return;
        }

        const total_price = packagePrices[package_name] * guests;

        const bookingData = {
            name,
            email,
            phone,
            destination,
            travel_date,
            guests,
            package_name,
            total_price,
            payment_method,
            notes
        };

        try {
            const response = await fetch("http://localhost:5000/bookings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bookingData)
            });

            const result = await response.json();

            if (response.ok) {
                alert(`Booking successful! Your booking ID: ${result.bookingId}`);
                form.reset();
                totalPriceDisplay.textContent = "";
            } else {
                alert("Booking failed. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while booking. Please try again.");
        }
    });
});
