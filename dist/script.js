function Square(props) {
  return /*#__PURE__*/(
    React.createElement("button", { className: "square", onClick: props.onClick },
    props.value));


}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true };

  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext });

  }

  renderSquare(i) {
    return /*#__PURE__*/(
      React.createElement(Square, {
        value: this.state.squares[i],
        onClick: () => this.handleClick(i) }));


  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "status" }, status), /*#__PURE__*/
      React.createElement("div", { className: "board-row" },
      this.renderSquare(0),
      this.renderSquare(1),
      this.renderSquare(2)), /*#__PURE__*/

      React.createElement("div", { className: "board-row" },
      this.renderSquare(3),
      this.renderSquare(4),
      this.renderSquare(5)), /*#__PURE__*/

      React.createElement("div", { className: "board-row" },
      this.renderSquare(6),
      this.renderSquare(7),
      this.renderSquare(8))));



  }}


class Game extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "game" }, /*#__PURE__*/
      React.createElement("div", { className: "game-board" }, /*#__PURE__*/
      React.createElement(Board, null)), /*#__PURE__*/

      React.createElement("div", { className: "game-info" }, /*#__PURE__*/
      React.createElement("div", null), /*#__PURE__*/
      React.createElement("ol", null))));



  }}


// ========================================

ReactDOM.render( /*#__PURE__*/
React.createElement(Game, null),
document.getElementById('root'));