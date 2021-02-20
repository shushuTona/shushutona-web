<template>
    <div class="m-labelList">
        <ul class="labelList__list">
            <li v-for="item of itemList"
                class="labelList__item"
                :key="item.id"
            >
                <LabelText :labelText="item.text" />
            </li>
        </ul>
    </div>
</template>

<script>
import LabelText from '@/components/atoms/atoms.labelText.vue';

export default {
    name: 'LabelList',
    props: {
        itemList: {
            type: Array,
            required: true
        }
    },
    components: {
        LabelText,
    }
}
</script>

<style scoped lang="scss">
.m-labelList {
    margin: 16px 0;

    .labelList {
        &__list {
            margin: -8px 0 0 -8px;
            display: flex;
            flex-wrap: wrap;
        }

        &__item {
            margin: 8px 0 0 8px;
        }
    }
}
</style>