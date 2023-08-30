const bar = document.querySelector("#bar");
const nav = document.getElementById("navbar");
const cl = document.getElementById("close");


if (bar) {
    // console.log("sfdfadfa");
    bar.addEventListener("click", () => {
        // console.log("euuuuuuuu");
        nav.classList.add('act');
    });
}
cl.addEventListener("click", () => {
    // console.log("euuuuuuuu");
    nav.classList.remove('act');
})




// sproduct details

const m = document.getElementById("Mainimg");
const s = document.getElementsByClassName("small-img");

s[0].onclick = () => {
    m.src = s[0].src;
};

s[1].onclick = () => {
    m.src = s[1].src;
};
s[2].onclick = () => {
    m.src = s[2].src;
};
s[3].onclick = () => {
    m.src = s[3].src;
};
