let colors = []
let colorSelection = document.getElementById("colorSelection")
let colorScheme = document.getElementById("colorScheme")
const colorContainer = document.getElementById("color-container")
const hexValueContainer = document.getElementById("hex-container")

document.getElementById("submit_btn").addEventListener('click', function(){
    getColorScheme()
   
})


function getColorScheme() {
    let hexValue = colorSelection.value.slice(1)
    let colorMode = colorScheme.value

    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${colorMode}&count=5`, {
    method:"GET"
})

    .then((resp) => resp.json())
    .then((data) => {
        colors = data.colors.map((color) => {
            return color.hex.value
        })

        let colorHtml = ``
        let hexValueHtml = ``
        for (let i =0; i < colors.length; i++) {
            colorHtml += `
                <div class="color" id=${colors[i]} data-color-hex-value="hexColor" 
                style="background-color: ${colors[i]};"></div>
            `
            hexValueHtml += `
            <div class="color" id=${colors[i]} data-color-hex-value="hexColor">
            ${colors[i]}</div>
            `
        }

        colorContainer.innerHTML = colorHtml
        hexValueContainer.innerHTML = hexValueHtml        
    })
}

