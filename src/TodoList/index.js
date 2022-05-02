import React from 'react';

class TodoList extends React.Component {
  itemToAddInput;

  constructor(props) {
    super(props);

    const storageItems = JSON.parse(localStorage.getItem('todo-items') || '[]');

    this.state = {
      itemsList: storageItems,
      itemToAdd: ''
    };
  }

  componentDidMount() {
    this.itemToAddInput.focus();
  }

  render() {
    return (
      <>
        <div>
          <input
            type="text"
            value={this.state.itemToAdd}
            onChange={this.onItemToAddChange}
            ref={(ref) => { this.itemToAddInput = ref }}
          />

          <button onClick={this.onAddItem}>
            Add item
          </button>
        </div>

        <ul>
          {this.state.itemsList.map((item, id) =>
            <li key={id}>{item}</li>
          )}
        </ul>
      </>
    )
  }

  onItemToAddChange = (event) =>
    this.setState({
      itemToAdd: event.target.value
    });

  onAddItem = () =>
    this.setState({
      itemsList: this.state.itemsList.concat([this.state.itemToAdd]),
      itemToAdd: ''
    }, () => {
      localStorage.setItem('todo-items', JSON.stringify(this.state.itemsList));
    });
}

export default TodoList;