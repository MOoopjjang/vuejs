<template>
    <Subpage v-bind:pagetit="'도서 소개'">
        <div class="bookpage">
            <VueSlickCarousel class="subpageslider" v-bind="settings">
                <div class="rollimg" v-bind:class="{active: index === tabIndex}" v-for="(item,index) in Newbooks" 
                v-bind:key="index" 
                @init="handleInit"
                ref="carousel"
                v-on:click="Clicklink(index)">
                    <span class="imgbox"><img v-bind:src="item.imgurl" /></span>
                    <strong v-html="item.name"></strong>
                </div>
            </VueSlickCarousel>
            <component
              v-bind:is="componentslist[tabIndex]"
              v-bind:bookUrl="Newbooks[tabIndex].imgurl"
              v-bind:bookName="Newbooks[tabIndex].name"
              v-bind:bookDec="Newbooks[tabIndex].dec"            
            >
            </component>
        </div>
    </Subpage>
</template>

<script>
import Subpage from "@/layout/components/Subpage.vue";
import BookDetail1 from "./BookDetail1.vue";
import BookDetail2 from "./BookDetail2.vue";


export default {
    components: {
        Subpage,
        BookDetail1,
        BookDetail2,
    },
    mounted() {
        if(!this.$route.query.tabId){
            this.tabIndex = 0;
        }else{
            this.tabIndex = Number(this.$route.query.tabId);
        }
    },
    data(){
        return{
            Newbooks: [
                {
                    imgurl: "/images/books_image/book01.jpg",
                    name: "Do it!웹 사이트 따라 만들기",
                    dec: "HTML,CSS,자바스크립트,jquery ,Ajax로 웹 퍼블리싱"
                },
                {
                    imgurl: "/images/books_image/book02.jpg",
                    name: "Do it!웹 사이트 따라 만들기",
                    dec: "HTML,CSS,자바스크립트,jquery ,Ajax로 웹 퍼블리싱"
                },
                {
                    imgurl: "/images/books_image/book03.jpg",
                    name: "Do it!웹 사이트 따라 만들기",
                    dec: "HTML,CSS,자바스크립트,jquery ,Ajax로 웹 퍼블리싱"
                }
            ],
            settings: {
                slidesToShow: 8,
                arrows: true,
                dots: false,
                infinite: true,
                responsive:[
                    {
                        breakpoint: 1023,
                        settings:{
                            slidesToShow: 5,
                        },
                    },
                    {
                        breakpoing: 767,
                        settings: {
                            slidesToShow: 2,
                        }
                    }
                ]
            },
            bookinfolists:[
                {
                    label:"저자",
                    content: "김윤미"
                },
                {
                    label:"발행일",
                    content: "20191128"
                },
                {
                    label:"사양",
                    content: "312쪽"
                },
                {
                    label:"ISBN",
                    content: "979-11-6303-119-2 13000"
                },
                {
                    label:"정가",
                    content: "16,000원"
                },
                {
                    label:"상태",
                    content: "정상 판매중"
                }
            ],
            tapselect: "introduce",
            componentslist:[
                BookDetail1,
                BookDetail2
            ],
            tabIndex: 0,
        }
    },
    methods: {
        Clicklink(tabIndex) {
            if (!(this.$route.query.tabId == tabIndex)){
                this.tabIndex = tabIndex;
                return this.$router.push("/book?tabId="+tabIndex);
            }
        },
        handleInit(){
            this.$nextTick(()=>{
                this.$refs.carousel.goTo(this.tabIndex);
            })
        }
    }
}

</script>