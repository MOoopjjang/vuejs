<template>
    <div class="app-info">
        환경 :<strong>{{ currentProfile }}</strong> <br />
        버전 :<strong>{{ version }}</strong>
    </div>
</template>
<script>
// import EventBus from '@/assets/js/event-bus.js';
export default {
    name: 'AppInfo',

    data(){
        return {
            currentProfile: '',
            version:''
        }
    },
    created(){
        this.currentProfile = process.env.VUE_APP_PROFILE;
        this.version = process.env.VUE_APP_VERSION;

        // Header 갱신
        this.$eventBus.$emit('currentTab' , '앱정보');
    }

}
</script>
<style scoped>
.app-info {
    width: 100%;
    height: 400px;
}
</style>