import { _decorator, Collider, Component, director, input, Input, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    // 脚本中绑定节点/组件：@property(类型) 对象名: 类型 = null;
    @property(Label)
    Tips_Label: Label = null; // 绑定提示标签
    @property(Node)
    Tips_Node: Node = null; // 绑定提示父节点
    @property(Node)
    Camera_Node: Node = null; // 绑定摄像机节点
    @property(Collider)
    Player_Collider: Collider = null; // 绑定小车碰撞组件
    @property // 装饰器，表示该属性可以在编辑器中进行设置
    PlayerMoveSpeed: number = 10; // 小车移动速度
    Player_Mvoe = {Left: false, Right: false}; // 小车移动方向
    Move = true; // 小车是否可以移动

    protected onLoad(): void {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        this.Player_Collider.on('onTriggerEnter', this.Start_Collider, this);
    }

    protected onDestroy(): void {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        this.Player_Collider.off('onTriggerEnter', this.Start_Collider, this);
    }

    New_Game(){ // 新游戏按钮点击事件
        // this.Tips_Node.active = false; // 隐藏提示信息
        // this.node.setPosition(0, 0, 0); // 重置小车位置
        // this.Camera_Node.setPosition(0, 12.159, 18.018); // 重置摄像机位置
        // this.Move = true; // 小车可以移动
        director.loadScene("C1"); // 加载游戏场景
    }

    Start_Collider(C) { // 碰撞后执行的函数
        this.Move = false; // 碰撞后小车不能移动
        this.Tips_Node.active = true; // 碰撞后显示提示节点
        if(C.otherCollider.node.name == "End") { // 如果碰撞到的物体是终点
            this.Tips_Label.string = "游戏胜利"; // 显示提示信息
        }else { // 如果碰撞到的物体是障碍物
            this.Tips_Label.string = "游戏失败"; // 显示提示信息
        }
    }

    onKeyDown(key){
        if(key.keyCode == 65) { // A键
            this.Player_Mvoe.Left = true;
        }
        if(key.keyCode == 68) { // D键
            this.Player_Mvoe.Right = true;
        }
    }

    onKeyUp(key){
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
        if(!this.Move) return; // 如果小车不能移动，则直接返回
        const playerPos = this.node.getPosition();
        const cameraPos = this.Camera_Node.getPosition();
        // 实现帧时间补偿
        const moveDistance = this.PlayerMoveSpeed * deltaTime;
    
        if(this.Player_Mvoe.Left && !this.Player_Mvoe.Right) {
            playerPos.x -= moveDistance*0.5;
        }
        else if(this.Player_Mvoe.Right && !this.Player_Mvoe.Left) {
            playerPos.x += moveDistance*0.5;
        }
        playerPos.x = Math.max(-5, Math.min(5, playerPos.x)); // 限制小车移动范围在[-5, 5]之间

        this.node.setPosition(playerPos.x, playerPos.y, playerPos.z - moveDistance);
        this.Camera_Node.setPosition(cameraPos.x, cameraPos.y, cameraPos.z - moveDistance);
    }
}


