<script>
import {store} from "./data/store";
export default {
    props:{
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
    <!-- head  -->
    <section>
        <div>
            <button>WELCOME</button>
            <h1>ACADEMIC CHESS FOR <span><h1>EVERYONE</h1></span></h1>
            <p>We are dedicated to broadening and developing chess as art, recreation, and a significant element of culture in Northen California.</p>
        </div>
        <div>
            <button>Enroll Now</button>
            <button>Learn More</button>
        </div>
        <button></button>
    </section>
    <!-- jumbotron -->
    <section>
        <h2>
            OUR SERVICIES
        </h2>
        <h3>We Make your child happy day after day</h3>
        <div>
            <div>
                <h3><b>Chess Education</b></h3>
                <h6>Popular education for your child and you</h6>
                <p>Teachers and parents around the world know that chess is not a simply game. It is a great learning tool that will help build your child's executive function skills</p>
                <div>
                    <ul v-for="li in store.listIcon">
                        <li>{{ li.text }}</li>
                    </ul>
                </div>
                <button>Learn More</button>
            </div>
            <div v-for="service in store.services">
                <div>
                    <div>
                        <img :src="getImagePath(`../assets/images/${service.img}`)" :alt="service.id">
                    </div>
                    <div>
                        <h5>{{service.title}}</h5>
                    </div>
                    <div>
                        <p>{{service.text}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- flyer -->
    <section>
        <div v-for="image in store.main">
            <img :src="getImagePath(`../assets/images/${image}`)" alt="">
        </div>
        <div v-for="el in store.flyer">
            <div>
                <img :src="getImagePath(`../assets/images/${el.img}`)" alt="">
            </div>
            <div>
                <h2>{{el.title}}</h2>
                <p>{{el.text}}</p>
            </div>
            <div>
                <button>Learn More</button>
            </div>
        </div>
    </section>
    <!-- cards -->
    <section>
        <div>
            <h2>Courses</h2>
            <p>To keep up with the constantly rising standars of play</p>
            <div>
                <div v-for="card in store.cards">
                    <img :src="getImagePath(`../assets/images/${card.img}`)" alt="">
                    <h3>{{card.title}}</h3>
                    <p>{{card.text}}</p>
                    <h3>{{card.price}}</h3>
                    <button>View More</button>
                </div>
             </div>
             <button>View Other Courses</button>
        </div>
      
    </section>
    <!-- second flyer -->
    <section>
        <div>
            <div>
                <h1>Take the<span><h1>first step</h1></span></h1>
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
                <h2>{{event.title}}</h2>
                <p>{{event.description}}</p>
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
                <div v-for="el in store.news" >
                    <img :src="getImagePath(`../assets/images/${el.img}`)" alt="">
                    <h3>{{el.text}}</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped> 
</style>
