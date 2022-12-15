import styled from "styled-components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getpost } from "../../redux/modules/contentsSlice";
import axios from "axios";
import { useState } from "react";

const MainSection = () => {
  const [posts2, setPosts2] = useState(null);
  const [post2, setPost2] = useState({ title: "", name: "", context: "" });

  const fetchPosts = async () => {
    const { data } = await axios.get("http://localhost:3001/post");
    setPosts2(data);
  };

  const onSubmitHandler = (post) => {
    axios.post("http://localhost:3001/post", post);
    setPosts2([...posts2, post2]);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts2);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, post } = useSelector((state) => state.content);
  useEffect(() => {
    dispatch(__getpost());
  }, [dispatch]);
  if (isLoading) {
    return <div>로딩 중....</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <StAddForm>
        <StInputGroup>
          <StTitle>
            &#129351; 국가대표 선수들에게 응원의 한마디를 남겨주세요! &#128047;
          </StTitle>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitHandler(post2);
            }}
          >
            <StFormLabel>제목</StFormLabel>
            <StAddInput
              type="text"
              onChange={(ev) => {
                const { value } = ev.target;
                setPost2({
                  ...post2,
                  title: value,
                });
              }}
            />
            <StFormLabel>작성자</StFormLabel>
            <StAddInput
              type="text"
              onChange={(ev) => {
                const { value } = ev.target;
                setPost2({
                  ...post2,
                  name: value,
                });
              }}
            />
            <StFormLabel>내용</StFormLabel>
            <StAddInput2
              type="text"
              onChange={(ev) => {
                const { value } = ev.target;
                setPost2({
                  ...post2,
                  context: value,
                });
              }}
            />
            <StAddButton>등록 &#127942;</StAddButton>
          </form>
        </StInputGroup>
      </StAddForm>

      <StAddTitle>
        <StTitle>응원글 보러가기! &#9917; </StTitle>
        <ul>
          {post.map((post) => (
            <li
              key={post.id}
              onClick={() => {
                navigate(`/main/${post.id}`);
              }}
            >
              <span>글번호 :</span>
              <p>{post.id}</p>
              <span>제목 :</span>
              <p>{post.title}</p>
              <span>작성자 :</span>
              <p>{post.name}</p>
            </li>
          ))}
        </ul>
      </StAddTitle>
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
  display: grid;
  align-items: center;
`;
const StAddForm = styled.div`
  background-color: #eee;
  border-radius: 3px;
  margin: 0 auto;
  display: block;
  align-items: center;
  padding: 30px;
  gap: 0px;
  p {
  }
`;
const StAddTitle = styled.div`
  display: block;
  background-color: #862525;
  background: #f9b1b17c;
  border-radius: 3px;
  margin: 0 auto;
  align-items: center;
  padding: 30px;
  align-items: center;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1440px;
    margin: 0 auto;
    li {
      width: 100%;
      display: flex;
      flex-direction: row;
      border: 1px solid black;
      list-style: none;
      margin-bottom: 2%;
      padding: 2% 2% 2% 2%;
      background-color: white;
      border-radius: 50px 50px 50px 50px;
      span {
        display: inline-block;
        width: 25%;
        text-align: center;
      }
      p {
        display: inline-block;
        width: 25%;
        text-align: left;
      }
    }
  }
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
