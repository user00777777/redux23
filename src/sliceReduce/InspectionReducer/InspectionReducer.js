import { createSlice } from '@reduxjs/toolkit'
import newInspTellf from './newInspTellf'
const initialState = {
	telf: [
		newInspTellf('51844', '1', '2026-01-18', '2025-01-18', '1','Серв-привод'),
		newInspTellf('51853', '0.5', '2026-01-18', '2024-01-18', '1','Серв-привод'),
		newInspTellf('51801', '1', '2026-01-18', '2024-01-18', '7'),
		newInspTellf('51916', '1', '2026-01-20', '2024-01-20', '7'),
		newInspTellf('51921', '1', '2024-01-20', '', '4-5','Ф,С4'),
		newInspTellf('51845', '1', '2026-01-20', '2024-01-20', '7'),
		newInspTellf('51821', '0.5', '2026-01-20', '2024-01-20', '7'),
		newInspTellf('51822', '0.5', '2026-01-20', '2024-01-20', '7'),
		newInspTellf('51646', '0.25', '2024-01-20', '', '4'),
		newInspTellf('51718', '0.5', '2024-01-20', '', '4','Ф,С3'),
		newInspTellf('51716', '2', '2024-01-20', '', '4'),
		newInspTellf('51907', '0.5', '2026-01-20', '2024-01-20', '7'),
		newInspTellf('51909', '1', '2026-01-20', '2024-01-20', '7'),
		newInspTellf('52107', '2', '2024-01-20', '', '2','ДК-5'),
		newInspTellf('52286', '1', '2024-01-20', '', '1-2','3-серв'),
		newInspTellf('52367', '1', '2024-01-20', '', '5','дефек-5пр'),
		newInspTellf('52021', '2', '2024-01-21', '', '','Дк-5'),
		newInspTellf('51796', '1', '2024-01-25', '2024-01-24', ''),
		newInspTellf('51906', '1', '2026-02-16', '2024-02-16', ''),
		newInspTellf('52188', '1', '2026-02-16', '2024-02-16', ''),
		newInspTellf('52189', '0.5', '2026-02-16', '2024-02-16', '7','дефек-7пр'),
		newInspTellf('52290', '0.25', '2026-02-16', '2024-02-16', ''),
		newInspTellf('51533', '0.25', '2024-02-22', '', ''),
		newInspTellf('51542', '1', '2024-02-22', '', '4-5'),
		newInspTellf('51719', '1', '2024-02-22', '', '4','Ф/Р2' ),
		newInspTellf('52221', '1', '2024-02-22', '', '5','дефек'),
		newInspTellf('51891', '1', '2026-03-22', '2024-03-22', '6'),
		newInspTellf('51892', '1', '2026-03-22', '2024-03-22', '6'),
		newInspTellf('51915', '1', '2026-03-22', '2024-03-22', '6'),
		newInspTellf('51922', '1', '2026-03-22', '2024-03-22', '6'),
		newInspTellf('51924', '1', '2026-03-22', '2024-03-22', '6'),
		newInspTellf('51925', '1', '2026-03-22', '2024-03-22', '6'),
		newInspTellf('51926', '1', '2026-03-22', '2024-03-22', '6'),
		newInspTellf('51770', '0.5', '2026-04-20', '2024-04-20', '6'),
		newInspTellf('51792', '1', '2026-04-20', '2024-04-20', '6'),
		newInspTellf('51968', '0.25', '2025-05-18', '2024-05-18', '4','ПТК'),
		newInspTellf('51969', '0.25', '2025-05-18', '2024-05-18', 'ПТК'),
		newInspTellf('51708', '2', '2026-05-19', '2024-05-19', '4'),
		newInspTellf('51717', '2', '2026-05-19', '2024-05-19', '2'),
		newInspTellf('52023', '1', '2026-05-19', '2024-05-19', '6'),
		newInspTellf('52939', '1', '2026-05-19', '2024-05-19', '6'),
		newInspTellf('52806', '2', '2026-05-23', '2024-05-23', 'малярка'),
		newInspTellf('51888', '1', '2026-06-15', '2024-06-15', ''),
		newInspTellf('52201', '1', '2026-06-15', '2024-06-15', '2','дефек-2пр'),
		newInspTellf('52219', '2', '2026-06-15', '2024-06-15', '1','дефек'),
		newInspTellf('52231', '1', '2026-06-15', '2024-06-15', '4','дефек3-4'),
		newInspTellf('52019', '2', '2026-07-20', '2024-07-20', 'малярка'),
		newInspTellf('52020', '2', '2026-07-20', '2024-07-20', 'малярка'),
		newInspTellf('51939', '2', '2026-08-17', '2024-08-17', '','КР-ПТК'),
		newInspTellf('51680', '2', '2026-08-17', '2024-08-17', '5'),
		newInspTellf('52805', '2', '2026-08-17', '2024-08-17', ''),
		newInspTellf('51940', '2', '2026-08-17', '2024-08-17', '','КР-ПТК'),
		newInspTellf('52223', '1', '2026-08-17', '2024-08-17', '4-5','дефек'),
		newInspTellf('51799', '1', '2025-08-29', '2024-08-29', '7','кран-балка'),
		newInspTellf('51771', '0.5', '2026-09-22', '2024-09-22', '6',''),
		newInspTellf('51793', '1', '2026-09-22', '2024-09-22', '4','ДК-3'),
		newInspTellf('51798', '1', '2026-10-13', '2024-10-13', '6',''),
		newInspTellf('51800', '1', '2026-10-13', '2024-10-13', '6',''),
		newInspTellf('51830', '1', '2026-10-13', '2024-10-13', '6',''),
		newInspTellf('51831', '1', '2026-10-13', '2024-10-13', '6',''),
		newInspTellf('51833', '0.5', '2026-10-13', '2024-10-13', '6',''),
		newInspTellf('51843', '1', '2026-10-13', '2024-10-13', '6',''),
		newInspTellf('51854', '1', '2026-10-13', '2024-10-13', '6',''),
		newInspTellf('51871', '0.5', '2026-10-13', '2024-10-13', '6',''),
		newInspTellf('51832', '0.5', '2026-10-17', '2024-10-17', '6',''),
		newInspTellf('51834', '0.5', '2026-10-17', '2024-10-17', '6',''),
		newInspTellf('51927', '1', '2026-10-17', '2024-10-17', '6',''),
		newInspTellf('51879', '1', '2026-11-21', '2024-11-21', '6',''),
		newInspTellf('51880', '1', '2026-11-21', '2024-11-21', '6',''),
		newInspTellf('51643', '1', '2026-12-15', '2024-12-15', '1',''),
		newInspTellf('52044', '1', '2026-12-15', '2024-12-15', '6',''),
		newInspTellf('52045', '1', '2026-12-15', '2024-12-15', '6',''),
		newInspTellf('52046', '1', '2026-12-15', '2024-12-15', '6',''),
		newInspTellf('51871', '0.5', '2026-10-13', '2024-10-13', '6',''),

	],
}.telf.sort((a, b) => {
  const dateA = new Date(a.start);  // Сортировка по полю start
  const dateB = new Date(b.start);
  
  return dateA - dateB;  // Сортировка по возрастанию
});
const InspectionSlice = createSlice({
	name: 'Inspection',
	initialState,
	reducers: {
		InspectionFun(state, action) {},
	},
})
export const { InspectionFun } = InspectionSlice.actions
export default InspectionSlice.reducer
