function calculate_discount(price: number, rate: number = 0.50) {
    var discount = price * rate;
    console.log("Discount Amount: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);