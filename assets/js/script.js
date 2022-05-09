let taskAdd = []
var token = getFromLocalStorage("task");

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
 taskAdd.push(content.value)
localStorage.setItem("task ", taskAdd)

// refreshTask(buttonConfirm)
}

function refreshTask(buttonConfirm){
// let taskLocalStorage = getFromLocalStorage("task");

console.log(token)
}
