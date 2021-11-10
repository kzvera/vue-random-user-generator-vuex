<template>
    <aside>
        <button @click="addUser">Add User <font-awesome-icon icon="user" /></button>
        <button @click="doubleMoney">Double Money <font-awesome-icon icon="dollar-sign" /></button>
        <button @click="sortByRichest">Sort by Richest <font-awesome-icon icon="long-arrow-alt-down" /></button>
        <button @click="showMillionaires">Show Only Millionaires <font-awesome-icon icon="hand-holding-usd" /></button>
        <button @click="calculateWealth">Calculate Entire Wealth <font-awesome-icon icon="calculator" /></button>
    </aside>
</template>

<script>
export default {
    methods: {
        addUser() {
            this.$store.dispatch('setRandomUser');
        },
        doubleMoney() {
            this.$store.dispatch('doubleMoney');
        },
        sortByRichest() {
            this.$store.dispatch('sortByRichest');
        },
        showMillionaires() {
            this.$store.dispatch('showMillionaires');
        },
        calculateWealth() {
            this.$store.dispatch('calculateWealth');
        }
    }
}
</script>

<style scoped>
aside {
    padding: 10px 20px;
    width: 250px;
    border-right: 1px solid #111;
}

button {
    background-color: #fff;
    border: 1px solid #111;
    border-radius: 5px;
    cursor: pointer;
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 14px;
}
</style>