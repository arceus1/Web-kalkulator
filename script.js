function calculate() {
        var input1 = parseFloat(document.getElementById('input1').value);
        var input2 = parseInt(document.getElementById('input2').value);
        var sum = input2 / input1;
        var hours = Math.floor(sum / 60);
        var minutes = Math.round (sum % 60);

        document.getElementById('modalText').innerText = "Hasile: " + hours + " jam " + minutes + "menit";
        document.getElementById('myModal').style.display = "flex";
    }

    function closeModal() {
        document.getElementById('myModal').style.display = "none";
    }
