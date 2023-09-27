<template>
  <h2>{{ name }}</h2>
</template>

<script>
export default {
    name: "children",
    props:{
        name:{
            type:String,
        }
    },
    beforeUpdate(){
        console.log(this.name)
    }
}
</script>

<style>

</style>