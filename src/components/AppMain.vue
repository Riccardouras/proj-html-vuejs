<script>
import { store } from "./data/store";
export default {
    props: {
        listIcon: Object,
        services: Object
    },
    components: {
        name: "AppMain",
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
    <section class="section-margin">
        <h1 class=" text-center marg-top-bottom">
            OUR SERVICIES
        </h1>
        <h2 class="text-center mb">We Make your child happy day after day</h2>
        <div class="flex container auto gap">
            <div class="box">
                <h2 class="margins-h2"><b>Chess Education</b></h2>
                <h3 class="margins-h3">Popular education for your child and you</h3>
                <p>Teachers and parents around the world know that chess is not a simply game. It is a great learning tool
                    that will help build your child's executive function skills.</p>
                <div>
                    <ul>
                        <li v-for="li in store.listIcon">{{ li.text }}</li>
                    </ul>
                </div>
                <button>Learn More</button>
            </div>
            <div class="flex wrap boxed">
                <div class="half halfh" v-for="service in store.services">
                    <div>
                        <img class="img-size" :src="getImagePath(`../assets/images/${service.img}`)" :alt="service.id">
                    </div>
                    <div class="margi-b">
                        <h3>{{ service.title }}</h3>
                    </div>
                    <div class="">
                        <p>{{ service.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- flyer -->
    <section>
        <div class="flex width">
            <div v-for="image in store.main">
                <img class="fit" :src="getImagePath(`../assets/images/${image}`)" alt="">
            </div>
        </div>
        <div class="flex bg-yellow negative-m justify-center align-center gapp" v-for="el in store.flyer">
            <div class="container">
                <img :src="getImagePath(`../assets/images/${el.img}`)" alt="">
            </div>
            <div>
                <h2 class="sizing">{{ el.title }}</h2>
                <p class="sizingel">{{ el.text }}</p>
            </div>
            <div>
                <button>Learn More</button>
            </div>
        </div>
    </section>
    <!-- cards -->
    <section style="margin-top: 120px;">
        <div class="space-card-title">
            <h2 class="text-center margin-cards-title">Courses</h2>
            <p class="text-center">To keep up with the constantly rising standars of play</p>
            <div class="flex container auto">
                <div  v-for="card in store.cards">
                    <div>
                        <img :src="getImagePath(`../assets/images/${card.img}`)" alt="">
                        <h3>{{ card.title }}</h3>
                        <p>{{ card.text }}</p>
                        <h3>{{ card.price }}</h3>
                        <button>View More</button>
                    </div>
                </div>
            </div>
            <button>View Other Courses</button>
        </div>

    </section>
    <!-- second flyer -->
    <section>
        <div>
            <div>
                <h1>Take the<span>
                        <h1>first step</h1>
                    </span></h1>
                <h2>The fascinating world of chess has its doors open for anyone</h2>
            </div>
            <div><button>View More</button></div>
        </div>
    </section>
    <!-- events -->
    <section>
        <h1>OUR EVENTS</h1>
        <h3>Chess is fun and we are happy to prove it at our events!</h3>
        <div v-for="event in store.events">
            <div>
                <img :src="getImagePath(`../assets/images/${event.img}`)" alt="">
            </div>
            <div>
                <h2>{{ event.title }}</h2>
                <p>{{ event.description }}</p>
            </div>
            <div><button>Register</button></div>
        </div>
    </section>
    <!-- news -->
    <section>
        <div>
            <div>
                <h1>Latest News</h1>
                <hr>
                <button>View Other Posts</button>
            </div>
            <div>
                <div v-for="el in store.news">
                    <img :src="getImagePath(`../assets/images/${el.img}`)" alt="">
                    <h3>{{ el.text }}</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss"> li {
     list-style-image: url(../assets/images/listicon/mt-2236-home-icon-bullet.png);
     list-style-position: inside;
 }</style>
