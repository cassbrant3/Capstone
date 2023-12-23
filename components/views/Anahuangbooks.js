import html from "html-literal";
export default state => html`
  <table id="huang-books">
    <tr>
      <th>Titles</th>
    </tr>
    ${state.titles
      .map(api => {
        return html`
          <tr>
            <td>${api.title}</td>
          </tr>
        `;
      })
      .join("")};
  </table>
`;
