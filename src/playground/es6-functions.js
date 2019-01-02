const square = function(x) {
    return x*x;
}

const squareArrow = (x) => x*x;

console.log(squareArrow(8));

const fullName = (name) => {
    return name.split(" ")[0]    
}

const fullNameCompressed = (name) => name.split(" ")[0]

console.log(fullName("George Alonge"));
console.log(fullNameCompressed("George Alonge"));

const user = {
    name: "George",
    cities: ["Lagos", "Abuja", "Jos"],
    printPlacesLived() {
        const citiesMessage = this.cities.map((city) => {
            return (this.name + " has lived in " + city+"!");
        })
        console.log(citiesMessage);

        // this.cities.forEach((city) => {
        //     console.log(this.name + " has lived in " + city);
        // });
    }
}
user.printPlacesLived();

const multiplier =  {
    numbers: [2,4,6], 
    multiplyBy: 2, 
    multiply() {
        return (this.numbers.map((number) => number*this.multiplyBy));
    }
}

console.log(multiplier.multiply());