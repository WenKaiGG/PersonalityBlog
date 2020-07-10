import { Vue, Component, } from 'vue-property-decorator';
import AboutScss from '@/assets/scss/About/About.module.scss'
@Component
export default class About extends Vue {
    render() {
        return (
            <div class={AboutScss.AboutBox}>
                <div class={AboutScss.typeArea}>
                    {/* 介绍 */}
                    <div class={AboutScss.introduce}>
                        Hi, I’m a theme for the Hexo blogging framework. I’m particularly great for a personal web page with a simple blog.
                     </div>
                     <div class={AboutScss.bgimgBox}>
                         <div class={AboutScss.img}>
                         </div>
                     </div>
                     {/* 个人信息 */}
                    <div class={AboutScss.userInfor}>
                    <h1> 联系方式</h1>
                        <ul>
                            <li>Email:17660422924@163.com</li>
                            <li>Tel:17660422924</li>
                             
                        </ul>
                        <h1>个人信息</h1>
                        <ul>
                            <li>职业: 前端开发工程师</li>
                            <li>城市:17660422924</li>
                             
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}