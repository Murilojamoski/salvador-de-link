let links = []
let names = []
const botaoInp = document.getElementById("botaoInp")
let input = document.getElementById("inputEL")
let inputname = document.getElementById("inputELname")
let UL = document.getElementById("listaEL")
const deleteallbtn = document.getElementById("delete")
const buttontab = document.getElementById("botaotab")
const deletebutton = document.getElementById("deleteitem")

if(localStorage.getItem("link")){
    links = JSON.parse(localStorage.getItem("link"))
    names = JSON.parse(localStorage.getItem("name"))
    renderizar()
}

buttontab.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const activeTabUrl = tabs[0].url;
        localStorage.setItem("link", JSON.stringify(links));
        input.value = activeTabUrl; 
    });
});

function renderizar() {
    let lista = ""
    for (let i = 0; i < links.length; i++){
    lista += `<li> 
                    <a target="_blank" href="${links[i]}"> ${names[i]} </a>
             </li>`
             
    }
    UL.innerHTML = lista
   
}

deleteallbtn.addEventListener("dblclick", function(){
    localStorage.clear()
    links = []
    names = []
    renderizar()
})

botaoInp.addEventListener("click", function () {
    links.push(input.value)
    names.push(inputname.value)
    renderizar()
    input.value = ""
    inputname.value = ""
    localStorage.setItem("link", JSON.stringify(links))
    localStorage.setItem("name", JSON.stringify(names))
})

