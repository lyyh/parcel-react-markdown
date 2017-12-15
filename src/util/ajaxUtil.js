/**
 * 上传文件
 * @param {blob} fileBlob 文件源 
 */
exports.editorFileUpload = (fileObj) => {
    const formData = new FormData('file',fileObj)
    return new Promise((resolve,reject) => {
        $.ajax({
            url: "/upload",
            type: "POST",
            cache: false,
            data: formData,
            processData: false,  // 不处理数据
            contentType: false   // 不设置内容类型
        }).done((success)=>{
            console.log('图片发送成功')
            resolve(success)
        }).fail((error)=>{
            console.log('图片发送成功')
            reject(error)
        })
    })
}