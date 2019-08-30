import React from 'react';

export default class Demo extends React.Component {
    state = {
        initialItems: [],
        items: []
    }

    filterList = (event) => {
      let items = this.state.initialItems;
      items = items.filter((item) => {
        return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
      });
      this.setState({items: items});
    }

    componentWillMount = () => {
      this.setState({
          initialItems: this.props.content,
          items: this.props.content
      })
    }

    render() {
      return (
        <div>
          <form>
                <input type="text" placeholder="Search" onChange={this.filterList}/>
          </form>
          <div>
            {
                this.state.items.map(function(item) {
                return <div key={item}>{item}</div>
                })
            }
            </div>
        </div>
      );
    }
};

// import React, { Component } from 'react';
// import Demo from './components/Demo';

// class App extends Component {
//   render() {

//     const countries =
//     [
//         "Afghanistan",
//         "Åland Islands",
//         "Albania",
//         "Algeria"
//     ];

//     return (
//         <Demo content={countries} />
//     );
//   }
// }