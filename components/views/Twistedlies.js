import html from "html-literal";
import twistedLiesCover from "../../assets/imgs/twisted-lies-cover.jpg";
export default () => html`
  <body class="twisted-background">
    <main>
      <div class="boxes-twisted">
        <div class="twisted-img"><img src=${twistedLiesCover} /></div>

        <div class="twisted-comments">
          <div class="form-colors">
            <h3 class="h3-twisted">Leave your comments here</h3>
            <form
              id="form"
              action="https://formspree.io/f/xrgwnjvg"
              method="post"
            >
              <label for="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                required
              />

              <div>
                <label for="msg">Enter your favorite quote/scene here:</label>
                <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
              </div>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>

        <div class="twisted-rating">
          <h1>THERE WILL BE A STAR SCALE HERE</h1>
        </div>

        <div class="twisted-description">
          <h1>DESCRIPTION OF BOOK</h1>
        </div>
      </div>
    </main>
    <footer></footer>
  </body>
`;
