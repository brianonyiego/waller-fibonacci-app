document.getElementById('button').addEventListener('click', function() {
    let input = document.getElementById('input').value;
    let output = document.getElementById('output');
    let sequence = [];

    try {
        if (input < 0) {
            throw "Input must be a positive number.";
        } else if (input === '') {
            throw "Please enter a number.";
        } else if (isNaN(input)) {
            throw "Please enter a valid numerical value.";
        }

        for (let i = 0; i < input; i++) {
            if (i === 0) {
                sequence.push(0);
            } else if (i === 1) {
                sequence.push(1);
            } else {
                sequence.push(sequence[i - 1] + sequence[i - 2]);
            }
        }

        output.innerHTML = "Fibonacci Sequence: " + sequence.join(', ');

    } catch (error) {
        output.innerHTML = "Error: " + error;
    } finally {
        alert("Sequence calculation completed.");
    }
});
