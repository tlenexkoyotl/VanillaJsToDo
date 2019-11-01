let choreList = document.getElementById('list')
let chores = []

function clearList(unorderedListElement) {
	while(unorderedListElement.firstChild ){
		unorderedListElement.removeChild(unorderedListElement.firstChild)
	}
}

function toggleChore(nameNode, choreNode) {
	nameNode.classList.toggle('disabled')
	choreNode.classList.toggle('disabled')
}

function writeList() {
	clearList(choreList)
	
	chores.forEach((chore, index) => {
		let choreNode = document.createElement('li')
		let nameNode = document.createElement('div')
		let checkBoxNode = document.createElement('input')
		let deleteButtonNode = document.createElement('input')

		checkBoxNode.setAttribute('id', `task_${index}_check`)
		checkBoxNode.setAttribute('onclick', `checkChore(${index})`)
		checkBoxNode.setAttribute('type', 'checkbox')

		if (chore.isDone) {
			checkBoxNode.setAttribute('checked', '')

			toggleChore(nameNode, choreNode)
		} else {
			checkBoxNode.removeAttribute('checked')
		}
		
		choreNode.setAttribute('id', `task_${index}`)
		deleteButtonNode.setAttribute('type', 'button')
		deleteButtonNode.setAttribute('value', 'Delete')
		deleteButtonNode.setAttribute('onclick', `deleteChore(${index})`)
		nameNode.setAttribute('id', `chore_${index}_name`)
		nameNode.appendChild(document.createTextNode(chore.name))
		choreNode.appendChild(nameNode)
		choreNode.appendChild(checkBoxNode)
		choreNode.appendChild(deleteButtonNode)
		choreList.appendChild(choreNode)
	})
}

function checkChore(id) {
	chore = document.getElementById(`task_${id}`)
	let nameNode = document.getElementById(`chore_${id}_name`)
	choreCheckbox = document.getElementById(`task_${id}_check`)
	chores[id].isDone = choreCheckbox.checked
	console.log(`chores[${id}].isDone`)
	console.log(chores[id].isDone)
	if (!chores[id].isDone) choreCheckbox.removeAttribute('checked')
	toggleChore(chore, nameNode)
}

function addChore() {
	let newChore = {
		"name": "",
		"isDone": false
	}
	let newChoreField = document.getElementById('newChore')

	newChore.name = newChoreField.value
	newChoreField.value = ''

	chores.push(newChore)
	writeList()
}

function deleteChore(id) {
	chores.splice(id, 1)
	writeList()
}

