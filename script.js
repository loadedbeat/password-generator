const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const specialChar = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let masterArray = []

let password1_el = document.getElementById("password1")                                             // select the html element
let password2_el = document.getElementById("password2")                                             // select the html element
let randomNumberOne = ""                                                                            // create first random number
let passwordOne = ""                                                                                // create password one
let randomNumberTwo = ""                                                                            // create second random number
let passwordTwo = ""                                                                                // create password two

function generate() {                                                                               // onclick function to generate password


    if (document.getElementById('noNumbers').checked && document.getElementById('specialCharacters').checked) {
        alert("no numbers or special char")

        masterArray = [...characters]
        //masterArray = characters
        console.log(masterArray)

    } else if (document.getElementById('noNumbers').checked && document.getElementById('specialCharacters').checked === false) {
        //alert("no numbers please")

        masterArray = [...characters, ...specialChar]
        //masterArray.concat(specialChar)
        console.log(masterArray)

    } else if (document.getElementById('noNumbers').checked === false && document.getElementById('specialCharacters').checked) {
        //alert("no special char please")

        masterArray = [...characters, ...numbers]
        //masterArray.concat(numbers)
        console.log(masterArray)

    }else {
        //alert("return ALL TEH CHARS")

        masterArray = [...characters, ...specialChar, ...numbers]
        console.log(masterArray)
    }

    let passwordLength_el = document.getElementById("passwordLength").value                         // create variable based on number inside input field

    if(passwordLength_el === ""){                                                                   // if no value in input field
        passwordLength_el = 15                                                                      // set password length to 15
    } else {
        passwordLength_el = document.getElementById("passwordLength").value                         // if input field isn't empty, set password length to number in input field
    }
    
    for(let i=0; i < passwordLength_el; i++){                                                       // create loop to iterate 15 times
        randomNumberOne = Math.floor(Math.random() * masterArray.length)                             // generate random number
        passwordOne += masterArray[randomNumberOne]                                                  // accumulate 15 characters from array using the random number
        randomNumberTwo = Math.floor(Math.random() * masterArray.length)                             // generate random number
        passwordTwo += masterArray[randomNumberTwo]                                                  // accumulate 15 characters from array using the random number 
    }

    password1_el.textContent = passwordOne                                                          // overwrite html element
    passwordOne = ""                                                                                // clear var
    password2_el.textContent = passwordTwo                                                          // overwrite html element
    passwordTwo = ""                                                                                // clear var  
}

document.getElementById('password1').addEventListener('click', async () => {

    let copyText1 = document.getElementById("password1").textContent 

    try {
        await navigator.clipboard.writeText(copyText1)
        console.log("copied: " + copyText1)
    }
        catch (err) {
        console.error('Could not write to clipboard', err)
    }
})

document.getElementById('password2').addEventListener('click', async () => {

let copyText2 = document.getElementById("password2").textContent 

try {
    await navigator.clipboard.writeText(copyText2)
    console.log("copied: " + copyText2)
}
    catch (err) {
    console.error('Could not write to clipboard', err)
}
})

// let passToCopy = ""
// let whatIdClicked = ""

// let onClick = function() {
//     let copyText1 = document.getElementById("password1").textContent
//     let copyText2 = document.getElementById("password2").textContent

//     console.log(this.id, this.innerHTML);
   
//     if(this.id === "password1") {
//         passToCopy = copyText1
//         whatIdClicked = "password1"
//         alert("password1 " + passToCopy + " id: " + whatIdClicked)
//     } else {
//         passToCopy = copyText2
//         whatIdClicked = "password2"
//         alert("password2 " + passToCopy + " id: " + whatIdClicked)
//     }
// }

// document.getElementById('password1').onclick = onClick
// document.getElementById('password2').onclick = onClick





// document.getElementById(whatIdClicked).addEventListener('click', async () => {

// try {
//     await navigator.clipboard.writeText(passToCopy)
//     //alert("copied: " + copyText1)
//     console.log("copied: " + passToCopy)
// }
//     catch (err) {
//     console.error('Could not write to clipboard', err)
//     //alert("not copied")
// }

