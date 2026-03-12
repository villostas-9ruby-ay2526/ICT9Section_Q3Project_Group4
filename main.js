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
