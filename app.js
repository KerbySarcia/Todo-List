const plusBtn = document.querySelector('.button-plus')
const addText = document.getElementById('add')

let isClose = true

plusBtn.addEventListener('click',createTask)

function createTask()
{

    const task = document.createElement('div')
    task.className = 'task'

    const inputText = document.createElement('input')
    inputText.value = addText.value
    addText.value = ''
    inputText.type = 'text'
    inputText.className = 'task-text'

    const doneDelete = document.createElement('div')
    doneDelete.className = 'done-delete'

    const doneBtn = document.createElement('div')
    doneBtn.textContent = 'Check'
    doneBtn.className = 'done'

    const deleteBtn = document.createElement('div')
    deleteBtn.textContent = 'Delete'
    deleteBtn.className = 'delete'

    task.appendChild(inputText)
    doneDelete.appendChild(doneBtn)
    doneDelete.appendChild(deleteBtn)
    task.appendChild(doneDelete)

    document.querySelector('.task-container').appendChild(task)
    
    const tasks = document.querySelectorAll('.task')
    task.addEventListener('click', e => showCheckAndDelete(e))

}

function showCheckAndDelete(e)
{ 
    if(isClose)
    {
        e.currentTarget.children[1].style.visibility = 'visible'
        e.currentTarget.children[1].style.opacity = '100%'
        isClose = false  
    }
    else{
        e.currentTarget.children[1].style.visibility = 'hidden'
        e.currentTarget.children[1].style.opacity = '0'
        isClose = true
    }

    const checkDeleteBtns = document.querySelectorAll('.done-delete div')
    checkDeleteBtns.forEach(btn => btn.addEventListener('click', e => checkOrDelete(e)))
}

function checkOrDelete(e)
{
    let clicked = e.currentTarget

    if(clicked.textContent == 'Check')
    {
        const ischeck = clicked.parentElement.parentElement.firstElementChild.style.textDecoration
        if(ischeck == 'line-through')
        {
            clicked.parentElement.parentElement.firstElementChild.style.textDecoration = 'none'
        }
        else{
            clicked.parentElement.parentElement.firstElementChild.style.textDecoration = 'line-through'
        }
        
    }
    else if(clicked.textContent == 'Delete')
    {
        clicked.parentElement.parentElement.remove()
    }
}
