import { useState } from "react";
import {
  Wrap,
  Title,
  Day,
  DateText,
  DateContainer,
  DateSmallC,
  ListContainer,
  List,
  Label,
  Input,
  AddBtn,
  EditInput,
  ClickButton,
  ClickSpace,
  AddInput,
  AddSpace,
} from "../../styles/style";

export default function ToDoListPage() {
  // 오늘 날짜 구하기
  const currentDate = new Date();
  const stringDate = currentDate.toDateString();
  const stringDay = stringDate.split(" ");
  const year = stringDay[3];
  const day = stringDay[2];
  const month = stringDay[1];

  // 메모 리스트 DB
  let [listDB, setListDB] = useState([
    { id: 1, content: "리액트 공부", isChecked: false, isEdit: false },
    { id: 2, content: "js 공부", isChecked: false, isEdit: false },
  ]);

  // 메모 내용
  const [content, setContent] = useState("");
  const [click, setClick] = useState(false);
  const [editContent, setEditContent] = useState("");

  // 메모 내용 감지 기능
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  // 등록상태 변경
  const onClickMemo = () => {
    setClick(!click);
  };

  // 추가기능
  const onClickAdd = async () => {
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
    // 이러면 안됌 listDB.push(...listDB, { content: content });
  };

  // 엔터누르면 저장하기
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickAdd(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

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

  // 수정기능
  // 수정안하면 원래 값넣어주기!!!!!!!
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

    // setListDB(
    //   listDB.map((list) => {
    //     if (list.id == targetId) {
    //       list.isEdit = true;
    //     }

    //     return list;
    //   })
    // );

    // listDB[targetId - 1].isEdit = !listDB[targetId - 1].isEdit;
    // listDB[targetId - 1].content = content;
    // setContent("");
    // setEdit(!edit);
  };

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

  return (
    <>
      <Title>To Do List</Title>
      <Wrap>
        <DateContainer>
          <Day>{day}</Day>
          <DateSmallC>
            <DateText>
              {month} <br />
              {year}
            </DateText>
          </DateSmallC>
        </DateContainer>
        <ListContainer>
          {listDB?.map((x, index) => (
            <List key={index} id={x?.id}>
              <Input
                type="checkbox"
                value={x?.content || ""}
                onClick={onClickCheck}
                isChecked={x?.isChecked}
              />
              {x?.isEdit ? (
                <>
                  <EditInput
                    onChange={onChangeContent}
                    type="text"
                    defaultValue={editContent || ""}
                  />
                  <ClickSpace style={{ width: "300px", textAlign: "right" }}>
                    <ClickButton
                      style={{ marginRight: "20px" }}
                      onClick={onClickEdit}
                    >
                      ✅
                    </ClickButton>
                    <ClickButton onClick={onClickRemove}>🗑️</ClickButton>
                  </ClickSpace>
                </>
              ) : (
                <>
                  <Label
                    onChange={onChangeContent}
                    style={{
                      textDecoration: x?.isChecked ? "line-through" : "none",
                      color: x?.isChecked ? "#3f4831" : "#000",
                    }}
                  >
                    {x?.content}
                  </Label>
                  <ClickSpace style={{ width: "300px", textAlign: "right" }}>
                    <ClickButton
                      style={{ marginRight: "20px" }}
                      onClick={onClickEdit}
                    >
                      🛠️
                    </ClickButton>
                    <ClickButton onClick={onClickRemove}>🗑️</ClickButton>
                  </ClickSpace>
                </>
              )}
            </List>
          ))}
        </ListContainer>
        <AddSpace>
          {click ? (
            <div style={{ marginTop: "48px" }}>
              <AddInput
                onChange={onChangeContent}
                placeholder="해야할 일을 작성해주세요💁‍♀️"
                onKeyPress={handleOnKeyPress}
              />
              <br />
              <AddBtn onClick={onClickAdd}>+</AddBtn>
            </div>
          ) : (
            <AddBtn onClick={onClickMemo}>+</AddBtn>
          )}
        </AddSpace>
      </Wrap>
    </>
  );
}
