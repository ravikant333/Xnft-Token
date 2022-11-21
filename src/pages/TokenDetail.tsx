import { Connection,PublicKey} from '@solana/web3.js'
import  { useState } from 'react'
import { Button, TextField ,View,useConnection,usePublicKey,Text} from 'react-xnft'
import {getMint} from '@solana/spl-token'



const TokenDetail = () => {
    const xNFTConnection = useConnection();
    const endPoint = xNFTConnection["_rpcEndpoint"];
    const connection = new Connection(endPoint,"processed")
    const[token,settoken]=useState('')
    const[data,setdata]=useState('')
    const[supply,setsupply]=useState('')
    const[decimals,setdecimals]=useState('')
    const[address,setaddress]=useState('')
    const handlechange=(e)=>{
         e.preventDefault()
         settoken(e.target.value)
    }

    const getdetail=async()=>{
        const tokenpubkey=new PublicKey(token.toString())
       const data=await getMint(connection,tokenpubkey)
       setdata(data)
       setsupply(data.supply)
       setaddress(data.address)
       setdecimals(data.decimals)
      // console.log(data)
    }

  return (
    <View style={{"margin-top":"20px"}}>
        <TextField type='text' placeholder='Enter Token Address' onChange={handlechange} value={token}/>

        <Button onClick={getdetail} style={{"margin-top":"5px"}}> Get Detail</Button>

        {data && <View style={{"backgroundColor":"orange","margin":"10px","padding":"10px","textAlign":"center","border-radius":"10px"}}>

        <Text>Token Address: {address.toString()} </Text> 

        <Text>Token Supply : {supply.toString()} </Text> 
         
        <Text>  Token Decimals:{decimals} </Text> 
         
                       
        </View>} 


    </View>
  )
}

export default TokenDetail