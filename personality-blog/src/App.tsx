import {Vue,Component,Ref} from "vue-property-decorator";
import app from '@/assets/scss/app.module.scss'
import common from '@/assets/scss/common.module.scss'
@Component
export default class App extends Vue{
    navListIshow = false;
    @Ref() readonly ceshi: any;
    showNavList() {
        this.navListIshow = !this.navListIshow
    }

   render(){
       return(
           <div class={app.color_black}>
                {/* 头部导航 */}
              <div class={common.headerBox}>
              <header class={common.header}>
                    <div class={common.logo}></div>
                    <div class={common.title}>
                        <h1>Cactus Dark  </h1>
                        <ul class={common.navlink}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/About">About</a></li>
                               <li><a href="/Writing">Writing</a></li>
                            <li><a href="#">Github</a></li>
                        </ul>
                    </div>
                    {/* 图标列表 */}
                    <div onClick={this.showNavList} class={common.list}></div>
                </header>
                <ul class={common.navlink_470} style={this.navListIshow ? '' : 'display:none !important;'} ref='ceshi'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Writing">Writing</a></li>
                    <li><a href="#">Github</a></li>
                </ul>
              </div>
              
           <router-view></router-view>
           {/* 底部 */}
           <div class={common.footer}> 
             <div class={common.footer_box} >
             <div  class={common.Copyright}>Copyright © 2020 Fan 浙ICP备1111111号</div>
               <ul class={common.navlink}>
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Writing">Writing</a></li>
                <li><a href="#">Github</a></li>
            </ul>
             </div>
            </div>
           </div>
       )
   }
}