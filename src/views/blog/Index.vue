<template>
    <div>
        <IndexItem v-for="artikel in artikels" :key="artikel.id" :artikel="artikel"></IndexItem>
    </div>
</template>

<script>
import IndexItem from '../../components/IndexItem.vue'
import { artikels } from '../../dataseed'

export default {
    components: {
        IndexItem
    },
    data() {
        return {
            artikels
        }
    },
}
</script>

<style src="../../assets/style.css">

</style>