import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    @property // 装饰器，表示该属性可以在编辑器中进行设置
    PlayerMoveSpeed: number = 30; // 小车移动速度

    // 先获取该节点位置
    // 再修改该节点位置
    // this.node代表节点自身

    start() {

    }

    update(deltaTime: number) { //deltaTime是每一帧的时间间隔，单位是秒
        const position = this.node.getPosition();
        // 实现帧时间补偿
        const moveDistance = this.PlayerMoveSpeed * deltaTime;
        this.node.setPosition(position.x,position.y , position.z-moveDistance);

    }
}


