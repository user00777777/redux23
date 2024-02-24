import React from 'react'

export default function objCranes(title,data, notes) {
    if (typeof data== 'string') {
          let x= data.split('/')
 
          // console.log(x);
          
    }
 
//    console.log(x);
   
	return {
    title:title,
		data: data,
		notes: notes,
	}
}
