import React from "react";
import styled from "styled-components";
import { ClassicSpinner } from "react-spinners-kit";
import { PostItem, PostItemPlaceholder } from "./PostItem.js";
import { TEMP_POSTS } from "../Constants.js";
import uuid from 'uuid';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const Root = styled.div`
  @media (max-width: 735px) {
    border-top: 1px solid #dbdbdb;
    flex-grow: 1;
  }
`

const Article = styled.article`
  flex-grow: 1;
`

const PostContainer = styled.div`
  flex-direction: column;
  padding-bottom: 0px;
  padding-top: 0px;
`

const PostRow = styled.div`
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;

  &>* {
    -webkit-box-flex: 1;
    flex: 1 0 0%;
  }

  @media (max-width: 735px) {
      margin-bottom: 3px;
  }
  @media (min-width: 736px) {
      margin-bottom: 28px;
  }
`

const LoadingSpinnerWrapper = styled.div`
  align-self: center;
  margin-bottom: 28px;

  @media (max-width: 735px) {
    margin-top: 28px;
    margin-bottom: 14px;
  }
`

const NoMorePostText = styled.span`
  text-align: center;
  font-size: 20px;

  @media (max-width: 735px) {
    margin-top: 28px;
    margin-bottom: 14px;
  }
`

const LoadMoreButton = styled.button.attrs(props => ({
  "type": "button",
}))`
  position: relative;
  border: 1px solid #0095f6;
  background-color: #0095f6;
  border-radius: 4px;
  font-size: 16px;
  color: #FFFFFF;
  padding: 10px;
  align-self: center;
  width: auto;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;

  &:after {
    content: "";
    background: #61b5ec;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px!important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
  }
  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
  }
  @media (max-width: 735px) {
      margin-top: 14px;
  }
`

/* 
  Helper function for split array into chunks
  Return format: [{
    rowId: string,
    rowData: [ postItemObject or undefined) ]
    ]
  }]
*/
function splitChunk(array, splitNum) {
  if (!Array.isArray(array) || array.length < 1) {
    // Not a valid array
    throw new TypeError('Input of splitChunk is not valid');
  }
  if (!Number.isInteger(splitNum) || splitNum < 1) {
    // Not a valid array
    throw new TypeError('Input of splitNum is not valid');
  }

  var chunkedArray = [];

  var rowNumbers = Math.ceil(array.length / splitNum);
  // Calculate how many placeholders should we put
  var remainingLength = (rowNumbers * splitNum) - array.length;

  for (var i = 0; i < rowNumbers; i++) {
    var row = {
      rowId: uuid(),
    };
    if (i === rowNumbers - 1) {
      // The last group
      var tempArray = new Array(remainingLength).fill(undefined);
      row["rowData"] = array.slice(i * splitNum).concat(tempArray);
      chunkedArray.push(row);
    } else {
      // Load next splitNum post
      row["rowData"] = array.slice(i * splitNum, i * splitNum + splitNum);
      chunkedArray.push(row);
    }
  }
  return chunkedArray;
}


function Posts(props) {
  const posts = props.postArray.map((row) =>
    <CSSTransition
      key={row.rowId + "animation"}
      timeout={800}
      classNames="post-item"
    >
      <PostRow key={row.rowId}>
        {
          row.rowData.map((item) => {
            return item === undefined
              ?
              <PostItemPlaceholder key={uuid()} />
              :
              <PostItem
                key={item.href}
                imgAlt={item.imgAlt}
                href={item.href}
                src={item.src}
                likeNumber={item.likeNumber}
                commentNumber={item.commentNumber}
              />
          }
          )
        }
      </PostRow>
    </CSSTransition>

  )
  return (
    <PostContainer>
      <TransitionGroup className="todo-list">
        {posts}
      </TransitionGroup>
    </PostContainer>
  );
}

function PostSection(props) {

  const gridItemNum = 3;
  const loadNPost = 9;
  const totalPostNum = TEMP_POSTS.length;
  const [isLoading, setLoading] = React.useState(false);
  const [loadedPostNum, setLoadedPostNum] = React.useState(0);
  // Store in 2D array
  const [loadedPostChunks, setLoadedPostChunks] = React.useState([]);

  const loadPost = () => {
    setLoading(true);
    if (totalPostNum > loadedPostNum) {
      var remainingPosts = totalPostNum - loadedPostNum;
      var splitedArray = [];
      if (remainingPosts > loadNPost) {
        // Load next N posts
        splitedArray = splitChunk(TEMP_POSTS.slice(loadedPostNum, loadedPostNum + loadNPost), gridItemNum);
        setLoadedPostNum(loadedPostNum + loadNPost);
        setLoadedPostChunks([...loadedPostChunks, ...splitedArray]);
      }
      else {
        // Load all remaining post
        splitedArray = splitChunk(TEMP_POSTS.slice(loadedPostNum), gridItemNum);
        setLoadedPostNum(loadedPostNum + remainingPosts);
        setLoadedPostChunks([...loadedPostChunks, ...splitedArray]);
      }
    }
    setLoading(false);
  }

  // Do initial load
  React.useEffect(() => {
    loadPost();
  }, []);

  return (
    <Root>
      <Article>
        <div>
          <Posts
            postArray={loadedPostChunks}
          />
        </div>
      </Article>

      {isLoading &&
        <LoadingSpinnerWrapper>
          <ClassicSpinner
            size={24}
            color="#686769"
            loading={isLoading}
          />
        </LoadingSpinnerWrapper>
      }
      {loadedPostNum >= totalPostNum ?
        <NoMorePostText>You have loaded all posts!</NoMorePostText>
        :
        <LoadMoreButton
          onClick={() => loadPost()}
        >
          Load More
          </LoadMoreButton>
      }
    </Root>
  );
}

export default PostSection;