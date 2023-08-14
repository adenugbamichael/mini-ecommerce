import { useState } from "react"
import pic from "../assets/coat.png"

const Home = () => {
  const itemName = "Blazer Coat"
  const itemPrice = 800
  const [quantity, setQuantity] = useState(1)
  const [finalAmount, setFinalAmount] = useState(itemPrice)

  const increment = () => {
    setQuantity(quantity + 1)
    setFinalAmount(finalAmount + itemPrice)
  }

  const decrement = () => {
    if (quantity <= 1) {
      setQuantity(1)
      setFinalAmount(itemPrice)
    }
    if (quantity > 1) {
      setQuantity(quantity - 1)
      setFinalAmount(finalAmount - itemPrice)
    }
  }

  const checkout = () => {
    fetch("backend api here", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        items: [
          { id: 1, quantity: quantity, price: itemPrice, name: itemName },
        ],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json()
        return res.json().then((json) => Promise.reject(json))
      })
      .then(({ url }) => {
        window.location = url
      })
      .catch((e) => {
        console.log(e.error)
      })
  }

  return (
    <div className='w-full mx-auto'>
      <div className='text-center w-full max-w-5xl mx-auto my-6'>
        <div className='font-bold futura text-transparent text-6xl my-10 text-[#442266]'>
          Grocery
        </div>
        <div className='flex flex-col lg:flex-row justify-center item-center mx-auto w-full my-16 border-2 bg-[#fcf6f6] border-slate-100 shadow-md py-4 '>
          <div className='flex lg:justify-end justify-center items-center mx-auto my-24 w-full lg:w-6/12'>
            <img src={pic} alt='' />
          </div>
          <div className='flex flex-col lg:w-6/12 w-full py-8'>
            <div className='text-4xl futura font-semibold text-[#442266]'>
              {itemName}
            </div>
            <div className='text-3xl font-medium my-6 text-slate-600'>
              price:&nbsp;&nbsp; {itemPrice}
            </div>

            <small className='mt-10 mb-3 font-medium'>Add Quantity</small>
            <div className='flex text-slate-900 justify-center items-center mb-10'>
              <span
                onClick={decrement}
                className='select-none w-auto px-4
                py-2 text-5xl bg-red-100 cursor-pointer'
              >
                -
              </span>
              <span className='w-auto px-4 py-2 text-3xl font-medium'>
                {quantity}
              </span>
              <span
                onClick={increment}
                className='select-none w-auto px-4 py-2 text-5xl bg-purple-100 
                cursor-pointer'
              >
                +
              </span>
            </div>

            <div className='my-6 text-xl'>
              Amount to be paid:{" "}
              <span className='text-[#442266] text-3xl font-semibold'>
                {finalAmount}
              </span>
            </div>
            <div className='my-6'>
              <button
                onClick={checkout}
                className='bg-[#442266] futura text-white px-8 py-4 rounded-md text-2xl font-medium'
              >
                Checkout
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
