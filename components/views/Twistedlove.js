import html from "html-literal";
import twistedLoveCover from "../../assets/imgs/twisted-love-cover.jpg";
import sun from "../../assets/imgs/sun.png";
export default () => html`
<body class="twisted-background">
  <main>
    <div class="boxes-twisted1">
      <div class="twisted-img"> <img src=${twistedLoveCover}></div>

      <div class="twisted-comments">
        <div class="form-colors">
          <h3 class="h3-twisted"> Leave your comments here</h3>
          <form id="love" action="" method="post">
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
                </select>
              </div>

            <div>
              <label for="msg">Enter your favorite quote/scene here:</label>
              <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
            </div>
            <input class="submit" type="submit" value="Submit Twisted Love Comment" />
        </div>
        </form>
      </div>
      </div>

      <div class="boxes-twisted2">
      <div class="twisted-rating">
        <!-- Will add an interactive rating scale later -->
        <h3>My personal rating on this book:</h3>
          <div id="stars">
          <i class="fa-solid fa-star fa-bounce" style="color: #84caf5;"></i>
          <i class="fa-solid fa-star fa-bounce" style="color: #84caf5;"></i>
          <i class="fa-solid fa-star fa-bounce" style="color: #84caf5;"></i>
          <i class="fa-solid fa-star fa-bounce" style="color: #84caf5;"></i>
          <i class="fa-solid fa-star fa-bounce" style="color: #84caf5;"></i>
          </div>
          <p> I absolutely loved this book. Actually, this entire series has been my favorite out of all of the romance books I've read. The only thing I wish is that Twisted Love would've had better scenes of Alex and Ava. In the other books, they have (in my opinion) better scenes than in their actual book. But, nonetheless, I still loved this book.</p>
        </div>


    <div class="twisted-description">
      <h3><img src=${sun}> "You are the light to my dark, sunshine. Without you, I'm lost." </h3>
      <p> Alex Volkov is a devil blessed with the face of an angel and cursed with a past he can't escape. Driven by a tragedy that has haunted him for most of his life, his ruthless pursuits for success and vengeance leave little room for matters of the heart. But when he's forced to look after his best friend's sister, he starts to feel something in his chest. A crack. A melt. A fire that could end his world as he knew it.</p>
      <p> Ava Chen is a free spirit trapped by nightmares of a childhood she can't remember. But despite her broken past, she's never stopped seeing the beauty in the world...including the heart beneath the icy exterior of a man she shouldn't want. Her brother's best friend. Her neighbor. Her savior and her downfall. Theirs is a love that was never supposed to happen--but when it does, it unleashes secrets that could destroy them both...and everything they hold dear.</p>
    </div>
</div>
  </main>
</body>`;
