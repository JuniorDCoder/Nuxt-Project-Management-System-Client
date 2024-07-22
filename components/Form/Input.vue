<template>
    <input
        :v-bind="$attrs"
        v-model="model"
        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
        :class="class"
        :name="name"
        :autocomplete="autocomplete"
        :type="inputType" :placeholder="placeholder" 
    />
</template>

<script setup>
    defineProps({
        class: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            required: true
        },
        inputType: {
            type: String,
            default: 'text'
        },
        name: {
            type: String,
            required: true
        },
        autocomplete: {
            type: String,
            default: 'off'
        }
    })

    const model = defineModel()

</script>

<style scoped>

</style>