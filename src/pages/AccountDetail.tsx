import { Connection,PublicKey} from '@solana/web3.js'
import  { useState } from 'react'
import { Button, TextField ,View,useConnection,usePublicKey,Text, List, ListItem} from 'react-xnft'
import {TOKEN_PROGRAM_ID} from '@solana/spl-token'


import React from 'react'

const AccountDetail = () => {
const [account,setaccount]=useState('')
const xNFTConnection = useConnection();
const endPoint = xNFTConnection["_rpcEndpoint"];
const connection = new Connection(endPoint,"processed")
const [arr,setarr]=useState('')

const handlechange=(e)=>{
    e.preventDefault()
    setaccount(e.target.value)
}

const getdetail=async()=>{
   const pubkey=new PublicKey(account.toString())
   try{
   const data=await connection.getParsedTokenAccountsByOwner(pubkey,{programId:TOKEN_PROGRAM_ID})
   console.log(data)
   const arr=data.value.map((elm)=>{
    return {
    "balance":elm.account.data.parsed.info.tokenAmount.uiAmount,
    "address": elm.account.data.parsed.info.mint
    }})

    setarr(arr)
   }
   catch(e)
   {
    console.log('error',e)
   }
 console.log(arr)
   
}

  return (

    <View style={{"margin":"20px 5px 20px 5px"}}>
    <TextField type='text' placeholder='Enter Address' onChange={handlechange} value={account}/>

    <Button onClick={getdetail} style={{"margin":"5px"}}> Get Detail</Button>

    {arr && <List>

    {
      arr.map((elm,index)=>{
        return <View key={index} style={{"backgroundColor":"orange","margin":"8px","padding":"5px","height":"80px","border-radius":"10px","textAlign":"center"}}> <Text>address: {elm.address.toString()}  </Text>     <Text>   balance :{elm.balance }   </Text> </View>

      })


    }
                   
    </List>}
    </View>
  )
}

export default AccountDetail