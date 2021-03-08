// Switch structure
// if (x == "value1") action1();
// else if (x == "value2") action2();
// else if (x == "value3") action3();
// else defaultAction;

//the code below only works on browser
switch (prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break
    case "sunny":
        console.log("Dress lightly.");
    case "cloudy":
        console.log("Go outside.");
        break;
    default:
        console.log("Unknown weather type");
        break;
}