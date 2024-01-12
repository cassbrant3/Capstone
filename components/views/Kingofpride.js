import html from "html-literal";
import kingOfPrideCover from "../../assets/imgs/kingofpride-cover.jpg";
export default () => html`
  <body class="twisted-background">
    <main>
      <div class="boxes-twisted1">
        <div class="twisted-img"><img src=${kingOfPrideCover} /></div>
        <h1>Currently reading, check back later! <i class="fa-solid fa-heart fa-xl" style="color: #560183;"></i></h1>
    </main>
  </body>
`;
