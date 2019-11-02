const choreList = document.getElementById('list');
let chores = [];

const clearList = unOrderedListElement => {
	while(unOrderedListElement.firstChild){
		unOrderedListElement.removeChild(unOrderedListElement.firstChild);
	}
};

const toggleChore = (nameNode, choreNode) => {
	nameNode.classList.toggle('disabled');
	choreNode.classList.toggle('disabled');
};

const writeList = () => {
	clearList(choreList);
	
	for(const index in chores) {
		const chore = chores[index];
		const choreNode = document.createElement('li');
		const nameNode = document.createElement('div');
		const checkBoxNode = document.createElement('input');
		const deleteButtonNode = document.createElement('input');

		checkBoxNode.setAttribute('id', `task_${index}_check`);
		checkBoxNode.setAttribute('onclick', `checkChore(${index})`);
		checkBoxNode.setAttribute('type', 'checkbox');

		if (chore.isDone) {
			checkBoxNode.setAttribute('checked', '');
			toggleChore(nameNode, choreNode);
		} else {
			checkBoxNode.removeAttribute('checked');
		}
		
		choreNode.setAttribute('id', `task_${index}`);
		deleteButtonNode.setAttribute('type', 'button');
		deleteButtonNode.setAttribute('value', 'Delete');
		deleteButtonNode.setAttribute('onclick', `deleteChore(${index})`);
		nameNode.setAttribute('id', `chore_${index}_name`);
		nameNode.appendChild(document.createTextNode(chore.name));
		choreNode.appendChild(nameNode);
		choreNode.appendChild(checkBoxNode);
		choreNode.appendChild(deleteButtonNode);
		choreList.appendChild(choreNode);
	}
};

const checkChore = id => {
	chore = document.getElementById(`task_${id}`);
	const nameNode = document.getElementById(`chore_${id}_name`);
	choreCheckbox = document.getElementById(`task_${id}_check`);
	chores[id].isDone = choreCheckbox.checked;
	if (!chores[id].isDone) choreCheckbox.removeAttribute('checked');
	toggleChore(chore, nameNode);
};

const addChore = () => {
	const newChore = {
		name: '',
		isDone: false
	};
	const newChoreField = document.getElementById('newChore');

	newChore.name = newChoreField.value;
	newChoreField.value = '';

	chores.push(newChore);
	writeList();
};

const deleteChore = id => {
	chores.splice(id, 1);
	writeList();
};
