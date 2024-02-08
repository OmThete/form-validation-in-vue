
<template>
    <div class="toast">
        <Toast />
        <Button label="Multiple" severity="warning" @click="showMultiple()"></Button>
    </div>
</template>~

<script setup>
import { useToast } from "primevue/usetoast";
import Button from "primevue/button";
const toast = useToast();

const showMultiple = () => {
    console.log("Multiple button clicked"); 
    toast.add({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 });
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3050 });
    toast.add({ severity: 'warn', summary: 'Warning', detail: 'Message Content', life: 3100 });
    toast.add({ severity: 'error', summary: 'Error', detail: 'Message Content', life: 3150 });
};
</script>

<style>
.toast {
    display:flex;
    justify-content: center;
    margin-bottom: 20px;
}
</style>
