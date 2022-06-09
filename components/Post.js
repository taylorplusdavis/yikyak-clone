import React from "react";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/solid";

function Post({ author, likes, comments, shares, content }) {
  return (
    <div className="post__container">
      <div className="post__text">
        @{author}: {content}
      </div>
      <div className="post__buttons">
        <ThumbUpIcon height={20} className="text-red-500" />
        <p className="post__button">{likes}</p>
        <ChatAltIcon height={20} />
        <p className="post__button">{comments.length}</p>
        <ShareIcon height={20} />
        <p className="post__button">{shares}</p>
      </div>
    </div>
  );
}

export default Post;
