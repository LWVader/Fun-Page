function searchNames() {
   
    let input = document.getElementById('nameSearch').value.trim();
    let list = document.getElementById('nameList');
    let li = list.getElementsByTagName('li');

    
    let isNumber = /^\d+$/.test(input);

    if (input === "") {
        alert("Please enter a number first!");
        return;
    }

    for (let i = 0; i < li.length; i++) {
        
        let lineNumber = (i + 1).toString();

        
        if (isNumber && input === lineNumber) {
            li[i].style.display = ""; 
        } else {
            li[i].style.display = "none"; 
        }
    }
}


function resetList() {
    let li = document.getElementById('nameList').getElementsByTagName('li');
    document.getElementById('nameSearch').value = ""; 
    for (let i = 0; i < li.length; i++) {
        li[i].style.display = "";
    }
}