<template>
    <div>
        <AddLearningResource />
        <br />
        <LearningResource v-for="item in storedResources" :key="item.id" :title="item.title"
            :description="item.description" :link="item.link">{{ item.title }}</LearningResource>
    </div>
</template>
<script>
import AddLearningResource from './components/AddLearningResource.vue';
import LearningResource from './components/LearningResource.vue';

export default {
    components: {
        LearningResource,
        AddLearningResource
    },
    data() {
        return {
            storedResources: [{
                id: '1',
                title: 'guid',
                description: 'des',
                link: 'https://www.facebook.com/'
            }]
        }
    },
    provide() {
        return {
            addResource: this.addResource
        }
    },
    methods: {
        addResource(title,
            description,
            link) {
            const newRs = {
                id: new Date(),
                title,
                description,
                link
            }
            this.storedResources.unshift(newRs);
        }
    }
}
</script>