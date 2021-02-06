<template>
    <ul class="m-list">
        <li
            class="list__item"
            v-for="item in list"
            :key="item.id"
        >
            {{ item.content }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'List',
    props: {
        list: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.m-list {
    margin: 15px 0;

    .list {
        &__item {
            padding: 0 0 0 15px;
            position: relative;

            &::before {
                content: '';
                width: 5px;
                height: 5px;
                background-color: $MAIN_COLOR;
                border-radius: 50%;
                position: absolute;
                top: calc(1em * 1.5 / 2 - 2px);
                left: 0;
            }

            & + .list__item {
                margin-top: 10px;
            }
        }
    }
}
</style>