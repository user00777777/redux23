import React from 'react'

export default function newCrane(craneName,q, inv,craneId='') {
   return {Q: q, inv: inv,cranName:craneName,craneId:craneId} 
}
