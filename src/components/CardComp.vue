<template lang="">
    <div>
        <slot name="make"></slot>
        <slot name="model"></slot>
        <slot name="year"></slot>
        <slot name="color"></slot>
        <slot name="price"></slot>
    </div>
    <div>
        <slot name="name"></slot>
        <slot name="manufacturer"></slot>
        <slot name="release_year"></slot>
        <slot name="storage"></slot>
        <slot name="price"></slot>
        <slot name="best_selling_game"></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    div {
        background-color: lightgreen;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        flex-basis: 150px;
        border-radius: 10px;
        border: solid black 2px;
        margin: 10px;
        padding: 20px 10px 0 10px;
    }
    div:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
</style>