declare const _default: {
    User: import("./Users/Users.interface").UserModel;
    Board: import("mongoose").Model<import("./Boards/Board.interface").default, {}, {}, {}, any>;
    Task: import("mongoose").Model<import("./Tasks/Tasks.interface").default, {}, {}, {}, any>;
};
export default _default;
