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
   <footer class="bg-footer" style="margin-top: 120px;">
    <div class="flex container auto footer-marg">
        <div><img :src="getImagePath(`../assets/images/${store.Logo}`)" alt=""></div>
        <div >
            <div>
                <h3>Follow Us</h3>
                <div class="flex gap-icons">
                    <div><font-awesome-icon class="color-white" :icon="['fab', 'facebook-f']" /></div>
                    <div><font-awesome-icon class="color-white" :icon="['fab', 'telegram']" /></div>
                    <div><font-awesome-icon class="color-white" :icon="['fab', 'instagram']" /></div>
                </div>
            </div>
        </div>
        <div>
            <h4>
                Subcribe to get the latest news, course updates, discounts, events
            </h4>
            <input type="email" placeholder="Enter your email here*"> 
            <br>
            <button>Subscribe</button>
        </div>
    </div>
    <span class="container auto">Copyright © 2021. All Rights Reserved</span>
   </footer>
</template>

<style scoped lang="scss">
.bg-footer{
    background-color: #404040;
}
h3,h4,span{
    color: white;
}
.gap-icons{
    gap: 1rem;
    margin-top: 1rem;
}
.color-white{
    color: white;
}
button{
    background-color: #6C5A49;
    padding: 0.8rem 2rem;
    border-radius: 5px;
    font-size: 1rem;
    border: none;
}
span{
    margin-left: 5rem;
}
</style>
