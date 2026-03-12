// Fare Matrix Discount
let regularFare = 50; // Base fare in pesos
let discountPercentage = 0.20; // 20% discount

function getDiscount() {
    let discountAmount = regularFare * discountPercentage;
    let discountedFare = regularFare - discountAmount;
    
    document.getElementById("box-discount").innerHTML = `
        <div class="row justify-content-center mt-3">
            <div class="col-10 bg-dark text-white p-3"> 
                <h5>Discount Details:</h5>
                <p>Discount: -₱${discountAmount.toFixed(2)}</p>
                <h4>Discounted Fare: <span class="badge bg-success">₱${discountedFare.toFixed(2)}</span></h4>
            </div>
        </div>
    `;
}

// Fare Matrix Discount
let regluarFare = 50; // Base fare in pesos
function getRegularFare() {
    
    document.getElementById("square-regular").innerHTML = `
        <div class="row justify-content-center mt-3">
            <div class="col-10 bg-dark text-white p-3"> 
                <h5>Fare Details:</h5>
                <h4>Regular Fare:<span class="badge bg-success">₱${regularFare.toFixed(2)}</span></h4>
            </div>
        </div>
    `;
}
