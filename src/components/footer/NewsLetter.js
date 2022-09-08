import "./NewsLetter.css";

function NewsLetter() {
  return (
    <div>
      <div className="email-container">
        <div className="email-container-in">
          <h3>
            Magni cupidatat for do. Do consectetur but sunt so velitesse ea
            tempor. Cupidatat. Lorem numquam, but dolorem. Cupidatat autem qui
            but nostrud. Laboris. Enim laudantium aliqua numquam.{" "}
          </h3>
          <form>
            <input
              id="email-input"
              type="email"
              name="email-inputted"
              placeholder="Sign up for our newsletter"
            ></input>

            <button className="btn-email">
              <i class="fa fa-envelope"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default NewsLetter;
