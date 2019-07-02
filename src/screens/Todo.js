import React ,{ Component } from 'react'
import { View,Text,StyleSheet,Button,ScrollView} from 'react-native'


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
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'orange'
    }
})


class Todo extends Component {


    state={
        todos: []
    }

    addTodo = () => {
        id++
        const text = 'Todo number' + id
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: id,
                    text: text
                }
            ]
        })
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
                        />
                    ))
                }
            </ScrollView>
            </View>

        )
    }

}  

const TodoItem = props => (
    <View style={styles.todoContianer}>
        <Button title={'Delete'} color={'red'}/>
        <Text>{props.todo.text}</Text>
    </View>
)

export default Todo