import html from "html-literal";
import twistedLiesCover from "../../assets/imgs/twisted-lies-cover.jpg";
import butterfly from "../../assets/imgs/summer.png";
import unholy from "../../assets/imgs/unholy-twisted-lies.png";
export default () => html`
  <body class="twisted-background">
    <main>
      <div class="boxes-twisted1">
        <div class="twisted-img"><<img src=${twistedLiesCover} /></div>

        <div class="twisted-comments">
          <div class="form-colors">
            <h3 class="h3-twisted">Leave your comments here</h3>
            <form id="lies" action="" method="post">
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
                value="Submit Twisted Lies Comment"
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
            <i class="fa-solid fa-star fa-spin" style="color: #05ff16;"></i>
            <i class="fa-solid fa-star fa-spin" style="color: #05ff16;"></i>
            <i class="fa-solid fa-star fa-spin" style="color: #05ff16;"></i>
            <i class="fa-solid fa-star fa-spin" style="color: #05ff16;"></i>
            <i class="fa-solid fa-star fa-spin" style="color: #05ff16;"></i>
          </div>
          <p>
            Yet another one of my favorite books in this series. Don't get me
            wrong, I loved them all, but Christian Harper HITS different. I've
            always been a fan of the "fake-dating" trope in books. They ALWAYS.
            ALWAYS. End up together. I didn't mention before, but in all of the
            books the men are all possessive and protective of their women and I
            am a SUCKER for that. Something about that personality in book's
            just.. chef's kiss. I love it. Love, love, love it!
          </p>
          <h2>Here's a song that I think fits Twisted Lies:
            <div class="twisted-lies-song">
            <img src=${unholy} />
          </div>
        </div>

        <div class="twisted-lies-description">
          <h3>
            <img src=${butterfly} />
            "If my thoughts were chaos, she was my anchor. They always went back
            to her."
          </h3>
          <p>
            Charming, deadly, and smart enough to hide it, Christian Harper is a
            monster dressed in the perfectly tailored suits of a gentleman. He
            has little use for morals and even less use for love, but he can't
            deny the strange pull he feels toward the woman living just one
            floor below him. She's the object of his darkest desires, the only
            puzzle he can't solve. And when the opportunity to get closer to her
            arises, he breaks his own rules to offer her a deal she can't
            refuse. Every monster has their weakness. She's his. His obsession.
            His addiction. His only exception.
          </p>
          <p>
            Sweet, shy, and introverted despite her social media fame, Stella
            Alonso is a romantic who keeps her heart in a cage. Between her two
            jobs, she has little time or desire for a relationship. But when a
            threat from her past drives her into the arms--and house--of the
            most dangerous man she's ever met, she's tempted to let herself feel
            something for the first time in a long time. Because despite
            Christian's cold nature, he makes her feel everything when she's
            with him. Passionate. Protected. Truly wanted. Theirs is a love
            twisted with secrets and tainted by lies...and when the truths are
            finally revealed, they could shatter everything.
          </p>
        </div>
      </div>
    </main>
  </body>
`;
