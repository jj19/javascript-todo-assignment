let todoList = document.getElementById('todoList');
let todoInput = document.querySelector('#todoInput');

let todoSubmit = document
	.querySelector('#todoSubmit')
	.addEventListener('click', todoIt);
todoList.addEventListener('click', didIt);

function todoIt(click) {
	click.preventDefault();
	let todoContent = todoInput.value;
	let newTodo = document.createElement('li');
	if (todoContent != '') {
		newTodo.textContent = todoContent;
		newTodo.className = 'list-group-item todoItem';
		todoList.appendChild(newTodo);
		todoInput.value = '';
	} else {
		setTimeout(() => {
			alert('Please enter a new To Do.');
		}, 1000);
	}
}
// removes Todo
function didIt(click) {
	click.preventDefault;
	let removeConfirmm = confirm('Are you sure?');
	if (removeConfirmm) {
		setTimeout(() => {
			click.target.classList.add('todoItemDeleted');
			setTimeout(() => {
				todoList.removeChild(click.target);
			}, 1000);
		}, 300);
	} 
}