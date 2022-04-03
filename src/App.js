import logo from "./logo.svg";
import "./App.css";
import { Octokit } from "@octokit/core";

async function App() {
  const octokit = new Octokit({
    auth: `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`,
  });

  //get commits
  // const response = await octokit.request(
  //   "GET /repos/{owner}/{repo}/git/commits/{commit_sha}",
  //   {
  //     owner: "otterlee9043",
  //     repo: "clipboard",
  //     commit_sha: "45114aa3e7a9b8dd01b99ea6d940eba99ebc5149",
  //   }
  // );

  //get a tree
  const response2 = await octokit.request(
    "GET /repos/{owner}/{repo}/git/trees/{tree_sha}",
    {
      owner: "otterlee9043",
      repo: "clipboard",
      tree_sha: "efd11b61478b314dbbd6c820dc2f6dec1e718d7e",
    }
  );

  console.log(response2);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        hello
      </header>
    </div>
  );
}

export default App;
