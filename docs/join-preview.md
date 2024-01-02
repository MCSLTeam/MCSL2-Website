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
      const resultElement = document.getElementById('apiResult');
      resultElement.textContent = '发生错误：' + message;
    },

    async fetchData() {
      const identificationCode = document.getElementById('identificationInput').value;
      if (!this.validateIdentificationCode(identificationCode)) {
        this.handleApiError('输入的识别码格式不正确，应为XXXX-XXXX-XXXX-XXXX');
        return;
      }

      const checkPreviewUrl = `https://api.mcsl.com.cn/checkPreviewAvailable?Identification=${identificationCode}`;
      const givePermissionUrl = `https://api.mcsl.com.cn/givePreviewPermission?Identification=${identificationCode}`;
      const commonHeaders = {'Access-Control-Allow-Origin': '*'};
      
      try {
        const checkPreviewResponse = await fetch(checkPreviewUrl, { mode: 'cors', headers: commonHeaders });
        const checkPreviewData = await checkPreviewResponse.json();

        if (checkPreviewData.msg.includes('发生错误')) {
          this.handleApiError(checkPreviewData.msg);
        } else if (checkPreviewData.available) {
          const resultElement = document.getElementById('apiResult');
          resultElement.textContent = checkPreviewData.msg;
        } else {
          const permissionResponse = await fetch(givePermissionUrl, { mode: 'cors', headers: commonHeaders });
          const permissionData = await permissionResponse.json();
          if (permissionData.msg.includes('发生错误')) {
            this.handleApiError(permissionData.msg);
          } else {
            const resultElement = document.getElementById('apiResult');
            resultElement.textContent = permissionData.msg;
          }
        }
      } catch (error) {
        this.handleApiError(error.message);
      }
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
