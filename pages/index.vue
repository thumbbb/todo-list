<template>
    <NuxtLayout name="default">
        <div class="list-container">
            <div class="list-input">
                <input type="text" v-model="inputTodo" />
                <button type="button" @click="addNewTodo">+</button>
            </div>
            <div class="list-box">
                <ul class="todo-list">
                    <li v-for="(todo, i) in todoList" :key="i">
                        <span class="text" :class="{ __active: todo.completed }">{{ todo.item }}</span>
                        <button type="button" @click="removeTodo(todo, i)">Delete</button>
                    </li>
                </ul>
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup>
let inputTodo = "";
let todoList = [];

const clearTodo = () => {
    inputTodo = "";
};
const removeTodo = (todoItem, i) => {
    localStorage.removeItem(todoItem);
    todoList.splice(i, 1);
};
const completeTodo = (todoItem, i) => {
    todoItem.completed = !todoItem.completed;
    localStorage.removeItem(todoItem.item);
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
};
const addNewTodo = () => {
    console.log(inputTodo);
    if (!inputTodo) {
        alert("입력되지 않았습니다 !!");
    } else {
        let items = { completed: false, item: inputTodo };
        localStorage.setItem(inputTodo, JSON.stringify(items));
        clearTodo();
    }
};
onBeforeMount(function setList() {
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            todoList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            console.log(todoList);
        }
        // console.log(localStorage);
    }
});
</script>
<style lang="scss">
.list-container {
    width: 50rem;
    min-height: 10rem;
    max-height: 70rem;
    margin: 10rem auto;
    // background-color: #f7f2af;
    background-color: #f3f3f3;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .list-input {
        width: 100%;
        padding: 2rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        > input {
            width: 30rem;
            height: 3rem;
            border: solid 0.2rem #cfcfcf;
            outline: none;
            padding: 0 1rem;
            font-size: 1.7rem;
            border-radius: 1rem;
        }
        > button {
            width: 3rem;
            height: 3rem;
            border: solid 0.2rem #cfcfcf;
            background-color: #fff;
            font-size: 2rem;
            border-radius: 1rem;
        }
    }
    .list-box {
        .todo-list {
            list-style: disc;
            > li {
                .text {
                    display: inline-block;
                    margin-right: 10px;
                    &.__active {
                        color: red;
                    }
                }
            }
        }
    }
}
</style>
