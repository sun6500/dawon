//웹소켓 전역 객체 생성
var ws = new WebSocket("ws://localhost:3501");

//연결이 수립되면 서버에 메시지를 전송한다.
ws.onopen = function(event) {
    console.log("페이지를 연 사용자가 서버에 메시지를 보냅니다.");
    ws.send("클라이언트가 접속했습니다");
};

//서버로부터 메시지를 받는다.
ws.onmessage = function(event) {
    console.log("서버의 메시지입니다 : " + event.data);
};

//에러가 난다면 에러핸들링을 한다.
ws.onerror = function(event) {
    console.log("에러 메시지입니다 : " + event.data);
}

var chatBtn = document.getElementById("btn-chat");
chatBtn.addEventListener("click", function(e) {
    ws.send("메시지 보내드립니다 ㅎㅇ여");
});