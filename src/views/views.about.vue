<template>
    <div class="views-about">
        <FirstView>
            <Heading1 :headingText="'About'" />

            <p>僕に関しての説明</p>
        </FirstView>

        <Heading2 :headingText="'自己紹介'" />
        <p>現在都内の事業会社でwebエンジニアとして働いています。最近転職しました。</p>
        <p>フロントエンド領域が好きです。好きなだけです。</p>
        <p>好きな色は緑。好きな野菜はレタスです。</p>

        <Heading2 :headingText="'職務経歴'" />

        <p>大学4年生の就職活動時にwebの勉強を始めて、以下の経歴で生きてきました。</p>

        <Table :tableList="tableList" :colNumList="colNumList" />
    </div>
</template>

<script>
import Heading1 from '@/components/atoms/atoms.heading1.vue';
import Heading2 from '@/components/atoms/atoms.heading2.vue';
import FirstView from '@/components/atoms/atoms.firstView.vue';
import Table from '@/components/atoms/atoms.table.vue';

export default {
    name: 'About',
    components: {
        Heading1,
        Heading2,
        FirstView,
        Table
    },
    created() {
        document.title = 'About | shushuTona-web';
    },
    data() {
        return {
            colNumList: [ 30, 70 ],
            tableList: [
                {
                    id: 0,
                    th: {
                        content: '2018年4月～2020年12月'
                    },
                    tdList: [
                        {
                            id: 0,
                            content: '新宿のweb制作会社でフロントエンドエンジニアとして勤務していました。企業のコーポレートサイトのリニューアル案件を主に扱っていました。'
                        }
                    ]
                },
                {
                    id: 1,
                    th: {
                        content: '2021年1月～'
                    },
                    tdList: [
                        {
                            id: 0,
                            content: '新宿の事業会社でwebエンジニアとして勤務しています。'
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.views-about {
    @include resetMargin();
}
</style>