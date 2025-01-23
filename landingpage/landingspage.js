const button = document.getElementById("js--menu");
const navigation = document.getElementById("js--nav");
const body = document.getElementById("js--body");

console.log(body);
console.log(navigation);

button.onclick = function () {
    navigation.style.visibility = "visible";
    body.style.overflow = "hidden";
    navigation.style.opacity = 1;
}