const startButton = document.createElement('button');
startButton.setAttribute('id', 'startButton')
document.querySelector('body').appendChild(startButton);
startButton.innerHTML = "Start game!"


// startButton.addEventListener("click", () => {
//   chrome.tabs.query({active: true}, function(tabs) {
//     var tab = tabs[0];
//     if (tab) {
//         chrome.scripting.executeScript(
//             {
//                 target: {tabId: tab.id},
//                 func: populateNinja
//             }
//         )
//     } else {
//         alert("nothing active")
//     }
//   })
// });
// ------ testin---------
let iterationCount = 0;
let previousVal = "";

startButton.addEventListener('click', () => {
    chrome.tabs.query({active: true}, function(tabs) { // Array of h1's from webpage
    var tab = tabs[0];
    if (tab) {
        chrome.scripting.executeScript(
            {
                target: {tabId: tab.id},
                func: getH1sArr,
                args: [iterationCount, previousVal]
            }
        )
    } else {
        alert("nothing active")
    }
  });
})

function populateNinja(array) {
    console.log(array);
    if (!array[iterationCount]) {
        return;
    }
    const ninja = document.createElement('img');
    ninja.setAttribute('id', 'ninja');
    ninja.setAttribute('src', "https://i.imgur.com/brxsybV.jpg");
    document.querySelector('body').appendChild(ninja);


    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    const arrayLength = array.length;
    iterationCount = getRandom(0, arrayLength - 1);
    console.log(getRandom(0, arrayLength - 20))
    console.log(iterationCount)
    

    const parent = array[iterationCount].parentNode;
    previousVal = array[iterationCount];
    parent.replaceChild(document.getElementById('ninja'), array[iterationCount]);
    //parent.removeChild(array[iterationCount]);
}

function getH1sArr() {
    populateNinja(document.querySelectorAll('li'));
}







//---------test end -----------



// declare a new variable set to the value of document.quertySelectorAll('*[id]')
// iterate through that variable



// async function populateNinja() {

    
//         console.log(divsArr[i]);
        
//         console.log(divsArr[i]);



    
//     console.log(typeof divsArr)
//     let previousEl = divsArr[0];
//     console.log(previousEl)
//     for (let i = 0; i < divsArr.length; i++) {
        
//         // console.log(parent)
//         console.log(document.getElementById('ninja'))
//         if (previousEl !== divsArr[0]) {
//             divsArr[i - 1] = previousEl;
//             previousEl = divsArr[i];
//         }

    // }
    


    
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
    // //       }
    // //     });
    //   };




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