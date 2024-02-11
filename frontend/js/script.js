const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'PHP TODO LIST',
            todos: [],
            addTodo: ''
        };
    },
    methods: {
        toDo() {
            axios.post(
                'http://localhost/classe114/php-todo-list-json/backend/add-todo.php',
                {
                    todo: this.addTodo
                },
                {
                    headers: {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
            )
            .then((response) => {
                this.todos.push({
                    todo: this.addTodo,
                    stato: false,
                })
                this.addTodo = '';
                console.log(response.data);
            })
        }
    },
    mounted(){
        axios.get('http://localhost/classe114/php-todo-list-json/backend/database.json').then((response) => {
            this.todos = response.data
        })
    }

}).mount('#app');