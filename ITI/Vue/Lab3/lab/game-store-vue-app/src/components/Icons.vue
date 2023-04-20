<template>
    <div>
        <input ref="searchInput" type="text" class="search-click" name="" placeholder="search here..." />
        <svg @click="expandSearch" class="mx-3" id="_9._Icons_Star" data-name="9. Icons / Star" xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21">
  <path id="_Color" data-name="🔹 Color" d="M14.667,15.3h0l-4.583-4.365v-.691L9.836,10a6.12,6.12,0,0,1-3.878,1.373A5.834,5.834,0,0,1,0,5.687,5.834,5.834,0,0,1,5.958,0a5.834,5.834,0,0,1,5.958,5.687,5.529,5.529,0,0,1-1.439,3.7l.257.236h.724L16.032,14l-1.365,1.3ZM5.958,1.75A4.039,4.039,0,0,0,1.833,5.687,4.039,4.039,0,0,0,5.958,9.625a4.039,4.039,0,0,0,4.125-3.938A4.039,4.039,0,0,0,5.958,1.75Z" transform="translate(2.75 2.625)" fill="#572589"/>
        </svg>
        <svg @click="showLogin" id="_9._Icons_Star" data-name="9. Icons / Star" xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21">
  <rect id="_9._Icons_more_background" data-name="9. Icons/more background" width="22" height="21" fill="none"/>
  <path id="Shape" d="M1.833,15.75a1.752,1.752,0,1,1,0-3.5,1.752,1.752,0,1,1,0,3.5Zm0-6.125A1.8,1.8,0,0,1,0,7.875a1.8,1.8,0,0,1,1.833-1.75,1.8,1.8,0,0,1,1.833,1.75A1.8,1.8,0,0,1,1.833,9.625Zm0-6.125A1.8,1.8,0,0,1,0,1.75,1.8,1.8,0,0,1,1.833,0,1.8,1.8,0,0,1,3.666,1.75,1.8,1.8,0,0,1,1.833,3.5Z" transform="translate(9.167 2.625)" fill="#572589"/>
        </svg>
            <LoginForm class="form-div" v-if="showLoginForm" />
    </div>
        

</template>

<script>
    import {ref} from 'vue';
    import LoginForm from "./Form.vue";
    export default {
        name: 'IconsComponent',
        components: {
            LoginForm,
        },
        setup () {
            let showLoginForm = ref(false);
            const searchInput = ref('searchInput');
            function expandSearch() {
                searchInput.value.focus();
            }
            function showLogin () {
                showLoginForm.value = !showLoginForm.value;
            }
            return {
                expandSearch,
                searchInput,
                showLogin,
                showLoginForm
            }
        }
    }
</script>

<style scoped>
.search-click {
  border: 1px solid transparent;
  outline: none;
  background-size: 22px;
  background-position: 13px;
  border-radius: 10px;
  width: 20px;
  height: 25px;
  padding: 20px;
  transition: all 0.5s;
  position: relative;
  overflow: hidden;
  top: 3px;
}
.search-click:focus {
  border: 1px solid #ccc;
  width: 250px;
  padding-left: 10px;
}

svg {
    cursor: pointer;
}

.form-div {
    margin-top: 10px;
    padding: 20px;
    border-radius: 5px;
    position:absolute;
    right: 20%;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    z-index: 10;
    }
</style>