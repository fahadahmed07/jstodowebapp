var toDoIcon = '<i class="fas fa-tasks pr-1"></i> To-Do ';
var homeIcon = '<i class="fas fa-home pr-1"></i> Home ';
var workIcon = '<i class="fas fa-suitcase pr-1"></i> Work ';
var travel = '<i class="fas fa-plane-departure pr-1"></i> Travel ';
var dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Function to create new list
function addNewTask(){
    var taskDetail = document.getElementById('taskDetail').value;
    var taskDate = document.getElementById('taskDate').value;
    var taskCategory = document.getElementById('taskCategory').value;
    if(taskDetail == "" || taskDate == ""){
        alert("All feilds are required...")
    }else{
        taskDate = document.getElementById('taskDate').value.split('-');
        var setDate = new Date(taskDate);
        switch(taskCategory){
            case "To-Do":
                taskCategory = toDoIcon;
                break;
            case "Home":
                taskCategory = homeIcon;
                break;
            case "Work":
                taskCategory = workIcon;
                break;
            case "Travel":
                taskCategory = travel;
        }
        var checkBoxStyle = '<div class="pretty p-svg p-curve"><input type="checkbox" onclick="taskComplete(this)" /><div class="state p-success"><svg class="svg svg-icon" viewBox="0 0 20 20"><path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white;fill:white;"></path></svg><label></label></div></div>';
        var itemDescription = '<span class="text-dark">' + " " + taskDetail + '</span>';
        var itemDetail = '<div class="item-detail"><span class="item-category text-primary pr-2">'
        + taskCategory + '</span><span class="item-date text-primary pr-2"><i class="far fa-calendar-alt pr-1"></i> '
        + dayList[setDate.getDay()] + " " + setDate.getDate() + " " + monthList[setDate.getMonth()] + " " + '</span><span class="text-right text-danger pr-2 deleteItem" onclick="deleteTask(this)"><i class="far fa-trash-alt pr-1"></i> Delete </span></div>';
        var li = '<li class="list-group-item">' + checkBoxStyle + itemDescription + itemDetail + '</li>';
        document.getElementById('toDoList').innerHTML += li;

        document.getElementById('taskDetail').value = '';
        document.getElementById('taskDate').value = ''
        document.getElementById('taskCategory').value = 'To-Do'
    }
}
// Function to add class in task description.
function taskComplete(n){
    var itemDescription = n.parentNode.parentNode.childNodes[1];
    if(n.checked === true){
        itemDescription.classList.add('taskComplete');
    }else{
        itemDescription.classList.remove('taskComplete')
    }
}
// Function to delete specific list.
function deleteTask(n){
    n.parentNode.parentNode.parentNode.removeChild(n.parentNode.parentNode);
}