<template>
    <main id="main">
        <h2><strong>Person</strong> Wealth</h2>
        <app-user v-for="user in users" :user="user" :key="user.id"></app-user>

        <div v-if="totalWealth != null">
            <h3>Total Wealth: <strong>{{ $filters.currency(totalWealth) }}</strong></h3>
        </div>
    </main>
</template>

<script>
import AppUser from './AppUser.vue';

export default {
    components: {
        AppUser
    },
    computed: {
        users() {
            return this.$store.getters.users;
        },
        totalWealth() {
            return this.$store.getters.totalWealth;
        }
    }
    
}
</script>

<style scoped>
main {
    flex: 1;
    padding: 10px 20px;
}

h2 {
    border-bottom: 1px solid #111;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    font-weight: 300;
    margin: 0 0 20px;
}

h3 {
    background-color: #fff;
    border-bottom: 1px solid #111;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    font-weight: 300;
    margin: 20px 0 0;
}
</style>