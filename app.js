var Todo = document.getElementById('i1');
var list = document.getElementById('ay');
function createLi(ana) {
    var Item = document.createElement('li');
    var text = document.createTextNode(ana);
    var btn = document.createElement('button');
    btn.setAttribute('onclick', 'del(this)')
    var delImg = document.createElement('img');
    delImg.setAttribute('src', 'delete.png');
    var edit = document.createElement('img');
    edit.setAttribute('onclick','edit(this)')
    edit.setAttribute('src', 'edit.png')
    btn.appendChild(delImg);
    Item.appendChild(text);
    Item.appendChild(btn);
    Item.appendChild(edit)

    return Item;
}
function add() {
    var aya = Todo.value;
    if (aya.length !== 0) {
        list.appendChild(createLi(aya));
    }
    Todo.value='';
}
function del() {
    list.innerHTML = '';
    Todo.value = '';
}
function edit(e) {
    var edi = prompt();
    e.parentNode.innerHTML = edi + '<button onclick = "del()"> <img src="delete.png"> </button><button onclick = "edit(this)"> <img src= "edit.png"</button>'
}