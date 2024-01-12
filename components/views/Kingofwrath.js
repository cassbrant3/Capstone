import html from "html-literal";
import kingOfWrathCover from "../../assets/imgs/kingofwrath-cover.jpg";
import diamond from "../../assets/imgs/diamond.png";
export default () => html`
<body class="twisted-background">
  <main>
    <div class="boxes-twisted1">
      <div class="twisted-img"> <img src=${kingOfWrathCover}></div>

      <div class="twisted-comments">
        <div class="form-colors">
          <h3 class="h3-twisted"> Leave your comments here</h3>
          <form id="wrath" action="" method="post">
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
                </select>
              </div>

            <div>
              <label for="msg">Enter your favorite quote/scene here:</label>
              <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
            </div>
            <input class="submit" type="submit" value="Submit King of Wrath Comment" />
        </div>
        </form>
      </div>
      </div>

      <div class="boxes-twisted2">
      <div class="twisted-rating">
        <!-- Will add an interactive rating scale later -->
        <h3>My personal rating on this book:</h3>
          <div id="stars">
          <i class="fa-solid fa-star fa-spin-pulse" style="color: #ffb752;"></i>
          <i class="fa-solid fa-star fa-spin-pulse" style="color: #ffb752;"></i>
          <i class="fa-solid fa-star fa-spin-pulse" style="color: #ffb752;"></i>
          <i class="fa-solid fa-star fa-spin-pulse" style="color: #ffb752;"></i>
          <i class="fa-solid fa-star fa-spin-pulse" style="color: #ffb752;"></i>
          </div>
          <p>This is the first book of the King of Sin series (which is going to have SEVEN BOOKS.) and let me tell you, Ana Huang did not disappoint. I LOVED. this book. I'm not a gigantic fan of the "arranged marriage" trope, but let me tell you...this book did not disappoint in the least. I want to try Dante and Vivian's weird snack, ifykyk haha!</p>
        </div>


    <div class="twisted-description">
      <h3><img src=${diamond}>"She was my North Star, the brightest jewel in my sky."</h3>
      <p>Ruthless. Meticulous. Arrogant. Billionaire CEO Dante Russo thrives on control, both personally and professionally. He never planned to marry...until the threat of blackmail forces him into an engagement with a woman he barely knows. Vivian Lau, jewelry heiress and daughter of his newest enemy. The wife he never wanted, and the weakness he never saw coming. It doesn't matter how beautiful or charming she is. Dante will do everything in his power to destroy the blackmail and their betrothal. There's only one problem: now that he has her, he can't bring himself to let her go.<p>
      <p>Elegant. Ambitious. Well-mannered. Vivian Lau is the perfect daughter and her family's ticket into the highest echelons of society. Marrying a blue-blooded Russo means opening doors that would otherwise remain closed to her new-money parents. While the rude, elusive Dante isn't her idea of a dream partner, she agrees to their arranged marriage out of duty. Craving his touch was never part of the plan. Neither was the worst possible outcome: falling in love with her future husband.</p>
    </div>
</div>
  </main>
</body>`;
