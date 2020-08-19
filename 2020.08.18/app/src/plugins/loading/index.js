import './index.css'
export default {
    install(vue) {
        // 给vue添加原型属性 自定义 api 
        var template = `
        <div class="mark-load">
        <div class="img"></div>
        </div>
     `
        var mask = document.createElement('div');
        mask.className = 'mask'
        mask.innerHTML = template
        var body = document.querySelector('body');
        body.appendChild(mask)
        vue.prototype.$loading = function (flag, obj) {           
            // 通过flag 值 控制显示隐藏
            console.log(obj)
            if(flag){
                mask.style.display = 'block' 
            }else{
                mask.style.display = 'none' 
            }
        }
        vue.prototype.showLoading = function (aa) {
            // loading 显示
            console.log(aa)
        }
        vue.prototype.hideLoading = function () {
            // loading 隐藏
        }
    }
}