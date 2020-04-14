# Rainbow Ocotopus

For ui or api specific documentation, check out the README.md files in those folders.

## Workflow

For this team directly committing to the master branch is disabled. Instead for each new feature folks should

- Create a new branch
- As they are working make periodic commits and pushes
- When ready to merge the new feature into master, push to git
- In github create a new pull-request
- Take the link for the PR and drop it in the team chat or ask specific people to review it

Note!
As other PR's are merged, your branch will fall behind and your PR will be unable to merge with master. When this happens, get the latest version of master on your machine, checkout your branch, and run `git merge master` to merge master into your branch. Then you will have to resolve any merge conflicts. When resolved, push your branch again and it should be ready for merging with master.
