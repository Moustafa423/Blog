import "./post.css";

export default function Post() {
  return (
    <div className="Post">
      <img className="postImg" src="" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCats">Music</span>
          <span className="postCats">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae esse
        ipsam ad quaerat quasi distinctio voluptatibus nesciunt praesentium
        eveniet, dicta id quo expedita explicabo impedit? Quo minus explicabo
        voluptates corrupti.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae esse
        ipsam ad quaerat quasi distinctio voluptatibus nesciunt praesentium
        eveniet, dicta id quo expedita explicabo impedit? Quo minus explicabo
        voluptates corrupti.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae esse
        ipsam ad quaerat quasi distinctio voluptatibus nesciunt praesentium
        eveniet, dicta id quo expedita explicabo impedit? Quo minus explicabo
        voluptates corrupti.
      </p>
    </div>
  );
}
