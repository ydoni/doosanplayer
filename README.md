# 두산베어스 선수단 성적계산

**프로젝트 정보**

기간 | 2020.04 - 2020.05

개발인원 | 1명

기여도 | 100%


**개발 기능**

CSS : 직접 작성

React : 리액트의 CRUD 및 이미지 업로드 기능

MySQL : DDL, DML의 SQL 언어로 데이터 등록


![Untitled-1-01](https://user-images.githubusercontent.com/56074618/82452763-a89b5b80-9aea-11ea-949e-86124831cc3a.jpg)



**프로젝트 시행 영상**

[![doosanplayer](http://img.youtube.com/vi/MFIft95cPMw/0.jpg)](https://youtu.be/MFIft95cPMw)

※ 위 이미지를 클릭하면 유튜브를 통해 시행 영상을 확인할 수 있습니다.

**개발 목적**

리액트 CRUD 기능과 이미지 업로드 기능을 구축하였으며, MySQL을 사용하여 추가한 데이터들을 Node.js를 통해 Restful api를 구현하였습니다.


**개발 내용**

_투수 / 타자 선수 포지션별 라우터 이용하여 페이지 구분_

- 투수 : localhost:3000

- 타자 : localhost:3000/hitter

_데이터 등록_

- 투수 : 선수번호, 이름, 자책점, 이닝 수, 이미지 첨부 -> 평균 자책점 자동 계산

- 타자 : 선수번호, 이름, 안타수, 타수, 이미지 첨부 -> 타율 자동 계산

_성적순 / 등록순 정렬_

- 성적순 버튼을 누르면 성적순으로 정렬 (투수: 숫자가 작을수록 성적이 높음 / 타자 : 숫자가 클수록 성적이 높음)

- 등록순 버튼을 누르면 등록순으로 정렬




**RESTful API 구조**

![doosanbears_구조-01-01](https://user-images.githubusercontent.com/56074618/83451599-359ec700-a492-11ea-91a1-0fbfa73d9318.jpg)

**Component 구조**

![Untitled-2](https://user-images.githubusercontent.com/56074618/84170964-34ceec00-aab5-11ea-9ace-c065fa86b31a.jpg)
