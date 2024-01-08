import html from "html-literal";
import twistedHateCover from "../../assets/imgs/twisted-hate-cover.jpg";
export default () => html`
  <body class="twisted-background">
    <main>
      <div class="boxes-twisted">
        <div class="twisted-img"><img src=${twistedHateCover} /></div>

        <div class="twisted-comments">
          <div class="form-colors">
            <h3 class="h3-twisted">Leave your comments here</h3>
            <form id="hate" action="" method="post">
              <label for="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                required
              />

              <div>
                <label for="title"
                  >Name of book you filled out a form for:</label
                >
                <select id="title" name="title">
                  <option value="">Select a Book</option>
                  <option value="twisted-love">Twisted Love</option>
                  <option value="twisted-games">Twisted Games</option>
                  <option value="twisted-hate">Twisted Hate</option>
                  <option value="twisted-lies">Twisted Lies</option>
                </select>
              </div>

              <div>
                <label for="msg">Enter your favorite quote/scene here:</label>
                <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
              </div>
              <input
                class="submit-button"
                type="submit"
                value="Submit Twisted Hate Comment"
              />
            </form>
          </div>
        </div>

        <div class="twisted-rating">
          <h1>THERE WILL BE A STAR SCALE HERE</h1>
        </div>

        <div class="twisted-description">
          <h3>
            "The possibility of you is better than the reality of anyone else."
          </h3>
          <p>
            Gorgeous, cocky, and fast on his way to becoming a hotshot doctor.
            Josh Chen has never met a woman he couldn't charm--except for Jules
            Ambrose. The beautiful redhead has been a thorn in his side since
            they met, but she also consumes his thoughts in a way no woman ever
            has. When their animosity explodes into one unforgettable night, he
            proposes a solution that'll get her out of his system once and for
            all--an enemies-with-benefits arrangement with simple rules. No
            jealousy. No strings attached. And absolutely no falling in love.
          </p>
          <p>
            Outgoing and ambitious, Jules Ambrose is a former party girl who's
            focused on one thing--passing the attorney's bar exam. The last
            thing she needs is to get involved with a doctor who puts the suffer
            in insufferable...no matter how good-looking he is. But the more she
            gets to know him, the more she realizes there's more than meets the
            eye to the man she's hated for so long. Her best friend's brother.
            Her nemesis. And her only salvation. Theirs is a match made in hell,
            and when the demons from their past catch up with them, they're
            faced with truths that could either save them...or destroy
            everything they've worked for.
          </p>
        </div>
      </div>
    </main>
  </body>
`;
