const comPic = document.querySelector(".comPic");
const myPicR = document.querySelector(".myPicR");
const mypicS = document.querySelector(".myPicS");
const myPciP = document.querySelector(".myPicP");

const RSP = ["묵", "찌", "빠"];

function randomPic() {
    const randomNum = Math.floor(Math.random() *3);
    const randomRSP = RSP[randomNum];
    return randomRSP;



}

function mainFuntion() {
    const randomRSP = randomPic();
    comPic.innerText = randomRSP;

}

myPicR.addEventListener("click", mainFuntion);
mypicS.addEventListener("click", mainFuntion);
myPicP.addEventListener("click", mainFuntion);
