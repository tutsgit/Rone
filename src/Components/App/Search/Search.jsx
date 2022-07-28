import "./search.css";
export default function Search() {
  return (
    <div className="search">
      <form action="#">
        <div className="input">
          <input type="text" name="searchText" />
        </div>
        <div className="btn">
          <input type="submit" value="Submit" />
        </div>
      </form>
      <div className="res">
        <h5>data</h5>
      </div>
    </div>
  );
}
