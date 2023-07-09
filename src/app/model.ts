export class Model {
    user;
    items;

    constructor() {
        this.user = "Sahyar";
        this.items = [
                        new TodoItem("Breakfast", true),
                        new TodoItem("Lunch", false),
                        new TodoItem("Dinner", false),
                        new TodoItem("Coffee", false),
                     ];

    }
}
export class TodoItem {
    description;
    action;

    constructor(description:any,action:any) {
        this.description = description;
        this.action = action;
    }
}

