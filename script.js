const userInput = document.querySelector('#userInput');
const ulTag = document.querySelector('.notes');
const add = userInput.nextElementSibling;
const cross = document.querySelector('.icon');
const CST = document.querySelector('#CST');

function saveData() {
	localStorage.setItem('data', ulTag.innerHTML);
}
function showData() {
	ulTag.innerHTML = localStorage.getItem('data');
}

userInput.addEventListener('keypress', function (event) {
	if (event.charCode == 13) {
		add.click();
	}
});

add.onclick = function () {
	if (userInput.value) {
		let id = Date.now();
		let output = `<li class="take">
					<div>
						<input type="checkbox" id= ${id} name=${id} />
						<label for=${id}>${userInput.value}</label>
					</div>
					<span class="material-icons icon" onclick='this.parentElement.remove();saveData();'> delete </span>
				</li>`;
		ulTag.insertAdjacentHTML('afterbegin', output);
		saveData();
		userInput.value = '';
	}
};
CST.onclick = () => {
	let tasksChecked = document.querySelectorAll(
		'input[type="checkbox"]:checked'
	);
	tasksChecked.forEach((value, index, array) => {
		value.parentNode.parentNode.remove();
	});
	saveData();
};
showData();
