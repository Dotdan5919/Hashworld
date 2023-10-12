import React from 'react'
import '../css/body.css';
import Stories from './Stories';
import PostComponent from './PostComponent';
import PostComponentTwo from './PostComponentTwo';



const Body = () => {
  return (
    <div className='body-container-parent'>
    <section className='body-container'>
      

<Stories/>
<PostComponent/>

<PostComponentTwo img="https://plus.unsplash.com/premium_photo-1690552679182-dc23afba3c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" ProfilePic="https://images.unsplash.com/photo-1695567034270-3f30aaf05df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" Name="john jax" />

<PostComponentTwo img="https://images.unsplash.com/photo-1695607379409-bfa72abf6afa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" ProfilePic="https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" Name="tope Love"  />
<PostComponentTwo img="https://images.unsplash.com/photo-1695414414330-f1d2fa383d76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" ProfilePic="https://images.unsplash.com/photo-1695642579133-d41f36bcca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" Name="Ighodaro Stephen"  />




    </section>
    </div>
  )
}

export default Body
