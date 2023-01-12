# 根据查询的内容动态配置echart的x和y轴

::: tip 需求
根据查询条件调用接口，返回的数据动态配置后改变x和y轴。
:::
安装```npm install echarts --save```
## 按需引入组件和类型
```ts
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import {
    // 系列类型的定义后缀都为 SeriesOption
    BarChart, BarSeriesOption,
} from "echarts/charts";
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
    // 组件类型的定义后缀都为 ComponentOption
    TitleComponent, TitleComponentOption,
    TooltipComponent, TooltipComponentOption,
    GridComponent, GridComponentOption,
    LegendComponent, LegendComponentOption,
    // 数据集组件
    DatasetComponent, DatasetComponentOption,
    // 内置数据转换器组件 (filter, sort)
    TransformComponent,
    DataZoomComponent,
} from "echarts/components";
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = echarts.ComposeOption<
    | BarSeriesOption
    | LegendComponentOption
    | TitleComponentOption
    | TooltipComponentOption
    | GridComponentOption
    | DatasetComponentOption
>;

// 注册必须的组件
echarts.use([
    BarChart,


    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    DatasetComponent,
    TransformComponent,
    DataZoomComponent,

    CanvasRenderer,
    LabelLayout,
    UniversalTransition,
]);

export default echarts;
```

## 创建组件
```tsx
import echarts, { ECOption } from './echarts'
import { v4 as uuid } from 'uuid';
import { defineComponent, reactive, onMounted, onBeforeUnmount, watch, computed, nextTick, ref } from "vue";
import { BarSeriesOption } from 'echarts/charts';
export default defineComponent({
    props: {
        xaxisData: {
            type: Object,
        },
        yaxisData: {
            type: Array,
        },
    },
    setup(p) {
        const setOption = computed(() => {
            let SeriesData: any;
            let legendData: any;
            SeriesData = p.yaxisData
            SeriesData?.map((e: BarSeriesOption) => {
                e.type = "bar"
                e.label = {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    color: 'black',
                    fontSize: 10,
                    formatter: (params) => {
                        return `${params.value ? params.value : ' '}`
                    },
                }
            })
            legendData = SeriesData?.filter((e: BarSeriesOption) => e.name)
            let option: ECOption = {
                // title: {
                //     text: '暂无数据',
                //     show: true,
                //     textStyle: {
                //       color: 'red',
                //       fontSize: 25
                //     },
                //     textAlign: 'center',
                //     top: '50%',
                //     left: '45%'
                // },
                /**图表离容器的距离 */
                grid: {
                    top: "50px",
                    left: "50px",
                    right: "45px",
                    bottom: "200px"
                },
                //鼠标滑过提示栏
                tooltip: {
                    trigger: "axis",
                    // position: 'bottom',
                    confine: true,
                    axisPointer: {
                        type: "shadow",
                    },
                },
                //图表选择栏
                legend: {
                    icon: "square",
                    // top: 20,
                    bottom: 0,
                    itemHeight: 15, //修改icon图形大小
                    textStyle: {
                        fontSize: 15,
                        color: "#000",
                    },
                    data: legendData,
                },
                //x坐标轴
                xAxis: [
                    {
                        type: "category",
                        data: p.xaxisData as any,
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        // x轴下面文字描述
                        axisLabel: {
                            show: true,
                            interval: 0,
                            rotate: -45,
                            color: '#000'
                        },
                    },
                ],
                //y坐标轴
                yAxis: [
                    {
                        type: "value",
                    },
                ],
                // 数据展示区域
                series: SeriesData,
            };
            return option
        })

        const chartId = ref<any>(1);
        chartId.value = uuid().replace(/-/g, "");
        let myChart: echarts.ECharts
        let divId: HTMLElement
        const setEchart = () => {
            divId = document.getElementById(chartId.value) as HTMLElement
            myChart.dispose()
            myChart = echarts.init(
                divId
            );
            myChart.setOption(setOption.value)
            window.addEventListener("resize", function () {
                myChart.resize();
            })
        }

        onMounted(() => {
            myChart = echarts.init(
                divId = document.getElementById(chartId.value) as HTMLElement
            );
            setEchart()
        })

        watch(p, () => {
            setEchart()
        })
        return {
            chartId
        }
    },
    render() {

        return (
            <>
                <div 
                id={this.chartId}
                style='width: 100%;height:700px;border-top: 2px solid #e7e7e7;'
                ></div>
            </>
        )
    }
})
```
## 数据
```ts
yaxisData：如{'1月','2月','3月','4月','5月','6月'}

xaxisData：如[     
    {
          name: "电", color: "#0d867f", data: [
                1, 2, 3, 4, 5, 6,
            ],
        },
        {
            name: "水", color: "red", data: [
                1, 2, 3, 4, 5, 6,
            ],
        },
]
```
## 述
- 使用uuid，多个这种表格在一个页面给每个一个不重复id
- onMounted中要先调用一次，不然会出现找不到dom
