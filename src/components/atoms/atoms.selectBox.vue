<template>
    <div class="m-selectBox">
        <div class="selectBox__inner">
            <select
                @input="$emit('select', $event.target.value)"
                class="selectBox__select"
            >
                <option value="all">すべて表示</option>
                <option
                    v-for="item of filterItemList"
                    :key="item.id"
                    :value="item.filterItem"
                >{{ item.filterItem }}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SelectBox',
    props: {
        filterListArray: {
            type: Array,
            required: true
        }
    },
    computed: {
        filterItemList() {
            return this.filterListArray.map( ( filterItem, index ) => {
                return {
                    id: index,
                    filterItem: filterItem
                }
            });
        }
    }
}
</script>

<style scoped lang="scss">
.m-selectBox {
    .selectBox {
        &__inner {
            max-width: 200px;
            background-color: #fff;
            position: relative;

            &::after {
                content: "";
                margin: auto;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 10px 7px 0 7px;
                border-color: #009400 transparent transparent transparent;
                position: absolute;
                top: 0;
                bottom: 0;
                right: 12px;
            }
        }

        &__select {
            padding: 9px 36px 8px 16px;
            display: block;
            width: 100%;
            color: $MAIN_COLOR;
            background-color: transparent;
            border: 1px solid $BORDER_COLOR;
            outline: $MAIN_COLOR;
            cursor: pointer;
            position: relative;
            z-index: 1;
        }
    }
}
</style>