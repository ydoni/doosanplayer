
//설치한 express framework 를 사용하겠다는 명시
const express = require('express'); //상수선언 require : 패키지 불러오기
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express(); //express를 이용해 app(웹 프로그램)을 생성한다.
const port = process.env.PORT || 5000;
const mysql = require ('mysql'); //mysql 패키지 불러오기 및 연결하기
const connection = mysql.createConnection({
	host : 'localhost', //연결할 호스트 정보
	port : 3306,        //포트번호
	user : 'root',      // 사용자 이름
	password : '9428duseh',  // 비번
	database : 'new_schema'   // db이름
});


// 사진 업로드를 위한 설정
const multer = require('multer');
const upload = multer({dest:'./upload/'});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/image', express.static('./upload')); // 사진 업로드를 위한 설정

connection.connect();

app.all('/*', (req,res,next) => {

	// 모든 설정, 모든 요청을 허용한다
	// 모든 서버의 요청과 모든 설정을 허용하면 보안상 취약점이 발생할 수 있다.
	// 실제 프로젝트에서는 해당 요건에 따라서 아래 설정을 달리한다.
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
	res.header("Access-Control-Allow-Methods","*"); 

	next();
	// "*" -> 모든 도메인들에 대해서 허용한다. "/특정 url 주소값" -> 특정된 url 주소값 허용한다. 
});




//라우터 (라우팅)--------------------------------------------------------------------------------------------
//클라이언트에서 주소값으로 들어온 요청을 처리하는 함수
//요청객체와 응답객체 (request response)
//요청 데이터는 req 안에, 그 요청에 대한 응답은 res를 통해서

// -- 투수
app.get('/api/pitcherlist', (req, res) => {

	let data={};
	let query="SELECT * FROM doosanpitcher";


	connection.query((query) , (error, results) => {
		if (error) {
			console.log("에러 발생",error);
		} else {
			console.log("성공:",results);
			data.playerlist_p=results;
			res.json(data);
		}
	});
	
});

// -- 타자
app.get('/api/hitterlist', (req, res) => {

	let data={};
	let query="SELECT * FROM doosanhitter";


	connection.query((query) , (error, results) => {
		if (error) {
			console.log("에러 발생",error);
		} else {
			console.log("성공:",results);
			data.playerlist_h=results;
			res.json(data);
		}
	});
	
});



// -- 프론트로부터 넘겨받은 데이터를 DB에 저장하는 라우터

// -- 투수
app.post('/api/add', upload.single('image'), (req,res) => {
	console.log("add 요청 들어옴");
	let image = '/image/' + req.file.filename; //선수이미지
	let playerNum = req.body.playerNum ; //선수번호
	let playerName = req.body.playerName ; //선수이름
	let inning = req.body.inning ; //이닝수
	let score = req.body.score; //자책점
	let era = req.body.era; //평균자책점


	connection.query("INSERT INTO doosanpitcher (image, playerNum, playerName, inning, score) VALUES ('" +image+ "', '" +playerNum+ "', '" +playerName+ "', '" +inning+ "', '" +score+ "')", (error,results) => {    // mysql쿼리문연결

		if (error) {
			console.log("에러발생 : ",error);
		} else {
			console.log("저장결과 : ",results);
			res.json({ result : 'success' });
		}
	});
});


// -- 타자
app.post('/api/addhit', upload.single('image'), (req,res) => {
	console.log("타자 add 요청 들어옴");
	let image = '/image/' + req.file.filename; //선수이미지
	let playerNum = req.body.playerNum ; //선수번호
	let playerName = req.body.playerName ; //선수이름
	let hits = req.body.hits ; //안타수
	let bats = req.body.bats; //타수
	let batavg = req.body.batavg; //타율

	connection.query("INSERT INTO doosanhitter (image, playerNum, playerName, hits, bats) VALUES ('" +image+ "', '" +playerNum+ "', '" +playerName+ "', '" +hits+ "', '" +bats+ "')", (error,results) => {    // mysql쿼리문연결

		if (error) {
			console.log("에러발생 : ",error);
		} else {
			console.log("저장결과 : ",results);
			res.json({ result : 'success' });
		}
	});
});





// -- 수정 처리 라우터
// -- 투수
app.put('/api/edit',(req,res)=> {
	console.log("edit 요청 들어옴");
	let id = req.body.id;
	let playerNum = req.body.playerNum ; //선수번호
	let playerName = req.body.playerName ; //선수이름	
	let inning = req.body.inning ; //이닝수
	let score = req.body.score; //자책점
	let era = req.body.era; //평균자책점

	connection.query("UPDATE doosanpitcher SET playerNum='"+playerNum+"', playerName='"+playerName+"', inning='"+inning+"', score='"+score+"'  WHERE id="+id,
			(error,results) => {
		if (error) {
			console.log("에러발생 : ",error);
		} else {
			console.log("수정결과 : ",results);
			res.json({result: 'success'});
		}

	});
})

// -- 타자
app.put('/api/edithitter',(req,res)=> {
	console.log("edit 요청 들어옴");
	let id = req.body.id;
	let playerNum = req.body.playerNum ; //선수번호
	let playerName = req.body.playerName ; //선수이름
	let hits = req.body.hits ; //안타수
	let bats = req.body.bats; //타수
	let batavg = req.body.batavg; //타율

	connection.query("UPDATE doosanhitter SET playerNum='"+playerNum+"', playerName='"+playerName+"', hits='"+hits+"', bats='"+bats+"'  WHERE id="+id,
			(error,results) => {
		if (error) {
			console.log("에러발생 : ",error);
		} else {
			console.log("수정결과 : ",results);
			res.json({result: 'success'});
		}

	});
})




// -- DB데이터 삭제하는 라우터
// -- 투수
app.delete('/api/delete/:id',(req,res) => {
	console.log("delete 요청 들어옴");
	let id = req.params.id; //주소값으로 받을 때는 params 객체를 사용한다.

	connection.query("DELETE FROM doosanpitcher WHERE id="+id,(error,results)=>{
		if (error) {
			console.log(error);
			connection.end();
		} else {
			console.log(results);
			res.json({result: 'success'});
		}
	});
})

// -- 타자
app.delete('/api/deletehitter/:id',(req,res) => {
	console.log("delete 요청 들어옴");
	let id = req.params.id; //주소값으로 받을 때는 params 객체를 사용한다.

	connection.query("DELETE FROM doosanhitter WHERE id="+id,(error,results)=>{
		if (error) {
			console.log(error);
			connection.end();
		} else {
			console.log(results);
			res.json({result: 'success'});
		}
	});
})

app.listen(port, () => console.log(`Listening on port ${port} !!!!!!!!!`));


