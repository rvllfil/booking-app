import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import errorReducer  from './error/errorReducer'
import bedahReducer from './bedah/bedahReducer'
import groomingReducer from './grooming/groomingReducer'
import rawatInapReducer from './rawatInap/rawatInapReducer'
import pengajuanReducer from './pengajuan/pengajuanReducer'
import janjiTemuReducer from './janjiTemu/reducer'
import reservasiReducer from './reservasi/reducer'
import usersReducer from './users/usersReducer'
import {pemeriksaanVisitReducer, pemeriksaanKlinikReducer} from './pemeriksaan/pemeriksaanReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  bedah: bedahReducer,
  grooming: groomingReducer,
  pemeriksaan_visit: pemeriksaanVisitReducer,
  pemeriksaan_klinik: pemeriksaanKlinikReducer,
  rawat_inap: rawatInapReducer,
  pengajuan: pengajuanReducer,
  janjiTemu: janjiTemuReducer,
  reservasi: reservasiReducer,
  users: usersReducer
})

export default rootReducer
