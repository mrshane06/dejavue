<template lang="">
    <div>
        <h1>Consoles</h1>
        <div id="consoles">
            <section  v-for="game in gameData()" :key="game">
                <card-comp>

                </card-comp>
            </section>
        </div>
    </div>
</template>
<script>
import CardComp from '../components/CardComp.vue'

export default {
    components:{
        CardComp
    }
}
</script>
<style scoped>
#consoles{
    display: flex;
    flex-wrap: wrap;
  }
</style>