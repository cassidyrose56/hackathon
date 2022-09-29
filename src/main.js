// document.addEventListener('DOMContentLoaded', () => {
//     console.log("hello");
//     const ninja = document.createElement('img');
//     ninja.setAttribute('id', 'ninja');
//     ninja.setAttribute('src', "./src/assets/Ninja-128.png");
//     ninja.style.height = "90%"
//     document.getElementById('body').appendChild('ninja');
// });







// const startButton = document.createElement('button');
// startButton.setAttribute('id', 'startButton')
// document.querySelector('body').appendChild(startButton);
// startButton.innerHTML = "Start game!"
// console.log(startButton);

startButton.addEventListener("click", () => {
  chrome.tabs.query({active: true}, function(tabs) {
    var tab = tabs[0];
    if (tab) {
        chrome.scripting.executeScript(
            {
                target: {tabId: tab.id},
                func: populateNinja
            }
        )
    } else {
        alert("nothing active")
    }
  })
});

async function populateNinja() {
    // const ninja = document.createElement('img');
    // ninja.setAttribute('id', 'ninja');
    // ninja.setAttribute('src', "src/assets/Ninja-128.png");
    // ninja.style.height = "90%"
    // document.querySelector('body').appendChild(ninja);
    document.body.style.backgroundColor = "white";
}



// document.addEventListener('click', () => {
//   var test = document.querySelectorAll('.MV3Tnb');
//   console.log("I am clicking!!");
// });



























// to add to the scripts manifest "jquery.min.js", 


//JavaScript
// var body = document.querySelectorAll('.MV3Tnb')
// var contents = document.getElementById('contents');
// contents.parentNode.removeChild(contents);

// jQuery
// var contents = $('#contents');
// contents.remove();


// resize ninjas with no whitespace