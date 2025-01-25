document.getElementById("generateBtn").addEventListener("click", generateNumbers);

function generateNumbers() {
    // 1 ile 80 arasında 10 benzersiz rastgele sayı üret.
    let numbers = [];
    while (numbers.length < 10) {
        let num = Math.floor(Math.random() * 80) + 1; // 1 ile 80 arasında sayı üret.
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }

    // Sayıları küçükten büyüğe doğru sırala.
    numbers.sort((a, b) => a - b);

    // Sayıları "küre" içerisinde göster.
    const container = document.getElementById("numberContainer");
    container.innerHTML = '';  // Bir sonraki deneme için, mevcut küreleri temizle.

    numbers.forEach(num => {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.textContent = num;
        container.appendChild(circle);
    });
}