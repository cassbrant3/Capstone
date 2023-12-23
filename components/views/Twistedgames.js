import html from "html-literal";
import twistedGamesCover from "../../assets/imgs/twisted-games-cover.jpg";
export default () => html`
  <body class="twisted-background">
    <main>
      <div class="boxes-twisted">
        <div class="twisted-img"><img src=${twistedGamesCover} /></div>

        <div class="twisted-comments">
          <div class="form-colors">
            <h3 class="h3-twisted">Leave your comments here</h3>
            <form
              id="form"
              action="https://formspree.io/f/xvojelye"
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
              <input class="submit-button" type="submit" value="Submit" />
            </form>
          </div>
        </div>

        <div class="twisted-rating">
          <h1>THERE WILL BE A STAR SCALE HERE</h1>
        </div>

        <div class="twisted-description">
          <h3>"Perhaps...I was always meant to find my way to you."</h3>
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
            wanted. And as she navigates the intracies--and treacheries-- of her
            new role, she must also hide her desire for a man she can't have.
            Her bodyguard. Her protector. Her ultimate ruin. Unexpected and
            forbidden, theirs is a love that could destroy a kingdom...and doom
            them both.
          </p>
        </div>
      </div>
    </main>
  </body>
`;
