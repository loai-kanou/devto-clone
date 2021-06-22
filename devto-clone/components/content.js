export default function Content({ posts }) {
  return (
    <div>
      <div className="body__title py-2">
        <span className="text-xl font-bold">Posts</span>
        <div className="text-right">
          <a href="#" className="p-2 m-1 font-bold active">
            {" "}
            Feed{" "}
          </a>
          <a href="#" className="p-2 m-1">
            {" "}
            Week{" "}
          </a>
          <a href="#" className="p-2 m-1">
            {" "}
            Month{" "}
          </a>
          <a href="#" className="p-2 m-1">
            {" "}
            Year{" "}
          </a>
          <a href="#" className="p-2 m-1">
            {" "}
            Infinity{" "}
          </a>
          <a href="#" className="p-2 m-1">
            {" "}
            Latest{" "}
          </a>
        </div>
      </div>
      <div>
        {posts.map((post, index) => {
          if (index === 0) {
            return (
              <div className="bg-gray-50 rounded border border-gray-300 mb-3">
                <img
                  className="align-middle inline-block w-full h-auto"
                  src={post.postImage}
                  alt="post"
                />
                <div className="p-4">
                  <div className="post-author">
                    <img
                      className="
                        rounded-full
                        align-middle
                        inline-block
                        w-8
                        h-auto
                        border border-gray-300
                      "
                      src={post.authorAvatar}
                      alt="user"
                    />
                    <div className="leading-none">
                      <p className="font-semibold text-sm text-gray-600">
                        {post.author}
                      </p>
                      <span className="text-xs text-gray-500">
                        {post.postCreatedDate}
                      </span>
                    </div>
                  </div>
                  <div className="pl-10 pt-2">
                    <div className="text-3xl font-bold">{post.postTitle}</div>
                    <div className="my-2">
                      {post.tags &&
                        post.tags.length !== 0 &&
                        post.tags.map((tag) => {
                          return (
                            <a href="#" className="p-1 text-gray-500 text-sm">
                              {" "}
                              {tag}{" "}
                            </a>
                          );
                        })}
                    </div>
                    <div className="my-2 post-reaction">
                      <div className="post-reaction__left">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            role="img"
                            aria-labelledby="alnfe2vrqffllmgyem9z6vxffdsfnvrb"
                            className="crayons-icon inline-block"
                          >
                            <title id="alnfe2vrqffllmgyem9z6vxffdsfnvrb">
                              Reactions
                            </title>
                            <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                          </svg>
                          <span className="text-sm text-gray-700">
                            {post.nReactions}
                          </span>
                          <span className="text-sm text-gray-700">
                            reactions
                          </span>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            role="img"
                            aria-labelledby="a5h5bby4clx9ljruve52gol2g3sqy9lo"
                            className="crayons-icon inline-block"
                          >
                            <title id="a5h5bby4clx9ljruve52gol2g3sqy9lo">
                              Comments
                            </title>
                            <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                          </svg>
                          <span className="text-sm text-gray-700">
                            {post.nComments}
                          </span>
                          <span className="text-sm text-gray-700">
                            comments
                          </span>
                        </div>
                      </div>
                      <div className="post-reaction__right">
                        <span className="text-sm text-gray-700">
                          {post.nReadMin}
                        </span>
                        <button className="mr-2 px-3 py-1 rounded bg-gray-300 text-sm">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="bg-gray-50 rounded border border-gray-300 mb-3">
                <div className="p-4">
                  <div className="post-author">
                    <img
                      className="
                        rounded-full
                        align-middle
                        inline-block
                        w-8
                        h-auto
                        border border-gray-300
                      "
                      src="https://res.cloudinary.com/practicaldev/image/fetch/s--hCHv9XnP--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/515396/61d796b8-f5ce-468b-8cb5-808b2bbb9279.jpeg"
                      alt="user"
                    />
                    <div className="leading-none">
                      <p className="font-semibold text-sm text-gray-600">
                        {post.author}
                      </p>
                      <span className="text-xs text-gray-500">
                        {post.postCreatedDate}
                      </span>
                    </div>
                  </div>
                  <div className="pl-10 pt-2">
                    <div className="text-3xl font-bold">{post.postTitle}</div>
                    <div className="my-2">
                      {post.tags &&
                        post.tags.length !== 0 &&
                        post.tags.map((tag) => {
                          return (
                            <a href="#" className="p-1 text-gray-500 text-sm">
                              {" "}
                              {tag}{" "}
                            </a>
                          );
                        })}
                    </div>
                    <div className="my-2 post-reaction">
                      <div className="post-reaction__left">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            role="img"
                            aria-labelledby="alnfe2vrqffllmgyem9z6vxffdsfnvrb"
                            className="crayons-icon inline-block"
                          >
                            <title id="alnfe2vrqffllmgyem9z6vxffdsfnvrb">
                              Reactions
                            </title>
                            <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                          </svg>
                          <span className="text-sm text-gray-700">
                            {post.nReactions}
                          </span>
                          <span className="text-sm text-gray-700">
                            reactions
                          </span>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            role="img"
                            aria-labelledby="a5h5bby4clx9ljruve52gol2g3sqy9lo"
                            className="crayons-icon inline-block"
                          >
                            <title id="a5h5bby4clx9ljruve52gol2g3sqy9lo">
                              Comments
                            </title>
                            <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                          </svg>
                          <span className="text-sm text-gray-700">
                            {post.nComments}
                          </span>
                          <span className="text-sm text-gray-700">
                            comments
                          </span>
                        </div>
                      </div>
                      <div className="post-reaction__right">
                        <span className="text-sm text-gray-700">
                          {post.nReadMin}
                        </span>
                        <button className="mr-2 px-3 py-1 rounded bg-gray-300 text-sm">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
