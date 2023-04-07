import todo from "../data/todo.json"
export const useTodoStore = defineStore({
    id:'todo',
    state:()=>{
        return{
            todo : todo.data
        }
    },
    actions:{
        taskcomplete(payload){
            this.todo.find(function (list) {
                if (list.id === payload) {
                    return list.status = list.status === 'complete' ? 'incomplete' : 'complete';
                }
            });
        },
        alltaskcomplete(payload){
           this.todo.filter(function (list) {
                   return list.status = payload === true ? 'complete':'incomplete';
            });
        },
        tododelete(payload){
            this.todo = this.todo.filter(list => list.id !== payload);
        },
        addtodo(payload){
            let id = this.todo.slice(-1)[0].id+1;
             this.todo.push(
                {
                    'id': id,
                    'title': payload,
                    'priority':"Pending",
                    'date':"16 Jan",
                    'badgeClass':"badge-light-danger",
                    'delete': false,
                    'status': 'incomplete'
                }
            );
        }
    }
})

