import html from "html-literal";
import twistedGamesCover from "../../assets/imgs/twisted-games-cover.jpg";
import crown from "../../assets/imgs/crown.png";
import bow from "../../assets/imgs/bow-twisted-games.png";
export default () => html`
  <body class="twisted-background">
    <main>
      <div class="boxes-twisted1">
        <div class="twisted-img">
          <img src=${twistedGamesCover} />
        </div>
        <div class="twisted-comments">
          <div class="form-colors">
            <h3 class="h3-twisted">Leave your comments here</h3>
            <form id="games" action="" method="post">
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
                  >Name of book you filled out a form for:
                </label>
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
                value="Submit Twisted Games Comment"
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
            <i class="fa-solid fa-star fa-flip" style="color: #e8c854;"></i>
            <i class="fa-solid fa-star fa-flip" style="color: #e8c854;"></i>
            <i class="fa-solid fa-star fa-flip" style="color: #e8c854;"></i>
            <i class="fa-solid fa-star fa-flip" style="color: #e8c854;"></i>
            <i class="fa-solid fa-star fa-flip" style="color: #e8c854;"></i>
          </div>
          <p>
            Yet again, I absolutely loved this book. I was skeptical at first
            because I'm not a huge fan of the "bodyguard x princess" trope. But
            I thoroughly enjoyed this book. The plot of this book was chef's
            kiss. Not to mention.. when Rhys told Bridget to crawl to him??
            Folded like a damn pretzel.
          </p>
          <h2>Here is a song that I think fits Twisted Games:</h2>
          <div class="twisted-games-song">
            <img src=${bow} />
          </div>
        </div>

        <div class="twisted-games-description">
          <h3>
            <img src=${crown} />
            "Perhaps...I was always meant to find my way to you."
          </h3>
          <p>
            Stoic, broody, and arrogant, elite bodyguard Rhys Larsen has two
            rules.
          </p>
          <ol>
            <li>Protect his clients at all costs.</li>
            <li>Do not become emotionally involved. Ever.</li>
          </ol>
          <p>
            He has never once been tempted to break those rules...until her.
            Bridget von Ascheberg. A princess with a stubborn streak that
            matches his own and a hidden fire that reduces his rules to ash.
            She's nothing he expected and everything he never knew he needed.
            Day by day, inch by inch, she breaks down his defenses until he's
            faced with a truth he can no longer deny: he swore an oath to
            protect her, but all he wants is to ruin her. Take her. Because
            she's his. His princess. His forbidden fruit. His every depraved
            fantasy.
          </p>
          <p>
            Regal, strong-willed, and bound by the chains of duty, Princess
            Bridget dreams of the freedom to live and love as she chooses. But
            when her brother abdicates, she's suddenly faced with the prospect
            of a loveless, politically expedient marriage and a throne she never
            wanted. And as she navigates the intricacies--and treacheries-- of
            her new role, she must also hide her desire for a man she can't
            have. have. Her bodyguard. Her protector. Her ultimate ruin.
            Unexpected forbidden, theirs is a love that could destroy a
            kingdom...and doom them both.
          </p>
        </div>
      </div>
    </main>
  </body>
`;
