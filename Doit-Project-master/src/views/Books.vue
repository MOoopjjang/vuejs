<template>
    <Subpage v-bind:pagetit="'도서 소개'">
        <div class="bookpage">
            <VueSlickCarousel class="subpageslider" v-bind="settings">
                <div class="rollimg" v-for="(item,index) in Newbooks" v-bind:key="index">
                    <span class="imgbox"><img v-bind:src="item.imgurl" /></span>
                    <strong v-html="item.name"></strong>
                </div>
            </VueSlickCarousel>
            <section class="bookdetail">
                <h1 class="booktitle">
                    DO it! 웹 사이트 만들기
                    <span>HTML , CSS , 자바스크립트 , JQuery , Ajax로 웹 퍼블리싱</span>
                </h1>
                <div class="book-info">
                    <div class="imgview">
                        <div class="imgbook">
                            <img src="/images/books_image/book01.jpg" alt="" />
                        </div>
                        <div class="bookbtns">
                            <b-button variant="lightgray">
                                <i class="bi bi-search" />책 미리보기
                            </b-button>
                            <b-button variant="lightgray">
                                <i class="bi bi-hdd" />전자책
                            </b-button>
                        </div>
                    </div>
                    <div class="infolist">
                        <ul>
                            <li v-for="(item , index) in bookinfolists" v-bind:key="index">
                                <span class="label" v-html="item.label"></span>
                                <span class="label" v-html="item.content"></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </Subpage>
</template>

<script>
import Subpage from "@/layout/components/Subpage.vue";
export default {
    components: {
        Subpage,
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
            ]
        }
    }
}

</script>