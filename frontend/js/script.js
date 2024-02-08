const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'PHP TODO LIST',
            todos: []
        };
    },
    mounted(){
        axios.get('http://localhost/classe114/php-todo-list-json/backend/database.json').then((response) => {
            this.todos = response.data
        });
    }

}).mount('#app')