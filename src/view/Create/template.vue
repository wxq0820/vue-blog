<template>
  <div id="create">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title" type="text"></el-input>
    <p class="msg">至少10个字</p>
    <h3>文章简介</h3>
    <el-input
      v-model="description"
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4 }"
    ></el-input>
    <p class="msg">至少30个字</p>
    <h3>文章内容</h3>
    <el-input
      v-model="content"
      type="textarea"
      :autosize="{ minRows: 4, maxRows: 30 }"
    ></el-input>
    <p>
      <label>是否展示到首页</label>
      <el-switch
        v-model="atIndex"
        active-color="#13ce66"
        inactive-color="#aaa"
      ></el-switch>
    </p>

    <el-button @click="onCreated">确定</el-button>
  </div>
</template>
<script src="./template.js"></script>
<style src="../edit/template.less" lang="less"></style>
