<template>
    <div class="views-skill">
        <FirstView>
            <Heading1 :headingText="'Skill'" />

            <p>業務や個人で触っているもの一覧</p>
        </FirstView>

        <Heading2 :headingText="'やれること一覧'" />
        <Table
            :tableList="tableList"
            :colNumList="colNumList" />
    </div>
</template>

<script>
import Heading1 from '@/components/atoms/atoms.heading1.vue';
import Heading2 from '@/components/atoms/atoms.heading2.vue';
import FirstView from '@/components/atoms/atoms.firstView.vue';
import Table from '@/components/atoms/atoms.table.vue';
import skillList from '../assets/skillList.json';

export default {
    name: 'Skill',
    components: {
        Heading1,
        Heading2,
        FirstView,
        Table
    },
    created() {
        document.title = 'Skill | shushuTona-web';
    },
    data() {
        return {
            skillList,
            colNumList: [ 30, 20, 50 ]
        }
    },
    computed: {
        tableList() {
            const hoge = this.skillList.map(( skillObj, index ) => {
                const returnSkillObj = {
                    id: index,
                    th: {
                        content: skillObj.skillName
                    },
                    tdList: [
                        {
                            id: 0,
                            content: skillObj.skillYears
                        },
                        {
                            id: 1,
                            content: skillObj.skillDesc
                        }
                    ]
                };

                return returnSkillObj;
            });

            console.log(hoge);

            return hoge;
        }
    }
}
</script>

<style scoped lang="scss">
.views-skill {
    @include resetMargin();
}
</style>
