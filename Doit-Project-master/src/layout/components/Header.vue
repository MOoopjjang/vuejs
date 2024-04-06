
import { BButtonClose } from 'bootstrap-vue';
<template>
    <header v-bind:class="TopClass">
        <div class="topmenu">
            <div class="contentbox">
                <div class="logo">
                    <button v-on:click="goToPage('/main')">
                        <img src="/images/logo.png" al="이지스퍼블리싱 로고" />
                    </button>
                </div>
                <div class="system">
                    <button class="login" v-b-modal.login>로그인</button>
                    <button class="member" v-b-modal.member>회원가입</button>
                </div>
            </div>
        </div>
        <nav>
            <div class="contentbox">
                <ul>
                    <li v-for="(item , index) in menuList" v-bind:key="index">
                        <button v-on:click="goToPage(item.link)">{{ item.menutext }}</button>
                    </li>
                </ul>

            </div>
        </nav>
        <b-modal id="login" class="modal" hide-footer>
            <template #modal-title>
                <div lcass="layertit"><i class="bi bi-clipboard-check" />로그인</div>
            </template>
            <div class="modalcontainer">
                <div class="loginform">
                    <label for="id"><i class="bi bi-file-person" />아이디</label>
                    <b-form-input id="id" placeholder="아이디를 입력해 주세요" />
                    <label for="pass"><i class="bi bi-lock" />비밀번호</label>
                    <b-form-input type="password" id="pass" placeholder="비밀번호를 입력해 주세요" />
                </div>
                <div class="btnwrap">
                    <b-button varant="login" class="btn-login">로그인</b-button>
                </div>
            </div>
        </b-modal>
        <b-modal id="member" class="modal" hide-footer>
            <template #modal-title>
                <div class="layertit">
                    <i class="bi bi-clipboard-check" />회원가입
                </div>
            </template>
            <div class="modalcontainer">
                <b-form v-on:submit="Joinmember">
                    <b-form-group id="formid1" label="아이디" label-for="id" description="4~15자리 이내의 영문과 숫자로만 입력하세요">
                        <b-form-input id="id" v-model="form.id" type="text" placeholder="아이디를 작성해 주세요" required>
                        </b-form-input>
                        <b-button>중복확인</b-button>
                    </b-form-group>
                    <b-form-group id="formid2" label="비밀번호" label-for="password" description="8자리 이상의 영문과 숫자로만 입력하세요">
                        <b-form-input id="password" v-model="form.pass" type="password" placeholder="비밀번호를 작성해 주세요" required>
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="formid3" label="이메일수신" label-for="mailing" description="* 이메일 수신을 허락하면 독자 혜택을 받을 수 있어요">
                        <b-form-radio value="Y" v-model="form.mail">예</b-form-radio>
                        <b-form-radio value="N" v-model="form.mail">아니오</b-form-radio>
                    </b-form-group>
                    <b-form-group id="formid4" label="관심 분야 선택" label-for="checkedtype" description="* 관심 분야를 선택하세요. 여러 개 선택할 수 있어요">
                        <!-- <b-form-checkbox value="html" v-model="form.checkedtype">HTML</b-form-checkbox> -->
                        <b-form-checkbox value="html" v-for="(item , index) in form.checkedtype" v-bind:key="index">{{ item }}</b-form-checkbox>
                    </b-form-group>
                    <div class="btnwrap half">
                        <b-button type="submit" variant="login">확인</b-button>
                        <b-button type="reset" variant="cancel">취소</b-button>
                    </div>
                </b-form>
            </div>
        </b-modal>
    </header>
</template>

<script>
    export default {
        data(){
            return {
                menuList : [
                    {
                        menutext:"도서소개",
                        link: "/book"
                    },
                    {
                        menutext:"자료실",
                        link: "/reference"
                    },
                    {
                        menutext:"동영상 강의",
                        link: "/movieclass"
                    },
                    {
                        menutext:"교재샘플",
                        link: "/classsample"
                    },
                    {
                        menutext:"회사 소개",
                        link: "/company"
                    },
                    {
                        menutext:"도서소개",
                        link: "/book"
                    }

                ],
                form:{
                    id: "",
                    pass: "",
                    mail: "",
                    checkedtype:["HTML/CSS","자바스크립트","파이썬","Vue.js","앵귤러","리액트","자료구조/알고리즘","오토캐드"]
                }
                ,TopClass: ""
            }
            
        },
        mounted() {
            window.addEventListener("scroll" , this.handleScroll );
        }
        ,beforeDestroy(){
            window.removeEventListener("scroll" , this.handleScroll);
        }
        ,methods:{
            goToPage(target){
                if(this.$router.currentRoute.path !== target){
                    this.$router.push(target);
                }
                
            }
            ,Joinmember(event){
                event.preventDefault();
                alert(JSON.stringify(this.form))
                this.$nextTick(()=>{
                    this.form.id = "";
                    this.form.pass = "";
                    this.form.mail = "";
                    this.form.checkedtype = [];
                });
            }
            ,handleScroll(){
                const scrollTop = window.pageYOffset;
                const headerTop = document.querySelector("header").clientHeight;
                if( scrollTop < headerTop ){
                    this.TopClass = "";
                }else {
                    this.TopClass = "scrollTop";
                }
            }
        }
    }
</script>