// })

    // navigator.clipboard.writeText(passToCopy).then(function() {

    // alert("Text successfully copied to clipboard! " + passToCopy);

    // }, function(error) {

    // alert("Failed to copy text to clipboard: " + error.message + "pass was " + passToCopy);

    // });


    // navigator.clipboard.writeText(passToCopy)
    //      .then(() => alert("Copied " + passToCopy))

    //window.navigator.clipboard.writeText(passToCopy)

    // navigator.clipboard.writeText(passToCopy).then(() => {
    // console.log('Content: ' + passToCopy +' copied to clipboard');
    // /* Resolved - text copied to clipboard successfully */
    // },() => {
    // console.error('Failed to copy');
    // /* Rejected - text failed to copy to the clipboard */
    // });

    // async () => {

    //     //let copyText1 = document.getElementById("password1").textContent 

    //     try {
    //         await navigator.clipboard.writeText(passToCopy)
    //         //alert("copied: " + copyText1)
    //         console.log("copied: " + passToCopy)
    //     }
    //         catch (err) {
    //         console.error('Could not write to clipboard', err)
    //         //alert("not copied")
    //     }
    // }



// let pass1 = document.querySelector('#password1');
// let pass2 = document.querySelector('#password2');

// let btnsArray = [pass1, pass2];

// btnsArray.forEach(btn => {

//     btn.addEventListener('click', async ()=> {

//         let copyText1 = document.getElementById("password1").textContent 

//         try {
//             await navigator.clipboard.writeText(copyText1)
//             //alert("copied: " + copyText1)
//             console.log("copied: " + copyText1)
//         }
//             catch (err) {
//             console.error('Could not write to clipboard', err)
//             //alert("not copied")
//         }

//     });

// });

// document.getElementById('password1').addEventListener('click', async () => {

//     let copyText1 = document.getElementById("password1").textContent 

//     try {
//         await navigator.clipboard.writeText(copyText1)
//         //alert("copied: " + copyText1)
//         console.log("copied: " + copyText1)
//     }
//         catch (err) {
//         console.error('Could not write to clipboard', err)
//         //alert("not copied")
//     }

// })

// document.getElementById('password2').addEventListener('click', async () => {

//     let copyText2 = document.getElementById("password2").textContent 

//     try {
//         await navigator.clipboard.writeText(copyText2)
//         //alert("copied: " + copyText2)
//         console.log("copied: " + copyText2)
//     }
//         catch (err) {
//         console.error('Could not write to clipboard', err)
//         alert("not copied")
//     }

// })



// function copyToClipboard1() {                                                                       // onclick function to copy to clipboard - 'e' is the argument passed from html which was 'this'

//     //alert("Pass1: " + holdOne + "\n" + "Pass1: " + holdTwo)

//     let copyText1 = document.getElementById("password1").textContent                                        // copyText variable set to password in div - e.id = this.'div ID'

//     alert("pre if/else " + copyText1)

//     navigator.clipboard.writeText(copyText1).then(() => {                                            // uses Clipboard API and places copyText into clipboard via arrow function - need to learn more about this
//         alert("copied")
//         console.log("Copied to clipboard!")                                                         // console.log message if successful
//     }).catch(error => {                                                                             // if error
//         alert("not copied")
//         console.error("Failed to copy: ", error)                                                    // console.log error message plus official JS error message
//     })
// }

// function copyToClipboard2() {                                                                       // onclick function to copy to clipboard - 'e' is the argument passed from html which was 'this'

//     //alert("Pass1: " + holdOne + "\n" + "Pass1: " + holdTwo)

//     let copyText2 = document.getElementById("password2").textContent                                        // copyText variable set to password in div - e.id = this.'div ID'

//     alert("pre if/else " + copyText2)

    // navigator.clipboard.writeText(copyText2).then(() => {                                            // uses Clipboard API and places copyText into clipboard via arrow function - need to learn more about this
    //     alert("copied")
    //     console.log("Copied to clipboard!")                                                         // console.log message if successful
    // }).catch(error => {                                                                             // if error
    //     alert("not copied")
    //     console.error("Failed to copy: ", error)                                                    // console.log error message plus official JS error message
    // })
// }