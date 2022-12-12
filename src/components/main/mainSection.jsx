import styled from "styled-components";
const MainSection = () => {
  return (
    <div>
      <StAddForm>
        <StInputGroup>
          <StTitle>
            &#129351; 국가대표 선수들에게 응원의 한마디를 남겨주세요! &#128047;{" "}
          </StTitle>
          <StFormLabel>제목</StFormLabel>
          <StAddInput />
          <StFormLabel>작성자</StFormLabel>
          <StAddInput />
          <StFormLabel>내용</StFormLabel>
          <StAddInput2 />
          <StAddButton>등록 &#127942;</StAddButton>
          <p></p>
          <p></p>
        </StInputGroup>
      </StAddForm>
      <StAddForm2>
        <StTitle>응원글 보러가기! &#9917; </StTitle>
      </StAddForm2>
    </div>
  );
};

const StTitle = styled.h2`
  margin: 0 auto;
  padding: 10px;
`;
const StInputGroup = styled.div`
  display: grid;
  align-items: center;
  gap: 10px;
`;
const StFormLabel = styled.label`
  font-size: 17px;
  font-weight: 700;
  margin: 0 auto;
  display: block;
`;
const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 3px;
  margin: 0 auto;
  display: block;
  align-items: center;
  padding: 30px;
  gap: 0px;
`;
const StAddForm2 = styled.form`
  background-color: #862525;
  background: #f9b1b17c;
  border-radius: 3px;
  margin: 0 auto;
  display: block;
  align-items: center;
  padding: 30px;
  gap: 0px;
  display: grid;
  align-items: center;
`;
const StAddInput = styled.input`
  height: 40px;
  width: 600px;
  margin: 0 auto;
  display: block;
  border: none;
  border-radius: 50px;
  padding: 0 12px;
  font-size: 18px;
`;
const StAddInput2 = styled.input`
  height: 150px;
  width: 600px;
  margin: 0px auto 20px auto;
  display: block;
  border: none;
  border-radius: 50px;
  padding: 0 12px;
  font-size: 18px;
`;
const StAddButton = styled.button`
  border: none;
  height: 45px;
  margin: 0 auto;
  display: block;
  cursor: pointer;
  border-radius: 50px;
  background-color: #5e1717d9;
  background: linear-gradient(rgba(1000, 0, 0, 0.9), transparent);
  width: 150px;
  color: #ffffff;
  font-weight: 570;
  font-size: 17px;
`;

export default MainSection;
