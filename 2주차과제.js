let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.entered-list');

//새로운 할 일 목록 추가

addBtn.addEventListener('click', () => {
    if(input.value.trim() !== 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
        <div class="item-btn">
             <i class=xmark"></i>
        </div>
        `
        tasks.appendChild(newItem);
        input.value = '';    
    } else {
        alert('할 일을 입력해주세요.')
    }

})