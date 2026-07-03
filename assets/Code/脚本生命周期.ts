import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


    // cocos的函数
    // 1. onLoad() 加载函数：在组件第一次激活时调用，通常用于初始化逻辑。
    // 2. start() 开始函数：在组件第一次激活后调用，通常用于执行需要在所有组件加载完成后进行的逻辑。
    // 3. update(deltaTime: number) 循环函数：每帧调用一次，deltaTime表示自上一帧以来的时间间隔，通常用于处理持续的逻辑或动画。
    // 4. onEnable() 启用函数：在组件被启用时调用，通常用于注册事件监听器或启动定时器。
    // 5. onDisable() 禁用函数：在组件被禁用时调用，通常用于注销事件监听器或停止定时器。
    // 6. onDestroy() 销毁函数：在组件被销毁时调用，通常用于清理资源或取消订阅事件。
    // 7. lateUpdate(deltaTime: number) 延迟更新函数：在所有update函数调用之后调用，通常用于处理需要在所有组件更新完成后进行的逻辑.




@ccclass('NewComponent')
export class NewComponent extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }
}


