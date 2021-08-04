<template>
    <form @submit.prevent="onSubmit">
        <label for="new-todo-input">What needs to be done?</label>
        <input type="text" name="new-todo" id="new-todo-input"
        autocomplete="off" v-model.lazy.trim="label"
        >
        <button type="submit">Add</button>
    </form>
</template>

<script>
export default {
    data(){
        return {
            label: "",
        }
    },
    methods: {
        onSubmit(){
            if (this.label === ""){
                return;
            }
            this.$emit("todo-added", this.label);
            this.label = "";
        }
    }
}
</script>