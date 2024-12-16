<template>
    <NuxtLayout name="default">
        <div class="list-container">
            <div class="list-input">
                <input type="text" :inputTodo="inputTodo" @input="checkTodo" />
                <button type="button" @click="addNewTodo">+</button>
            </div>
            <div class="list-box">
                <ul class="todo-list"></ul>
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup>
let inputTodo = "";
// const todoList = [];
const checkTodo = (e) => {
    inputTodo = e.target.value;
    console.log(inputTodo);
};
const addNewTodo = () => {
    let item = document.createElement("li");
    let todoList = document.querySelector(".todo-list");
    if (!inputTodo) {
        alert("입력되지 않았습니다 !!");
    } else {
        item.innerHTML = inputTodo;
        todoList.appendChild(item);
        return (inputTodo = "");
    }

    item.addEventListener("click", function () {
        item.classList.add("__active");
    });
    item.addEventListener("dblclick", function () {
        item.remove();
    });
};
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
    }
}
</style>
