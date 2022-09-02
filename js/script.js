// jQuery Code
// 1. Adding a new item to the list:
function newItem() {

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }

    // 2. Crossing an item out:
    function crossOut() {
        li.toggleClass("strike");
    }
    li.on("dblclick", crossOut);

    // 3. Adding a delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    function deleteListItem() {
        li.addClass("delete")
    }
    crossOutButton.on("click", deleteListItem);

    // 4. Reordering the items:
    $('#list').sortable();

}
