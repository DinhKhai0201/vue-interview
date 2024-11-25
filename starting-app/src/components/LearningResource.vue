<template>
    <div>
        <base-card>
            <div>
                <header>
                    <h3>{{ title }}</h3>
                    <button>Delete</button>
                </header>
            </div>
            <p>{{ description }}</p>
            <nav>
                <a :href="link">View</a>
            </nav>
        </base-card>
    </div>
</template>

<script>
import BaseCard from '../UI/BaseCard.vue';

export default {
    components: {
        BaseCard
    },
    props: ['title', 'description', 'link']
}
</script>