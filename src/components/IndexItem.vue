<template>
    <div class="mt-12 max-w-3xl mx-5 xl:mx-20 shadow-2xl overflow-hidden">
        <img :src="artikel.gambar" alt="">
        <div class="px-7 py-4 mb-5">
            <router-link :to="{ name: 'artikel-detail', params: { id: artikel.id } }">
                <h3 class="font-bold text-2xl transition duration-200 hover:text-orange-500">{{ artikel.judul }}
                </h3>
            </router-link>
            <p class="pt-4 text-sm text-slate-400">{{ artikel.tanggal }}, newarch {{ artikel.comment }} Comments
            </p>
            <p class="pt-4 text-slate-500">{{ artikel.isi }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'artikel'
    ]
}
</script>

<style src="../assets/style.css">

</style>