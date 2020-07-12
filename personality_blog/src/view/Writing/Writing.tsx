import { Component, Vue } from "vue-property-decorator"
import WritingScss from "@/assets/scss/Writing/Writing.module.scss";
@Component
export default class Writing extends Vue {
    render() {
        return (
            <div class={WritingScss.Writingbox}>
                <div class={WritingScss.WritingMiddle}>
                    <div class={WritingScss.List}>
                        <h3>2020</h3>
                        <ul>
                            <li class={WritingScss.ListTime}><span>2020-06-16</span><a href="#">[榨干Taro] 开篇 - 跨端开发新时代的思考与举措</a></li>
                            <li class={WritingScss.ListTime}><span>2020-06-16</span><a href="#">[榨干Taro] 开篇 - 跨端开发新时代的思考与举措</a></li>
                            <li class={WritingScss.ListTime}><span>2020-06-16</span><a href="#">[榨干Taro] 开篇 - 跨端开发新时代的思考与举措</a></li>
                            <li class={WritingScss.ListTime}><span>2020-06-16</span><a href="#">[榨干Taro] 开篇 - 跨端开发新时代的思考与举措</a></li>
                        </ul>
                    </div>
                    <div class={WritingScss.List}>
                        <h3>2020</h3>
                        <ul>
                            <li class={WritingScss.ListTime}><span>2020-06-16</span><a href="#">[榨干Taro] 开篇 - 跨端开发新时代的思考与举措</a></li>
                            <li class={WritingScss.ListTime}><span>2020-06-16</span><a href="#">[榨干Taro] 开篇 - 跨端开发新时代的思考与举措</a></li>
                            <li class={WritingScss.ListTime}><span>2020-06-16</span><a href="#">[榨干Taro] 开篇 - 跨端开发新时代的思考与举措</a></li>
                            <li class={WritingScss.ListTime}><span>2020-06-16</span><a href="#">[榨干Taro] 开篇 - 跨端开发新时代的思考与举措</a></li>
                        </ul>
                    </div>
                    <div class={WritingScss.List}>
                        <h3>2020</h3>
                        <ul>
                            <li class={WritingScss.ListTime}><span>2020-06-16</span><a href="#">[榨干Taro] 开篇 - 跨端开发新时代的思考与举措</a></li>
                            <li class={WritingScss.ListTime}><span>2020-06-16</span><a href="#">[榨干Taro] 开篇 - 跨端开发新时代的思考与举措</a></li>
                            <li class={WritingScss.ListTime}><span>2020-06-16</span><a href="#">[榨干Taro] 开篇 - 跨端开发新时代的思考与举措</a></li>
                            <li class={WritingScss.ListTime}><span>2020-06-16</span><a href="#">[榨干Taro] 开篇 - 跨端开发新时代的思考与举措</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}