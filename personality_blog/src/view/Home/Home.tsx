import { Vue, Component, Ref } from 'vue-property-decorator';
import Homescss from '@/assets/scss/home/home.module.scss'
@Component
export default class Homes extends Vue {
    typer = require('typer-js');
    qwq = require('../../graphql/Apo')
    @Ref() readonly textarea: any;
    mounted() {
        console.log(this.qwq.getHomeData())
        console.log(this.qwq.hello)
        const typerDom = this.$refs.textarea;
        // this.typer().line('Typer.js is awesome!')
        // this.typer(typerDom).line('How cool is this?').line('So very cool.') .line('Agreed!')
        this.typer(typerDom,40)
            .line(`Try to be a rainbow in someone's cloud.`)
            .line('试着去成为别人乌云里的一道彩虹吧！',{speed:60})
            .line('----  who ?')
            // 退后多少格 all代表全部
            .pause(1000)
            .back(5)
            .pause(1000)
            .continue(`it's me ?`)
            .pause(1500)
            .back(9)
            .pause(1000)
            .continue(`Haha, of course not`)
            // 暂停
            .pause(1000)
            // 继续执行什么
            .back(19,{min: 40, max: 40})
            .continue('Maya Angelou!')
          
            // 重复
            // .repeat(Infinity)
    }
    

    render() {
        return (
            <div class={Homescss.homeBox}>
                <div ref='textarea'class={Homescss.textarea} >
                <div class={Homescss.link}>
               find me on github
               </div>
                </div>
              
                {/* 文章 */}
                <section class={Homescss.ArchivesBox}>
                    <h1><a href="#">Writing</a></h1>
                    <ul class={Homescss.ArchivesList}>
                        <li><span >2020-06-16</span><a href="#">[榨干Taro] 开篇 - 跨端开发新时代的思考与举措</a></li>
                        <li><span>2020-06-16</span><a href="#">[榨干Taro] 开篇 - 跨端开发新时代的思考与举措</a></li>
                        <li><span>2020-06-16</span><a href="#">[榨干Taro] 开篇 - 跨端开发新时代的思考与举措</a></li>
                        <li><span>2020-06-16</span><a href="#">[榨干Taro] 开篇 - 跨端开发新时代的思考与举措</a></li>
                    </ul>

                </section>
            </div>
        )
    }
}

