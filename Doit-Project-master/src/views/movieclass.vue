<template>
    <Subpage v-bind:pagetit="'동영상강의'">
        <div class="movieclasspage">
            <div class="subpageguide">
                동영상 강의를 볼 수 있습니다.
            </div>
        </div>
        <listComm v-bind:lists="lists" />
    </Subpage>
</template>

<script>
    import Subpage from "@/layout/components/Subpage.vue"
    import listComm from "@/layout/components/listComm.vue"
    export default {
        components:{
            Subpage,listComm
        },
        data(){
            return {
                lists:[
                    {
                        img: "/images/books_image/book03.jpg",
                        title: "Do it! C# 프로그래밍 입문",
                        date: "2022.10.18",
                        dec: "채널에 접속하시면 전체 강의를 볼 수 있습니다.( 출간 후 차례로 업데이트 예정)",
                        link1:"https://naver.com",
                        link2:""
                    },
                    {
                        img: "/images/books_image/book27.jpg",
                        title: "Do it! 깡샘의 플로터 & 다트 프로그래밍",
                        date: "2022.10.18",
                        dec: "채널에 접속하시면 전체 강의를 볼 수 있습니다.( 출간 후 차례로 업데이트 예정)",
                        link1:"https://naver.com",
                        link2:""
                    }
                ]
            }
        }
    }
</script>