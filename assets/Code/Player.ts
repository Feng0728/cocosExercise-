import { _decorator, Component, input, Input, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    @property // 装饰器，表示该属性可以在编辑器中进行设置
    PlayerMoveSpeed: number = 30; // 小车移动速度

    Player_Mvoe = {Left: false, Right: false}; // 小车移动方向

    protected onLoad(): void {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    protected onDestroy(): void {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    protected onKeyDown(key): void {
        if(key.keyCode == 65) { // A键
            this.Player_Mvoe.Left = true;
        }
        if(key.keyCode == 68) { // D键
            this.Player_Mvoe.Right = true;
        }
    }

    protected onKeyUp(key): void {
        if(key.keyCode == 65) { // A键
            this.Player_Mvoe.Left = false;
        }
        if(key.keyCode == 68) { // D键
            this.Player_Mvoe.Right = false;
        }
    }

    start() {

    }

    update(deltaTime: number) { //deltaTime是每一帧的时间间隔，单位是秒
        const position = this.node.getPosition();
        // 实现帧时间补偿
        const moveDistance = this.PlayerMoveSpeed * deltaTime;

        if(this.Player_Mvoe.Left && !this.Player_Mvoe.Right) {
            position.x -= moveDistance*0.1;
        }
        else if(this.Player_Mvoe.Right && !this.Player_Mvoe.Left) {
            position.x += moveDistance*0.1;
        }

        const z = position.z - moveDistance;
        this.node.setPosition(position.x, position.y, z);
    }
}


