<template>
    <div id="travil-list2">
        <p>유렵여행</p>
        <ul>
            <li v-for="item in items" v-bind:key="item" v-on:click="goCountry(item.country)">
                <span>국가 : {{ item.country }}</span>&nbsp;
                <span>도시 : {{ item.city }}</span>&nbsp;
                <span>명소 : {{ item.attraction }}</span>&nbsp;
                <span>요금 : {{ item.entrance_fee }}</span>&nbsp;
            </li>
        </ul>
        <travelist-details></travelist-details>
    </div>
</template>
<script>
import TravelListDetails from './TravelListDetails.vue'

export default {
    components:{
        'travelist-details':TravelListDetails
    },
    methods: {
        goCountry(inValue){
            this.$store.state.selectedCountry = inValue;
        }
    },
    filters:{
        currency(value){
            return new Intl.NumberFormat("de-DE" , {style:'currency',currency:'EUR'}).format(value)
        }
    },
    computed:{
        items() {
            return this.$store.getters.items
            // return []
        }
    }
}

</script>
<style scoped>
#travil-list2 {
    color: white;
    background: blue;
    padding: 10px 20px;
}

#travil-list2 ul{
    padding: 0;
    list-style-type:none;
}

#travil-list2 li {
    margin:10px;
    padding:20px;
    background:#1565c0;
}
</style>