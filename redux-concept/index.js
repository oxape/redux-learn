/**
 * Created by oxape on 2017/3/2.
 */

//state
const state = {
    todos: [],
    visibilityFilter: 'SHOW_COMPLETED'
};
//Actions
const actions = {
    ADD_TODO:{ type: 'ADD_TODO', text: 'Go to swimming pool' },
    TOGGLE_TODO:{ type: 'TOGGLE_TODO', index: 1 },
    SET_VISIBILITY_FILTER:{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' },
};
function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([{ text: action.text, completed: false }]);
        case 'TOGGLE_TODO':
            return state.map((todo, index) =>
                action.index === index ?
                    { text: todo.text, completed: !todo.completed } :
                    todo
            )
        default:
            return state;
    }
}
//相当于发送action的动作
function todoApp(state = {}, action) {
    return {
        todos: todos(state.todos, action),
        // visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    };
};

function getState() {
    return state;
}

class TodoHeader extends React.Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.state = {
            text:'',
        }
    }

    onChange(event) {
        this.setState({
            text:event.target.value,
        })
    }

    onAdd(){
        this.props.onAddHandler(this.state.text);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={this.onChange}/>
                <button onClick={this.onAdd}>添加</button>
            </div>
        );
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.onToggle = this.onToggle.bind(this);
        this.state = {

        };
    }

    onToggle(key){
        this.props.onToggleHandler(key);
    }

    render() {
        console.log(this.props);
        return (
            <ul>
                {
                    this.props.items.map((todo, key) => (
                        <li key={key}>
                            <div style={{background:todo.completed?"green":"gray", display:"inline"}}>
                                {todo.text}
                            </div>
                            {"    "}
                            <input
                                className="toggle"
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => {this.onToggle(key)}}
                            />
                        </li>
                    ))
                }
            </ul>
        );
    }
}

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.onAdd = this.onAdd.bind(this);
        this.onToggle = this.onToggle.bind(this);
        this.state = getState();
    }

    onAdd(text) {
        const action = {
            ...actions.ADD_TODO,
            text:text,
        };
        //这种写法不行 this.state = todoApp(this.state, actions.ADD_TODO);
        this.setState(todoApp(this.state, action));
    }

    onToggle(index) {
        const action = {
            ...actions.TOGGLE_TODO,
            index: index,
        };
        this.setState(todoApp(this.state, action));
    }

    render() {
        return (
            <div>
                <TodoHeader onAddHandler={this.onAdd}/>
                <TodoList items={this.state.todos} onToggleHandler={this.onToggle}/>
            </div>
        );
    }
};

ReactDOM.render(<TodoApp/>, document.getElementById('app'))