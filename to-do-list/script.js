const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const addTask = ()=>{
    if(inputBox.value===''){
        alert('enter any task!')
    } else{
        let li = document.createElement('li');
        li.innerText = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerText = '\u00d7';  // (×) in Unicode.
        li.appendChild(span);

        saveData();
    }
    inputBox.value = "";
    // console.log('clicked')
}

listContainer.addEventListener('click',(ele)=>{
    if (ele.target.tagName ==='LI'){
        ele.target.classList.toggle('checked'); //to toggle the presence of a CSS class named 'checked'
    } else if(ele.target.tagName=='SPAN'){
        ele.target.parentElement.remove();
    }
    saveData();
});

const saveData = ()=>{
    localStorage.setItem("data",listContainer.innerHTML);
}

const showTask = ()=> {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();