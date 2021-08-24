<template>
    <div class="views-home">
        <FirstView>
            <Heading1 :headingText="'shushuTona-web'" />

            <p>shushuTonaのポートフォリオサイト</p>
        </FirstView>

        <Heading2 :headingText="'最近のGitHub更新履歴'" />

        <p>最近はこんなかんじのコードを書いています。</p>

        <LinkPanelList
            :listArray="commitLinkArray"
        />

        <BtnLinkList :itemList="btnLinkListItem" />
    </div>
</template>

<script>
import Heading1 from '@/components/atoms/atoms.heading1.vue';
import Heading2 from '@/components/atoms/atoms.heading2.vue';
import FirstView from '@/components/atoms/atoms.firstView.vue';
import LinkPanelList from '@/components/molecules/molecules.linkPanelList.vue';
import BtnLinkList from '@/components/molecules/molecules.btnLinkList.vue';

export default {
    name: 'Home',
    components: {
        Heading1,
        Heading2,
        FirstView,
        LinkPanelList,
        BtnLinkList
    },
    created() {
        document.title = 'shushuTona-web';
    },
    data() {
        return {
            btnLinkListItem: [
                {
                    linkText: 'Twitterアカウント',
                    linkHref: 'https://twitter.com/shushuTona',
                    isBlank: true,
                    isEmphasis: true
                },
                {
                    linkText: 'GitHubアカウント',
                    linkHref: 'https://github.com/shushuTona',
                    isBlank: true,
                    isEmphasis: true
                },
            ]
        }
    },
    computed: {
        commitLinkArray() {
            return this.$store.state.commitLinkArray;
        }
    }
}
</script>

<style scoped lang="scss">
.views-home {
    @include resetMargin();
}
</style>
