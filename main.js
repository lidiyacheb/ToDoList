class Task {
    constructor (title) {
    this.title = title;
    }
    }

    let total = 0;
    document.querySelector(".task-count").innerHTML = total;
    
class ItemList {
    constructor (selector) {
    this.selector = selector;
    this.target = document.querySelector(this.selector);
    this.tasks = [];
    }
    
    //add Item:
    add(task) {
    this.tasks.push(task);
    this.render();
    }

    delete(categoryToDelete) {
        var index = this.tasks.indexOf(categoryToDelete);
        this.tasks.splice(index, 1);
        this.render();
        total--;
        console.log(total);
        document.querySelector(".task-count").innerHTML = total;
        }

    //delete:

    //check 
    check(el) {
        if(el.classList[0] === 'checkBtn') {
            el.parentElement.classList.toggle('completed');
        }
    }


    // show Item it as HTML:
    render() {
    this.target.innerHTML = "";
    this.tasks.forEach((task) => {
          const ul = document.createElement("ul");
          const li = document.createElement("li");
          ul.classList.add('list');
          li.classList.add('list-item');
          li.innerText = `${task.title}`;
          ul.appendChild(li);
          this.target.appendChild(ul);

    
    

          //Check Button:
          const checkButton = document.createElement("button");
          checkButton.innerHTML = '<i class="fa fa-check-circle-o fa-2x" aria-hidden="false"></i>'
          checkButton.classList.add('checkBtn');
          ul.appendChild(checkButton);
          //Edit button:
          const editButton = document.createElement("button");
          editButton.innerHTML = '<i class="fa fa-pencil fa-2x" aria-hidden="false"></i>'
          editButton.classList.add('editBtn');
          ul.appendChild(editButton);
          //Delete button:
          const deleteButton = document.createElement("button");
          deleteButton.innerHTML = '<i class="fa fa-trash fa-2x" aria-hidden="false"></i>'
          deleteButton.classList.add('delBtn');
          ul.appendChild(deleteButton);
                    })    
                }
    }
            
            const itemList = new ItemList(".todo-items");
            
            const input = document.querySelector("#todoinput");
            const button = document.querySelector(".button-add");
            const list = document.querySelector(".todo-items");
            const dropdown = document.querySelector("#todo-select");
            const cancel = document.querySelector(".button-cancel");
            const form = document.querySelector(".form-group");
            
            //add item on button click
            button.addEventListener('click', (e)=>{
                e.preventDefault();

                if(input.value) {
                    itemList.add(new Task(input.value));
                    total++;
                    input.value = "";
                }
                else {
                    alert('please fill the form!')
                }
                    console.log(total);
                    document.querySelector(".task-count").innerHTML = total;
            }
            )
            
            //delete item on Delete button 
            list.addEventListener('click', (e)=>{
                const item = e.target;
                if(item.classList[0] === 'delBtn') {
                    itemList.delete(new Task);
                }
                
                
            })
             //check item: 
            list.addEventListener('click', (e)=>{
                itemList.check(e.target);
            })

            cancel.addEventListener('click', (e)=>{
                e.preventDefault();
                if(input.value) {
                    input.value = "";
                }
            });
            
            //dropdown:
            dropdown.addEventListener('change', (e)=>{
                const selectedTodo = list.childNodes;
                console.log(selectedTodo)
                selectedTodo.forEach((elem) => {
                    switch (e.target.value) {
                        case "all":
                            elem.style.display = "flex";
                            break;
                        case "completed":
                            if (elem.children.classList.contains("completed")) {
                                elem.style.display = "flex";
                              } else {
                                elem.style.display = "none";
                              }
                              break;
                            
                        case "uncompleted":
                                if (elem.children.classList.contains("completed")) {
                                  elem.style.display = "none";
                                } else {
                                  elem.style.display = "flex";
                                }
                                break;
                    }
            })
            })