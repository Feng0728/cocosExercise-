import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    // 先获取该节点位置
    // 再修改该节点位置
    // this.node代表节点自身

    start() {

    }

    update(deltaTime: number) {
        const position = this.node.getPosition();
        this.node.setPosition(position.x,position.y , position.z-0.1);
    }
}


