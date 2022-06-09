import React from "react";
import MainTopBar from "./MainTopBar";
import Post from "../components/Post";

const data = [
  {
    author: "JaneDoe123",
    likes: "10",
    comments: {
      author: "JohnSmith092",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestiae repellendus sed asperiores obcaecati commodi odio non? Accusantium porro voluptatibus reiciendis quis adipisci deserunt pariatur minima eaque consequuntur? Soluta quas a animi eaque vitae laudantium rerum eveniet, laboriosam ipsa. Sit.",
    },
    shares: "0",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil delectus reprehenderit, laborum tempora eligendi quasi. Ipsam, obcaecati nemo sint harum asperiores, incidunt nobis amet maxime quo, consectetur ipsa eveniet iure.",
  },
  {
    author: "JohnSmith092",
    likes: "3",
    comments: {
      author: "JohnSmith092",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestiae repellendus sed asperiores obcaecati commodi odio non? Accusantium porro voluptatibus reiciendis quis adipisci deserunt pariatur minima eaque consequuntur? Soluta quas a animi eaque vitae laudantium rerum eveniet, laboriosam ipsa. Sit.",
    },
    shares: "1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestiae repellendus sed asperiores obcaecati commodi odio non? Accusantium porro voluptatibus reiciendis quis adipisci deserunt pariatur minima eaque consequuntur? Soluta quas a animi eaque vitae laudantium rerum eveniet, laboriosam ipsa. Sit.",
  },
  {
    author: "CoolCat2022",
    likes: "78",
    comments: {
      author: "JohnSmith092",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestiae repellendus sed asperiores obcaecati commodi odio non? Accusantium porro voluptatibus reiciendis quis adipisci deserunt pariatur minima eaque consequuntur? Soluta quas a animi eaque vitae laudantium rerum eveniet, laboriosam ipsa. Sit.",
    },
    shares: "12",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsum exercitationem perferendis, dicta inventore nisi saepe impedit perspiciatis repellat natus autem, nam explicabo reprehenderit suscipit incidunt ab accusamus quos qui dolor recusandae eius, quis minus tenetur? Illum, enim perferendis autem eius deleniti obcaecati dolore sed!",
  },
  {
    author: "namenotvalid",
    likes: "1",
    comments: [
      {
        author: "JohnSmith092",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestiae repellendus sed asperiores obcaecati commodi odio non? Accusantium porro voluptatibus reiciendis quis adipisci deserunt pariatur minima eaque consequuntur? Soluta quas a animi eaque vitae laudantium rerum eveniet, laboriosam ipsa. Sit.",
      },
    ],
    shares: "0",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aliquam doloribus commodi eligendi illum magni minima vitae incidunt ducimus nemo molestias quisquam adipisci fugiat tempore illo nisi doloremque voluptatibus nulla, facilis inventore eaque quo at eum! Velit recusandae sequi possimus perferendis delectus iusto porro ab!",
  },
];

function Main() {
  return (
    <div className="main__wrapper">
      {/* top */}
      <MainTopBar />

      {/* middle */}
      <div className="main__middle_wrapper">
        <div className="middle__left_container">
          <div className="module__container">
            <h1 className="module__title">Module 1</h1>
          </div>
        </div>
        <div className="middle__middle_container">
          <div className="module__container">
            <h1 className="module__title">Feed</h1>
            {data.map((post, i) => (
              <Post
                key={post.i}
                content={post.content}
                author={post.author}
                likes={post.likes}
                comments={post.comments}
                shares={post.shares}
              />
            ))}
          </div>
        </div>
        <div className="middle__right_container">
          <div className="module__container">
            <h1 className="module__title">Nearby</h1>
            <img
              src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
