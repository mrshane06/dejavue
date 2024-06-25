<template lang="">
    <div>
        <h1>Cars</h1>
        <div id="wrapper">
            <section  v-for="car in carsData()" :key="car">
                <card-comp>
                    <template #make>
                        <h4>{{car.make}}</h4>
                    </template>
                    <template #model>
                        <p>{{car.model}}</p>
                    </template>
                    <template #year>
                        <p>{{car.year}}</p>
                    </template>
                    <template #color>
                        <p>{{car.color}}</p>
                    </template>
                    <template #price>
                        <p>R{{car.price}}</p>
                    </template>
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
    },
    methods:{
        carsData(){
            return this.$store.state.cars
        }
    },
    computed:{
        getData(){
            return this.$store.dispatch ('getData')
        }
    },
    mounted(){
        this.getData
    }
}
</script>
<style scoped>
#wrapper {
    display: flex;
    flex-wrap: wrap;
  }
</style>