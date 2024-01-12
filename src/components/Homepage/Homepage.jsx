import "./homepage.scss";

const Homepage = () => {
  const challenges = [
    {
      id: "1",
      title: "abc",
      description: "fawfaw",
      tags: "#faawfe #fafw",
      votes: "123",
      created: "createdDate",
    },

    {
      id: "2",
      title: "abfawfc",
      description: "ffawefawfaw",
      tags: "#faawfe #fafafewafw",
      votes: "324",
      created: "createdDate",
    },
  ];
  return (
    <div className="homepage w-full  flex flex-col">
      <div className="titleDiv text-left font-semibold flex gap-4 px-4 justify-between items-center pr-10">
        <h1 className="text-[34px] mb-2 font-bold">Challenges</h1>
        <form action="">
          <div className="features flex gap-5 items-center">
            {/* <label htmlFor="sortType">
              Sort
              <span className="material-icons">face</span>
            </label> */}
            <span className="text-xl">Sort: </span>
            <select
              id="sortType"
              className="flex gap-2 rounded-md cursor-pointer"
            >
              <option value="{votes}">Votes</option>
              <option value="createdDate">Created</option>
            </select>

            <button className="flex gap-2 rounded-md cursor-pointer hover:scale-105 active:scale-95">
              New
              <span className="material-icons">add</span>
            </button>
          </div>
        </form>
      </div>

      <div className="infoTable w-full  ">
        <table className="table-auto border-collapse border border-gray-400 w-full">
          <thead className="">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Tags</th>
              <th className="flex place-content-center">Upvote</th>
              <th>Created</th>
              <th className="flex place-content-center">Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* Challenges list */}
            {challenges.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.tags}</td>
                  <td className="upvotes ">
                    <div className="flex place-content-center">
                      <span>{item.votes}</span>
                      <span className="material-icons text-xl font-bold text-[#354F52] hover:scale-125 active:scale-95 cursor-pointer">
                        arrow_upward
                      </span>
                    </div>
                  </td>
                  <td>{item.created}</td>

                  <td>
                    <span
                      className="material-icons flex place-content-center cursor-pointer hover:scale-110 duration-150 active:scale-95"
                      title="Delete Challenge"
                    >
                      delete
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Homepage;
