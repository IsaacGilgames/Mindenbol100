let count = localStorage.getItem("count");

if (count !== null) {
    count = Number(count);
} else {
    count = 10;
}
function datumKiiras() {
    let ma = new Date()
    let futureDate = new Date()
    futureDate.setDate(ma.getDate() + (90 - count))
    const year = futureDate.getFullYear()
    const month = String(futureDate.getMonth() + 1).padStart(2, "0")
    const day = String(futureDate.getDate()).padStart(2, "0")
    const formattedDate = `${year}. ${month}. ${day}.`
    datum.textContent = formattedDate
}

const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")
const datum = document.querySelector("#date")
value.textContent = count
datumKiiras()
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        }
        else {
            count++;
        }
        value.textContent = count;
        localStorage.setItem("count", count);
        datumKiiras()
    });
});