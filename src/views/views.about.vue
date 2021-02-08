<template>
    <div class="views-about">
        <FirstView>
            <Heading1 :headingText="'About'" />

            <p>僕に関しての軽い説明</p>
        </FirstView>

        <Heading2 :headingText="'自己紹介'" />
        <p>フロントエンドのエンジニアとして都内の事業会社で働いています。最近転職しました。</p>

        <Table :tableList="tableList" />

        <Heading2 :headingText="'Twitter'" />
        <p>Twitterのタイムラインを表示する。</p>

        <Heading2 :headingText="'Github'" />
        <p>Githubのの更新情報を表示する。</p>
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
    data() {
        return {
            tableList: [
                {
                    id: 0,
                    th: {
                        content: '2018年4月～2020年12月'
                    },
                    tdList: [
                        {
                            id: 0,
                            content: '新宿のweb制作会社でフロントエンドエンジニアとして勤務'
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
                            content: '新宿の事業会社でエンジニアとして勤務'
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