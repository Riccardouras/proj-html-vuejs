<script>
import {store} from "./data/store";
export default{
    props: {
        navList: Array,
        logo: String
    },
    components: {
        name: 'AppHeader',
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <header>
        <section>
            <div>
                <div>6767 Santa Monica Blvd, Los Angeles,CA 90038</div>
                <div>Call Now 123-456-7890</div>
                <div>
                    <button>Donate</button>
                </div>
            </div>
        </section>
        <nav>
            <img src="../assets/images/logo/mt-2236-home-logo.png" alt="">
            <div><img :src="store.Logo" alt=""></div>
            <div>
                <ul v-for="li in store.navList">
                    <li>{{li}}</li>
                </ul>
            </div>
        </nav>
    </header>
   
</template>

<style scoped>
</style>
