import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function deleteGateway(id){
  return request({
    url: '/proxy/v1/deleteGateway?id='+id,
    method: 'post'
  })
}

export function deleteDiaplan(id){
  return request({
    url: '/proxy/v1/deleteDiaplan?id='+id,
    method: 'post'
  })
}

export function deleteQueue(id){
  return request({
    url: '/callcenter/deleteQueue?id='+id,
    method: 'post'
  })
}
export function deleteAgent(id){
  return request({
    url: '/callcenter/deleteAgent?id='+id,
    method: 'post'
  })
}
export function deleteRelation(id){
  return request({
    url: '/callcenter/deleteRelation?id='+id,
    method: 'post'
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

export function getUserHistoryList(params) {
  return request({
    url: '/proxy/v1/getCallRecord',
    method: 'post',
    data: params
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

export function insertDirectoryList(params) {
  return request({
    url: '/proxy/v1/addDirectoryList',
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


export function IVRList(params) {
  return request({
    url: '/proxy/v1/IVRList',
    method: 'post',
    data: params
  })
}

export function addIVR(params) {
  return request({
    url: '/proxy/v1/addIVR',
    method: 'post',
    data: params
  })
}

export function deleteIVR(id) {
  return request({
    url: '/proxy/v1/deleteIVR?id='+id,
    method: 'post'
  })
}

export function onService(id) {
  return request({
    url: '/proxy/v1/extension-on-service?extention=' +id,
    method: 'post',
    data: id
  })
}

export function offService(id) {
  return request({
    url: '/proxy/v1/extension-off-service?extention=' + id,
    method: 'post',
    data: id
  })
}



export function getUserAuthRouter(params) {
  return request({
    url: '/proxy/v1/vueAuth/roleRouterList',
    method: 'get',
    params
  })
}

export function getCallcenterQueueList(params) {
  return request({
    url: '/callcenter/getQueueList',
    method: 'get',
    data: params
  })
}

export function getCallcenterAgentList(params) {
  return request({
    url: '/callcenter/getAgentList',
    method: 'get',
    data: params
  })
}

export function getCallcenterAgentRelationList(params) {
  return request({
    url: '/callcenter/getRelation',
    method: 'get',
    data: params
  })
}

export function insertCallcenterQueue(params) {
  return request({
    url: '/callcenter/addQueue',
    method: 'post',
    data: params
  })
}

export function insertCallcenterAgent(params) {
  return request({
    url: '/callcenter/addAgent',
    method: 'post',
    data: params
  })
}

export function insertCallcenterRelation(params) {
  return request({
    url: '/callcenter/addRelation',
    method: 'post',
    data: params
  })
}