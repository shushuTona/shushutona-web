<template>
    <div class="m-table">
        <table class="table__inner">
            <colgroup>
                <col class="table__col">
                <col class="table__col">
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
                    padding: 16px 8px 16px 0;
                }
            }

            td {
                padding: 8px 0 16px;

                @include breakPC() {
                    padding: 16px 0 16px 8px;
                }
            }
        }

        &__col {
            @include breakPC() {
                &:nth-of-type(1) {
                    width: 30%;
                }

                &:nth-of-type(2) {
                    width: 70%;
                }
            }
        }
    }
}
</style>