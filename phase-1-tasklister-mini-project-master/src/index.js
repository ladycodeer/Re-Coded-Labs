
document.addEventListener("DOMContentLoaded", ()=>{
   // your code here
  const submit = document.querySelector('input[type=submit]')
  submit.addEventListener('click', (e)=>{
  if(document.querySelector('#new-task-description').value.length == 0){

   }

  else{
    const tasks = document.getElementById('tasks')
    const li = document.createElement("li");
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText ='Delete';
    deleteBtn.style.marginLeft = '50px';

    li.textContent = document.querySelector('#new-task-description').value;
    tasks.appendChild(li);
    li.appendChild(deleteBtn);
    document.querySelector('#new-task-description').value = '';
    e.preventDefault();

    deleteBtn.addEventListener("click",(e)=>{
       function del(element){
           element.style.textDecoration = 'line-through'
        }
     del(li);

      e.preventDefault();
    });
  };
});
});






