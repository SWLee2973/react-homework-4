# 실시간 채팅 기능 구현

리액트 수업 내용을 익히기 위한 4번째 과제를 진행했습니다.

구현 과정에 대한 내용은 벨로그 회고를 참고해 주세요!

- 벨로그 링크: https://velog.io/@sang2973/series/React-Messenger
- 배포 페이지: https://sangmessenger.netlify.app/

이 프로젝트를 실행하려면 다음과 같은 순서로 진행해 주세요.
1. 프로젝트 복사
   ```
   git clone https://github.com/SWLee2973/react-homework-4/
   ```
2. 환경 구성
   ```
   pnpm install
   ```
3. 최상위 디렉토리 .env 파일 생성 후 내용 작성
   ```
   VITE_PB_URL = https://{your.pocketbase.url}
   VITE_PB_API = https://{your.pocketbase.url}/api
   ```
4. 포켓베이스 컬렉션 생성
   ```
   users - name(text) 컬럼
   messages - chats(relation, single) 컬럼, users(relation, single) 컬럼, message(Rich editor) 컬럼
   chats - users(relation, multiple) 컬럼, messages(relation, multiple) 컬럼
   ```

5. 서버 시작
   ```
   pnpm dev
   ```

회고 작성 시 사용한 이미지를 첨부합니다.

1. 커버 화면 넘어가기

![01  Cover](https://github.com/SWLee2973/react-homework-4/assets/46062634/2a04fc1c-a840-425c-a3be-ce289e830bd4)

2. 회원가입 및 로그인 화면 토글
   
![02  RegisterForm](https://github.com/SWLee2973/react-homework-4/assets/46062634/7c2c4225-0c28-42de-9467-d1a80dfef720)

3. 로그인
   
![03  Login](https://github.com/SWLee2973/react-homework-4/assets/46062634/a97d1361-3275-4355-8060-e27b7bcc8b28)

4. 실시간 채팅방 메시지 도착
 
![04  subscribe](https://github.com/SWLee2973/react-homework-4/assets/46062634/1a41641d-ef3f-4fa9-a671-8925c8419355)

5. 채팅방 식별
 
![05  chatRoom](https://github.com/SWLee2973/react-homework-4/assets/46062634/753dd613-d2fb-4b55-a552-516a5253bfcb)

6. 유저 검색 및 채팅방 생성
 
![06  searchUser](https://github.com/SWLee2973/react-homework-4/assets/46062634/8b70b650-04e0-4fa8-a07e-93635d4aeee4)

7. 실시간 채팅
 
![07  realTimeChat](https://github.com/SWLee2973/react-homework-4/assets/46062634/8628fc5d-deba-4a33-860a-f5f229a7fbb8)



포켓베이스 컬렉션 정보를 첨부합니다.

![users](https://github.com/SWLee2973/react-homework-4/assets/46062634/a17d28e4-3090-44b9-bffd-7c1c57506695)

![messages](https://github.com/SWLee2973/react-homework-4/assets/46062634/190e3364-8878-48cf-b092-00cf3a8b0320)

![chats](https://github.com/SWLee2973/react-homework-4/assets/46062634/e665ac7c-e3d2-46e9-9984-d29992c4f822)



