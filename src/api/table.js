import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function getGateWayList(params) {
  return request({
    url: '/proxy/v1/gateways',
    method: 'get',
    params
  })
}

export function getCallHistotyList(params) {
  return request({
    url: '/proxy/v1/callRecords',
    method: 'get',
    params
  })
}


export function insertGateway(params) {
  return request({
    url: '/proxy/v1/insertGateway',
    method: 'post',
    data: params
  })
}

export function insertDailplan(params) {
  return request({
    url: '/proxy/v1/addDialplan',
    method: 'post',
    data: params
  })
}


export function insertDirectory(params) {
  return request({
    url: '/proxy/v1/addDirectory',
    method: 'post',
    data: params
  })
}

export function getDirectory(id){
  return request({
    url: '/proxy/v1/directory?id='+id,
    method: 'get'
  })
}

export function deleteDirectory(id){
  return request({
    url: '/proxy/v1/deleteDirectory?id='+id,
    method: 'post'
  })
}

export function getDailplan(params) {
  return request({
    url: '/proxy/v1/dialplanList',
    method: 'post',
    data: params
  })
}

export function directoryList(params) {
  return request({
    url: '/proxy/v1/directoryList',
    method: 'post',
    data: params
  })
}



export function sendCallCommand(params) {
  return request({
    url: '/proxy/v1/sendCallCommand',
    method: 'post',
    data: params
  })
}

export function login(params) {
  return request({
    url: '/proxy/v1/login',
    method: 'post',
    data: params,
    headers: {"Content-Type": "application/x-www-form-urlencoded"}
  })
}

