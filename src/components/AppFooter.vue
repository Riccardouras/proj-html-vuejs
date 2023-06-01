<script>
import { store } from './data/store.js';
export default {
    components: {
        name: "AppFooter",
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
   <footer>
    <div>
        <div><img :src="getImagePath(`../assets/images/${store.Logo}`)" alt=""></div>
        <div>
            <div>
                <h3>Follow Us</h3>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <div>
            <h5>
                Subcribe to get the latest news, course updates, discounts, events
            </h5>
            <input type="email" placeholder="Enter your email here*"> 
            <br>
            <button>Subscribe</button>
        </div>
    </div>
   </footer>
</template>

<style scoped lang="scss">
</style>
