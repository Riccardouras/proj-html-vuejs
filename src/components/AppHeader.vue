<script>
import {store} from "./data/store";
export default{
    props: {
        navList: Array,
        Logo: String
    },
    components: {
        name: 'AppHeader',
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    }
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
            <div><img :src="getImagePath(`../assets/images/${store.Logo}`)" alt=""></div>
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
