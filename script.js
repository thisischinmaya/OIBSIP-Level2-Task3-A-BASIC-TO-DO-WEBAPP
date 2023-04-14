window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list = document.querySelector("#tasks")

    /* console.log(form) */

    form.addEventListener('submit', (v) => {
        v.preventDefault();

        /* console.log("Submit Form") */

        const task = input.value

        if (!task) {
            alert("Please Fill the Form First");
            return;
        }


        const task_el = document.createElement("div")
        task_el.classList.add('task')


        const task_content = document.createElement("div")
        task_content.classList.add('content')
        /* task_content.innerText = task; */

        task_el.appendChild(task_content)

        const task_input = document.createElement('input')
        task_input.classList.add("text")
        task_input.type = "text";

        task_input.value = task;
        task_input.setAttribute('readonly', 'readonly')
        task_content.appendChild(task_input)



        const task_actions = document.createElement("div")
        task_actions.classList.add('actions')

        const task_edit = document.createElement('button')
        task_edit.classList.add('edit')
        task_edit.innerHTML = "Edit"


        const task_delete = document.createElement('button')
        task_delete.classList.add('delete')
        task_delete.innerHTML = "Delete"


        task_actions.appendChild(task_edit)
        task_actions.appendChild(task_delete)

        task_el.appendChild(task_actions)



        list.appendChild(task_el)

        input.value = ""



        task_edit.addEventListener('click', () => {
            if (task_edit.innerText.toLowerCase() == "edit") {
                task_input.removeAttribute('readonly')
                task_input.focus();
                task_edit.innerText = "Save"
            }
            else {
                task_input.setAttribute('readonly', 'readonly');
                task_edit.innerText = "Edit"
            }
        })


        task_delete.addEventListener('click', () => {
            list.removeChild(task_el)
        })

    })
})