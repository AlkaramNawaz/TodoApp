import React ,{ Component } from 'react'
import { View,Text,StyleSheet,Button,ScrollView,Switch} from 'react-native'
import { styles } from './todoStyles'
import { TodoItem} from '../../components/TodoItem'

let id = 0

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
        this.setState({
            todos: this.state.todos.map(todo => (
                todo.id !== id ? todo :
                {
                    id: todo.id,
                    text: todo.text,
                    checked: !todo.checked
                }
            ))
        })
    }



 
    render(){
        return(
            <View style={styles.appContainer}>

                <Text style={{fontSize: 20}}>Total todos:  {this.state.todos.length}</Text>
                <Text style={{fontSize: 20}}>Complete todos: {this.state.todos.filter(todo => todo.checked).length}</Text>
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


export default Todo