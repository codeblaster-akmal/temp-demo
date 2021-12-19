import {takeEvery} from "redux-saga/effects"
import ApiService from "../services/ApiService"

// import saga from saga file
// import types from redux file 

const api = ApiService.create()

export default function* root (){
    // yield takeEvery (types.action, sagaFile, api)
}