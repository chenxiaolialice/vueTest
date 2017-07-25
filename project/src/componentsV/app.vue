<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对VUE的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <add :add="add"></add>
      <list :comments="comments" :delete-comment="deleteComment"></list>
    </div>
  </div>
</template>
<script>
  import add from './add.vue'
  import list from './list.vue'
  export default{
      data(){
          return {
            comments: []
          }
      },
    created(){
       // 模拟发送ajax 请求
      setTimeout(()=>{
          //得到数据
         const comments=[
           {
             username: 'tom',
             content: "vue 很难！"
           },
           {
             username: 'teacher',
             content: "vue 不错！"
           }
         ]
        // 更新数据
        this.comments=comments
      },2000)
    },
    methods:{
        add(comment){
          this.comments.unshift(comment)
        },
        deleteComment(index){
            this.comments.splice(index,1)
        }
    },
    components:{
      add,
      list
    }
  }
</script>

<style>

</style>
