import React, { Component, Fragment } from "react";
import "../assets/style.css";

// export function Todo() {
//   return (
//     <Fragment>
//       <form>
//         <input type="text" class="todo-input" />
//         <button class="todo-button" type="submit">
//           <i class="fas fa-plus-square"></i>
//         </button>
//         <div class="select">
//           <select name="todos" class="filter-todo">
//             <option value="all">All</option>
//             <option value="completed">Completed</option>
//             <option value="uncompleted">Uncompleted</option>
//           </select>
//         </div>
//       </form>
//       <div class="todo-container">
//         <ul class="todo-list"></ul>
//       </div>
//     </Fragment>
//   );
// }

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      list: [],
      listHTML: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.renderList = this.renderList.bind(this);
  }

  handleChange(e) {
    console.log(this.state.todo);
    this.setState((state) => ({
      todo: e.target.value
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      list: [...state.list, state.todo],
      listHTML: state.list.map((el) => {
        return (
          <div className="todo">
            <li className="todo-item">{el}</li>
            <button className="complete-btn">
              <i className="fas fa-check" />
            </button>
            <button className="trash-btn">
              <i className="fas fa-trash"></i>`
            </button>
          </div>
        );
      })
    }));
  }

  // renderList() {
  //   console.log("Liste: " + this.state.list);
  //   const listTodo = this.state.list
  //     .map((el) => {
  //       console.log(`
  //     <li>${el}</li>`);
  //     })
  //     .join("");
  //   console.log(listTodo);
  //   return listTodo;
  // }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            class="todo-input"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <button class="todo-button" type="submit">
            <i class="fas fa-plus-square"></i>
          </button>
          <div class="select">
            <select name="todos" class="filter-todo">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>
        <div class="todo-container">
          <ul class="todo-list">{this.state.listHTML}</ul>
        </div>
      </Fragment>
    );
  }
}
