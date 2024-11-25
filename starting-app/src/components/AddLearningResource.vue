<template>
    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">title</label>
                <input id="title" name="title" type="text" ref="titleInput" />
            </div>
            <div class="form-control">
                <label for="description">description</label>
                <textarea id="description" name="description" rows="3" ref="descriptionInput"></textarea>
            </div>
            <div class="form-control">
                <label for="link">link</label>
                <input id="link" name="link" type="text" ref="linkInput" />
            </div>
            <div class="form-control">
                <button type="submit">Submit</button>
            </div>
        </form>
    </base-card>
</template>

<script>
import BaseCard from '../UI/BaseCard.vue';

export default {
    inject: ["addResource"],
    components: {
        BaseCard
    },
    methods: {
        submitData(){
            const enteredTitle = this.$refs.titleInput.value;
            const enteredDes = this.$refs.descriptionInput.value;
            const enteredLink = this.$refs.linkInput.value;
            console.log(enteredTitle)
            this.addResource(enteredTitle, enteredDes, enteredLink)
        }
    }
}
</script>