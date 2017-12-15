//封装FileReader对象 提取出公共的函数 图片转base64 提取公共值
/**
 * 图片转base64
 * @param {*} blob 
 * @param {*} type 
 * @param {*} callback 
 */
exports.readBlobAsDataURL = (blob, type,callback) => {
    // 非图片文件不能上传
    if(!/^image\/[png|jpeg|gif]/.test(type)){
      alert('非法的格式')
      return
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      callback(e.target.result);
    };
    reader.readAsDataURL(blob); // 图片转base64
  }