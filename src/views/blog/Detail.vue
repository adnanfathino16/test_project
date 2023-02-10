<template>
    <div class="mt-12 max-w-3xl mx-auto shadow-2xl overflow-hidden">
        <img :src="artikel.gambar" alt="">
        <div class="px-7 py-4 mb-5">
            <h3 class="font-bold text-2xl transition duration-200">{{ artikel.judul }}</h3>
            <p class="pt-4 text-sm text-slate-400">{{ artikel.tanggal }}, newarch {{ artikel.comment }} Comments
            </p>
            <p class="pt-4 text-slate-500">{{ artikel.isi }}</p>
        </div>
    </div>
</template>

<script>
import { artikels } from '../../dataseed'

export default {
    data() {
        return {
            artikels
        }
    },
    computed: {
        artikel() {
            return this.artikels.find((ar) => {
                return ar.id === this.$route.params.id
            })
        }
    }
}
</script>

<style src="../../assets/style.css">

</style>