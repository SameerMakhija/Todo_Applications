const removeIcon = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
const completedIcon = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';

class PostServices extends Object {
    constructor() {
        super();
        this.baseUrl = `http://localhost:3000`;
        this.baseHeaders = {
            'Content-Type': 'Application/json',
            'Accept': 'Application/json'
        };
    }

    fetchPosts() {
        const myRequest = new Request(`${this.baseUrl}/posts`, {
            method: 'GET',
            headers: this.baseHeaders
        });

        return fetch(myRequest).then(response => response.json());       
    }

    addPost(text) {
        const myRequest = new Request(`${this.baseUrl}/post/new`, {
            method: 'POST',
            headers: this.baseHeaders,
            body: JSON.stringify({
                title: text,
                content: '',
                category: ''
            })
        });
    
        return fetch(myRequest).then(response => response.json());  
    }

    removePost(id) {
        const request = new Request(`${this.baseUrl}/post/${item.getAttribute('id')}`,{
            method: "delete",
            headers: this.baseHeaders
        });
    
        return fetch(request).then((response) => response.json());
    }

    updatePost(post) {
        //implement me 
    }

    searchData(text) { 
        const respData = [
            { id: 10001, title: "Post 1", category: "Work", content: "Some sample content" },
            { id: 10002, title: "Post 2", category: "Work", content: "Some sample content" },
            { id: 10003, title: "Sample Todo 1", category: "Work", content: "Some sample content" },
            { id: 10004, title: "Sample Todo 2", category: "Work", content: "Some sample content" },
        ]

        const myPromise = new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(respData);
            }, 300);
        });

        return myPromise;
    }
}

class Utilities extends Object {
    constructor() {
        super();
    }

    debounce(fn, wait) {
        let timeout;
        return (...args) => {
            let context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                fn.apply(context, args);
            }, wait);
        }
    }
}

class Dropdown extends Object {
    constructor() {
        super();
    }

    clearCurrentSelection(parent) {
        while(parent.hasChildNodes()) {
            parent.removeChild(parent.lastChild);
        }
    }
    
    handleDropdownSelection(event) {
        const list = document.getElementById('selectList');
        document.getElementById('item').value = event.target.innerText;
        if(list.classList.contains('show')) {
            list.classList.remove('show');
        }
        list.classList.add('hide');
    }
    
    showSelectOptions(listData) {
        const list = document.getElementById('selectList');
        this.clearCurrentSelection(list);
        listData.forEach(itemData => {
            const item = document.createElement('li');
            item.innerText = itemData.title;
            item.setAttribute('id', itemData.id);
            item.addEventListener('click', this.handleDropdownSelection);
            list.appendChild(item);
        });
        
        if(list.classList.contains('hide')) {
            list.classList.remove('hide');
        }
        list.classList.add('show');
    }
}

class TodoApp extends Object {
    constructor() {
        super();
        this.todoService = new PostServices();
        this.utility = new Utilities();
        this.dropdown = new Dropdown();

        const inputChangeHandler = this.utility.debounce(this.onInputChange.bind(this), 200);
        document.getElementById('item').addEventListener('keypress', inputChangeHandler);
        document.getElementById('add').addEventListener('click', this.onAddButtonClick.bind(this));
    }

    onAddButtonClick() {
        let value = document.getElementById('item').value;
        if( value ) {
            this.addNewTodo(value);
        }
    }

    onInputChange(event) {
        this.todoService.searchData(event.target.value)
            .then((data) => this.dropdown.showSelectOptions(data));
    }

    fetchTodos() {
        this.todoService.fetchPosts()
            .then(data => {
                data.forEach(post => this.addItemToList(post));
            });
    }

    addNewTodo(text) {
        this.todoService.addPost(text)
            .then(data => {
                this.addItemToList(data);
            })
    }
     
    removeTodo(list, listItem) {
        const currentList = item.parentNode;
        this.todoService.removePost(listItem.getAttribute('id'))
            .then((data) => {
                list.removeChild(listItem);
            });
    }
    
    completedTodo(listItem) {
        const currentList = listItem.parentNode;
        const id = currentList.id;  
        const target = ( id === 'todo') ? document.getElementById('completed'): document.getElementById('todo');
        currentList.removeChild(listItem);
        target.insertBefore(listItem, target[0]);
    }
    
    addItemToList(post) {
        const list = document.getElementById('todo');
    
        const item = document.createElement('li');
        item.innerText = post.title;
        item.setAttribute('id', post.id);
        document.getElementById('item').value = '';
    
        const buttons = document.createElement('div');
        buttons.classList.add('buttons');
    
        const remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML = removeIcon;
        remove.addEventListener('click', this.removeTodo.bind(this, list, item));
    
        const complete = document.createElement('button');
        complete.classList.add('complete');
        complete.innerHTML = completedIcon;
        complete.addEventListener('click', this.completedTodo.bind(this, item));
    
        buttons.appendChild(remove);
        buttons.appendChild(complete);
    
        item.appendChild(buttons);
    
        list.insertBefore(item, list.childNodes[0]);
    };
}

window.addEventListener('load', () => {
    const todoApp = new TodoApp();
    todoApp.fetchTodos();
});