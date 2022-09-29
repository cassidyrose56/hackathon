const startButton = document.createElement('button');
startButton.setAttribute('id', 'startButton')
document.querySelector('body').appendChild(startButton);
startButton.innerHTML = "Start game!"
console.log(startButton);

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

// declare a new variable set to the value of document.quertySelectorAll('*[id]')
// iterate through that variable


async function populateNinja() {
    const ninja = document.createElement('img');
    ninja.setAttribute('id', 'ninja');
    ninja.setAttribute('src', "https://media.istockphoto.com/vectors/simple-cute-ninja-mascot-design-vector-id1262756071?k=20&m=1262756071&s=170667a&w=0&h=JRnSjaWWiS1V7x2YJR8Y_C6KjicV2OTPNZkB4JMqzTY=");
    //ninja.innerHTML = 'ninjago'
    ninja.style.height = "20%"
    document.querySelector('body').appendChild(ninja);

    let divsArr = document.querySelectorAll("h1");
    console.log(typeof divsArr)
    let previousEl = divsArr[0];
    console.log(previousEl)
    for (let i = 0; i < divsArr.length; i++) {
        const parent = divsArr[i].parentNode;
        // console.log(parent)
        console.log(document.getElementById('ninja'))
        parent.replaceChild(document.getElementById('ninja'), divsArr[i]);
        console.log(divsArr[i]);
        divsArr[i].parentNode.removeChild(divsArr[i]);
        console.log(divsArr[i]);

        if (previousEl !== divsArr[0]) {
            divsArr[i - 1] = previousEl;
            previousEl = divsArr[i];
        }
        
    }
    
    // const ninja = document.createElement('video');
    // ninja.setAttribute('id', 'ninja');
    // ninja.setAttribute('src', './src/assets/Ninja-128.mp4');
    // startButton.addEventListener('click', async function () {
    //     startButton.disabled = true;
    //     try {
    //         await ninja.requestPictureInPicture();
    //       } catch (error) {
    //             alert("doesn't work!");
    //       } finally {
    //         startButton.disabled = false;
    //       }
    //     });
      };




// document.addEventListener('DOMContentLoaded', () => {
//     console.log("hello");
//     const ninja = document.createElement('img');
//     ninja.setAttribute('id', 'ninja');
//     ninja.setAttribute('src', "./src/assets/Ninja-128.png");
//     ninja.style.height = "90%"
//     document.getElementById('body').appendChild('ninja');
// });










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