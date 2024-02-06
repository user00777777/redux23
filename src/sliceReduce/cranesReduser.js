import { createSlice } from '@reduxjs/toolkit'
import crane7 from '../Components/Cranes/FotoCrane/Crane1_D7.jpgNew.jpg'
// import crane_Mal5 from '../Components/Cranes/FotoCrane/3cD6__.jpg'
// import crane_Mal5_1 from '../Components/Cranes/FotoCrane/3c6di.jpg'
// import crane_Mal5_2 from '../Components/Cranes/FotoCrane/3Cr6d.jpg'
// import crane_Mal5_3 from '../Components/Cranes/FotoCrane/3CraneD6.jpg'
// import crane_Mal5_4 from '../Components/Cranes/FotoCrane/3CraneD6___'
// import crane_Mal5_5 from '../Components/Cranes/FotoCrane/3CraneD6___.jpg'
import React from 'react'
import crane1_6 from './fotoCranes/foto1_6'
import foto2_6 from './fotoCranes/foto2_6'
import  foto3_6 from './fotoCranes/foto3_6'

const initialState = {
	list: [
		{
			cranName: 'mal1',
			rp: 14,
			id: 'Кран 5T',
			f: foto3_6(),
            repair:{liftMotor:'',
            travelMotor_Cabin:[{repairMotorsCabin:'',
            motorStarters:''
            }],
            craneLighting:[''],
            travelMotor_notCabin:[''],
            cabin:[''],
            cables:'',
        
        }
		},

		{ cranName: '1/6', rp: 'Главный рубильник', id: 'Кран 5T', f: crane1_6(),
        repair:{liftMotor:'',
        travelMotor_Cabin:[{repairMotorsCabin:'',
        motorStarters:'',
        cables:'',
        }],
        craneLighting:[''],
        travelMotor_notCabin:[''],
        cabin:[''],
    
    }
    
    
    },
		{ cranName: '1/7', rp: 14, id: 'Кран 10T', f: crane7,
        repair:{liftMotor:'',
        travelMotor_Cabin:[{repairMotorsCabin:'',
        motorStarters:'',
        cables:'Замена кабельной подвески 2023г декабрь',
        }],
        craneLighting:[''],
        travelMotor_notCabin:[''],
        cabin:[''],
    
    }},
		{ cranName: '2/6', rp: 14, id: 'Кран 10T', f: foto2_6(),
    repair:{liftMotor:'',
travelMotor_Cabin:[{repairMotorsCabin:'Замена двигателя над кабиной  2023 г.лето',
motorStarters:'',
cables:''
}],
craneLighting:[''],
travelMotor_notCabin:[''],
cabin:[''],
}},
		{
			cranName: '3/6',
			rp: 14,
			id: 'Кран 10T',
			f:foto3_6(),
            repair:{liftMotor:'',
            travelMotor_Cabin:[{repairMotorsCabin:'Замена шестерни 2023 г.лето, двигателя над кабиной',
        motorStarters:'Замена двух пускателей хода моста 2023г лето',
        cables:'',
    }],
            craneLighting:[""],
            travelMotor_notCabin:[''],
            cabin:[{travelStarters:['Замена обоих лето 2023']}],
            }
		},
	],
	craneObj: {},
}

const cranes = createSlice({
	name: 'cranes',
	initialState,
	reducers: {
		craneS(state, action) {
			console.log(action.payload);
			// console.log(JSON.stringify(state))
			const crane = state.list.find(el => {
				if (el.cranName == action.payload) return el
			})

			console.log(JSON.stringify(crane))
  // console.log(crane);
  

			state.craneObj = crane
		},
	},
})
export const { craneS } = cranes.actions
export default cranes.reducer
