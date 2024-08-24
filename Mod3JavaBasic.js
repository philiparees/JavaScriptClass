<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Tasks</title>
</head>
<body>
    <h1>JavaScript Tasks</h1>
    <div id="output"></div>
    <script>
        // Task 1: For loop to count from 0 to 10 and check if the number is odd or even
        for (let i = 0; i <= 10; i++) {
            if (i % 2 === 0) {
                document.getElementById("output").innerHTML += `Count ${i} is even<br>`;
            } else {
                document.getElementById("output").innerHTML += `Count ${i} is odd<br>`;
            }
        }

        // Task 2: Ask the user for a number between 5 and 20 and use it in a Do While loop
        let myNum;
        do {
            myNum = parseInt(prompt("Enter a number between 5 and 20:"));
        } while (isNaN(myNum) || myNum < 5 || myNum > 20);

        let counter = 1;
        do {
            document.getElementById("output").innerHTML += `Counter: ${counter}<br>`;
            counter++;
        } while (counter <= myNum);

        // Task 3: Store subjects in an array and display them
        let subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

        // Display the array values in a readable format using forEach()
        subjects.forEach(subject => {
            document.getElementById("output").innerHTML += `${subject}<br>`;
        });

        // Display the array values separated by commas using one statement
        document.getElementById("output").innerHTML += subjects.join(", ");
    </script>
</body>
</html>
