import html from "html-literal";

export default state => html`
  <table id="comments">
    <tr>
      <th>Name</th>
      <th>Which book you left a comment on</th>
      <th>Comment you left reviewing book</th>
    </tr>
    ${state.comments
      .map(comment => {
        return `<tr><td>${comment.name}</td><td>${comment.title}</td><td>${comment.msg}</td></tr>`;
      })
      .join("")}
  </table>
`;
