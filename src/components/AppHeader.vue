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
    <section id="bg-img">
        <header>
            <section class="container"  >
                <div class="flex justify-around pad-top">
                    <div>
                        <font-awesome-icon style="color: FFCD18 ;" :icon="['fas', 'location-dot',]" /><span> 6767 Santa Monica Blvd, Los Angeles,CA 90038</span>
                    </div>
                    <div class="flex justify-around gap">
                        <div>
                            <font-awesome-icon style="color: FFCD18 ;" :icon="['fas', 'phone',]" />
                            <span> Call Now 123-456-7890</span>
                        </div>
                        <div>
                            <button class="bg-white">Donate</button>
                        </div>
                    </div>
                    
                </div>
            </section>
            <nav class="container flex justify-around gap margin-top">
                <div><img :src="getImagePath(`../assets/images/${store.Logo}`)" alt=""></div>
                <div>
                    <ul>
                        <li v-for="(li, index) in store.navList">
                            <a href="" :style="{ color: index === 0 ? '#FFCD18' : '#FFFFFF' }">{{li}}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <section class="flex">
            <div class="container justify-start">
                <div>
                    <button class="btn-yellow">WELCOME</button>
                    <h1 class="dist">ACADEMIC CHESS <br> FOR<span><h1 id="title-diff-color">EVERYONE</h1></span></h1>
                    <div class="marg-2">
                        <p>We are dedicated to broadening and developing chess as art, <br> recreation, and a significant element of culture in Northen California.</p>
                    </div>
                </div>
                <div class="marg-2">
                    <button class="btn btn-color">Enroll Now</button>
                    <button class="btn btn-opacity">Learn More</button>
                </div>
                <button></button>
            </div>
        </section>
    </section>
</template>

<style scoped lang="scss">

header{
  background-color: #11212E ;
  opacity: 0.8;
}
.justify-start{
    margin-left: 288px;
}
.justify-around{
    justify-content: space-around;
}
.flex{
    display: flex;
}
.container{
    max-width: 1923px;
    margin: 0 auto;
}
span{
    color: #ffffff;
}
h1{
    color: #ffffff;
}
#title-diff-color{
    color: #ffcd18 !important;
}

li{
    list-style: none;
    display: inline !important;
    margin: 14px;
}

a{
    text-decoration: none;
}
.margin_auto{
    margin: 0 auto !important;
}

.pad-top{
    padding-top: 20px;
}
.margin-top{
    margin-top: 42px;
    padding-bottom: 22px;
}
#bg-img{
    background-image: url(../assets/images/jumbotron/mt-2236-home-bg1.jpg);
    background-size: cover;
    background-repeat: no-repeat; 
}
.btn-yellow{
    background-color: #ffcd18;
    border: none;
    border-radius: 30px;
    padding: 0 10px;
    margin-top: 100px;
}
.btn{
    padding: 0.8rem;
    border-radius: 5px;
 
}
.btn-color{
    background-color: #ffcd18;
    border: none;
}
.btn-opacity{
  background-color: transparent;
  border-color: #ffffff;
  color: #ffffff;
  margin-left: 20px;
}
.dist{
    margin-top: 27px;
}
p{
    color: #ffffff;
}
.marg-2{
    margin-top: 43px;
}
</style>
