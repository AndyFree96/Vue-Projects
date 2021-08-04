<template>
    <form @submit.prevent="onSubmit">
        <h2 class="label-wrapper">
        <label for="new-todo-input">What needs to be done?</label>
        </h2>
        <input class="input__lg" type="text" name="new-todo" id="new-todo-input"
        autocomplete="off" v-model.lazy.trim="label"
        >
        <button type="submit" class="btn btn__primary btn__lg">Add</button>
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