<template>
    <div class="views-product">
        <FirstView>
            <Heading1 :headingText="'Product'" />

            <p>今まで作ったものを色々載せています。</p>
        </FirstView>

        <Heading2 :headingText="'作ったものリスト'" />

        <p>作ったものの説明とその時使ったものをそれぞれ載せてます。</p>
        <p>使ったものでフィルター表示ができます。</p>

        <div class="views-product__filterArea">
            <SelectBox
                class="views-product__filterSelect"
                :filterListArray="filterItemList"
                @select="selectHandler"
            />

            <ProductPane
                v-for="item of filterProductList"
                :key="item.id"
                :panelContents="item"
                class="fadePanel"
            />
        </div>
    </div>
</template>

<script>
import Heading1 from '@/components/atoms/atoms.heading1.vue';
import Heading2 from '@/components/atoms/atoms.heading2.vue';
import FirstView from '@/components/atoms/atoms.firstView.vue';
import SelectBox from '@/components/atoms/atoms.selectBox.vue';
import ProductPane from '@/components/molecules/molecules.productPane.vue';
import productList from '../assets/productList.json';

export default {
    name: 'Product',
    components: {
        Heading1,
        Heading2,
        FirstView,
        SelectBox,
        ProductPane
    },
    data() {
        return {
            productList,
            filterItem: 'all'
        }
    },
    computed: {
        filterItemList() {
            const resultFilterItemArray = [];

            this.productList.forEach( ( productItem ) => {
                const { skillList } = productItem;

                skillList.forEach( ( skillName ) => {
                    if ( !resultFilterItemArray.includes( skillName ) ) {
                        resultFilterItemArray.push( skillName );
                    }
                });
            });

            return resultFilterItemArray;
        },
        filterProductList() {
            if ( this.filterItem === 'all' ) {
                return this.productList;
            } else {
                return this.productList.filter(( productItem ) => {
                    return productItem.skillList.includes( this.filterItem );
                });
            }
        }
    },
    methods: {
        selectHandler( selectValue ) {
            this.filterItem = selectValue;
        }
    },
    created() {
        document.title = 'Product | shushuTona-web';
    }
}
</script>

<style scoped lang="scss">
.views-product {
    @include resetMargin();

    &__filterArea {
        margin: 40px 0 0;

        @include resetMargin();
    }

    &__filterSelect {
        margin: 32px 0;
    }
}
</style>
