# To-Do-List
리액트로 만든 To-Do-List입니다.


## 👩‍💻역할
토이 프로젝트로 디자인, 퍼블리싱, CRUD 기능을 구현했습니다.


## 💦기여도
100 퍼센트


## ❗기능

Next.js을 이용하여 할일 목록 리스트 생성, 생성된 리스트 화면에 추가, 수정, 삭제, 오늘의 날짜를 구현하고


styled-component를 활용하여 퍼블리싱을 진행했습니다.


DB는 임시로 state에 만들었습니다.
```
  // 메모 리스트 DB
  let [listDB, setListDB] = useState([
    { id: 1, content: "리액트 공부", isChecked: false, isEdit: false },
    { id: 2, content: "js 공부", isChecked: false, isEdit: false },
  ]);
```


### 할일 목록 추가 기능
```
  // 추가기능
  const onClickAdd = () => {
    if (content) {
      setListDB([
        ...listDB,
        {
          id: listDB.length + 1,
          content: content,
          isChecked: false,
          isEdit: false,
        },
      ]);
      // 리셋
      setContent("");
      // 추가 input 안 보이게 하기
      setClick(!click);
    } else {
      setClick(!click);
    }
  };
```


### 추가된 리스트 수정 기능
```
// 수정기능
  const onClickEdit = (e) => {
    const targetId = e.target.parentNode.parentNode.id;
    setListDB(
      // 수정하기 누르면 원래 적혀있던 데이터 불러오기
      listDB.map((list) => {
        if (list.id == targetId) {
          // 누르면 편집 모드로 전환
          list.isEdit = !list.isEdit;
          // 해당 value의 값을 content에 가져오고 이 값을 다른 setState에 저장한다. => 이 state를 defaultValue에 저장하기!
          setEditContent(list.content);
          // 수정하려는 content 값 state에 저장하기
          // 수정할 내용 없으면 해당 리스트 content값은 그대로
          if (!content) {
            list.content;
            // 수정할 내용이 있다면 해당 input value 값을 content에 저장하기
          } else {
            list.content = content;
            setContent("");
          }
        }
        return list;
      })
    );
```


### 삭제 기능
```
  // 삭제기능
  const onClickRemove = (e) => {
    // 클릭한 목록의 id를 가져와서 listDB id와 일치하는 리스트를 삭제하기
    const target = e.target.parentNode.parentNode.id;
    console.log(target);

    setListDB(
      listDB.filter((list) => {
        return list.id != target;
      })
    );
  };
```


### 오늘의 날짜 기능
```
  // 오늘 날짜 구하기
  const currentDate = new Date();
  const stringDate = currentDate.toDateString();
  const stringDay = stringDate.split(" ");
  const year = stringDay[3];
  const day = stringDay[2];
  const month = stringDay[1];
```


### 해당 리스트의 체크박스를 클릭하면 해당 텍스트에 줄이 그어지는 기능 
해당 리스트가 false일 땐 text-decoration:none, true일 땐 text-decoration:line-through 삼항 연산자로 표현했습니다.
```
  // 체크하면 밑줄 치는 기능
  const onClickCheck = (e) => {
    const targetId = e.target.parentNode.id;
    //클릭한 요소의 데이터 isChecked를 true로 만든다.
    setListDB(
      listDB.map((list) => {
        if (list.id == targetId) {
          list.isChecked = !list.isChecked;
        }
        return list;
      })
    );
  };
```


## 🏃‍♀️보완해야 할 점

웹 반응형으로 구현하지 않아서 PC에서만 가능한 것이 아쉬웠습니다.


그래서 PC, 태블릿, 모바일에서 볼 수 있도록 더 보완할 예정입니다.


## 📖배운 점

리액트 중에서 Next.js가 검색 엔진 최적화를 위해 사용되는 SSR이라는 것을 명확하게 이해할 수 있는 계기가 되었습니다. 


또한 Next.js를 만들어 배포한 Vercel에서 빌드,배포,호스팅 서비스를 알고 활용할 수 있었습니다.




