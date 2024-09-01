import React from 'react'

export default function newInspTellf(telf, q, end, start, area, exactLocation) {
	let currentDate = new Date()
	let dateEnd = new Date(end)

	const daysDifference = Math.floor( (dateEnd - currentDate) / (1000 * 60 * 60 * 24))
  // console.log(daysDifference);
  
	return { telf, q, start, end, area, exactLocation,daysDifference

   }

	// return {telf, q, start, end, area, exactLocation}
}
