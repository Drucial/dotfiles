# Function to open a GitHub pull request
open_github_pr() {
  local branch=$(git_branch_name)
  local remote_url=$(git remote get-url origin)
  local github_url=$(echo "${remote_url}" | sed -e 's/git@github.com:/https:\/\/github.com\//' -e 's/\.git$//')
  local pr_url="${github_url}/compare/${branch}?expand=1"
  open "${pr_url}"  
}
