function toggleItem(checkbox) {
    var item = checkbox.parentNode;
    item.classList.toggle('done');
}

function deleteItem(button) {
    var item = button.parentNode;
    item.parentNode.removeChild(item);
}

function addItem() {
    var newItemText = document.getElementById('new-item').value;
    if (newItemText.trim() !== '') {
        var newItem = document.createElement('div');
        newItem.className = 'item';
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onchange = function() {
            toggleItem(this);
        };
        var span = document.createElement('span');
        span.textContent = newItemText;
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            deleteItem(this);
        };
        newItem.appendChild(checkbox);
        newItem.appendChild(span);
        newItem.appendChild(deleteButton);
        document.getElementById('shopping-list').appendChild(newItem);
        document.getElementById('new-item').value = '';
    } else {
        alert('Please enter a dress type');
    }
}