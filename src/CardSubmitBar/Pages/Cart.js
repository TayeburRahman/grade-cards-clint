import SearchIcon from '@mui/icons-material/Search';
import { Button, CircularProgress, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Firebase/Hook/useAuth';
import MetaData from '../../MetaData';
import AddedCardLast from '../CompoCard/AddedCard';
import CartDeta from '../CompoCard/CartDeta';
import useCart from '../CompoCard/Hooks/useCart';
import PriceList from '../CompoCard/PriceList';
import img from "../Images/download.svg";
import CheckoutSteps from './CheckoutSteps';


function  Cart() {
  const {user} = useAuth()
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState('');
  const [displayProduct,setDisplayProduct] = useState([])
  const [cart, setCart] = useCart(); 
  const [loading, setLoading] = useState(false)
  let history = useHistory();

  
// ------------------------------------------
  useEffect(() => {
     fetch("./Pockmon.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // input search tex hendl UI. No.7 and END
        setDisplayProduct(data);
      },[]);
  }, [cart]);
// --------------------------------
  const price = cart.length * 20; 
// -----------------------------------
  const hendlSearch = (event) => {
    const searchText = event.target.value;
    setValue(searchText)
    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProduct(matchedProducts);
  }
// --------------------------------------- 
  const handleClick =(data)=>{
    setLoading(true)
    let submit ={}
    submit.cards = data; 
    submit.price= price;
    fetch(`http://localhost:5000/api/v1/submit/${user?.email}` ,{
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(submit),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log('result',result)
        if (result.massages) { 
          setLoading(false)
          history.push("/submission_shipping_new")
        } else {
           
        }
      });  
   }
   
// ----------------------------------
    return (
      <div className='mainsection'>
         <MetaData title={'Cart'} />
          <div className='row fastRow'>
          <div className='d-flex container logoContainer'
             style={{justifyContent: 'space-between'}}
             >
             <div className='text-left logo'>
              <img src={user} dataReactid=".0.0"  />
             </div>
             <div className=' text-right userImage'>
               <img src={img} dataReactid=".0.0"/>
             </div>
             </div>
             <div className='text'>
               <h2>Submit Cards For Grading</h2>
             </div>
             <div className='CheckoutStepsMainPage'>
                 <CheckoutSteps  service cards className=" "></CheckoutSteps>
             </div>
          </div>
        <div className='d-grid p-5 m-3  lastSection'>
           <div className='row d-flex mt-5 mb-4'
           style={{justifyContent: 'space-around'}}
           >
             <div className='text-left mb-4 ps-3 col-md-12 col-sm-12'
             style={{margin: '50px 10px 0px 0px'}}
             >
              <h2 className='h2-style '>
              Add cards to your submission
              </h2>
                <Typography className='text-left' variant="body2" gutterBottom component="div">
                Search for a card below and click the "+" icon, then enter the   quantity and value for each card.
                </Typography>
                <Typography className='text-left' variant="body2" gutterBottom component="div">
                 quantity and value for each card.
                </Typography>
             </div>
            <div className='row p-3' >
             <dib className='col-md-8 col-sm-12'>
               <div className='col-md-12 col-sm-12' >
               <Typography className='text-left' variant="h6" gutterBottom component="div">
               Search
               </Typography>
               <div className="input-group flex-nowrap">
                  <span className="input-group-text" id="addon-wrapping">
                  <SearchIcon />
                  </span>
                  <input
                  onChange={hendlSearch}
                   type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
               </div>
             </div>
               { value ?
               
                 <CartDeta 
                 key={displayProduct.key}
                 displayProduct={displayProduct}
                //  handleAddToCart={handleAddCart}
                 ></CartDeta>
               :
                  <div className=''>
                  <Paper elevation={3}> 
                    <div className='MuiPaper-root'
                    style={{margin: '20px'}}
                    >
                     <Typography className='text-left mt-2 mb-2' variant="h6" gutterBottom component="div">
                      Added Card(s)
                      </Typography>
                      <Typography variant="caption d-flex" display="block" gutterBottom
                      style={{
                      justifyContent: 'center'}}
                      >
                      No cards have been added yet.
                      </Typography>
                    </div>
                 </Paper>
                  </div>
                   
               }
               <div>
                 <AddedCardLast
                 key='111'
                 value={value} 
                 ></AddedCardLast>
               </div>
             </dib>
              <div className='col-md-4 col-sm-12 mt-4 p-3'>
                 <PriceList
                 key='222'
                 length= {cart.length}
                 price={price}
                 ></PriceList>
             </div>
            </div>
           </div>
          </div>
          <div className='d-grid' style={{justifyItems: 'center'}}>
          <div className='d-flex mt-4 positionFixedBottom'
          style={{justifyContent: 'center'}}
             >
                  <Link to="/submissions_service_new" className="me-3">
                    <Button className=' ' variant="contained" style={{ padding: '10px 50px 10px 50px', background:"rgb(156 156 156 / 57%)",color: '#323232', border: '0'}} >
                      <Typography>Back</Typography> 
                    </Button>
                  </Link>
                {
                    cart.length ?
                     <Button variant="contained"
                     onClick={(e)=> handleClick(cart)} 
                      style={{ padding: '10px 50px 10px 50px', background:"rgba(32, 191, 184)",color: 'white', border: '0'}}
                      >
                      {loading ? 
                        <CircularProgress />
                      :
                       <Typography>Next</Typography> 
                      }
                     </Button>
                     :  
                     <Button disabled className='disabledBtn'
                     style={{padding: '10px 50px 10px 50px',  color: 'cornflowerblue'}}
                     > Next </Button>
                }  
                 
             </div>
          </div>
 
     </div>
    )
}

export default  Cart;
