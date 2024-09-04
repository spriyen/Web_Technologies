var draggables = document.querySelectorAll('.container1 > div[draggable="true"]');

draggables.forEach(function(draggable) {
    draggable.addEventListener('dragstart', dragStart);
    draggable.addEventListener('dragend', dragEnd);
});

var container1 = document.querySelector('.container1');
container1.addEventListener('dragover', dragOver);
container1.addEventListener('drop', drop);

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    event.target.style.opacity = '0.5';
}

function dragEnd(event) {
    event.target.style.opacity = '1';
}

function dragOver(event) {
    event.preventDefault(); 
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text/plain');
    var draggableElement = document.getElementById(data);
    container1.appendChild(draggableElement);
}
