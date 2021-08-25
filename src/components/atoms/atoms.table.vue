<template>
    <div class="m-table">
        <table class="table__inner">
            <colgroup>
                <col
                    v-for="item of colItemList"
                    :key="item.id"
                    :class="'table__col' + ` is-${item.num}`"
                >
            </colgroup>
            <tbody>
                <tr
                    v-for="tr of tableList"
                    :key="tr.id"
                >
                    <th>{{ tr.th.content }}</th>
                    <td
                        v-for="td of tr.tdList"
                        :key="td.id"
                    >
                        {{ td.content }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Table',
    props: {
        tableList: {
            type: Array,
            required: true
        },
        colNumList: {
            type: Array,
            required: true
        }
    },
    computed: {
        colItemList() {
            return this.colNumList.map( (colNumItem, index) => {
                return {
                    id: index,
                    num: colNumItem
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
.m-table {
    margin: 24px 0;

    .table {
        &__inner {
            margin: 0;
            width: 100%;
            border-collapse: collapse;

            tr {
                & + tr {
                    border-top: 1px solid $BORDER_COLOR;
                }
            }

            th,
            td {
                @include breakSP() {
                    display: block;
                }
            }

            th {
                padding: 16px 0 8px;
                font-weight: normal;
                text-align: left;

                @include breakPC() {
                    padding: 16px 0;
                }
            }

            td {
                padding: 8px 0;

                @include breakSP() {
                    &:last-of-type {
                        padding: 8px 0 16px;
                    }
                }

                @include breakPC() {
                    padding: 16px 0;
                }
            }
        }

        &__col {
            @include breakPC() {
                @for $i from 1 through 10 {
                    &.is-#{ $i * 10 } {
                        width: #{ $i * 10% };
                    }
                }
            }
        }
    }
}
</style>