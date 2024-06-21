/*
Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
*/
function calculateGrade() {
    while (true) {
        let mark =parseFloat(prompt("Enter the student's mark (0-100):"));
                  

        if (isNaN(mark) || mark < 0 || mark > 100) {
            alert("Please enter a valid mark between 0 and 100.");
        } else {
            let grade;
            if (mark >= 80) {
                grade = 'A';
            } else if (mark >= 60) {
                grade = 'B';
            } else if (mark >= 50) {
                grade = 'C';
            } else if (mark >= 40) {
                grade = 'D';
            } else {
                grade = 'E';
            }

            alert(`The grade for mark ${mark} is ${grade}.`);
            break; // Exit the loop after successfully determining and showing the grade
        }
    }
}

// Example usage:
calculateGrade();
