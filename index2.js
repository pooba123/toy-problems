/* A program that takes the speed of a car as input e.g 80. 
* If the speed is less than 70, it should print “Ok”. 
* Otherwise, for every 5 km/s above the speed limit (70), 
* it should give the driver one demerit point and print 
* the total number of demerit points.
*/

function speedCounter() {
    // Declare variable to store demerit points
    let demerit_Points;

    // Variable to store speed of car
    let speedOfCar = parseFloat(prompt("Enter the speed of the car..."));

    // Confirm whether or not the speed of car is a valid number
    if (isNaN(parseFloat(speedOfCar)) || speedOfCar < 0) {
        alert("Kindly input a valid number above 0");
    }
    else {
        // Calculate demerit_Points for every 5 km/s above the speed limit (70)
        demerit_Points = ((speedOfCar - 70) / 5)
        // If speed of car <= 70
        if (speedOfCar <= 70) {
            alert("Ok")
        }
        //  If speed of car > 70 and demerit points <= 12
        else if (speedOfCar > 70 && demerit_Points <= 12) {
            alert(`Total demerit points: ${demerit_Points}`)
        }
        //  If speed of car > 70 and demerit points > 12
        else if (speedOfCar > 70 && demerit_Points > 12) {
            demerit_Points = ((speedOfCar - 70) / 5)
            alert("License suspended")
        }
    }
}

speedDetector()