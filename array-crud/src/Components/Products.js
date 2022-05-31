import React from 'react'
import { useState } from 'react'

function Products() {
    const [pname,setPname]=useState();
    const [qty,setQty]=useState();
    const [price,setPrice]=useState();
    const products = [
        {
            "id":1,
            "pname":"Rice",
            "qty":25,
            "price":1300
        },
        {
            
            "id":2,
            "pname":"Dal",
            "qty":1,
            "price":100
        },
        {
            
            "id":3,
            "pname":"Soap",
            "qty":25,
            "price":30
        }
        
    ]

    const tableRow = products.map(element=>{
        return (
            <tr>
                <td>{element.id}</td>
                <td>{element.pname}</td>
                <td>{element.qty}</td>
                <td>{element.price}</td>
                <td>
                    <button className='btn btn-primary'>Update</button>
                    <button className='btn btn-danger'>Delete</button>
                </td>
            </tr>
        )
    });
    let create=()=>{
        alert("successfully data entered...!")
        products.push({
            pname:pname,
            qty:qty,
            price:price
        })
    }
  return (
    <div className='container'>
        <h1 style={{color:"red"}}>CreateProduct</h1>
     <hr/>
        <form>
  <div class="form-group">
    
    <input type="text" 
            class="form-control" 
            id="exampleInputPname" 
            placeholder='Enter producr name'
            name="pname"
            onChange={e=>setPname(e.target.value)}
    />
    
  </div>
  <div className="form-group">
    
    <input type="text" 
    class="form-control" 
    id="exampleInputQTY"
    placeholder='Enter producr QTY'
    name="qty"
            onChange={e=>setQty(e.target.value)}
    />
  </div>
  <div className="form-group">
    <input type="text" 
    class="form-control" 
    id="exampleprice"
    placeholder='Enter producr price'
    name="price"
            onChange={e=>setPrice(e.target.value)}
    />
    
  </div>
  <button type="submit" class="btn btn-primary" onClick={create}>Submit</button>
</form>
<hr/>
      
    
        <h1 style={{color:'green'}}>Products List</h1>
        <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Product_Name</th>
      <th scope="col">QTY</th>
      <th scope="col">Price</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {tableRow}
   </tbody>
</table>


 
    </div>
  )
}

export default Products