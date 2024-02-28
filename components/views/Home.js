import html from "html-literal";
export default () => html`
  <main>
    <div class="home-introduction">
      <h2>
        Hello, Cassandra Brantley here! Welcome to my BookCorner. Here you will find books that I have
        read before! Grab a cup of warm tea or coffee and enjoy your stay!
      <i class="fa-solid fa-heart fa-xl" style="color: #560183;"></i>
      </h2>
</div>
    <div class="about">
      <h4>Some fun facts about me:</h4>
      <ul>
        <li>I'm 20 years old and I'm learning coding!</li>
        <li>
          As I'm sure you can tell, I really enjoy reading. Hence, this web
          application.
        </li>
        <li>
          Another fact about me is that I also really enjoy music. Music and
          reading go hand-in-hand for me.
        </li>
        <li>
          I listen to just about any type of music. You name it, I probably
          listen to it. Rap, R&B, K-Pop, Metal are some of my favorites at the
          moment.
        </li>
        <li>
          Some of my hobbies include: reading, gaming, jamming out to music, and
          even occasionally I will write my own stories.
        </li>
      </ul>
    </div>
    <div class = "main-contact">
      <h2 id ="h2-contact"> Here's how you can contact me if you'd like to talk to me:</h2>
        <a class = "link" href = "https://www.facebook.com/profile.php?id=100070591910296"> My Facebook! </a>
        <a class = "link" href = "https://t.snapchat.com/hA1ttPFm"> My Snapchat! </a>
    </div>
  </main>
    <div class = "form-colors-contact">
      <h3 id = "h3-contact"> Or, if you prefer, you can use this form to get into contact with me!</h3>
  <form id = "form" action = "https://formspree.io/f/myyqreyd" method = "post">
    <label for="name">Name:</label>
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Your name"
      required
    />

    <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email address"
        />

        <div>
          <label for="msg">Enter your message here:</label>
          <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
        </div>

        <div>
          <p>What's this message about?</p>
          <div>
            <input
              type="radio"
              name="subject"
              value="professional"
              id="pro"
              checked
            />
            <label for="pro"> Books you'd like to be added in the future </label>
          </div>
          <div>
            <input type="radio" name="subject" value="personal" id="personal" />
            <label for="personal">Personal message</label>
          </div>
          <input class = "submit-button-contact" type="submit" value="Submit" />
  </form>
  </div>
  </main>
`;
