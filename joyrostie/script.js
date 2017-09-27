function myFunction() {
    var div = document.getElementById('one');
    // console.log(zn);
    alert("ВНЕЗАПНО!");
    var img = document.createElement("img");
    img.src = "https://media2.giphy.com/media/10T5zdNwbdwbVm/200_s.gif"

    div.appendChild(img);

    // div.insertAdjacentHTML("afterEnd", '<img src="https://media2.giphy.com/media/10T5zdNwbdwbVm/200_s.gif">');
}