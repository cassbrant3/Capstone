import html from "html-literal";
import twistedHateCover from "../../assets/imgs/twisted-hate-cover.jpg";
import fire from "../../assets/imgs/fire.png";
import hateYou from "../../assets/imgs/hate-you-twisted-hate.png";
export default () => html`
  <body class="twisted-background">
    <main>
      <div class="boxes-twisted1">
        <div class="twisted-img">
          <img src=${twistedHateCover} />
        </div>
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
      </div>

      <div class="boxes-twisted2">
        <div class="twisted-rating">
          <!-- Will add an interactive rating scale later -->
          <h3>My personal rating on this book:</h3>
          <div id="stars">
            <i class="fa-solid fa-star fa-beat" style="color: #bd0000;"></i>
            <i class="fa-solid fa-star fa-beat" style="color: #bd0000;"></i>
            <i class="fa-solid fa-star fa-beat" style="color: #bd0000;"></i>
            <i class="fa-solid fa-star fa-beat" style="color: #bd0000;"></i>
            <i class="fa-solid fa-star fa-beat" style="color: #bd0000;"></i>
          </div>
          <p>
            This book. This. Book. I am in love with Josh Chen and Jules
            Ambrose. Ironically enough, I have always been a huge fan of the
            "enemies to lovers" trope. I loved the way Josh and Jules fought in
            this book. Another thing I loved, is when they were finally together
            they still bickered, but not in a hateful way. There's one thing I
            ABSOLUTELY despise about reading other people writing the "enemies
            to lovers" trope, they always make them stop bickering and they
            become... "soft" with each other. ANother chef's kiss from me.
          </p>
          <h2>Here's a song that I think fits Twisted Hate:
            <div class="twisted-hate-song">
            <img src=${hateYou} />
          </div>
        </div>

        <div class="twisted-hate-description">
          <h3>
            <img src=${fire} />
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
