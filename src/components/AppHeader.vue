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
            <section class="container auto"  >
                <div class="flex justify-around pad-top">
                    <div class="ml">
                        <font-awesome-icon class="icon" style="color: #6C5A49;" :icon="['fas', 'location-dot',]" />
                        <span>
                            <b> 6767 Santa Monica Blvd, Los Angeles,CA 90038 </b>
                        </span>
                    </div>
                    <div class="flex justify-around">
                        <div class="gap">
                            <font-awesome-icon class="icon" style="color: #6C5A49 ;" :icon="['fas', 'phone',]" />
                            <span><b> Call Now 123-456-7890</b></span>
                        </div>
                        <div>
                            <button class="btn-white"> <b> Donate </b></button>
                        </div>
                    </div>
                    
                </div>
            </section>
            <nav class="container flex justify-around  margin-top auto">
                <div><img :src="getImagePath(`../assets/images/${store.Logo}`)" alt=""></div>
                <div>
                    <ul>
                        <li v-for="(li, index) in store.navList">
                            <a href="" :style="{ color: index === 0 ? '#6C5A49' : '#FFFFFF' }">{{li}}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <section class="flex">
            <div class="container justify-start relative auto pad">
                <div>
                    <button class="btn-yellow">WELCOME</button>
                    <h1 class="dist relative">ACADEMIC CHESS <br> FOR
                        <span class="absolutes">
                            <h1 id="title-diff-color">EVERYONE</h1>
                        </span>
                    </h1>
                    <div class="marg-2">
                        <p>We are dedicated to broadening and developing chess as art, <br> recreation, and a significant element of culture in Northen <br> California.</p>
                    </div>
                </div>
                <div class="marg-2">
                    <button class="btn btn-color">Enroll Now</button>
                    <button class="btn btn-opacity">Learn More</button>
                </div>
                <button class="absolute"> <font-awesome-icon style="color: FFCD18 ;" :icon="['fas', 'phone']" /></button>
            </div>
        </section>
    </section>
</template>

<style scoped lang="scss">
.icon{
    font-size: 0.8rem;
    margin-bottom: 2px;
    margin-right: 2px;
}
header{
  background-color: #11212E ;
  opacity: 0.8;
}
.justify-start{
    margin-left: 441px
}
.justify-around{
    justify-content: space-around;
}
.flex{
    display: flex;
}


span{
    color: #ffffff;
}
h1{
    color: #ffffff;
    font-size: 5rem;
    font-weight: 5rem;
}
#title-diff-color{
    color: #6C5A49 !important;
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
.mb-bot{
    margin-bottom: 270px;
}
.pad-top{
    padding-top: 20px;
}
.margin-top{
    margin-top: 16px;
    padding-bottom: 22px;
}
#bg-img{
    background-image: url(../assets/images/jumbotron/mt-2236-home-bg1.jpg);
    background-size: 100%;
    background-repeat: no-repeat; 
    font-family: 'Lato', sans-serif;
}
.btn-yellow{
    background-color: #6C5A49;
    border: none;
    border-radius: 30px;
    padding: 0 10px;
    margin-top: 100px;
}
.btn{
    padding: 0.8rem 2rem;
    border-radius: 5px;
    font-size: 1rem;
 
}
.btn-color{
    background-color: #6C5A49;
    border: none;
}
.btn-opacity{
  background-color: transparent;
  border-color: #ffffff;
  color: #ffffff;
  margin-left: 20px;
}
.btn-white{
    padding: 10px 50px;
    border-radius: 0 5px 10px;
    margin-right: 101px;
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
.ml{
    margin-left: 89px;
}
.gap{
    margin-right: 217px;
}
.relative{
    position: relative;
}
.absolute{
    position: absolute;
    position: absolute;
    top: 42%;
    left: -60%;
    padding: 1rem;
    font-size: 2rem;
    border-radius: 100%;
    border: none;
}
.absolutes{
    position: absolute;
    top: 50%;
    left: 24%;
}
.pad{
    padding-bottom: 120px;
}
    

</style>
