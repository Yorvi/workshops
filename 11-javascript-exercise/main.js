// 1. Do the following in javascript:

        // Target the element with the id of nycda-title.
        // Change the value of the text inside the element to say "Welcome to NYCDA"
        // Now grab the element with id of nycda-help-message and change the text inside to "Ask people in NYCDA for help if you're struggling"

        let nycdaTitle = document.getElementById("nycda-title")

        nycdaTitle.innerText = "Welcome to NYCDA"

        let nycdaHelp = document.getElementById("nycda-help-message")

        nycdaHelp.innerText = "Ask people in NYCDA for help if you're struggling"

// 2. Do the following in javascript:

        // Target all the elements with the class of nycda-class
        // Log the last element from that class collection in your developer console

        document.getElementsByClassName("nycda-class")

        let lastClass = document.getElementsByClassName("nycda-class")[3]

        console.log(lastClass)

// 3. Do the following in javascript:

        // Target all the paragraph tags that exist in your document
        // Log the second paragraph element to your developer console

        let paragraphs = document.getElementsByTagName("p")

        let secondParagraph = document.getElementsByTagName("p")[1]

        console.log(secondParagraph)

// 4. Do the following in javascript:

        // Target all input fields on the html page without using getElementsByTagName()
        // Change the border color to red

        let inputFields = document.querySelector("input")

        inputFields.style.borderColor = "red"

// 5. Write JS to handle when a person clicks on element with the id of submit-button to grab the value of the input field with the the id of input-important. Make sure you type something in the input field before you run your testing!


        let submitButton = document.getElementById("submit-button")
        let text = document.getElementById("input-important")

        submitButton.addEventListener("click", (event) => {
        alert(text.value)
        })
