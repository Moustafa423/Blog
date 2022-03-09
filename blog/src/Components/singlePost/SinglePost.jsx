import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrappar">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
          <p className="singlePostDesc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            repellat officiis vero culpa voluptatum quae, delectus cupiditate
            molestias natus, excepturi doloremque ipsa error accusamus, voluptas
            cum nemo cumque nihil earum? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Minus repellat officiis vero culpa voluptatum
            quae, delectus cupiditate molestias natus, excepturi doloremque ipsa
            error accusamus, voluptas cum nemo cumque nihil earum? Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Minus repellat officiis
            vero culpa voluptatum quae, delectus cupiditate molestias natus,
            excepturi doloremque ipsa error accusamus, voluptas cum nemo cumque
            nihil earum? Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Minus repellat officiis vero culpa voluptatum quae, delectus
            cupiditate molestias natus, excepturi doloremque ipsa error
            accusamus, voluptas cum nemo cumque nihil earum? Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Minus repellat officiis vero
            culpa voluptatum quae, delectus cupiditate molestias natus,
            excepturi doloremque ipsa error accusamus, voluptas cum nemo cumque
            nihil earum?
          </p>
        </div>
      </div>
    </div>
  );
}
