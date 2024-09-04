document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.item');
    const container = document.getElementById('container');

    items.forEach(item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragend', dragEnd);
    });

    container.addEventListener('dragover', dragOver);
    container.addEventListener('dragenter', dragEnter);
    container.addEventListener('dragleave', dragLeave);
    container.addEventListener('drop', drop);

    function dragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
        event.target.classList.add('dragging');
    }

    function dragEnd(event) {
        event.target.classList.remove('dragging');
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function dragEnter(event) {
        event.preventDefault();
        event.target.classList.add('dragover');
    }

    function dragLeave(event) {
        event.target.classList.remove('dragover');
    }

    function drop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData('text/plain');
        const draggableElement = document.getElementById(data);
        event.target.appendChild(draggableElement);
        event.target.classList.remove('dragover');
    }
});
