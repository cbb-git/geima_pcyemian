<template>
  <div id="login" class="login">
    <div class="container">
      <img class="avatar" src="../assets/avatar.jpg" alt />
      <el-form ref="ruleForm" class="demo-ruleForm" :model="ruleForm" :rules="rules">
        <el-form-item prop="username">
          <el-input
            @focus="handlerfocus('username')"
            prefix-icon="el-icon-user-solid"
            placeholder="请输入用户名"
            v-model="ruleForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            @focus="handlerfocus('password')"
            prefix-icon="icon-key"
            placeholder="请输入密码"
            v-model="ruleForm.password"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" class="login-btn" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
// 引入接口
import {Login} from '@/apis/user.js';
export default {
data () {
  return {
    // 用户验证信息
   ruleForm:{
     username:'',
     password:'',
   },
   rules:{
    username: [
            { required: true, message: '请输入正确用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
    password: [
            { required: true, message: '请输入正确密码', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
   },
  }
},
 methods: {
  handlerfocus(e){
      // 移出提示   当我们用户聚焦在表单的时候 移出提示 实参就是prop 的参数  这个方法也是作用在我们表单里的
    this.$refs.ruleForm.clearValidate(e)
  },
  // 用户登录
   login(){
    // 登录之前我们需要二次判断    validate方法会返回一个布尔值
    this.$refs.ruleForm.validate(async (res)=>{
      if(res){
        // 当你二次验证过了以后 在和数据库对接
    let res = await Login(this.ruleForm)
      console.log(res);
    if(res.data.message == '登录成功'){
      this.$message({
          message: '登录成功',
          type: 'success'
        });
    }else{
      this.$message({
          message: res.data.message,
          type: 'warning'
        });
    }
      }else{
        this.$message({
          message: '請輸入信息',
          type: 'warning'
        });
        return false
      }
      
    })


     
  }
}
}
</script>

<style lang="less" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;

  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>