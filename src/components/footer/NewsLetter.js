import "./NewsLetter.css";

function NewsLetter() {
  return (
    <div>
      <div className="email-container">
        <h3>
          Magni cupidatat for do. Do consectetur but sunt so velitesse ea
          tempor. Cupidatat. Lorem numquam, but dolorem. Cupidatat autem qui but
          nostrud. Laboris. Enim laudantium aliqua numquam.{" "}
        </h3>
        <form>
          <div>
            <input
              id="email-input"
              type="email"
              name="email-inputted"
              placeholder="Sign up for our newsletter"
            ></input>
          </div>
          <button className="btn-email"></button>
        </form>
      </div>
    </div>
  );
}
export default NewsLetter;
