<template>
    <span>
        {{ genre }}
    </span>
</template>

<script>

    export default {
        name: "CategoryComponent",
        props: ["category"],
        setup (props) {
            let genre = `${props.category}`;
            return {
                genre,
            }
        }
    }
</script>

<style scoped>
span {
    /* margin: 10px; */
    border: 1px solid grey;
    padding: 1px 10px;
    border-radius: 20px;
    height: 30px;
    cursor: pointer;
}
span:hover {
    color: white;
    background: #572589;
}
.clicked {
    color: white;
    background: #572589;
}
</style>