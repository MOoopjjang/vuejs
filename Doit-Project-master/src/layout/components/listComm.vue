<template>
    <div class="listwrap">
            <div class="listnum">
                홈 <strong>{{ lists.length }}</strong>건이 등록되어 있습니다.
            </div>
            <div class="listbox">
                <div class="listitem" v-for="(item,index) in lists" v-bind:key="index">
                    <div class="listthum"><img v-bind:src="item.img" /></div>
                    <div class="listdetail">
                        <strong>{{ item.title }}</strong>
                        <div class="listdate">{{ item.date }}</div>
                        <div class="listdec">{{ item.dec }}</div>
                        <div class="itembtns">
                            <b-button variant="listdown" v-bind:href="item.link1"><i class="bi bi-folder-symlink" />소스 파일 내려받기 </b-button>
                            <b-button variant="listdown" v-bind:href="item.link2"><i class="bi bi-table" />정오표</b-button>
                        </div>
                        <div class="downguide">
                            다운로드가 안 될 경우 <br />회사에서 접속한경우 사내 보안
                            등의 이유로 다운로그가 되지 않을 수 있습니다.<br />
                            고객센터로 연락주시면 별도로 승부하겠습니다.
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        props: ["lists"],
    }
</script>