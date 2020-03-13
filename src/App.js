import React,{useState,useCallback, useEffect,} from 'react';
import './App.css';
import ListProduct from './ListProduct'
ListProduct.forEach(o=> {o.quantity = 1; o.haveInCart = 0})
function App() {
  const [CurrentListProduct, setCurrentListProduct] = useState(ListProduct)
  const [CurrentListCart, setCurrentListCart] = useState(null)

  const changeListProduct = useCallback((e,id)=>{
    var idx = CurrentListProduct.findIndex(o => o._id === id)
    CurrentListProduct[idx].quantity = e.target.value;
    setCurrentListProduct([...CurrentListProduct])
  },[CurrentListProduct])

  useEffect(()=>{
    console.log(CurrentListCart)
  },[CurrentListCart])

  const addToCart = useCallback(id=>{
    var idx = CurrentListProduct.findIndex(o => o._id === id)

    if(CurrentListProduct[idx].haveInCart){
      var idxCart = CurrentListCart.findIndex(o => o._id === id)
      CurrentListCart[idxCart].quantity = CurrentListCart[idxCart].quantity + CurrentListProduct[idx].quantity
      setCurrentListCart([...CurrentListCart])

    }else{
      if(CurrentListCart) {
        CurrentListCart.push(CurrentListProduct[idx])
        setCurrentListCart([...CurrentListCart])

      }else{
        setCurrentListCart([CurrentListProduct[idx]])

      }

      CurrentListProduct[idx].haveInCart = 1
      setCurrentListProduct([...CurrentListProduct])
    }
    
  },[CurrentListProduct,CurrentListCart])

  return(
    <div className="container">
        <h1 className="title">
            Project 02 - Shopping Cart ReactJs
        </h1>
        <div className="row va-t">
            <div className="col-6">
                <div className="list-product">
                    <h2 className="title">
                      List Products
                    </h2>
                    {
                      CurrentListProduct && CurrentListProduct.map(product=>{
                        return(
                          <div key={product._id} className="product">
                            <div className="img img-1-1">
                                <img src={product.thumb} alt=""/>
                            </div>
                            <div className="product-des">
                                <h2 className="product-name"> {product.name} </h2>
                                <p className="des">
                                    {product.content}
                                </p>                            
                            </div>
                            <div className="add-cart">
                                <input onChange={e=> changeListProduct(e,product._id)} className={!product.avaiable ? 'dp-n' : 0} type="number" value={product.quantity}/>
                                <button onClick={()=>addToCart(product._id)} className={product.avaiable ? "add-and-price" : "add-and-price disable"}> {product.price} USD</button>
                            </div>
                          </div>
                        )
                      })
                    }
                </div>
            </div>
            <div className="col-6">
                <div className="cart">
                    <h2 className="title">
                        Your Cart
                    </h2>
                    <table>
                        <thead>
                          <tr>
                              <th className="index">STT</th>
                              <th className="name">Product name</th>
                              <th className="price">price</th>
                              <th className="quantity">quantity</th>
                              <th className="subtotal">subtotal</th>
                              <th className="act">action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            CurrentListCart && CurrentListCart.map((cartItem,idx)=>{
                              return(
                                <tr>
                                  <td> {idx++} </td>
                                  <td> {cartItem.name} </td>
                                  <td> {cartItem.price} USD</td>
                                  <td> <input style={{width:50}} type="number" value={cartItem.quantity}/> </td>
                                  <td> {cartItem.price*cartItem.quantity} USD</td>
                                  <td><span className="update">update</span> <span className="delete">delete</span></td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App;
