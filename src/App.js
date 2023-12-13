import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      orders: [],
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
    this.addToOrder = this.addToOrder.bind(this)
  }
  render(){
  return (
    <div className="wrapper">
      <Header orders={this.state.orders}/>
      <Items items={this.state.items} onAdd={this.addToOrder}/>
      <Footer />
    </div>
  );
}
  addToOrder(item){
    let isInArray = false;
    this.state.orders.forEach(el =>{
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
    this.setState({orders: [...this.state.orders,item]})
  }
}

export default App;
