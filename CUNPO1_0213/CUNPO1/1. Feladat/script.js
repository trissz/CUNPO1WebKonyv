let commands = [];

function getCommandsManually()
{
    commands.push(["git init", "Initialize a local Git repository"]);
    commands.push(["git clone ssh://git@github.com/[username]/[repository-name].git", "Create a local copy of a remote repository"]);
    commands.push(["git status", "Check status"]);
    commands.push(["git add [file-name.txt]", "	Add a file to the staging area"]);
    commands.push(["git add -A", "Add all new and changed files to the staging area"]);
    commands.push(["git commit -m \"[commit message]\"", "Commit changes"]);
    commands.push(["git rm -r [file-name.txt]", "Remove a file (or folder)"]);
    commands.push(["git branch", "List branches (the asterisk denotes the current branch)"]);
    commands.push(["git branch -a", "List all branches (local and remote)"]);
    commands.push(["git branch [branch name]", "Create a new branch"]);
    commands.push(["git branch -d [branch name]", "Delete a branch"]);
    commands.push(["git checkout [branch name]", "	Switch to a branch"]);
    commands.push(["git merge [branch name]", "Merge a branch into the active branch"]);
    commands.push(["git merge [source branch] [target branch]", "Merge a branch into a target branch"]);
    commands.push(["git stash", "Stash changes in a dirty working directory"]);
    commands.push(["git stash clear", "Remove all stashed entries"]);
    commands.push(["git push origin [branch name]", "Push a branch to your remote repository"]);
    commands.push(["git push -u origin [branch name]", "Push changes to remote repository (and remember the branch)"]);
    commands.push(["git push", "Push changes to remote repository (remembered branch)"]);
    commands.push(["git push origin --delete [branch name]", "Delete a remote branch"]);
    commands.push(["git pull", "Update local repository to the newest commit"]);
    commands.push(["git log", "View changes"]);
    commands.push(["git diff [source branch] [target branch]", "Preview changes before merging"]);
}

function constructTable(m, tableId)
{
    getCommandsManually();

    let out = '<tr><td class="table_header_cell"><div class="header2">Command</div><div class="header2">Description</div></td></tr>', n = commands.length;

    for ( let i = 1; i <= n; i ++ )
    {
        out += `<tr class="table_row" id="${i}">`;

        for ( let j = 1; j <= m; j ++ )
        {
            out += `<td class="table_git_cell" id="${[i, j].join(',')}"><div class="git_command">${commands[i-1][0]}</div><div class="git_description">${commands[i-1][1]}</div></td>`;
        }

        out += '</tr>';
    }

    document.getElementById(tableId).innerHTML = out;
}