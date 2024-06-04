var express = require('express');//노드js용 웹뷰 템플릿
var app = express();
app.listen(4000, () => {
    console.log('노드js서버 시작: ', 4000);
});
app.use('/api', function (req, res) {
    //res.end("샘플출력");
    res.json({ jsonData: 'jsonData' });
});
var cors = require('cors');//리액트와 노드js간 데이터 통신에 보안 처리모듈 사용 npm install cors
app.use(cors( //도메인 대신에 * 로 하면 모든 도메인에서 허용된다. 보안상 도메인을 지정하는것이 안전하다.
    {
        origin: "*",
        methods: ["GET", "POST"]
    }
));

app.use('/openapi/getdata', function (req, res) { //이벤트 발생 시 자동 실행되는 함수인 콜백 함수가 실행된다.
    console.log('/openapi/getdata 호출됨.');
    keyword = req.query.keyword || '성남시';//리액트js 에서 보낸 검색어를 지정한다.
    pageNo = req.query.pageNo || '1';//리액트js 에서 보낸 페이지번호를 지정한다.
    console.log(keyword);
    /* NodeJs 12 샘플 코드 */

    var request = require('request');

    var url = 'http://openapi.kepco.co.kr/service/EvInfoServiceV2/getEvSearchList';
    var queryParams = '?' + encodeURIComponent('serviceKey') + '=b05rTEv6zbKx4SfShJGBO4n1yt4tsLBjm4WdfPyBnqcV5VNTEqdATdUliScIUgedZwrNJo%2BzNW%2FMrueVI5Ghlw%3D%3D'; /* Service Key*/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(pageNo); /* */
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
    queryParams += '&' + encodeURIComponent('addr') + '=' + encodeURIComponent(keyword); /* */

    request({
        url: url + queryParams,
        method: 'GET'
    }, function (error, response, body) {
        //console.log('Status', response.statusCode);
        //console.log('Headers', JSON.stringify(response.headers));
        var convert = require('xml-js');//npm install xml-js xml데이터를 json데이터로 변경


        /* 공공데이터 포털의 NodeJs 샘플 코드 기존 코드 중략... */
        //console.log('Headers', JSON.stringify(response.headers)); // 기존샘플코드 주석 처리 후 아래 추가
        console.log('Reponse received', body); //주석 해제 해서 body 내용을 xml 형식으로 확인한다.
        /*
        convert에서 xml2json이라는 함수를 이용해 xml -> json으로 데이터를 파싱했고, 그에 따른 파라미터로 현재
        xml 데이터 형식인 body변수를, compact(데이터 간소화 여부), spaces(들여쓰기 포인트)를 이용하여 파싱
        */
       
        var xmlToJson = convert.xml2json(body, { compact: true, spaces: 4 });
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }); //크롬에서 한글이 깨져 보일 때 추가
        res.end(xmlToJson);
    });
});