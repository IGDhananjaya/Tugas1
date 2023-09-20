function hitungFibonacci() {
    var n = parseInt(document.getElementById("inputAngka").value);

    if (isNaN(n)) {
        alert("Masukkan angka yang valid.");
        return;
    }

    var hasil = fibonacci(n);
    document.getElementById("hasilFibonacci").innerHTML = "Urutan Fibonacci Hingga ke-" + n + " adalah: " + hasil.join(", ");
}

function fibonacci(n) {
    if (n <= 0) {
        return [0];
    } else if (n == 1) {
        return [1];
    } else {
        var sequence = [0, 1];
        for (var i = 2; i <= n; i++) {
            sequence.push(sequence[i-1]+sequence[i-2]);
        }
        return sequence;
    }
}