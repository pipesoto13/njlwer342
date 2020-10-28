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
    console.log(event);
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
