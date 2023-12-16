import html from "html-literal";

export default links => html`
  <nav>
    <div class="nav-bar">
      <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
      <ul class="hidden--mobile nav-links">
        ${links
          .map(
            link =>
              `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
          )
          .join("")}
      </ul>
    </div>
  </nav>
`;
