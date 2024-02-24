export default function data() {
	let currentData = new Date(),
  hours=currentData.getHours(),
minutes=currentData.getMinutes(),
seconds=currentData.getSeconds()

return{

  hours:hours,
  minutes:minutes,
  seconds:seconds
}

}

