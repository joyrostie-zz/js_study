function myFunction() {
    var zn = document.getElementsByTagName("p");
    var div = document.getElementById('one');
    // console.log(zn);
    alert("ВНЕЗАПНО!");
    div.insertAdjacentHTML("afterEnd", '<img src="https://media2.giphy.com/media/10T5zdNwbdwbVm/200_s.gif">');


}