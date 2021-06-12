# Contributing

Hey there! We're glad you're here to contribute. But make sure to read this guide to better know what to do.

## Issues

In case you found a bug or have anything to request, feel free to create an issue [here](https://github.com/MrCrypticXDev). Make sure you're not making any duplicate of an existing issue. When making an issue, the more details placed, the better so the team could easily understand what you're trying to say. In case your issue has not been interacted with yet for a long time, kindly wait since the team are sometimes busy and may not address things quickly.

When commenting to an issue, make sure to follow the [code of conduct](CODE_OF_CONDUCT.md). As for general dicussions, see [here](https://github.com/MrCrypticXDev/NoStickers-Discord-Bot/discussions).

## Pull requests

Sometimes, things are confusing. But we're here to help you out.

For an easier experience, kindly download [Git](https://git-scm.com/downloads) on your local machine (if you don't have it) and follow the steps on Git's website. Furthermore, you'll also need Node.js and NPM.

Before making a pull request, make sure it's not duplicating or chaining (for this, just make a review) another PR. Aside from that, it should be tested out and should pass the linting process. 

So here:
1. Fork the repository. Here's a [guide](https://docs.github.com/en/github/getting-started-with-github/quickstart/fork-a-repo).
2. Run `git checkout -b BRANCH main` where "BRANCH" is your new branch.
3. Run `npm install` to get the dependencies and devDependencies.
4. Edit the code as you wish. 
5. After editing, lint the code by running `npm run lint`. Don't worry if ESLint gives errors about your code structure. Try running `npm run lint:fix` to fix easier errors. In case it still persists, try researching for "How to fix ESlint <error> rule" on the internet.
6. Run `git commit --all` to add/delete the necessary files.
7. Run `git push origin BRANCH`, where "BRANCH" is the one you placed earlier.
8. Navigate to the pull request page of this repository on GitHub. Now make a pull request, and edit the title and description to your liking.
9. If you wish to update a pull request (e.g. applying a code suggestion), you may either:
* Run the following commands after doing what is needed:
```sh
git commit --all --fixup HEAD
git push
```
* Or click "commit suggestion" on the review.
10. You may delete the branch you made after the PR has been successfully merged:
```sh
git push origin --delete BRANCH
git checkout main -f
git branch -D BRANCH
git pull --ff upstream main
```
"BRANCH" refers to the branch you created.
  
11. All good! You're done.
  
You may freely edit your pull even after creating the request, just make sure it's not yet merged. Note that we might take a while to get to you, but just wait.

## Reviewing pull requests.

Anyone can review PRs, just make sure it's appropriate.
  
Before making a review, make a thorough scan through the files changed. If you see any problems (grammar, typos, syntax errors), you might want to make a suggestion. Here's how:
1. Go the changed files section.
2. Go to the line you wish to change.
3. Tap on the plus button beside the number.
4. Add the following to the comment:

\`\`\`suggestion 
SUGGESTION
\`\`\`
 
"SUGGESTION" is the suggestion you want to replace the old one with.

5. Create a review.
6. Finish your review by clicking the button on top.
  
If you don't have any specific suggestion, you may just make a comment without the suggestion syntax. Also provide the details. If everything in the PR seems okay, then you're free to approve it.

## Discussions
  
If you have any question or any idea to share, you may go to the discussion area of this repository and ask your question(s) in the appropriate section.
  
---
  
For any other questions, feel free to make an issue. Thanks!
