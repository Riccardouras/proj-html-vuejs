<script>
import {store} from "./data/store";
export default {
    props:{
        listIcon: Object
    },
    components: {
        name: "AppMain",
    },
    data() {
        return {
            store
        }
    },
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
    <!-- topbody -->
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
                        <li style="list-style-image: url({{ li.img }});">{{ li.text }}</li>
                    </ul>
                </div>
            </div>
            <div></div>
        </div>
    </section>
    
</template>

<style scoped>
</style>
