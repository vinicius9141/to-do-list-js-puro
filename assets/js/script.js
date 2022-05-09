function teste(){
    alert('teste')
}

async function showAlert(){
   let content = await Swal.fire({
        title: 'Nome da Task',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Add + ',
        showLoaderOnConfirm: true,
})
let buttonConfirm = content.isConfirmed
let taskAdd = content.value
localStorage.setItem("task", taskAdd)

refreshTask(buttonConfirm)
}

function refreshTask(buttonConfirm){
    if (buttonConfirm == true){
      let task = localStorage.getItem('task')
    document.getElementById('taskToDo').innerText = task
   
    }
}