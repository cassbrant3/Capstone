import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
      ${Header(state)}
      ${Nav(store.Links)}
      ${Main(state)}
      ${Footer()}
    `;

  router.updatePageLinks();
  afterRender(state);
}
function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > div > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Twistedlove") {
    document.querySelector("#love").addEventListener("submit", event => {
      event.preventDefault();

      //Gets the form element
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      //Request body object to send to the API
      const requestData = {
        name: inputList.name.value,
        title: inputList.title.value,
        msg: inputList.msg.value
      };
      console.log("request Body", requestData);

      axios
        .post(`http://localhost:4040/comments`, requestData)
        .then(response => {
          store.Commentsection.comments.push(response.data);
          router.navigate("/Commentsection");
        })
        .catch(error => {
          console.log("It no work", error);
        });
    });
  }
  if (state.view === "Twistedgames") {
    document.querySelector("#games").addEventListener("submit", event => {
      event.preventDefault();

      //Gets the form element
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      //Request body object to send to the API
      const requestData = {
        name: inputList.name.value,
        title: inputList.title.value,
        msg: inputList.msg.value
      };
      console.log("request Body", requestData);

      axios
        .post(`http://localhost:4040/comments`, requestData)
        .then(response => {
          store.Commentsection.comments.push(response.data);
          router.navigate("/Commentsection");
        })
        .catch(error => {
          console.log("It no work", error);
        });
    });
  }
  if (state.view === "Twistedhate") {
    document.querySelector("#hate").addEventListener("submit", event => {
      event.preventDefault();

      //Gets the form element
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      //Request body object to send to the API
      const requestData = {
        name: inputList.name.value,
        title: inputList.title.value,
        msg: inputList.msg.value
      };
      console.log("request Body", requestData);

      axios
        .post(`http://localhost:4040/comments`, requestData)
        .then(response => {
          store.Commentsection.comments.push(response.data);
          router.navigate("/Commentsection");
        })
        .catch(error => {
          console.log("It no work", error);
        });
    });
  }
  if (state.view === "Twistedlies") {
    document.querySelector("#lies").addEventListener("submit", event => {
      event.preventDefault();

      //Gets the form element
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      //Request body object to send to the API
      const requestData = {
        name: inputList.name.value,
        title: inputList.title.value,
        msg: inputList.msg.value
      };
      console.log("request Body", requestData);

      axios
        .post(`http://localhost:4040/comments`, requestData)
        .then(response => {
          store.Commentsection.comments.push(response.data);
          router.navigate("/Commentsection");
        })
        .catch(error => {
          console.log("It no work", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Anahuangbooks":
        axios
          .get(
            `https://openlibrary.org/search.json?author=huang%20ana&sort=title`
          )
          .then(response => {
            store.Anahuangbooks.titles = response.data.docs;
            done();
          })
          .catch(error => {
            console.log("no work", error);
            done();
          });
        break;

      case "Twistedlove":
        axios
          .get(`${process.env.RENDER}`)
          .then(response => {
            store.Commentsection.comments = response.data;
            done();
          })
          .catch(error => {
            console.log("It no work", error);
            done();
          });
        break;
      case "Twistedgames":
        axios
          .get(`${process.env.RENDER}`)
          .then(response => {
            store.Commentsection.comments = response.data;
            done();
          })
          .catch(error => {
            console.log("It no work", error);
            done();
          });
        break;
      case "Twistedhate":
        axios
          .get(`${process.env.RENDER}`)
          .then(response => {
            store.Commentsection.comments = response.data;
            done();
          })
          .catch(error => {
            console.log("It no work", error);
            done();
          });
        break;
      case "Twistedlies":
        axios
          .get(`${process.env.RENDER}`)
          .then(response => {
            store.Commentsection.comments = response.data;
            done();
          })
          .catch(error => {
            console.log("It no work", error);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
// render();

// add menu toggle to bars icon in nav bar
// document.querySelector(".fa-bars").addEventListener("click", () => {
//   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
// });
