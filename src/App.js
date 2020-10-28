import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor() {
    super();
    this.state = { 
      task: "",
      allTasks: ["Sacar la ropa", "Hacer la cama", "Leer un rato"]
    };
  };
  
  updateText(event) {
    this.setState({
      task: event.target.value
    });
  }
  
  handleKeyPress(event) {
    console.log(this.state.task);
    this.setState({
      task: "",
      allTasks: this.state.allTasks.concat(this.state.task)      
    });
    /* if (event.key === 'Enter') {
    }   */
    event.preventDefault();
  }
  
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.allTasks.map(allTask =>
              <li key={allTask}>{allTask}</li>
            )}
          </ul> 
            <form onSubmit={this.handleKeyPress.bind(this)}>
              <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.task} onChange={this.updateText.bind(this)} /* onKeyPress={this.handleKeyPress.bind(this)} *//>
            </form>
        </div>
      </div>
    )
  }
}


export default App;

/* 
Una posible solución a este reto es la siguiente. En App.js:

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: ['sacar la ropa', 'hacer la cama', 'leer un rato'],
      newTask: ''
    }
  }
  addTask(event) {
    event.preventDefault()
    let oldTasks = this.state.tasks
    let newTask = this.state.newTask
    this.setState({
      tasks: [...oldTasks, newTask],
      newTask: ''
    })
  }
  updateTask(event) {
    this.setState({
      newTask: event.target.value
    })
  }
  render() {
    return (
      <div class="wrapper">
        <div class="list">
          <h3>Por hacer:</h3>
          <ul class="todo">
            {this.state.tasks.map((task, index) => <li key={index}>{task}</li>)}
          </ul>
          <form onSubmit={this.addTask.bind(this)}>
            <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} onChange={this.updateTask.bind(this)}/>
          </form>
        </div>
      </div>
    )
  }
}
Lo que agregamos fue:

Dos propiedades al estado tasks y newTask. Tasks contiene un arreglo con las tareas iniciales, newTask es donde vamos a ir guardando el valor que el usuario escriba en el input.
Al input le agregamos el atributo value con el valor igual a lo que este en el estado en la propiedad newTask. De esta forma, cuando el componente se carga el valor es nulo y el input se inicializa vació. Hasta este punto si intentas escribir en el input vas a ver que no lo vas a poder hacer.
Al input le agregamos el evento onChange el cual dispara la función updateTask de esta forma cada vez que el usuario escribe en el input se dispara esta función.
La función updateTask se encarga de actualizar el valor en el estado de la propiedad newTask la cual va a ser igual a event.target.value. Así el estado se va a mantener sincronizado con el valor del input.
Agregamos el evento onSubmit al from de forma que cuando el usuario haga submit se dispare la función addTask.
La función addTask se encarga de actualizar el estado de forma que la propiedad tasks ahora sea un arreglo que contiene en la ultima posición el valor que existía en this.state.newTask y luego devolvemos el valor en el estado de newTask a su valor inicial para limpiar el input.
Esta es una solución en la que utilizamos el patrón de componentes controlados. En este patrón el valor (value) de los inputs está asociado directamente a alguna propiedad en el estado, en este caso newTask.

Como newTask inicia vacío, el input también inicia vacío. Cuando ingresamos un valor en el input lo que realmente estamos haciendo es disparando una función que actualiza el estado de newTask. Esto hace que React haga un nuevo render y actualice el input con el nuevo valor de newTask.
 */