<template>
  <div id="ListItem">
      <h1>这里是用户信息页面ID值为{{$route.params.ID}}且UserName为{{$route.params.UserName}}</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #ListItem{
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>