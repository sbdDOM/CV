import React from 'react'

export const Navbar = () => {
  return (
    <div className='container border border-dark border-1 mx-auto p-5 m-5' >
      <div className='row'>
        <div className='col-4 bg-primary'> Image</div>
        <div className='col-6'>
          <h3 className='card-title text-primary'>Rivaldo Esbend</h3><br></br>
          <p className='card-text'>Hello, I appreciate you taking time out of your day to check my portfolio out. This portfolio includes my contact details, cv and some of the work I've done.</p>
          <div>
            <h5 className='card-title text-primary'>email: </h5>
            <p className=''>words</p>
          </div>
          <h5 className='card-title text-primary'>phone: </h5>
        </div>
      </div>
    </div>
  )
}
