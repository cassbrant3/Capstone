import html from "html-literal";
import kingOfPrideCover from "../../assets/imgs/kingofpride-cover.jpg";
import feather from "../../assets/imgs/feather.png";
export default () => html`
  <body class="twisted-background">
    <main>
      <div class="boxes-twisted1">
        <div class="twisted-img"><img src=${kingOfPrideCover} /></div>
        <div class="twisted-comments">
        <div class="form-colors">
          <h3 class="h3-twisted"> Leave your comments here</h3>
          <form id="pride" action="" method="post">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" placeholder="Your name" required />

            <div>
                <label for="title">Name of book you filled out a form for:</label>
                <select id="title" name="title">
                  <option value="">Select a Book</option>
                  <option value="twisted-love">Twisted Love</option>
                  <option value="twisted-games">Twisted Games</option>
                  <option value="twisted-hate">Twisted Hate</option>
                  <option value="twisted-lies">Twisted Lies</option>
                  <option value="king-of-wrath">King of Wrath</option>
                  <option value="king-of-pride">King of Pride</option>
                </select>
              </div>
              <div>
              <label for="msg">Enter your favorite quote/scene here:</label>
              <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
            </div>
            <input class="submit" type="submit" value="Submit King of Pride Comment" />
        </div>
        </form>
      </div>
      </div>

      <div class="boxes-twisted2">
      <div class="twisted-rating">
        <!-- Will add an interactive rating scale later -->
        <h3>My personal rating on this book:</h3>
          <div id="stars">
          <i class="fa-solid fa-star fa-beat" style="color: #6046af;"></i>
          <i class="fa-solid fa-star fa-beat" style="color: #6046af;"></i>
          <i class="fa-solid fa-star fa-beat" style="color: #6046af;"></i>
          <i class="fa-solid fa-star fa-beat" style="color: #6046af;"></i>
          <i class="fa-solid fa-star fa-beat" style="color: #6046af;"></i>
          </div>
          <p>This is the second book in the Kings of Sin series. I don't usually try to relate myself to a character but I think Isabella and I have too much in common. I know the writer's block all too well, I get it literally all the time. I loved this book, though. I have noticed that these books seem to be shorter than the Twisted books? Which isn't a bad thing, it's just something I picked up on. Also... the feather scene? Phew... My turn when?? (ifykyk haha).</p>
</div>
<div class="twisted-description">
      <h3><img src=${feather}> She's his opposite in every way...and the greatest temptation he's ever known.</h3>
      <p> Reserved, controlled, and proper to a fault, Kai Young has neither the time nor inclination for chaos-and Isabella, with her purple hair and inappropriate jokes, is chaos personified. With a crucial CEO vote looming and a media empire at stake, the billionaire heir can't afford the distraction she brings. Isabella is everything he shouldn't want, but with every look and every touch, he's tempted to break all his rules...and claim her as his own.</p>
      <p> Bold, impulsive, and full of life, Isabella Valencia has never met a party she doesn't like or a man she couldn't charm...except Kai Young. It shouldn't matter. He's not her type-the man translates classics into Latin for fun, and his membership at the exclusive club where she bartends means he's strictly off-limits. But she can't deny beneath his cool exterior is a man who could make her melt with just a touch. No matter how hard they try, they can't resist giving into their forbidden desires. Even if it costs them everything.</p>
    </div>
</div>
    </main>
  </body>
`;
