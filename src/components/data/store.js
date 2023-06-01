import { reactive } from 'vue';

export const store = reactive({

        navList : ["Home","Services","Courses", "About", "FAQ", "Blog", "Contact Us"],

        services : [ 
        {   id : 1,
            img: "icons/mt-2236-home-icon1.png",
            title: "Various Age Groups",
            text: "We Provide chess classes to both children from 5 years old and adults."
        },
        {   id : 2,
            img: "icons/mt-2236-home-icon2.png",
            title: "Top Chess Variants",
            text: "We don't only teach classical chess but also other top variants of this game"
        },
        {   id : 3,
            img: "icons/mt-2236-home-icon3.png",
            title: "Best Chess Players",
            text: "Our Alumni have won many prestigious chess tournaments in the country"
        },
        {   id : 4,
            img: "icons/mt-2236-home-icon4.png",
            title: "Best Chess Openings",
            text: "Our Students know all the best openings and how to use them."
        }                         
],      

        listIcon : [
        {   id: 1,
            img: "listicon/mt-2236-home-icon-bullet.png",
            text: "Build self-regulation and motivation"
        },
        {   id: 2,
            img: "listicon/mt-2236-home-icon-bullet.png",
            text: "Help with concentration issues"
        },
        {   id: 3,
            img: "listicon/mt-2236-home-icon-bullet.png",
            text: "Learn to plan, organize, and prioritize"
        },
        {   id: 4,
            img: "listicon/mt-2236-home-icon-bullet.png",
            text: "Regulate emotions"
        },
        {   id: 5,
            img: "listicon/mt-2236-home-icon-bullet.png",
            text: "Learn to pay attention to detail"
        }
],

        flyer : [
        {   img: "icons/mt-2236-home-icon5.png",
            title: "PLAY & LEARN",
            text: "take a look into our day in day life here at Chess School"
        }
],
        cards :[
        {
            id:1,
            img: "cards/mt-2236-home-img1.jpg",
            title: "Garry Kasparov's Masterclass",
            text: "Learn the tips, tricks, and strategies from one of the best masters",
            price: "$456"
        },
        {
            id:2,
            img: "cards/mt-2236-home-img2.jpg",
            title: "Online Chess Lessons For The Beginners",
            text: "Created for adult beginners who have few hours a week to practice",
            price: "$205"
        },
        {
            id:3,
            img: "cards/mt-2236-home-img3.jpg",
            title: "Internal Chess School Online",
            text: "Chess lessons for childrens and adults held completely online",
            price: "$356"
        }
        
],

     Events : [
        {
            id: "1",
            img: "events/mt-2236-home-img4.jpg",
            title: "Grand summer tournament 2021",
            decription: "Join us for the Grand Summer Tournament 2021. Held every year on the first Sunday of the Summer,our Grand Summer Tournament chess masters and beginners from North Carolina. We have competitions for differente levels of chess mastery with amazing prizes awarded toeach level."
        },
        {
            id: "2",
            img: "events/mt-2236-home-img5.jpg",
            title: "World chess day",
            decription: "Celebrated on July 20 every year, World Chess Day is one of the biggest events in our school. Be ready for fun tournaments and big prizes. Registration is obligatory!"
        }
],
    Logo: "logo/mt-2236-home-logo.png",


    main    : ["main/mt-2236-home-gallery1.jpg","main/mt-2236-home-gallery2.jpg","main/mt-2236-home-gallery3.jpg","main/mt-2236-home-gallery4.jpg"],

    news : [
        {
            img: "blog/mt-2236-blog-img1.jpg",
            text: "The most common mistakes when managing personal finances"
        },
        {
            img: "blog/mt-2236-blog-img2.jpg",
            text: "Methods of recruitment"
        }
    ],
    jumbotron : ["jumbotron/mt-2236-home-bg1.jpg"]
})