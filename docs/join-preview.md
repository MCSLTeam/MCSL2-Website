# 内测资格申请  

::: warning 注意
MCSL2的所有内测版均免费，不存在收费行为；  
均接入加密联网验证，无资格无法使用。
:::
MCSL2会不定时在[QQ群 · MCSL2·官方交流群](/links/mcsl2-qq-group)中放出供测试的版本。如果你想要得到这些版本的内测资格，请填写该表单。  
请放心，内测结束后，您不会被禁止使用该内测版，并且也可在`设置`中升级到正式版。
___

<script>
export default {
  methods: {
    validateIdentificationCode(identificationCode) {
      return /^[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}$/.test(identificationCode);
    },

    handleApiError(message) {
      var resultElement = document.getElementById('apiResult');
      resultElement.textContent = '发生错误：' + message;
    },

    fetchData() {
      var resultElement = document.getElementById('apiResult');
      var identificationCode = document.getElementById('identificationInput').value;
      var checkPreviewUrl = `/api/checkPreviewAvailable?Identification=${identificationCode}`;
      var givePermissionUrl = `/api/givePreviewPermission?Identification=${identificationCode}`;

      if (!this.validateIdentificationCode(identificationCode)) {
        this.handleApiError('输入的识别码格式不正确，应为XXXX-XXXX-XXXX-XXXX');
        return;
      }

      fetch(checkPreviewUrl, { method: 'GET', redirect: 'follow'})
        .then(response => response.json())
        .then(data => {
          if (data.msg.includes('发生错误')) {
            resultElement.textContent = data.msg;
          } else if (data.available) {
            resultElement.textContent = data.msg;
          } else {
            fetch(givePermissionUrl, { method: 'GET', redirect: 'follow'})
              .then(permissionResponse => permissionResponse.json())
              .then(permissionData => {
              if (permissionData.msg.includes('发生错误')) {resultElement.textContent = permissionData.msg;
              } else {resultElement.textContent = permissionData.msg;}
              }
              )
               .catch(error => {
              this.handleApiError(error.message);
              });
            }
            }
            )
        .catch(error => {
          this.handleApiError(error.message);
        });
    }
  }
}
</script>


<input type="text" class="myInput" id="identificationInput" placeholder="请输入你的MCSL2识别码，格式为XXXX-XXXX-XXXX-XXXX"><br>
<button data-v-2dba8ca9="" data-v-72cc4481="" class="myButton medium brand" @click="fetchData()">提交</button>
<p id="apiResult"></p>

<!-- 
::: details 无法加载？
可能是你的浏览器不支持iframe接入方式，你可以选择打开链接：

<https://www.wjx.top/vm/P4PqtSh.aspx>
::: -->
