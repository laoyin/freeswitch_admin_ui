/**
 * author 印象派
 * 
 */
 import JsSIP from '@/utils/jssip'

 JsSIP.C.SESSION_EXPIRES = 120;
 JsSIP.C.MIN_SESSION_EXPIRES = 120;
 
 window.sipSession = undefined;
 window.ua = undefined;
 window.remoteView = undefined;
 window.selfView = undefined;
 window.comingPhone = undefined;
 // 来定视频订单id

 
 
 navigator.getUserMedia(
     // constraints
     {
         video: false,
         audio: true
     },
     // successCallback
     function (localMediaStream) {
         // video.src = window.URL.createObjectURL(localMediaStream);
         // video.onloadedmetadata = function(e) {
         //    // Do something with the video here.
         // };
     },
 
     // errorCallback
     function (err) {
         console.log(err);
     }
 );
 
 var constraints = {
     video: {
         optional: []
     }
 }
 
 
 // Register callbacks to desired call events
 var eventHandlers = {
     'progress': function (e) {
         console.log('call is in progress');
     },
     'failed': function (e) {
         console.log('call failed with cause: ' + e.cause);
     },
     'ended': function (e) {
         console.log('call ended with cause: ' + e.cause);
     },
     'confirmed': function (e) {
         console.log('call confirmed');
     }
 };
 
 var options = {
     'eventHandlers': eventHandlers,
     'mediaConstraints': { 'audio': true, 'video': false }
 };
 
 
 function sipEventBind(e, callbacks){
     e.session.on("accepted", function () {
        console.log("电话接听");
     });
 
     //  来电 振铃
     e.session.on("progress", function(data){
         if (callbacks != undefined) {
             if (typeof callbacks === "function") {
                 window.comingPhone = e.session.remote_identity.display_name;
                 callbacks(e.session.remote_identity.display_name);
             }
         }
     });
     e.session.on("ended", function(data){
         console.log('call ended with cause: ' + e.cause);
     });
     e.session.on("confirmed", function(data){
         
        var audioElement = document.getElementById('userAudio');
        const stream = new MediaStream();
        const receivers = e.session.connection?.getReceivers();
        if (receivers) receivers.forEach((receiver) => stream.addTrack(receiver.track));
            audioElement.srcObject = stream;
        // 最后都要播放
        audioElement.play();
        // console.log('call ended with cause: ' + e.cause);
    });
 }
 
 
 
 function login(account, password, callbacks, loginCallback) {
     var username = account;
    var socket = new JsSIP.WebSocketInterface('ws://0.0.0.0:5066');
     var configuration = {
         sockets: [socket],
         uri: 'sip:' + username + '@0.0.0.0:5066;transport=ws',
         password: password,
         contact_uri: 'sip:' + username + '@0.0.0.0:5066;transport=ws',
         outbound_proxy_set: 'ws://0.0.0.0:5066',
         display_name: username
     };
 
     var ua = new JsSIP.UA(configuration);
 
     ua.start();
 
     window.ua = ua;
 
     window.ua.on('registered', function(e){
         if (loginCallback != undefined) {
             if (typeof loginCallback === "function") {
                 loginCallback();
             }
         }
     });
 
     window.ua.on('newRTCSession', function (e) {
         if (e.session._direction == "outgoing") {
             console.log("打电话");
             window.sipSession = e.session;
             sipEventBind(e, callbacks);
         } else {
             console.log("来电话啦");
             window.sipSession = e.session;
             sipEventBind(e, callbacks);
         }
         
     });
 
 
     window.ua.on('sipEvent', function (e) {
         console.log(e);
 
     });
 
 
 
 
 
 }
 
 
 function anwserPhone(successCallback, errorCallback){
     if(window.sipSession == undefined){
         errorCallback();
     }else{
         try{
             window.sipSession.answer({
                 mediaConstraints: { audio: true, video: false }
             });
             successCallback(window.customVideoFileId, window.policeVideoFileId);
             document.getElementById('ringId').pause();
             if(window.audioPlayer != undefined){
                 window.audioPlayer.pause();
             }
             document.querySelector("#ringId").pause();
         }catch(err){
             errorCallback();
         }
     }
 }
 
 function hungupPhone(successCallback, errorCallback){
     if(window.sipSession == undefined){
         errorCallback();
     }else{
         try{
             window.sipSession.terminate({});
             successCallback();
         }catch(err){
             errorCallback();
         }
     }
 }
 
 
 function softPhoneCall(callee) {
     var options = {
         'eventHandlers': eventHandlers,
         'extraHeaders': ['X-Foo: foo', 'X-Bar: bar'],
         'mediaConstraints': { 'audio': true, 'video': false },
     };
     constraints = { video: { width: 520, height: 300 } }

     var sessondata = window.ua.call("sip:" + callee + "@0.0.0.0:5060", options);
     sessondata.on("accepted", function (e) {
        // document.getElementById('ringId').pause();
        if(window.audioPlayer != undefined){
            window.audioPlayer.pause();
        }
        // document.querySelector("#ringId").pause();


        console.log("接听了");
        var audioElement = document.getElementById('userAudio');
        const stream = new MediaStream();

        const receivers = window.sipSession.connection.getReceivers();
        // const receivers = e.session.connection?.getReceivers();
        if (receivers) receivers.forEach((receiver) => stream.addTrack(receiver.track));
            audioElement.srcObject = stream;
        // 最后都要播放
        setTimeout(()=>{
            audioElement.play();
        },150)

    });
 
 }

 export {
    sipEventBind,
    anwserPhone,
    login,
    hungupPhone,
    softPhoneCall

 }
