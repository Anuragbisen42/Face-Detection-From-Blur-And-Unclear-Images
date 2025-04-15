// script.js

document.getElementById('submitBtn').addEventListener('click', function(event) {

    event.preventDefault();
  
    var formData = new FormData();
    var fileInput = document.getElementById('imageInput');
    var file = fileInput.files[0];
    if (!file) {
      alert('Please select an image file.');
      return;
    }
  
    formData.append('image', file);
    localStorage.setItem("goneMad", 1);
  
    fetch('http://127.0.0.1:5000/detect_faces', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log("Working")
      // document.getElementById('output').innerText = `Total faces detected: ${data.totalFaces}`;
      // localStorage.setItem("totalFaces", data.totalFaces);
    });


  });

//   Slideshow part

  // JavaScript for slideshow
  var images = document.querySelectorAll('.slideshow img');
  var current = 0;

  setInterval(function() {
    images[current].style.opacity = '0';
    current = (current + 1) % images.length;
    images[current].style.opacity = '1';
  }, 3000); // Change image every 3 seconds
  
let myName = localStorage.getItem("goneMad");

console.log(myName)

if(myName == 1) {
  document.getElementById("viewResult").style.display = "block";
  document.getElementById("submitContainer").style.display = "none";
  localStorage.setItem("goneMad", 0);
}