<template>
    <div class="m-labelList">
        <ul class="labelList__list">
            <li v-for="item of labelListArray"
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
    },
    computed: {
        labelListArray() {
            return this.itemList.map( (item, index) => {
                return {
                    id: index,
                    text: item
                }
            } );
        }
    }
}
</script>

<style scoped lang="scss">
.m-labelList {
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