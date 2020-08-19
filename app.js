
showTxt();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes === null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    showTxt();
})

function showTxt() {
    let notes = localStorage.getItem('notes');
    if (notes === null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="card my-2 mx-2 noteCard" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button href="#" onclick ="delBtn(this.id)" id="${index}" class="btn btn-primary">Go somewhere</button>
            </div>
        </div>
    </div>`
    });
    let noteelm = document.getElementById('notes');
    if (noteelm != 0) {
        noteelm.innerHTML = html;
    }
}
function delBtn(e) {
    let notes = localStorage.getItem('notes');
    if (notes === null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    console.log(e);
    notesObj.splice(e, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj))
    showTxt();
    // window.location.reload()
}

let searchtxt = document.getElementById('searchTxt');
searchtxt.addEventListener('input', function (e) {
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerHTML;
        if (cardTxt.includes(searchtxt.value.toLowerCase())) {
            element.style.display ='block'
        }
        else{
            element.style.display='none';
        }
    })
});
