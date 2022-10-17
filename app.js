const data = {
    skills: ["HTML", "CSS"]
}  

//  object to hold main dom nodes (only nodes that exist)
//    in html
const $nodes = {
    div: $("div.skills"),
    form: $("form"),
    textInput: $("input[type='text']")
}

//  Save the skills in local storage
function saveskills () {
    // turn the data object into a JSON string const JSON
        const json = JSON.stringify(data)
    // save the string in local storage
    localStorage.setItem("skillsdata", json)
}

//  loads the skills from local storage
function loadskills () {
    // get data from local storage
    const json = localStorage.getItem("skillsdata")
    // update data, if json isn't undefined/falsey
    if (json) {
         const savedData= JSON.parse(json)
         //uupdate data with the saved array
         data.skills = savedData.skills
    }
}

//  function that renders skills to the div
function renderskills() {
    //empty out the div before rendering
    $nodes.div.empty()

    for (let Newskill of data.skills){
        const  NewskillDiv = $("<div>").addClass("Newskill")
         NewskillDiv.text (Newskill)
        $nodes.div.append(NewskillDiv)

        // add click event to remove Newskill
         NewskillDiv.on("click", function(event){
            // get the text of the thing
            const text = $(event.target).text()
            console.log(text)
            const index = data.skills.indexOf(text)
            data.skills.splice(index, 1)
            renderskills()

        })
    }
    saveskills()
}

//  function for adding skills
function addNewSkill(Newskill){
    data.skills.push(Newskill)
    renderskills()
}

$nodes.form.on("submit", function(event){
    console.log("cheese")
    event.preventDefault()  // prevents refreshes
    addNewSkill($nodes.textInput.val())
    $nodes.textInput.val("")  //empties the form
})


$nodes.form.on("submit", function(event){
    console.log("cheese")
    event.preventDefault()  // prevents refreshes
    addNewSkill($nodes.textInput.val())
    $nodes.textInput.val("")  //empties the form
})



loadskills()
renderskills()

// console.log($nodes.textInput)
// console.log($nodes.div)
// console.log($nodes.form)