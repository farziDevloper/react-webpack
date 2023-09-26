import React from 'react'
import PENDING from './PENDING.png'

const Pending = () => {
    const styles = {
        topDiv: {
            justifyContent: 'center', alignItems: 'center' ,display: 'flex',padding:'0px 20px'
        },
        container:{maxWidth:'380px' , justifyContent:'center', alignItems:'center', display:'flex',flexDirection:'column'},
        img:{ height:'92px', width:'92px', marginTop:'179px'},
        progressFont:{fontWeight:'700',fontSize:'32px', marginTop:'-10px'},
        titleText:{textAlign:'center', marginTop:'-18px' ,color:'#717171' }



    }
  return (
 <div style={styles.topDiv }>
       <div style={styles.container} > 
 <img  style={styles.img} src={PENDING} alt='pending'/>
      <p style={styles.progressFont} >You’re in progress</p>

                <p style={styles.titleText}>
                Your iMoneyPay account activation is under process. We are trying to verify your account. Kindly wait up to 48 working hours.
                </p>
    </div>
 </div>
  )
}

export default Pending