import React ,{ Component } from 'react'
import { View,Text,StyleSheet,Button,ScrollView,Switch} from 'react-native'


let id = 0

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 20
    },
    appTitle: {
        fontSize: 22,
        color: 'black',
        alignSelf: 'center'
    },
    todoContianer: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        backgroundColor: 'yellow'
    }
})


class Todo extends Component {


    state={
        todos: [],
    }

    addTodo = () => {
        id++
        const text = 'Todo number' + id
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: id,
                    text: text,
                    checked: false
                }
            ]
        }) 
    }

    removeTodo = id => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    toggleTodo = id => {
        alert("Sorry todo isn't completed")
    }


 
    render(){
        return(
            <View style={styles.appContainer}>
                <Text style={styles.appTitle}>TodoApp</Text>
                <Button title={'Add Todo'} onPress={() => {this.addTodo()}} />
            
            <ScrollView style={{flex: 1}}>
                {
                    this.state.todos.map(todo => (
                        <TodoItem 
                        todo={todo}
                        onDelete = {
                            () => this.removeTodo(todo.id)
                        }
                        onToggle={
                            () => this.toggleTodo(todo.id)
                        }
                        
                        />
                    ))
                }
            </ScrollView>
            </View>

        )
    }

}  

const TodoItem = ({todo,onDelete,onToggle}) => (
    <View style={styles.todoContianer}>
       
        <Button title={'Delete'} color={'red'} onPress={onDelete}/>
        <Text>{todo.text}</Text>
        <Switch value={todo.checked} onValueChange={onToggle}/>
    </View>
)

export default Todo