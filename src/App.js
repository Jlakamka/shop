import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair-grey.jpg',
          desc: 'Lorem',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Диван черный',
          img: 'black-sofa.jpg',
          desc: 'Lorem lorem',
          category: 'sofas',
          price: '99.99'
        }
      ]
    }
  }
  render(){
  return (
    <div className="wrapper">
      <Header />
      <Items items={this.state.items}/>
      <Footer />
    </div>
  );
}
}

export default App;
