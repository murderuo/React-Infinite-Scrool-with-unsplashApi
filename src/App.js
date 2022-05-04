import InfiniteImages from "./components/InfiniteImages";

function App() {
  const acc_key = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
  const secret_key = process.env.REACT_APP_SECRET_KEY;
  console.log(acc_key, secret_key);
  return (
    <div>
      <div id="root">
        <div className="hero is-fullheight is-bold is-info">
          <div className="hero-body">
            <div className="container">
              <div className="header content">
                <h1 className="title is-1">
                  Infinite Scroll Unsplash Code App
                </h1>
              </div>

              <div className="images">
                <InfiniteImages access_key={acc_key} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
