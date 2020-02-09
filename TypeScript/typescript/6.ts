var avg: number = 20;
var percentage: number = 90;

console.log("Value of avg: " + avg + " ,value of percentage: " + percentage);

var res: boolean = ((avg > 50) && (percentage > 80));
console.log("(avg>50)&&(percentage>80): ", res);

var res3: boolean = ((avg > 50) || (percentage > 80));
console.log("(avg>50)||(percentage>80): ", res3);

var res4: boolean = !((avg > 50) && (percentage > 80));
console.log("!((avg>50)&&(percentage>80)): ", res4);