<template>
    <ul>
        <li>
            <button type="button" :class="{ active: modelValue === 'Poor' }" @click="selectButton('Poor')">
                Poor
            </button>
        </li>
        <li>
            <button type="button" :class="{ active: modelValue === 'Average' }" @click="selectButton('Average')">
                Average
            </button>
        </li>
        <li>
            <button type="button" :class="{ active: modelValue === 'Greet' }" @click="selectButton('Greet')">
                Greet
            </button>
        </li>
    </ul>
</template>
<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    // data() {
    //     return {
    //         selectedButton: this.modelValue, // Lưu trạng thái của nút đang được chọn
    //     };
    // },
    computed : {
        selectedButton(){
            return this.modelValue
        }
    },
    methods: {
        selectButton(button) {
            this.selectedButton = button; // Cập nhật trạng thái nút
            this.$emit('update:modelValue', button);
        },
    },
};
</script>
<style scoped>
button {
    border: 2px solid transparent;
    /* Mặc định không có viền */
    padding: 10px 20px;
    cursor: pointer;
    transition: border-color 0.3s ease;
}

button.active {
    border-color: red;
    /* Thêm viền đỏ khi được chọn */
}
</style>
