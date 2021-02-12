<template>
    <div class="views-skill">
        <FirstView>
            <Heading1 :headingText="'Skill'" />

            <p>githubの各リポジトリに記載されているLanguagesの一覧を表示</p>
        </FirstView>

        <Heading2 :headingText="'言語一覧'" />
        <List :list="showLangList" />

        <Heading2 :headingText="'その他'" />
        <List :list="[
            {
                id: 0,
                content: 'gulp'
            },
            {
                id: 1,
                content: 'webpack'
            },
            {
                id: 2,
                content: 'git'
            },
        ]" />
    </div>
</template>

<script>
import Heading1 from '@/components/atoms/atoms.heading1.vue';
import Heading2 from '@/components/atoms/atoms.heading2.vue';
import List from '@/components/atoms/atoms.list.vue';
import FirstView from '@/components/atoms/atoms.firstView.vue';

export default {
    name: 'Skill',
    components: {
        Heading1,
        Heading2,
        List,
        FirstView
    },
    created() {
        document.title = 'Skill | shushutona-web';
    },
    data() {
        return {
            idCount: 0,
            totalNum: 0
        }
    },
    computed: {
        langArray () {
            return this.$store.state.langArray;
        },
        showLangList() {
            let resultArray = [];

            // 各言語の重複重複削除＆値の合計
            let baseLangObj = {};
            for (let langObj of this.$store.state.langArray) {
                for (let langName in langObj) {
                    if (
                        Object.prototype.hasOwnProperty.call( baseLangObj, langName )
                    ) {
                        baseLangObj[langName] += langObj[langName];
                    } else {
                        baseLangObj[langName] = langObj[langName];
                    }
                }
            }

            const entriesArray = Object.entries(baseLangObj);

            // 言語の数値順でソート
            entriesArray.sort(function(lang1, lang2){
                const lang1Value = lang1[1];
                const lang2Value = lang2[1];

                if(lang1Value < lang2Value){ return 1; }
                if(lang1Value > lang2Value){ return -1; }
                return 0;
            });

            entriesArray.forEach(( item ) => {
                resultArray.push({
                    id: this.idCount,
                    content: item[0],
                    langNum: item[1]
                });

                this.totalNum += item[1];
                this.idCount++;
            });

            return resultArray;
        }
    }
}
</script>

<style scoped lang="scss">
.views-skill {
    @include resetMargin();
}
</style>
