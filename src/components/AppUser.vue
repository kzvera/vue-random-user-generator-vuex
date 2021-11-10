<template>
    <div class="person">
        <strong>{{user.name}}</strong>
        {{ $filters.currency(user.money) }}
    </div>
</template>

<script>
export default {
    props: ['user']
}
</script>

<style scoped>
.person {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin-bottom: 10px;
}
</style>