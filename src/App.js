import logo from './logo.svg';
import {useState,useEffect} from 'react'
import './App.css';
import {v4 as uuidv4} from 'uuid';
function sortFunction(a,b){  
  var dateA = new Date(a.date).getTime();
  var dateB = new Date(b.date).getTime();
  return dateA > dateB ? 1 : -1;  
}; 
function status(debit,credit){
  let dif = debit - credit;
  if(dif < 0 ){
    return "Logi ka boi"
  }else if(dif!==0){
    return dif
  }else{
    return "Balance";
  }
}
function App() {
  const [debit, setdebit] = useState([
  ]);
  const [credit, setcredit] = useState([]);
  const totaldebit = debit.reduce((tots,debt) => tots + parseInt(debt.amount,10),0);  
  const totalcredit = credit.reduce((tots,cred) => tots + parseInt(cred.amount,10),0);
  const sortedebit = debit.sort(sortFunction);
  const sortedcredit = credit.sort(sortFunction);
  const [isbalance, setisbalance] = useState();
  const [input, setinput] = useState(
    {
      date:"",
      desc:"",
      amount:0,
      type:""
    }
  )
  
  const onChange = e =>{
    setinput({
      ...input,
      [e.target.name]:e.target.value
    })
  }
  const onClick = (e)=>{
    e.preventDefault();
    if(input.date==="" || input.desc==="" || input.amount===""){
      alert("Fill out all fields")
    }else{
    const newTodo = {
      id:uuidv4(),
      date:input.date,
      desc:input.desc,
      amount:input.amount 
    }
    if(input.type==="debit"){
      setdebit([...debit,newTodo]);  
      setinput({
        id:"",
        date:"",
        desc:"",
        amount:""
      })
    }else if(input.type==="credit"){
      setcredit([...credit,newTodo])
      setinput({
        id:"",
        date:"",
        desc:"",
        amount:""
      })
    }else{
        alert("none");
    }
  }
  }
  const deletecredit = e =>{
  setcredit([...credit.filter(cred => cred.id!==e.target.value)]);
  }
  const deletedebit = e =>{
    setdebit([...debit.filter(deb => deb.id!==e.target.value)]);
    }
 
  return (
    <div className="App">
     <nav className="navbar navbar-light bg-light">
       <a className="navbar-brand" href="">Accounting</a>
    </nav>
      
        <div className="border">
      <div className="row">
        <div className="col">
          <input type="date" className="form-control" placeholder="Name" name="date" onChange={onChange} value={input.date}/>
        </div>
        <div className="col">
          <input className="form-control" placeholder="Description" name="desc" value={input.desc} onChange={onChange}/>
        </div>
        <div className="col">
          <input className="form-control" placeholder="Amount" name="amount" value={input.amount}  onChange={onChange}/>
        </div>
        <div className="col">
            <select name="type" className="form-control" onChange={onChange}>
              <option value="none">Pls Choose</option>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select>
        </div>
      </div>
      <br></br>
      <button className="btn btn-success" onClick={onClick}>Add Entry</button>
      </div>
      <div className="margin">
            <p>Status: 
            {status(totaldebit,totalcredit)}
            </p>
            <div className="row">
            <div className="col">
              <p className="title">Debit</p>
              <p>Total: {totaldebit}</p>
                <table class="table">  
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col"> </th>
                      <th scope="col">Cash</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedebit.map((res,index) =>(
                      <tr key={index}>
                        <td>{res.date}</td>
                        <td>{res.desc}</td>
                        <td>{res.amount}</td>
                        <td><button className="btn btn-danger btn-sm" onClick={deletedebit} value={res.id} >Remove</button></td>
                      </tr>
                    ))}
                  </tbody>
              </table>

           </div>
          <div className="col">
              <p className="title">Credit</p>
              <p>Total: {totalcredit}</p>
              <table class="table">  
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col"> </th>
                      <th scope="col">Cash</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedcredit.map((res,index) =>(
                      <tr key={index}>
                        <td>{res.date}</td>
                        <td>{res.desc}</td>
                        <td>{res.amount}</td>
                        <td><button className="btn btn-danger btn-sm" onClick={deletecredit} value={res.id} >Remove</button></td>
                      </tr>
                    ))}
                  </tbody>
              </table>
                 

          </div>
      </div>
  </div>

    </div>
  );
}

export default App;
