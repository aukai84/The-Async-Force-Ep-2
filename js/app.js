//jshint esversion: 6
const contentContainer = document.getElementById("contentContainer");

function createDisplayInformation(argument) {

}




function requestHelper(link, listener) {
  contentContainer.innerHTML = '';
  let newReq = new XMLHttpRequest();
  newReq.addEventListener("load", listener);
  newReq.open('GET', link);
  newReq.send();
}