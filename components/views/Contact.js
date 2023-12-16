import html from "html-literal";

export default () => html`<body class = "contact-background">

  <main>
    <div class = "main-contact">
      <h2 id ="h2-contact"> Here's how you can reach me if you want to talk to me:</h2>
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
          <input type="submit" value="Submit" />
  </form>
  </div>
  </main>




</body>`;
