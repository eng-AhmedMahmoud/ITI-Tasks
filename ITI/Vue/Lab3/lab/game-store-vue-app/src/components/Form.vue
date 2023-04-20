<template>
    <div class="px-4">
        <div class="message">Please add your account details</div>
        <form class="py-3"> 
        <div class="form-group">
            <div class="form-outline">
                <input type="text" id="form12" class="form-control" />
                <label class="form-label" for="form12">Username / Email</label>
            </div>
        </div>
        <div class="form-group">
            <div class="form-outline">
                <input type="password" id="form13" class="form-control" />
                <label class="form-label" for="form12">Password</label>
            </div>
        </div>
        <div class="forget">Forgot password?</div>
    <button class="btn btn-primary">LOGIN</button>
  </form>
  <div class="dropdown-divider"></div>
  <div class="sign" href="#">Dont have an account? sign up!</div>

    </div>
</template>

<script>
    export default {
        name: "LoginForm"
    }
</script>

<style scoped>
.form-outline {
    border-bottom: solid #444242 1px;
    margin-bottom: 15px;
}
.message {
    color: #7e7c7c;
    font-size: 0.7rem;
}
.forget {
    color: #572589;
    font-size: 0.8rem;
    float: right;
    cursor: pointer;
}
.sign {
    color: #572589;
    font-size: 0.8rem;
    cursor: pointer;
    text-align: center;
}
button {
    margin-top: 20px;
    width: 100%;
    background: #572589;
    border: #572589 solid 1px;
}
button:hover {
    margin-top: 20px;
    width: 100%;
    background: #633d89;
    border: #572589 solid 1px;
}
button:active {
    margin-top: 20px;
    width: 100%;
    background: #633d89;
    border: #572589 solid 1px;
}
</style>