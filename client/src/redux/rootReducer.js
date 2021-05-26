import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import errorReducer  from './error/errorReducer'
import bedahReducer from './bedah/bedahReducer'
import rawatInapReducer from './rawatInap/rawatInapReducer'
import pengajuanReducer from './pengajuan/pengajuanReducer'
import usersReducer from './users/usersReducer'
import {pemeriksaanVisitReducer, pemeriksaanKlinikReducer} from './pemeriksaan/pemeriksaanReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  bedah: bedahReducer,
  pemeriksaan_visit: pemeriksaanVisitReducer,
  pemeriksaan_klinik: pemeriksaanKlinikReducer,
  rawat_inap: rawatInapReducer,
  pengajuan: pengajuanReducer,
  users: usersReducer
})

export default rootReducer
